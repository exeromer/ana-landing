import React from 'react';

interface ImageContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'oval' | 'round'; 
}

const variants = {
  oval: 'w-32 h-46 rounded-full overflow-hidden flex items-center justify-center bg-gray-200',
  round: 'w-48 h-54 rounded-full overflow-hidden flex items-center justify-center bg-gray-200', // Más grande y perfectamente circular
};

const ImageContainer: React.FC<ImageContainerProps> = ({ children, className, variant = 'oval' }) => {
  const baseClasses = variants[variant];
  const combinedClasses = `${baseClasses} ${className || ''}`;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default ImageContainer;