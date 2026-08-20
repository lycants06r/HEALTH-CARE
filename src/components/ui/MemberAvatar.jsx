import React from 'react';

export const MemberAvatar = ({ member, size = 'md', showStatus = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-28 h-28',
  };

  const statusColors = {
    healthy: 'ring-[#10B981]',
    warning: 'ring-[#F59E0B]',
    critical: 'ring-[#EF4444]',
  };

  const ringClass = showStatus && member.status 
    ? `ring-2 ring-offset-2 ${statusColors[member.status]}` 
    : '';

  return (
    <div className="relative inline-block">
      <img
        src={member.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`}
        alt={member.name}
        className={`${sizeClasses[size]} rounded-full object-cover ${ringClass}`}
      />
      {showStatus && member.status === 'critical' && (
        <span className="absolute top-0 right-0 w-3 h-3 bg-[#EF4444] rounded-full border-2 border-white animate-pulse" />
      )}
    </div>
  );
};
