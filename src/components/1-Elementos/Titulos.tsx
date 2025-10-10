import React from 'react';

interface TitulosProps {
  children: React.ReactNode;
  variant?: 'section' | 'card' | 'name' | 'nameCliente';
  className?: string;
}

const variants = {
  section: 'font-sans font-bold text-4xl md:text-5xl text-primary text-center',
  card: 'font-sans font-bold text-2xl text-primary text-center',
  name: 'font-sans font-semibold text-xl text-primary text-center',
  nameCliente: 'font-sans font-bold text-base text-primary text-center',
};

const Titulos: React.FC<TitulosProps> = ({ children, variant = 'section', className }) => {
  const baseClasses = variants[variant];

  const combinedClasses = `${baseClasses} ${className || ''}`;

  return (
    <h2 className={combinedClasses}>
      {children}
    </h2>
  );
};

export default Titulos;