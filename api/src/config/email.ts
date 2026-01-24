import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD
      }
    });
  }

  async sendPasswordResetEmail(email: string, resetToken: string): Promise<void> {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 10px;
          }
          .card {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #2563eb;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            margin: 20px 0;
          }
          .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #6b7280;
            text-align: center;
          }
          .warning {
            background-color: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 6px;
            padding: 15px;
            margin: 20px 0;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">Expert-O</div>
          <h1>Password Reset Request</h1>
        </div>
        
        <div class="card">
          <p>Hello,</p>
          
          <p>We received a request to reset the password for your Expert-O account associated with this email address.</p>
          
          <p>To reset your password, click the button below:</p>
          
          <a href="${resetUrl}" class="button">Reset Password</a>
          
          <p>Or copy and paste this link into your browser:</p>
          <p style="word-break: break-all; color: #6b7280;">${resetUrl}</p>
          
          <div class="warning">
            <strong>Security Notice:</strong> This password reset link will expire in 1 hour for security reasons. If you didn't request this password reset, please ignore this email. Your password will remain unchanged.
          </div>
          
          <p>If you continue to have problems, please contact our support team.</p>
        </div>
        
        <div class="footer">
          <p>This is an automated message, please do not reply to this email.</p>
          <p>&copy; 2024 Expert-O. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;

    const mailOptions: EmailOptions = {
      to: email,
      subject: 'Reset Your Expert-O Password',
      html: html
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Password reset email sent to ${email}`);
    } catch (error) {
      console.error('Error sending password reset email:', error);
      throw new Error('Failed to send password reset email');
    }
  }

  async sendWelcomeEmail(email: string, name: string): Promise<void> {
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Expert-O</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 10px;
          }
          .card {
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }
          .success {
            background-color: #dcfce7;
            border: 1px solid #22c55e;
            border-radius: 6px;
            padding: 15px;
            margin: 20px 0;
            font-size: 14px;
          }
          .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #6b7280;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">Expert-O</div>
          <h1>Welcome to Expert-O!</h1>
        </div>
        
        <div class="card">
          <p>Hello ${name},</p>
          
          <p>Welcome to Expert-O! Your account has been successfully created. You can now access all the features of our platform.</p>
          
          <div class="success">
            <strong>Account Created Successfully!</strong><br>
            Email: ${email}<br>
            You can now log in to your account using your credentials.
          </div>
          
          <p>To get started:</p>
          <ul>
            <li>Log in to your account</li>
            <li>Complete your profile</li>
            <li>Explore our services</li>
          </ul>
          
          <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
        </div>
        
        <div class="footer">
          <p>This is an automated message, please do not reply to this email.</p>
          <p>&copy; 2024 Expert-O. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;

    const mailOptions: EmailOptions = {
      to: email,
      subject: 'Welcome to Expert-O - Account Created Successfully',
      html: html
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Welcome email sent to ${email}`);
    } catch (error) {
      console.error('Error sending welcome email:', error);
      throw new Error('Failed to send welcome email');
    }
  }
}

export const emailService = new EmailService();