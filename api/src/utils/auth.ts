import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export class AuthService {
  static async hashPassword(password: string): Promise<string> {
    const saltRounds = 12;
    return bcrypt.hash(password, saltRounds);
  }

  static async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  static generateToken(payload: JWTPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } as any);
  }

  static verifyToken(token: string): JWTPayload {
    try {
      return jwt.verify(token, JWT_SECRET) as JWTPayload;
    } catch (error) {
      throw new Error('Invalid or expired token');
    }
  }

  static generateResetToken(): string {
    return jwt.sign(
      { type: 'password_reset' },
      JWT_SECRET,
      { expiresIn: '1h' } as any
    );
  }

  static verifyResetToken(token: string): boolean {
    try {
      const decoded = jwt.verify(token, JWT_SECRET) as any;
      return decoded.type === 'password_reset';
    } catch (error) {
      return false;
    }
  }
}