import React from "react";
import Titulos from '../1-Elementos/Titulos';
import EquipoCard from '../2-Modulos/EquipoCard';
import { useInView } from '../../hooks/useInView';

const equipoData = [
    {
        imagenSrc: "/aleCarnet2.png",
        nombre: "Alejandra Dib Ashur",
        puesto: "Co-Founder",
        linkedinUrl: "https://www.linkedin.com/in/alejandra-dib-ashur/",
        telefono: { display: "+54 9 3854 110210", link: "https://wa.me/5493854110210" }

    },
    {
        imagenSrc: "/andresFelipeCarnet.jpg",
        nombre: "Andrés Felipe Galindo",
        puesto: "Co-Founder",
        linkedinUrl: "https://www.linkedin.com/in/andr%C3%A9s-felipe-galindo-gonz%C3%A1lez-b71642a/",
        telefono: { display: "+57 317 6710099", link: "https://wa.me/573176710099" }

    },
    {
        imagenSrc: "/veronicaCarnet.png",
        nombre: "Verónica Cesari Carson",
        puesto: "Co-Founder",
        linkedinUrl: "https://www.linkedin.com/in/veronica-cesari-carson/",
        email: {
            display: "ana.analiticapna@gmail.com", link: "https://mail.google.com/mail/?view=cm&fs=1&to=ana.analiticapna@gmail.com&su=Consulta%20sobre%20ANA"
        }

    },
];

const SeccionEquipo: React.FC = () => {
    const [ref, isVisible] = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="contacto" ref={ref} className="w-full max-w-screen-xl mx-auto py-16 px-4">
            <Titulos variant="section" className="mb-12">
                CONTACTO
            </Titulos>
            <div className="flex flex-col items-center md:flex-row justify-between md:items-start gap-8">
                {equipoData.map((miembro, index) => (
                    <EquipoCard
                        key={miembro.nombre}
                        imagenSrc={miembro.imagenSrc}
                        nombre={miembro.nombre}
                        puesto={miembro.puesto}
                        linkedinUrl={miembro.linkedinUrl}
                        telefono={miembro.telefono}
                        email={miembro.email}
                        isVisible={isVisible}
                        animationDelay={`${index * 500}ms`}
                    />
                ))}
            </div>
        </section>
    );
};

export default SeccionEquipo;