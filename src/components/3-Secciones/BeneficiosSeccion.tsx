import React from 'react';

import Titulos from '../1-Elementos/Titulos';
import BeneficiosCard from '../2-Modulos/BeneficiosCard';
import { useInView } from '../../hooks/useInView';

const beneficiosData = [
    {
        titulo: "Reportes accionables en 4 semanas",
        descripcion: "Hallazgos y proyecciones para que tomes acción con certeza.",
    },
    {
        titulo: "Integración simple y veloz",
        descripcion: "Sin procesos complejos. Solo necesitamos acceso a tus datos para empezar.",
    },
    {
        titulo: "Acompañamiento en instancia humana",
        descripcion: "Un equipo de expertos te acompaña en el proceso para una mayor claridad.",
    },
];

const BeneficiosSeccion: React.FC = () => {
    const [ref, isVisible] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section ref = {ref} className="w-full bg-background-beneficios py-16 px-4">
            <div className="w-full max-w-6xl mx-auto">
                <Titulos variant="section" className="mb-12">
                    Beneficios de ANA
                </Titulos>
                {/* grilla responsiva */}
                <div className="flex flex-wrap justify-center gap-8">
                    {beneficiosData.map((beneficio, index) => (
                        <div key={index} className="w-full md:w-[45%] lg:w-[30%]">
                            <BeneficiosCard
                                key={index}
                                titulo={beneficio.titulo}
                                descripcion={beneficio.descripcion}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BeneficiosSeccion;