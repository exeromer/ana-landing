import React from "react";
import Titulos from "../1-Elementos/Titulos";
import Parrafos from "../1-Elementos/Parrafos";
import selloForbitUrl from "../../assets/ANA_sello_forbit.svg";
import Card from "../1-Elementos/Card";

interface FilosofiaCardProps {
    palabra: string;
    frase: string;
}

const FilosofiaCard: React.FC<FilosofiaCardProps> = ({ palabra, frase }) => {
    return (
 <div className="group w-full h-48 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:rotate-y-180">

        {/* CARA FRONTAL */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <Card className="w-full h-full flex flex-col justify-center items-center text-center gap-2">
            <img src={selloForbitUrl} alt="Sello ANA Forbit" className="w-12 h-12" />
            <Titulos variant="card">{palabra}</Titulos>
          </Card>
        </div>

        {/* CARA TRASERA */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <Card className="w-full h-full flex flex-col justify-center items-center text-center p-6">
            <Parrafos variant="card">{frase}</Parrafos>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default FilosofiaCard;