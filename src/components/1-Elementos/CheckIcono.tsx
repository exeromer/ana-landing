import React from 'react';

import checkCircleUrl from '../../assets/check-circle-svgrepo-com.svg';

interface CheckIconoProps {
    className?: string;
}

const CheckIcono: React.FC<CheckIconoProps> = ({ className }) => {
    const baseClasses = 'w-6 h-6';
    const combinedClasses = `${baseClasses} ${className || ''}`;

    return (
        <img
            src={checkCircleUrl}
            alt="Icono de check"
            className={combinedClasses}
        />
    );
};

export default CheckIcono;