import bcrypt from 'bcryptjs';
import jwt, { type SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const rawSecret = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '24h';

if (!rawSecret || rawSecret === 'your-secret-key' || rawSecret.length < 32) {
  throw new Error(
    'JWT_SECRET must be set in api/.env to a strong value (at least 32 characters). Refusing to start with a weak or default secret.'
  );
}

const JWT_SECRET: string = rawSecret;

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
    const options: SignOptions = { expiresIn: JWT_EXPIRES_IN as SignOptions['expiresIn'] };
    return jwt.sign(payload, JWT_SECRET as jwt.Secret, options);
  }

  static verifyToken(token: string): JWTPayload {
    try {
      return jwt.verify(token, JWT_SECRET as jwt.Secret) as unknown as JWTPayload;
    } catch {
      throw new Error('Invalid or expired token');
    }
  }

  static generateResetToken(email: string): string {
    const options: SignOptions = { expiresIn: '1h' };
    return jwt.sign({ type: 'password_reset', email }, JWT_SECRET as jwt.Secret, options);
  }

  static verifyResetToken(token: string): { valid: boolean; email?: string } {
    try {
      const decoded = jwt.verify(token, JWT_SECRET as jwt.Secret) as {
        type?: string;
        email?: string;
      };
      if (decoded.type !== 'password_reset' || !decoded.email) {
        return { valid: false };
      }
      return { valid: true, email: decoded.email };
    } catch {
      return { valid: false };
    }
  }
}
