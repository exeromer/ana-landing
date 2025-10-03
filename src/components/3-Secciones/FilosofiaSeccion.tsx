import React from "react";
import Titulos from "../1-Elementos/Titulos";
import ImageContainer from "../1-Elementos/ContenedorImagen";
import FilosofiaCard from "../2-Modulos/FilosofiaCard";

const filosofiaData = [
    { palabra: "Claridad", frase: "Claridad para entender." },
    { palabra: "Simpleza", frase: "Simplicidad para avanzar" },
    { palabra: "Valor", frase: "Valor que se mide en resultados." },
    { palabra: "Propósito", frase: "Con Propósito y Decisión." },
    { palabra: "Foco", frase: "No vendemos dashboards, generamos decisiones con sentido." },
    { palabra: "Acompañamiento", frase: "Acompañamos cada paso, entendiendo la realidad de cada cliente." },
    { palabra: "Adaptabilidad", frase: "Adaptándonos con Agilidad y Flexibilidad a las necesidades reales de tu negocio." },
    { palabra: "Cercania", frase: "Trabajamos con Cercanía y Empatía." },
];

const FilosofiaSeccion: React.FC = () => {

    return (
        <section className="w-full max-w-7xl mx-auto py-16 px-4">
            <Titulos variant="section" className="mb-12">
                Nuestra Filosofía
            </Titulos>
            {/*  CONTENEDOR PRINCIPAL  */}
            <div className="
            flex flex-col items-center gap-8
            md:grid md:grid-cols-3 md:grid-rows-3
            lg:grid-cols-4 lg:grid-rows-4">

                {/*  Imagen  */}
                <div className="w-full max-w-sm my-4 
                    md:row-start-2 md:col-start-2
                    lg:col-span-2 lg:row-span-2 lg:col-start-2 lg:row-start-2 
                    lg:justify-self-center">
                    <ImageContainer variant="round" className="h-full w-full">
                        <img src="/luciernaga_rede.png" alt="Luciérnaga ANA" loading="lazy" className="w-full h-full object-cover" />
                    </ImageContainer>
                </div>

                {/* Tarjetas  */}
                <div className="w-full md:w-auto md:col-start-2 md:row-start-1 lg:col-start-3 lg:row-start-1"><FilosofiaCard {...filosofiaData[1]} /></div>
                <div className="w-full md:w-auto md:col-start-1 md:row-start-1 lg:col-start-2 lg:row-start-1"><FilosofiaCard {...filosofiaData[0]} /></div>
                <div className="w-full md:w-auto md:col-start-3 md:row-start-1 lg:row-start-2 lg:col-start-1"><FilosofiaCard {...filosofiaData[2]} /></div>
                <div className="w-full md:w-auto md:col-start-1 md:row-start-2 lg:col-start-4 lg:row-start-2"><FilosofiaCard {...filosofiaData[3]} /></div>
                <div className="w-full md:w-auto md:col-start-3 md:row-start-2 lg:col-start-1 lg:row-start-3"><FilosofiaCard {...filosofiaData[4]} /></div>
                <div className="w-full md:w-auto md:col-start-1 md:row-start-3 lg:col-start-4 lg:row-start-3"><FilosofiaCard {...filosofiaData[5]} /></div>
                <div className="w-full md:w-auto md:col-start-2 md:row-start-3 lg:col-start-2 lg:row-start-4"><FilosofiaCard {...filosofiaData[6]} /></div>
                <div className="w-full md:w-auto md:col-start-3 md:row-start-3 lg:col-start-3 lg:row-start-4"><FilosofiaCard {...filosofiaData[7]} /></div>
            </div>
        </section>
    );
};

export default FilosofiaSeccion;