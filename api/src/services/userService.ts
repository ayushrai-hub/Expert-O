import { Database } from 'sqlite3';
import { db } from '../config/database';
import { AuthService } from '../utils/auth';
import { emailService } from '../config/email';
import { registerSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema } from '../utils/validation';
import Joi from 'joi';

export interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  created_at: string;
  updated_at: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export class UserService {
  private getDb(): Database {
    return db.get();
  }

  async register(data: RegisterData): Promise<{ user: User; token: string }> {
    // Validate input
    const { error } = registerSchema.validate(data);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const { name, email, password, role } = data;

    return new Promise((resolve, reject) => {
      const db = this.getDb();

      // Check if user already exists
      db.get(
        'SELECT * FROM users WHERE email = ?',
        [email],
        async (err, existingUser: User) => {
          if (err) {
            return reject(new Error('Database error'));
          }

          if (existingUser) {
            return reject(new Error('User with this email already exists'));
          }

          try {
            // Hash password
            const passwordHash = await AuthService.hashPassword(password);

            // Insert new user
            db.run(
              'INSERT INTO users (email, name, password_hash, role) VALUES (?, ?, ?, ?)',
              [email, name, passwordHash, role],
              function(err) {
                if (err) {
                  return reject(new Error('Failed to create user'));
                }

                // Get the created user
                db.get(
                  'SELECT id, email, name, role, created_at, updated_at FROM users WHERE id = ?',
                  [this.lastID],
                  async (err, newUser: User) => {
                    if (err) {
                      return reject(new Error('Failed to retrieve user'));
                    }

                    // Generate JWT token
                    const token = AuthService.generateToken({
                      userId: newUser.id.toString(),
                      email: newUser.email,
                      role: newUser.role
                    });

                    // Send welcome email
                    try {
                      await emailService.sendWelcomeEmail(newUser.email, newUser.name);
                    } catch (emailError) {
                      console.error('Failed to send welcome email:', emailError);
                      // Don't reject the registration, just log the error
                    }

                    resolve({ user: newUser, token });
                  }
                );
              }
            );
          } catch (hashError) {
            reject(new Error('Failed to hash password'));
          }
        }
      );
    });
  }

  async login(data: LoginData): Promise<{ user: User; token: string }> {
    // Validate input
    const { error } = loginSchema.validate(data);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const { email, password } = data;

    return new Promise((resolve, reject) => {
      const db = this.getDb();

      // Find user by email
      db.get(
        'SELECT * FROM users WHERE email = ?',
        [email],
        async (err, user: any) => {
          if (err) {
            return reject(new Error('Database error'));
          }

          if (!user) {
            return reject(new Error('Invalid email or password'));
          }

          try {
            // Compare password
            const isPasswordValid = await AuthService.comparePassword(password, user.password_hash);
            
            if (!isPasswordValid) {
              return reject(new Error('Invalid email or password'));
            }

            // Generate JWT token
            const token = AuthService.generateToken({
              userId: user.id.toString(),
              email: user.email,
              role: user.role
            });

            // Return user without password hash
            const { password_hash, ...userWithoutPassword } = user;
            
            resolve({ 
              user: userWithoutPassword as User, 
              token 
            });
          } catch (compareError) {
            reject(new Error('Authentication failed'));
          }
        }
      );
    });
  }

  async forgotPassword(email: string): Promise<void> {
    // Validate input
    const { error } = forgotPasswordSchema.validate({ email });
    if (error) {
      throw new Error(error.details[0].message);
    }

    return new Promise((resolve, reject) => {
      const db = this.getDb();

      // Check if user exists
      db.get(
        'SELECT * FROM users WHERE email = ?',
        [email],
        async (err, user: User) => {
          if (err) {
            return reject(new Error('Database error'));
          }

          if (!user) {
            // Don't reveal if user exists or not for security
            return resolve();
          }

          try {
            // Generate reset token
            const resetToken = AuthService.generateResetToken(email);

            // Store reset token
            db.run(
              'INSERT INTO password_reset_tokens (email, token, expires_at) VALUES (?, ?, datetime("now", "+1 hour"))',
              [email, resetToken],
              async (err) => {
                if (err) {
                  return reject(new Error('Failed to create reset token'));
                }

                try {
                  // Send reset email
                  await emailService.sendPasswordResetEmail(email, resetToken);
                  resolve();
                } catch (emailError) {
                  // Clean up the token if email fails
                  db.run(
                    'DELETE FROM password_reset_tokens WHERE token = ?',
                    [resetToken],
                    () => {}
                  );
                  reject(new Error('Failed to send reset email'));
                }
              }
            );
          } catch (tokenError) {
            reject(new Error('Failed to generate reset token'));
          }
        }
      );
    });
  }

  async resetPassword(token: string, password: string): Promise<void> {
    // Validate input
    const { error } = resetPasswordSchema.validate({ token, password, confirmPassword: password });
    if (error) {
      throw new Error(error.details[0].message);
    }

    return new Promise((resolve, reject) => {
      const db = this.getDb();

      const resetCheck = AuthService.verifyResetToken(token);
      if (!resetCheck.valid) {
        return reject(new Error('Invalid or expired reset token'));
      }

      // Check if token exists and is not used
      db.get(
        'SELECT * FROM password_reset_tokens WHERE token = ? AND used = 0 AND expires_at > datetime("now")',
        [token],
        async (err, tokenRecord: any) => {
          if (err) {
            return reject(new Error('Database error'));
          }

          if (!tokenRecord) {
            return reject(new Error('Invalid or expired reset token'));
          }

          try {
            // Hash new password
            const passwordHash = await AuthService.hashPassword(password);

            // Update user password
            db.run(
              'UPDATE users SET password_hash = ?, updated_at = datetime("now") WHERE email = ?',
              [passwordHash, tokenRecord.email],
              function(err) {
                if (err) {
                  return reject(new Error('Failed to update password'));
                }

                if (this.changes === 0) {
                  return reject(new Error('User not found'));
                }

                // Mark token as used
                db.run(
                  'UPDATE password_reset_tokens SET used = 1 WHERE token = ?',
                  [token],
                  (err) => {
                    if (err) {
                      console.error('Failed to mark token as used:', err);
                      // Don't reject, password was still updated
                    }
                    resolve();
                  }
                );
              }
            );
          } catch (hashError) {
            reject(new Error('Failed to hash password'));
          }
        }
      );
    });
  }

  async getUserById(userId: string): Promise<User | null> {
    return new Promise((resolve, reject) => {
      const db = this.getDb();

      db.get(
        'SELECT id, email, name, role, created_at, updated_at FROM users WHERE id = ?',
        [userId],
        (err, user: User) => {
          if (err) {
            return reject(new Error('Database error'));
          }
          resolve(user || null);
        }
      );
    });
  }
}