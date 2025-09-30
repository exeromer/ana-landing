import React from 'react';

import checkCircleUrl from '../../assets/ANA_sello_forbit_negativo.svg';

interface CheckIconoProps {
    className?: string;
}

const CheckIcono: React.FC<CheckIconoProps> = ({ className }) => {
    const baseClasses = 'w-18 h-18';
    const combinedClasses = `${baseClasses} ${className || ''}`;

    return (
        <img
            src={checkCircleUrl}
            alt="Icono de check"
            loading="lazy"
            className={combinedClasses}
        />
    );
};

export default CheckIcono;