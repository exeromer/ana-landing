import React from "react";
import Titulos from '../1-Elementos/Titulos';
import EquipoCard from '../2-Modulos/EquipoCard';

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
    return (
        <section className="w-full max-w-6xl mx-auto py-16 px-4">
            <Titulos variant="section" className="mb-12">
                Equipo
            </Titulos>

            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12">
                {equipoData.map((miembro) => (
                    <EquipoCard
                        key={miembro.nombre}
                        imagenSrc={miembro.imagenSrc}
                        nombre={miembro.nombre}
                        puesto={miembro.puesto}
                        linkedinUrl={miembro.linkedinUrl}
                    />
                ))}
            </div>
        </section>
    );
};

export default SeccionEquipo;