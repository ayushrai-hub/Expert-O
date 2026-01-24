import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Role } from '../../types/auth';

const schema = yup.object({
  name: yup.string().min(2, 'Name must be at least 2 characters').required('Name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Please confirm your password'),
  role: yup.string().oneOf([Role.ADMIN, Role.CLIENT, Role.TALENT], 'Please select a valid role').required('Role is required'),
}).required();

type RegisterFormData = yup.InferType<typeof schema>;

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register: registerUser, isLoading, error, clearError } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    clearError();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...registerData } = data;
    await registerUser(registerData);
  };

  const roles = [
    {
      value: Role.CLIENT,
      label: 'Client',
      description: 'I want to hire Expert-O for my projects',
      icon: '💼'
    },
    {
      value: Role.TALENT,
      label: 'Talent',
      description: 'I want to join the Expert-O team',
      icon: '🚀'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-900 mb-2">
            Expert-O
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Tribe</h2>
          <p className="text-gray-600">Create your account to get started</p>
        </div>

        {/* Form */}
        <div className="card-elevated p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={20} className="text-gray-500" />
                </div>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className={`w-full pl-10 pr-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.name && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-gray-500" />
                </div>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className={`w-full pl-10 pr-4 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-gray-900 font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-500" />
                </div>
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className={`w-full pl-10 pr-12 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-gray-500 hover:text-gray-700 transition-colors" />
                  ) : (
                    <Eye size={20} className="text-gray-500 hover:text-gray-700 transition-colors" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-900 font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-500" />
                </div>
                <input
                  {...register('confirmPassword')}
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  className={`w-full pl-10 pr-12 py-3 bg-white border rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-colors ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} className="text-gray-500 hover:text-gray-700 transition-colors" />
                  ) : (
                    <Eye size={20} className="text-gray-500 hover:text-gray-700 transition-colors" />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-gray-900 font-medium mb-3">
                I am a...
              </label>
              <div className="space-y-3">
                {roles.map((role) => (
                  <label
                    key={role.value}
                    className="flex items-center p-4 border rounded-lg cursor-pointer transition-colors hover:border-gray-400"
                  >
                    <input
                      {...register('role')}
                      type="radio"
                      value={role.value}
                      className="sr-only"
                    />
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{role.icon}</div>
                      <div className="flex-1">
                        <div className="text-gray-900 font-medium">{role.label}</div>
                        <div className="text-gray-600 text-sm">{role.description}</div>
                      </div>
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex items-center justify-center">
                        <CheckCircle size={16} className="text-gray-900 hidden" />
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              {errors.role && (
                <p className="mt-1 text-sm text-red-500 flex items-center">
                  <AlertCircle size={14} className="mr-1" />
                  {errors.role.message}
                </p>
              )}
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
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-gray-900 hover:text-gray-700 transition-colors">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
