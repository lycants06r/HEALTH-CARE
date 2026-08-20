import React from 'react';
import { AlertCircle, CheckCircle, Info, XCircle } from 'lucide-react';

export const AlertBanner = ({ type = 'info', message, className = '' }) => {
  const types = {
    info: {
      icon: Info,
      classes: 'bg-blue-50 text-blue-800 border-blue-200',
      iconColor: 'text-blue-500'
    },
    success: {
      icon: CheckCircle,
      classes: 'bg-green-50 text-green-800 border-green-200',
      iconColor: 'text-green-500'
    },
    warning: {
      icon: AlertCircle,
      classes: 'bg-yellow-50 text-yellow-800 border-yellow-200',
      iconColor: 'text-yellow-600'
    },
    danger: {
      icon: XCircle,
      classes: 'bg-red-50 text-red-800 border-red-200',
      iconColor: 'text-red-500'
    }
  };

  const config = types[type] || types.info;
  const Icon = config.icon;

  return (
    <div className={`flex items-start p-4 border rounded-lg ${config.classes} ${className}`}>
      <Icon className={`h-5 w-5 mt-0.5 mr-3 flex-shrink-0 ${config.iconColor}`} />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};
