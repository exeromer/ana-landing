import React from 'react';
import arrowSvgUrl from '../../assets/arrow-square-down-svgrepo-com.svg';

interface ArrowIconProps {
  className?: string;

  onClick?: () => void;
}


const ArrowIcon: React.FC<ArrowIconProps> = ({ className, onClick }) => {
  const baseClasses = 'w-12 h-12 cursor-pointer hover:opacity-80 transition-opacity';

  const combinedClasses = `${baseClasses} ${className || ''}`;

  return (
    <img
      src={arrowSvgUrl}
      alt="Flecha para desplazarse hacia abajo"
      className={combinedClasses}
      onClick={onClick}
    />
  );
};

export default ArrowIcon;