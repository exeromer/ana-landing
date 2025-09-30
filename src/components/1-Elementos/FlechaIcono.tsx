import React from 'react';
import arrowSvgUrl from '../../assets/arrow-square-down-svgrepo-com.svg';

interface FlechaProps {
  className?: string;

  onClick?: () => void;
}


const FlechaIcono: React.FC<FlechaProps> = ({ className, onClick }) => {
  const baseClasses = 'w-18 h-18 cursor-pointer hover:opacity-80 transition-opacity';

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

export default FlechaIcono;