import React from 'react';

interface ErrorMessageProps {
  error: React.ReactNode;
  onRetry: () => void;
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  error,
  onRetry,
  className = '',
}) => (
  <div className={`text-red-600 ${className}`}>
    {error}{' '}
    <button onClick={onRetry} className="underline">
      Retry
    </button>
  </div>
);

export default ErrorMessage;
