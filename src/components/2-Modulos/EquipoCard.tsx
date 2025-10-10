import React from "react";
import ContenedorImagen from "../1-Elementos/ContenedorImagen";
import Parrafos from "../1-Elementos/Parrafos";
import Titulos from "../1-Elementos/Titulos";
import RedesIcono from "../1-Elementos/RedesIcono";

interface EquipoCardProps {
    imagenSrc: string;
    nombre: string;
    puesto: string;
    linkedinUrl: string;
    telefono?: { display: string; link: string };
    email?: { display: string; link: string };
    isVisible?: boolean;
    animationDelay?: string;
}

const EquipoCard: React.FC<EquipoCardProps> = ({
    imagenSrc,
    nombre,
    puesto,
    linkedinUrl,
    telefono,
    email,
    isVisible,
    animationDelay,
}) => {
    return (
        <div
            className={`
                flex flex-col items-center text-center gap-2 transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: animationDelay }}
        >
            <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group block"
            >
                <ContenedorImagen variant="oval">
                    <img
                        src={imagenSrc}
                        alt={`Foto de ${nombre}`}
                        className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                    />
                </ContenedorImagen>
                <div className="
                    absolute inset-0 bg-white/40 rounded-full
                    flex items-center justify-center
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110"
                >
                    <RedesIcono type="linkedin" className="w-10 h-10" />
                </div>
            </a>
            <Titulos variant="name">{nombre}</Titulos>
            <Parrafos variant="equipo">{puesto}</Parrafos>

            <div className="flex items-center justify-center gap-2 mt-2">
                {telefono && (
                    <a href={telefono.link} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-2 text-primary hover:text-secondary transition-colors group">
                        <RedesIcono type="whatsapp" className="w-10 h-10 group-hover:scale-110 transition-transform" />
                        <span className="text-base items-center">{telefono.display}</span>
                    </a>
                )}
                {email && (
                    <a href={email.link} target="_blank" rel="noopener noreferrer" className="flex items-baseline gap-2 text-primary hover:text-secondary transition-colors group">
                        <RedesIcono type="email" className="w-10 h-10 group-hover:scale-110 transition-transform" />
                        <span className="text-base">{email.display}</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default EquipoCard;