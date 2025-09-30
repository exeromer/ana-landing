import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, className }, ref) => {
  const baseClasses = 'relative overflow-hidden bg-accent-yellow p-6 shadow-lg shadow-gray-400 rounded-2xl';
  const haloClasses = 'ring-2 ring-accent-yellow/50 ring-offset-4 ring-offset-background';

  const combinedClasses = `${baseClasses} ${haloClasses} ${className || ''}`;


    return (
      <div className={combinedClasses} ref={ref}> 
        {children}
      </div>
    );
  }
);

export default Card;