import React from 'react';

import instagramUrl from '../../assets/instagram-1-svgrepo-com.svg';
import linkedinUrl from '../../assets/linkedin-svgrepo-com.svg';

const iconUrls = {
  linkedin: linkedinUrl,
  instagram: instagramUrl,
};

interface RedesIconoProps {
    type: 'linkedin' | 'instagram';
    href: string;
    className?: string;
}

const RedesIcono: React.FC<RedesIconoProps> = ({ type, href, className }) => {
    const baseClasses = 'text-primary hover:text-secondary transition-colors w-6 h-6 transition-transform duration-300 hover:scale-110 hover:opacity-80';
    const combinedClasses = `${baseClasses} ${className || ''}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
      <img 
        src={iconUrls[type]} 
        alt={`Icono de ${type}`}
        className="w-6 h-6 "
      />
    </a>
  );
};

export default RedesIcono;