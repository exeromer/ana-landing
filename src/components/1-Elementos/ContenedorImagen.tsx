import React from 'react';

interface ImageContainerProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'oval' | 'round';
}

const variants = {
  oval: 'w-40 h-54 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 shadow-lg shadow-gray-400',
  round: 'w-48 h-54 rounded-full overflow-hidden flex items-center justify-center bg-gray-200',
};

const ImageContainer: React.FC<ImageContainerProps> = ({ children, className, variant = 'oval' }) => {
  const variantClasses = variants[variant];

    return (
    <div className="group [perspective:1000px]">
      <div className={`
        ${variantClasses} 
        ${className || 'w-40 h-54'}
        overflow-hidden 
        transition-transform duration-500 ease-in-out
        group-hover:rotate-x-[5deg] group-hover:rotate-y-[-5deg] group-hover:scale-105
        group-hover:shadow-2xl
      `}>
        {children}
      </div>
    </div>
  );
};

export default ImageContainer;