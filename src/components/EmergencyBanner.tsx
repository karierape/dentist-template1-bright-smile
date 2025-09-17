import React, { useState } from 'react';
import { AlertCircle, X, Phone } from 'lucide-react';

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-red-600 text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 text-sm">
          <AlertCircle className="w-4 h-4" />
          <span className="font-medium">Dental Emergency?</span>
          <span className="hidden sm:inline">We're available 24/7 for urgent care</span>
          <a
            href="tel:+919876543210"
            className="flex items-center space-x-1 bg-white text-red-600 px-3 py-1 rounded-full hover:bg-gray-100 transition-colors ml-4"
          >
            <Phone className="w-3 h-3" />
            <span className="font-medium">Call Now</span>
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close emergency banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default EmergencyBanner;