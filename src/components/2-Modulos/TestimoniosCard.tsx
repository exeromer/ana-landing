import React from "react";

import Card from "../1-Elementos/Card";
import Parrafos from "../1-Elementos/Parrafos";
import Titulos from "../1-Elementos/Titulos";
import StarIcono from "../1-Elementos/StarIcono";
import { useMousePosition } from "../../hooks/useMousePosition";

interface TestimoniosCardProps {
    nombre: string;
    testimonio: string;
    calificacion: number;
    isVisible?: boolean;
}

const renderEstrellas = (rating: number, isVisible: boolean) => {
    const estrellas = [];
    const estrellasCompletas = Math.floor(rating);
    const tieneMediaEstrella = rating % 1 !== 0;

    for (let i = 0; i < estrellasCompletas; i++) {
        estrellas.push(
            <StarIcono
                key={`full-${i}`}
                variant="full"
                className={isVisible ? `animate-fade-down animate-ease-in` : 'opacity-0'}
                style={{ animationDelay: `${i * 150}ms` }}
            />
        );
    }
    if (tieneMediaEstrella) {
        estrellas.push(
            <StarIcono
                key="half"
                variant="half"
                className={isVisible ? "animate-fade-down animate-ease-in" : 'opacity-0'}
                style={{ animationDelay: `${estrellasCompletas * 250}ms` }}
            />
        );
    }
    return estrellas;
};

const TestimoniosCard: React.FC<TestimoniosCardProps> = ({
    nombre,
    testimonio,
    calificacion,
    isVisible = false,
}) => {
    const [ref, position] = useMousePosition();

    return (
        <Card ref={ref} className="w-full max-w-sm h-86 flex flex-col items-center justify-between text-center gap-4 p-6 group">
            <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.4), transparent 80%)`,
                }}
            />
            <div className="relative z-10 flex flex-col items-center justify-between text-center gap-4 h-full">
                <div className="flex gap-2">
                    {renderEstrellas(calificacion, isVisible)}
                </div>
                <div className="overflow-hidden">
                    <Parrafos variant="card" className="line-clamp-7">
                        "{testimonio}"
                    </Parrafos>
                </div>
                <div className="mt-2">
                    <Titulos variant="nameCliente">{nombre}</Titulos>
                </div>
            </div>
        </Card>
    );
};

export default TestimoniosCard;