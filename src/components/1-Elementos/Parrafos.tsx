import React from 'react';

interface ParagraphProps {
  children: React.ReactNode; // El texto del párrafo
  className?: string;       // Para clases adicionales
}
const Parrafos: React.FC<ParagraphProps> = ({ children, className }) => {
  const baseClasses = 'font-sans text-base text-text-gray text-center max-w-2xl';

  const combinedClasses = `${baseClasses} ${className || ''}`;

  return (
    <p className={combinedClasses}>
      {children}
    </p>
  );
};

export default Parrafos;