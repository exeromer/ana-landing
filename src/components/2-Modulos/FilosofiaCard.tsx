import React, { useState } from "react";
import Titulos from "../1-Elementos/Titulos";
//import Parrafos from "../1-Elementos/Parrafos";
import selloForbitUrl from "../../assets/ANA_sello_forbit.svg";
import Card from "../1-Elementos/Card";
import { useInView } from "../../hooks/useInView";
import TextoAnimado from "../1-Elementos/TextoAnimado";

interface FilosofiaCardProps {
  palabra: string;
  frase: string;
}

const FilosofiaCard: React.FC<FilosofiaCardProps> = ({ palabra, frase }) => {
  const [ref, isVisible] = useInView({ threshold: 0.3, triggerOnce: true });
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group w-full max-w-sm h-72 md:h-64 mx-auto"
      // Estado para saber donde esta mouse
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        ref={ref}
        className={`
                group w-full h-48 [perspective:1000px]
                transition-all duration-700 ease-in-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
      >
        <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:rotate-y-180">

          {/* CARA FRONTAL */}
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <Card className="w-full h-full flex flex-col justify-center items-center text-center gap-2">
              <img src={selloForbitUrl} alt="Sello ANA Forbit" className="w-14 h-14" />
              <Titulos variant="card">{palabra}</Titulos>
            </Card>
          </div>

          {/* CARA TRASERA */}
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <Card className="w-full h-full flex flex-col justify-center items-center text-center p-6">
              {isFlipped && (
                <TextoAnimado
                  texto={frase}
                  className="font-sans text-base text-primary text-center"
                />
              )}            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FilosofiaCard;