import React from 'react';

interface TitulosProps {
  children: React.ReactNode;
  variant?: 'section' | 'card' | 'name';
  className?: string;
}

const variants = {
  section: 'font-sans font-bold text-3xl text-primary text-center',
  card: 'font-sans font-bold text-xl text-primary text-center',
  name: 'font-sans font-semibold text-lg text-primary text-center',
};

const Titulos: React.FC<TitulosProps> = ({ children, variant = 'section', className }) => {
  const baseClasses = variants[variant];

  const combinedClasses = `${baseClasses} ${className || ''}`;

  // Usamos <h2> por defecto, que es semánticamente correcto para títulos de sección
  return (
    <h2 className={combinedClasses}>
      {children}
    </h2>
  );
};

export default Titulos;