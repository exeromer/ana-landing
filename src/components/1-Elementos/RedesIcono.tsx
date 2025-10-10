import React from 'react';

import instagramUrl from '../../assets/instagram-1-svgrepo-com.svg';
import linkedinUrl from '../../assets/linkedin-svgrepo-com.svg';
import whatsAppUrl from '../../assets/whatsapp.svg';
import emailUrl from '../../assets/gmail.svg';

const iconUrls = {
    linkedin: linkedinUrl,
    instagram: instagramUrl,
    whatsapp: whatsAppUrl,
    email: emailUrl,
};

interface RedesIconoProps {
    type: 'linkedin' | 'instagram' | 'whatsapp' | 'email';
    href?: string;
    className?: string;
    title?: string;
}

const RedesIcono: React.FC<RedesIconoProps> = ({ type, href, className, title }) => {
    const baseClasses = 'text-primary hover:text-secondary transition-colors w-6 h-6 transition-transform duration-300 hover:scale-110 hover:opacity-80';
    const combinedClasses = `${baseClasses} ${className || ''}`;

    const imageElement = (
        <img
            src={iconUrls[type]}
            alt={`Icono de ${type}`}
            loading="lazy"
            className="w-18 h-18"
        />
    );
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} title={title}>
                {imageElement}
            </a>
        );
    }

    return (
        <div className={combinedClasses} title={title}>
            {imageElement}
        </div>
    );
};

export default RedesIcono;