import React from 'react';

export const HealthStatusBadge = ({ status }) => {
  const statusConfig = {
    healthy: { label: 'Healthy', className: 'badge-healthy' },
    warning: { label: 'Attention Needed', className: 'badge-warning' },
    critical: { label: 'Critical', className: 'badge-critical' },
  };

  const config = statusConfig[status] || statusConfig.healthy;

  return (
    <span className={config.className}>
      {config.label}
    </span>
  );
};
