import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

/**
 * Skeleton loading component that shows animated placeholders
 *
 * @param className - Additional CSS classes
 * @param variant - Shape variant: 'text', 'rectangular', or 'circular'
 * @param width - Width of the skeleton (CSS value or number)
 * @param height - Height of the skeleton (CSS value or number)
 * @param lines - Number of text lines for text variant
 *
 * @example
 * ```tsx
 * <Skeleton variant="text" lines={3} />
 * <Skeleton variant="circular" width={40} height={40} />
 * <Skeleton variant="rectangular" width="100%" height={200} />
 * ```
 */
const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'text',
  width,
  height,
  lines = 1
}) => {
  const baseClasses = 'animate-pulse bg-gray-700 rounded';

  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
        return '';
      case 'text':
      default:
        return 'h-4 rounded';
    }
  };

  const getSizeStyles = () => {
    const styles: React.CSSProperties = {};

    if (width) {
      styles.width = typeof width === 'number' ? `${width}px` : width;
    }

    if (height) {
      styles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return styles;
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} ${getVariantClasses()}`}
            style={{
              ...getSizeStyles(),
              width: index === lines - 1 ? '60%' : width // Last line is shorter
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${getVariantClasses()} ${className}`}
      style={getSizeStyles()}
      role="presentation"
      aria-hidden="true"
    />
  );
};

export default Skeleton;
