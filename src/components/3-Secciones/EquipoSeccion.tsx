import React from "react";
import Titulos from '../1-Elementos/Titulos';
import EquipoCard from '../2-Modulos/EquipoCard';
import { useInView } from '../../hooks/useInView';

const equipoData = [
    {
        imagenSrc:"/aleCarnet.jpg",
        nombre:"Alejandra Dib Askar",
        puesto:"Co-Founder",
        linkedinUrl:"https://www.linkedin.com/in/alejandra-dib-ashur/",
    },
    {
        imagenSrc:"/andresFelipeCarnet.jpg",
        nombre:"Andrés Felipe Galindo",
        puesto:"Co-Founder",
        linkedinUrl:"https://www.linkedin.com/in/andr%C3%A9s-felipe-galindo-gonz%C3%A1lez-b71642a/",
    },
    {
        imagenSrc:"/veronicaCarnet.jpg",
        nombre:"Verónica Cesari Carson",
        puesto:"Co-Founder",
        linkedinUrl:"https://www.linkedin.com/in/veronica-cesari-carson/",
    },
];

const SeccionEquipo: React.FC = () => {
    const [ref, isVisible] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section ref={ref} className="w-full max-w-6xl mx-auto py-16 px-4">
            <Titulos variant="section" className="mb-12">
                EQUIPO
            </Titulos>

            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12">
                {equipoData.map((miembro,index) => (
                    <EquipoCard
                        key={miembro.nombre}
                        imagenSrc={miembro.imagenSrc}
                        nombre={miembro.nombre}
                        puesto={miembro.puesto}
                        linkedinUrl={miembro.linkedinUrl}
                        isVisible={isVisible}
                        animationDelay={`${index * 500}ms`} 
                    />
                ))}
            </div>
        </section>
    );
};

export default SeccionEquipo;