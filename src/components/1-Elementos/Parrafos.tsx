import React from 'react';

interface ParrafosProps {
  children: React.ReactNode;
  variant?: 'default' | 'card' | 'footer';
  className?: string;
}

const variants = {
  default: 'font-sans text-base text-text-gray text-center max-w-2xl',
  card: 'font-sans text-base text-primary text-center',
  footer: 'font-sans text-sm text-text-gray text-left',
};

const Parrafos: React.FC<ParrafosProps> = ({ children, variant = 'default', className }) => {
  const baseClasses = variants[variant];
  const combinedClasses = `${baseClasses} ${className || ''}`;

  return (
    <p className={combinedClasses}>
      {children}
    </p>
  );
};

export default Parrafos;