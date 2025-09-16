import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;       
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const baseClasses = 'bg-accent-yellow rounded-2xl p-6 shadow-md';

  const combinedClasses = `${baseClasses} ${className || ''}`;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card;