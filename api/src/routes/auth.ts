import express from 'express';
import rateLimit from 'express-rate-limit';
import { UserService } from '../services/userService';
import { AuthService } from '../utils/auth';
import { sanitizeInput } from '../utils/validation';

const router = express.Router();
const userService = new UserService();

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: 'Too many authentication attempts, please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/register', authLimiter, async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email.toLowerCase()),
      password,
      role,
    };

    const result = await userService.register(sanitizedData);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: result.user,
        token: result.token,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Registration failed';
    console.error('Registration error:', message);
    res.status(400).json({ success: false, message });
  }
});

router.post('/login', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const sanitizedData = {
      email: sanitizeInput(email.toLowerCase()),
      password,
    };

    const result = await userService.login(sanitizedData);

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: result.user,
        token: result.token,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Login failed';
    console.error('Login error:', message);
    res.status(401).json({ success: false, message });
  }
});

router.post('/forgot-password', authLimiter, async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const sanitizedEmail = sanitizeInput(email.toLowerCase());
    await userService.forgotPassword(sanitizedEmail);

    res.json({
      success: true,
      message: 'If an account with that email exists, a password reset link has been sent.',
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to process password reset request';
    console.error('Forgot password error:', message);
    res.status(400).json({ success: false, message });
  }
});

router.post('/reset-password', authLimiter, async (req, res) => {
  try {
    const { token, password } = req.body;
    await userService.resetPassword(token, password);

    res.json({
      success: true,
      message: 'Password reset successful',
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to reset password';
    console.error('Reset password error:', message);
    res.status(400).json({ success: false, message });
  }
});

// verify-token is not rate-limited with the aggressive auth limiter (used on every page load)
router.get('/verify-token', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'No token provided',
      });
    }

    const token = authHeader.substring(7);

    try {
      const payload = AuthService.verifyToken(token);
      const user = await userService.getUserById(payload.userId);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found',
        });
      }

      res.json({
        success: true,
        data: { user, token },
      });
    } catch {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token',
      });
    }
  } catch (error: unknown) {
    console.error('Verify token error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to verify token',
    });
  }
});

export default router;
