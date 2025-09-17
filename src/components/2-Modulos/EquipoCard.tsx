import React from "react";
import ContenedorImagen from "../1-Elementos/ContenedorImagen";
import Parrafos from "../1-Elementos/Parrafos";
import Titulos from "../1-Elementos/Titulos";

interface EquipoCardProps {
    imagenSrc: string;
    nombre: string;
    puesto: string;
    linkedinUrl: string;
}

const EquipoCard: React.FC<EquipoCardProps> = ({
    imagenSrc,
    nombre,
    puesto,
    linkedinUrl,
}) => {
    return (
        <div className="flex flex-col items-center text-center gap-4">
            <ContenedorImagen variant="oval">
                <img
                    src={imagenSrc}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                />
            </ContenedorImagen>
            <Titulos variant="name">{nombre}</Titulos>
            <Parrafos variant="equipo">{puesto}</Parrafos>
            <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
            >
                LinkedIn
            </a>
        </div>
    );
};

export default EquipoCard;