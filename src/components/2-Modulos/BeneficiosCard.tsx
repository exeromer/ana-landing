import React from 'react';

import Card from '../1-Elementos/Card';
import Parrafos from '../1-Elementos/Parrafos';
import CheckIcono from '../1-Elementos/CheckIcono';
import Titulos from '../1-Elementos/Titulos';

interface BeneficiosCardProps {
    titulo: string;
    descripcion: string;
}

const BeneficiosCard: React.FC<BeneficiosCardProps> = ({ titulo, descripcion }) => {
    return (
        // Contenedor principal 
        <div className="group w-full max-w-sm h-72 md:h-64">

            {/* Flipper */}
            <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:rotate-y-180">

                {/*CARA FRONTAL */}
                <div className="absolute w-full h-full [backface-visibility:hidden]">
                    <Card className="relative w-full h-full flex flex-col justify-center items-center text-center gap-4">
                        <div className="absolute inset-x-0 top-0 flex justify-center mt-2">
                            <div>
                                <CheckIcono className="text-white w-8 h-8" />
                            </div>
                        </div>
                        <Titulos variant="card">
                            {titulo}
                        </Titulos>
                    </Card>
                </div>

                {/* CARA TRASERA */}
                <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <Card className="w-full h-full flex flex-col justify-center items-center text-center p-6">
                        <Parrafos variant="card">
                            {descripcion}
                        </Parrafos>
                    </Card>
                </div>

            </div>
        </div>
    );
};

export default BeneficiosCard;