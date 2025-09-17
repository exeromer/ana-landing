import React from "react";

import Card from "../1-Elementos/Card";
import Parrafos from "../1-Elementos/Parrafos";
import Titulos from "../1-Elementos/Titulos";
import StarIcono from "../1-Elementos/StarIcono";

interface TestimoniosCardProps {
    nombre: string;
    testimonio: string;
    calificacion: number;
}

const renderEstrellas = (rating: number) => {
    const estrellas = [];
    const estrellasCompletas = Math.floor(rating);
    const tieneMediaEstrella = rating % 1 !== 0;

    for (let i = 0; i < estrellasCompletas; i++) {
        estrellas.push(
            <StarIcono
                key={`full-${i}`}
                variant="full"
                className={`animate-fade-down animate-ease-in`}
                style={{ animationDelay: `${i * 150}ms` }}
            />
        );
    }
    if (tieneMediaEstrella) {
        estrellas.push(
            <StarIcono
                key="half"
                variant="half"
                className="animate-fade-down animate-ease-in"
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
}) => {
    return (
        <Card className="w-full max-w-sm h-86 flex flex-col items-center justify-between text-center gap-4 p-6">
            <div className="flex gap-2">
                {renderEstrellas(calificacion)}
            </div>
            <div className="overflow-hidden">
                <Parrafos variant="card" className="line-clamp-7">
                    "{testimonio}"
                </Parrafos>
            </div>
            <div className="mt-2">
                <Titulos variant="nameCliente">{nombre}</Titulos>
            </div>
        </Card>
    );
};

export default TestimoniosCard;