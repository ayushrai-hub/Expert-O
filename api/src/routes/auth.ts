import express from 'express';
import rateLimit from 'express-rate-limit';
import { UserService } from '../services/userService';
import { AuthService } from '../utils/auth';
import { sanitizeInput } from '../utils/validation';

const router = express.Router();
const userService = new UserService();

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many authentication attempts, please try again later.'
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply rate limiting to all auth routes
router.use(authLimiter);

// Register route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email.toLowerCase()),
      password,
      role
    };

    const result = await userService.register(sanitizedData);
    
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: result.user,
        token: result.token
      }
    });
  } catch (error: any) {
    console.error('Registration error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Registration failed'
    });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Sanitize inputs
    const sanitizedData = {
      email: sanitizeInput(email.toLowerCase()),
      password
    };

    const result = await userService.login(sanitizedData);
    
    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: result.user,
        token: result.token
      }
    });
  } catch (error: any) {
    console.error('Login error:', error);
    res.status(401).json({
      success: false,
      message: error.message || 'Login failed'
    });
  }
});

// Forgot password route
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body;

    // Sanitize input
    const sanitizedEmail = sanitizeInput(email.toLowerCase());

    await userService.forgotPassword(sanitizedEmail);
    
    res.json({
      success: true,
      message: 'If an account with that email exists, a password reset link has been sent.'
    });
  } catch (error: any) {
    console.error('Forgot password error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to process password reset request'
    });
  }
});

// Reset password route
router.post('/reset-password', async (req, res) => {
  try {
    const { token, password } = req.body;

    await userService.resetPassword(token, password);
    
    res.json({
      success: true,
      message: 'Password reset successful'
    });
  } catch (error: any) {
    console.error('Reset password error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to reset password'
    });
  }
});

// Verify token route
router.get('/verify-token', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'No token provided'
      });
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix
    
    try {
      const payload = AuthService.verifyToken(token);
      
      // Get user details
      const user = await userService.getUserById(payload.userId);
      
      if (!user) {
        return res.status(404).json({
          success: false,
          message: 'User not found'
        });
      }

      res.json({
        success: true,
        data: {
          user,
          token
        }
      });
    } catch (tokenError) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }
  } catch (error: any) {
    console.error('Verify token error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to verify token'
    });
  }
});

export default router;