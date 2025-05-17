
import React from 'react';

interface ReportCompletionMessageProps {
  email?: string;
}

const ReportCompletionMessage: React.FC<ReportCompletionMessageProps> = ({ email }) => {
  return (
    <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
      <h3 className="text-2xl font-display font-semibold mb-4 dark:text-white">Full Report Sent!</h3>
      <p className="mb-4 dark:text-gray-200">
        We've sent your complete No-Fluff Fix-It List to {email ? <span className="font-medium">{email}</span> : 'your inbox'}. Please check your email in the next few minutes.
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        If you don't receive it, please check your spam folder or contact us for assistance.
      </p>
    </div>
  );
};

export default ReportCompletionMessage;
