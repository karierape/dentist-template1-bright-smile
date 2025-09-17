import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <div className="text-2xl font-bold text-blue-600 mb-2">BrightSmile</div>
        <div className="text-gray-600">Loading your smile...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;