import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'round';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ children, className, variant = 'default' }, ref) => {
  const baseClasses = 'relative overflow-hidden bg-accent-yellow p-6 shadow-lg shadow-gray-400 rounded-2xl';
  const haloClasses = 'ring-2 ring-accent-yellow/50 ring-offset-4 ring-offset-background';

  const variantClasses = {
    default: 'rounded-2xl',
    round: 'rounded-full w-48 h-48 flex flex-col items-center justify-center',
  };

  const combinedClasses = `${baseClasses} ${haloClasses} ${variantClasses[variant]} ${className || ''}`;


  return (
    <div className={combinedClasses} ref={ref}>
      {children}
    </div>
  );
}
);

export default Card;