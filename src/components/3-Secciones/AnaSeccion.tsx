import React from 'react';

import Titulos from '../1-Elementos/Titulos';
import Parrafos from '../1-Elementos/Parrafos';
import Boton from '../1-Elementos/Boton';
import ContenedorImagen from '../1-Elementos/ContenedorImagen';
import { useInView } from '../../hooks/useInView';

const SeccionQueEsAna: React.FC = () => {
    const [ref, isVisible] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section
            id="que-es-ana"
            ref={ref}
            className="w-full bg-background-ana py-16"
        >
            <div className="max-w-7xl mx-auto px-4">

                {/* Contenedor principal*/}
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Columna de Texto (izquierda) */}
                    <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:max-w-xl">
                        <Titulos variant="section" className={`font-bold mx-auto ${isVisible ? 'animate-fade-down' : 'opacity-0'}`}>
                            Qué es ANA
                        </Titulos>
                        <Parrafos className={isVisible ? 'animate-fade-up animate-delay-200' : 'opacity-0'}>
                            ANA es un servicio de analítica de datos para negocios que convierte tu información en decisiones rentables.
                        </Parrafos>
                        <Parrafos className={isVisible ? 'animate-fade-up animate-delay-400' : 'opacity-0'}>
                            Se conecta fácil a tus sistemas (ERP, CRM, Excel, Google Sheets) y te muestra lo que realmente impacta en tu negocio.
                        </Parrafos>
                        <Parrafos className={isVisible ? 'animate-fade-up animate-delay-600' : 'opacity-0'}>
                            Es un servicio ideal para empresas que buscan claridad, agilidad y resultados con acompañamiento estratégico real.
                        </Parrafos>

                        <div className={`w-full flex justify-center ${isVisible ? 'animate-fade-up animate-delay-700' : 'opacity-0'}`}>
                            <Boton variant="primary">
                                Agendá <br /> una demo
                            </Boton>
                        </div>
                    </div>

                    {/* Columna de Imagen (derecha) */}
                    <div className="flex-1">
                        <ContenedorImagen variant="round" className="w-[400px] h-[500px] justify-self-center">
                            <img
                                src="/luciernaga_pantalla.png"
                                alt="Logo Ana Secundario"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                        </ContenedorImagen>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default SeccionQueEsAna;