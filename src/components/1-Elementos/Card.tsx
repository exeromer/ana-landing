import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'cut-corners'; 
}

const Card: React.FC<CardProps> = ({ children, className, variant = 'default' }) => {
  const baseClasses = 'bg-accent-yellow p-6 shadow-md';

  const variantClasses = {
    default: 'rounded-2xl',
    'cut-corners': '[clip-path:polygon(20px_0,100%_0,100%_100%,0_100%,0_20px)]',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className || ''}`;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card;