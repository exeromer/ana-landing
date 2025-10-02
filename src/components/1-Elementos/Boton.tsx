import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'large';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  const baseClasses = 'font-bold py-4 px-6 rounded-full uppercase text-xs text-center tracking-wider leading-tight transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg';

  const variantClasses = {
    primary: 'bg-button border-primary text-primary hover:bg-primary hover:text-white',
    outline: 'bg-transparent border-secondary text-primary hover:bg-secondary hover:text-white',
    large: 'bg-button border-primary text-primary hover:bg-primary hover:text-white text-base py-4 px-8',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;