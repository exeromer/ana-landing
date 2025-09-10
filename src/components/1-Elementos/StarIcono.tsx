import React from 'react';

import fullStarUrl from '../../assets/star-svgrepo-com.svg';
import halfStarUrl from '../../assets/star-sharp-half-svgrepo-com.svg';

const starUrls = {
  full: fullStarUrl,
  half: halfStarUrl,
};

interface StarIconoProps {
  variant?: 'full' | 'half';
  className?: string;
}

const StarIcono: React.FC<StarIconoProps> = ({ variant = 'full', className }) => {
  const baseClasses = 'w-6 h-6'; 
  const combinedClasses = `${baseClasses} ${className || ''}`;

  return (
    <img 
      src={starUrls[variant]}
      alt={`Icono de estrella ${variant}`}
      className={combinedClasses}
    />
  );
};

export default StarIcono;