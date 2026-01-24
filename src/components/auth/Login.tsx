import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Eye, EyeOff, Mail, Lock, AlertCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const schema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address (e.g., user@example.com)')
    .required('Email address is required to sign in')
    .max(254, 'Email address is too long')
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email format'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .required('Password is required to sign in')
    .max(128, 'Password is too long'),
}).required();

type LoginFormData = yup.InferType<typeof schema>;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, error, clearError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: LoginFormData) => {
    clearError();
    await login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">
            Expert-O
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <div className="card-elevated p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
            aria-labelledby="login-heading"
          >
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-900 font-medium mb-2"
                id="email-label"
              >
                Email Address
                <span className="text-red-500 ml-1" aria-label="required">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-gray-500" aria-hidden="true" />
                </div>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  autoComplete="email"
                  aria-labelledby="email-label"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                  className={`w-full pl-10 pr-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1 text-sm text-red-500 flex items-center"
                  role="alert"
                  aria-live="polite"
                >
                  <AlertCircle size={14} className="mr-1" aria-hidden="true" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-900 font-medium mb-2"
                id="password-label"
              >
                Password
                <span className="text-red-500 ml-1" aria-label="required">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-500" aria-hidden="true" />
                </div>
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete="current-password"
                  aria-labelledby="password-label"
                  aria-describedby={errors.password ? "password-error" : "password-toggle"}
                  aria-invalid={!!errors.password}
                  className={`w-full pl-10 pr-12 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  id="password-toggle"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white rounded"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-gray-500 hover:text-gray-700 transition-colors" />
                  ) : (
                    <Eye size={20} className="text-gray-500 hover:text-gray-700 transition-colors" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p
                  id="password-error"
                  className="mt-1 text-sm text-red-500 flex items-center"
                  role="alert"
                  aria-live="polite"
                >
                  <AlertCircle size={14} className="mr-1" aria-hidden="true" />
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm flex items-center">
                  <AlertCircle size={14} className="mr-2" />
                  {error}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="text-gray-900 font-medium mb-2">Demo Credentials:</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Admin:</strong> admin@expert-o.com / password</p>
              <p><strong>Client:</strong> client@example.com / password</p>
              <p><strong>Talent:</strong> talent@example.com / password</p>
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-gray-900 hover:text-gray-700 transition-colors">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
