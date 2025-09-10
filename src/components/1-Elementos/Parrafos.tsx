import React from 'react';

interface ParrafosProps {
  children: React.ReactNode;
  className?: string;       
}
const Parrafos: React.FC<ParrafosProps> = ({ children, className }) => {
  const baseClasses = 'font-sans text-base text-text-gray text-center max-w-2xl';

  const combinedClasses = `${baseClasses} ${className || ''}`;

  return (
    <p className={combinedClasses}>
      {children}
    </p>
  );
};

export default Parrafos;