import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
  className?: string;
}

/**
 * Loading component with spinner animation and optional text
 *
 * @param size - Size of the spinner: 'sm', 'md', or 'lg'
 * @param text - Optional loading text to display
 * @param fullScreen - Whether to display as full screen overlay
 * @param className - Additional CSS classes
 *
 * @example
 * ```tsx
 * <Loading size="lg" text="Loading dashboard..." />
 * <Loading fullScreen />
 * ```
 */
const Loading: React.FC<LoadingProps> = ({
  size = 'md',
  text,
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2
        className={`${sizeClasses[size]} text-blue-500 animate-spin`}
        aria-hidden="true"
      />
      {text && (
        <p className="mt-2 text-gray-400 text-sm" role="status" aria-live="polite">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm z-50 flex items-center justify-center">
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl border border-gray-700">
          {spinner}
        </div>
      </div>
    );
  }

  return spinner;
};

export default Loading;
