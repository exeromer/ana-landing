import React from 'react';
import anaLogoUrl from '../../assets/ANA_marca_horizontal_slogan.svg';

interface LogoProps {
  variant?: 'grande' | 'pequeno';
}

const variants = {
  grande: 'h-50 w-auto',
  pequeno: 'h-20 w-auto', 
};

const Logo: React.FC<LogoProps> = ({ variant = 'grande' }) => {
  return (
    <img
      src={anaLogoUrl}
      alt="Logo de ANA"
      loading="lazy"
      className={variants[variant]}
    />
  );
};

export default Logo;