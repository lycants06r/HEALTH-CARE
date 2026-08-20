import React from 'react';

export const StatCard = ({ icon: Icon, value, label, trend, color = 'blue' }) => {
  const colorMap = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    yellow: 'bg-yellow-100 text-yellow-600',
    red: 'bg-red-100 text-red-600',
  };

  return (
    <div className="card flex items-center p-4">
      <div className={`p-3 rounded-full mr-4 ${colorMap[color]}`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-[#64748B] font-medium">{label}</p>
        <div className="flex items-baseline">
          <h3 className="text-2xl font-bold text-[#1E293B]">{value}</h3>
          {trend && (
            <span className={`ml-2 text-xs font-semibold ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {trend > 0 ? '+' : ''}{trend}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
