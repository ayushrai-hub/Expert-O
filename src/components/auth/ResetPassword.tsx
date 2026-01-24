import { useState } from 'react';
import { Eye, EyeOff, Check, CheckCircle2, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const getPasswordStrength = (password: string) => {
    if (password.length === 0) return { level: 0, text: '', color: '' };
    if (password.length < 8) return { level: 1, text: 'Weak', color: 'bg-red-500' };
    if (password.length < 12) return { level: 2, text: 'Medium', color: 'bg-yellow-500' };
    return { level: 3, text: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength(newPassword);
  const passwordsMatch = confirmPassword.length > 0 && newPassword === confirmPassword;
  const meetsMinLength = newPassword.length >= 8;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // In a real app, you'd update the password here
      console.log('Password reset successful');
      setSuccess(true);
    } catch {
      setError('Password reset failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="bg-gray-900 rounded-lg p-2">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Expert-O</h1>
          </div>

          <div className="card-elevated p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Password Reset Successful</h2>
            <p className="text-gray-600 mb-8">
              Your password has been successfully updated. You can now use your new credentials to log in to your account.
            </p>

            <button
              onClick={() => navigate('/login')}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="bg-gray-900 rounded-lg p-2">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Expert-O</h1>
        </div>

        <div className="card-elevated p-8 border-t-2 border-t-gray-900">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Reset your password</h2>
            <p className="text-gray-600 text-sm">
              Please enter a new password for your account to regain access.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-900 mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  id="newPassword"
                  type={showNewPassword ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {newPassword.length > 0 && (
                <div className="mt-3">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-gray-600">Password Strength</span>
                    <span className={`font-medium ${
                      passwordStrength.level === 3 ? 'text-green-600' :
                      passwordStrength.level === 2 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {passwordStrength.text}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                      style={{ width: `${(passwordStrength.level / 3) * 100}%` }}
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    {meetsMinLength ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border-2 border-gray-400" />
                    )}
                    <span className={meetsMinLength ? 'text-green-600' : 'text-gray-600'}>
                      Must contain at least 8 characters
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
                {passwordsMatch && (
                  <Check className="absolute right-12 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
                )}
              </div>
            </div>

            {error && (
              <div className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !meetsMinLength || !passwordsMatch}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
