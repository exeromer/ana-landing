import React from 'react';

import Titulos from '../1-Elementos/Titulos';
import Parrafos from '../1-Elementos/Parrafos';
import Boton from '../1-Elementos/Boton';
import ContenedorImagen from '../1-Elementos/ContenedorImagen';
import { useInView } from '../../hooks/useInView';

const SeccionQueEsAna: React.FC = () => {
    const [sectionRef, isVisible] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section
            ref={sectionRef}
            className={`w-full max-w-7xl mx-auto py-16 px-4 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
        >
            {/* Contenedor principal*/}
            <div className="flex flex-col lg:flex-row items-center gap-12">

                {/* Columna de Texto (izquierda) */}
                <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left gap-6 lg:max-w-xl">
                    <Titulos variant="section" className="text-4xl lg:text-5xl font-bold mx-auto">
                        Qué es ANA
                    </Titulos>
                    <Parrafos>
                        ANA es un servicio de analítica de datos para negocios que convierte tu información en decisiones rentables.
                    </Parrafos>
                    <Parrafos>
                        Se conecta fácil a tus sistemas (ERP, CRM, Excel, Google Sheets) y te muestra lo que realmente impacta en tu negocio.
                    </Parrafos>
                    <Parrafos>
                        Es un servicio ideal para empresas que buscan claridad, agilidad y resultados con acompañamiento estratégico real.
                    </Parrafos>
                    <div className="w-full flex justify-center">
                        <Boton variant="primary">
                            Agendá <br /> una demo
                        </Boton>
                    </div>
                </div>

                {/* Columna de Imagen (derecha) */}
                <div className="flex-1">
                    <ContenedorImagen variant="round" className="w-[300px] h-[400px] justify-self-center">
                        <img
                            src="/avatars.jpg"
                            alt="Logo Ana Secundario"
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </ContenedorImagen>
                </div>

            </div>
        </section>
    );
};

export default SeccionQueEsAna;