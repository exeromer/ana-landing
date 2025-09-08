import React from 'react';

interface ButtonProps {
  children: React.ReactNode;          
  variant?: 'primary' | 'outline';    
  onClick?: () => void;               
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', onClick }) => {
  const baseClasses = 'font-bold py-2 px-3 rounded-full uppercase text-xs text-center tracking-wider leading-tight transition-colors';

  const variantClasses = {
    primary: 'bg-button border-primary text-primary hover:bg-primary hover:text-white transition-colors animate-fade animate-delay-00 animate-ease-in hover:animate-pulse',
    outline: 'bg-transparent border-secondary text-primary hover:bg-secondary hover:text-white transition-colors hover:animate-pulse',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;