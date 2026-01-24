import { useState } from 'react';
import { ArrowLeft, Mail, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await resetPassword(email);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      setSuccess(true);
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center">
          <div className="bg-gray-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Check your email</h2>
          <p className="text-gray-600 mb-8">
            We've sent password reset instructions to{' '}
            <span className="text-gray-900 font-medium">{email}</span>
          </p>

          <button
            onClick={() => navigate('/login')}
            className="w-full max-w-sm mx-auto bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="bg-gray-900 rounded-lg p-2">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Expert-O</h1>
        </div>

        <div className="card-elevated p-8">
          <div className="mb-8">
            <div className="w-full h-48 mb-6 rounded-lg overflow-hidden relative bg-gray-100 flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10 text-gray-700" />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Forgot password?</h2>
            <p className="text-gray-600 text-sm text-center">
              No worries! Just enter the email address associated with your account and we'll send you a link to reset it.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Reset Instructions'}
            </button>
          </form>

          <button
            onClick={() => navigate('/login')}
            className="w-full mt-6 flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Log In</span>
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          © 2023 Expert-O Platform. All rights reserved.
        </div>
      </div>
    </div>
  );
}
