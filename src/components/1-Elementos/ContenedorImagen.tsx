import React from 'react';

interface ImageContainerProps {
  children: React.ReactNode; // Aquí irá nuestra etiqueta <img>
  className?: string;       // Clases adicionales si es necesario
}


const ImageContainer: React.FC<ImageContainerProps> = ({ children, className }) => {
  const baseClasses = 'w-32 h-46 rounded-full overflow-hidden flex items-center justify-center bg-gray-200'; 

  const combinedClasses = `${baseClasses} ${className || ''}`;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default ImageContainer;