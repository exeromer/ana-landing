import React from 'react';

interface TitulosProps {
  children: React.ReactNode; 
  className?: string;       
}
const Titulos: React.FC<TitulosProps> = ({ children, className }) => {
  const baseClasses = 'font-sans font-bold text-4xl text-primary text-center';
  const combinedClasses = `${baseClasses} ${className || ''}`;

  return (
    <h2 className={combinedClasses}>
      {children}
    </h2>
  );
};

export default Titulos;