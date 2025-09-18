import React from "react";
import Titulos from "../1-Elementos/Titulos";
import ImageContainer from "../1-Elementos/ContenedorImagen";
import FilosofiaCard from "../2-Modulos/FilosofiaCard";

const filosofiaData = [
    { palabra: "Claridad", frase: "Claridad que guía." },
    { palabra: "Simpleza", frase: "Convertimos datos en informacion simple y util, incluso en contextos inciertos." },
    { palabra: "Agilidad", frase: "Entregamos valor desde el primer mes, priorizando lo que hoy necesita tu negocio." },
    { palabra: "Propósito", frase: "Tecnología con propósito." },
    { palabra: "Foco", frase: "No vendemos dashboards, generamos decisiones con sentido." },
    { palabra: "Acompañamiento", frase: "Acompañamos cada paso, entendiendo la realidad de cada cliente." },
    { palabra: "Adaptabilidad", frase: "Nos ajustamos a tus prioridades, herramientas y tiempos." },
    { palabra: "Cercania", frase: "Adaptabilidad y cercania constante." },
];

const FilosofiaSeccion: React.FC = () => {
    return (
        <section className="w-full max-w-7xl mx-auto py-16 px-4">
            <Titulos variant="section" className="mb-12">
                Nuestra Filosofía
            </Titulos>

            {/*  CONTENEDOR PRINCIPAL  */}
            <div className="
            flex flex-col gap-8
            md:grid md:grid-cols-3 md:grid-rows-3
            lg:grid-cols-4 lg:grid-rows-4">

                {/*  Imagen  */}
                <div className="w-full max-w-sm my-4 
                    md:row-start-2 md:col-start-2
                    lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-2 
                    lg:justify-self-center">
                    <ImageContainer variant="round" className="h-full w-full">
                        <img src="/avatars.jpg" alt="Luciérnaga ANA" loading="lazy" className="w-full h-full object-cover" />
                    </ImageContainer>
                </div>
                {/* Tarjetas  */}
                <div className="md:col-start-1 md:row-start-1 lg:col-start-2 lg:row-start-1"><FilosofiaCard {...filosofiaData[0]} /></div>
                <div className="md:col-start-2 md:row-start-1 lg:col-start-3 lg:row-start-1"><FilosofiaCard {...filosofiaData[1]} /></div>
                <div className="md:col-start-3 md:row-start-1 lg:row-start-2 lg:col-start-1"><FilosofiaCard {...filosofiaData[2]} /></div>
                <div className="md:col-start-1 md:row-start-2 lg:col-start-4 lg:row-start-2"><FilosofiaCard {...filosofiaData[3]} /></div>
                <div className="md:col-start-3 md:row-start-2 lg:col-start-1 lg:row-start-3"><FilosofiaCard {...filosofiaData[4]} /></div>
                <div className="md:col-start-1 md:row-start-3 lg:col-start-4 lg:row-start-3"><FilosofiaCard {...filosofiaData[5]} /></div>
                <div className="md:col-start-2 md:row-start-3 lg:col-start-2 lg:row-start-4"><FilosofiaCard {...filosofiaData[6]} /></div>
                <div className="md:col-start-3 md:row-start-3 lg:col-start-3 lg:row-start-4"><FilosofiaCard {...filosofiaData[7]} /></div>

            </div>
        </section >
    );
};

export default FilosofiaSeccion;
