import React from 'react';
import Logo from '../1-Elementos/Logo';
import Boton from '../1-Elementos/Boton';
import FlechaIcono from '../1-Elementos/FlechaIcono';
import TextoAnimado from '../1-Elementos/TextoAnimado';

interface HeroSeccionProps {
  isVisible: boolean;
    onArrowClick: () => void;
}

const HeroSeccion: React.FC<HeroSeccionProps> = ({ isVisible,onArrowClick }) => {
  return (
    <section
      id="hero"
      className={`
        fixed top-0 left-0 w-screen h-screen
        flex flex-col justify-center items-center 
        bg-background-alt z-40
        transition-all duration-1200 ease-in-out
        animated-gradient
        ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <Logo variant="grande" />
        <Boton variant="large">
          <TextoAnimado
            texto="AGENDA UNA DEMO"
            className="font-sans text-xl font-bold text-center"
          />
        </Boton>
      </div>
      <div className="absolute bottom-10 animate-bounce cursor-pointer">
        <button onClick={onArrowClick}>
          <FlechaIcono />
        </button>
      </div>
    </section>
  );
};

export default HeroSeccion;