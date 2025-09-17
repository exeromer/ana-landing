import React from 'react';

interface ImageContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'oval' | 'round'; 
}

const variants = {
  oval: 'w-40 h-54 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 transition-transform duration-300 ease-in-out hover:scale-120',
  round: 'w-48 h-54 rounded-full overflow-hidden flex items-center justify-center bg-gray-200', 
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