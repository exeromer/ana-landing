import './App.css';
import { useEffect, useState } from 'react';
import Logo from './components/1-Elementos/Logo';
import Boton from './components/1-Elementos/Boton';
import DivisorSeccion from './components/1-Elementos/DivisorSeccion';
import FlechaIcono from './components/1-Elementos/FlechaIcono';
import BeneficiosSeccion from './components/3-Secciones/BeneficiosSeccion';
import SeccionEquipo from './components/3-Secciones/EquipoSeccion';
import TestimoniosSeccion from './components/3-Secciones/TestimoniosSeccion';
import FilosofiaSeccion from './components/3-Secciones/FilosofiaSeccion';
import FooterSeccion from './components/3-Secciones/FooterSeccion';
import HeaderSeccion from './components/3-Secciones/HeaderSeccion';
import SeccionQueEsAna from './components/3-Secciones/AnaSeccion';
import TextoAnimado from './components/1-Elementos/TextoAnimado';
import HeroSeccion from './components/3-Secciones/HeroSeccion';


function App() {

  const [vistaHero, setVistaHero] = useState(true);
  const [saliendo, setSaliendo] = useState(false);
  const [pingActivado, setPingActivado] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolledPastHero(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    if (!hasScrolledPastHero) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolledPastHero]);
  const handleArrowClick = () => {
    setHasScrolledPastHero(true);
  };

  return (
    <>
      <HeaderSeccion isVisible={hasScrolledPastHero} />
      <HeroSeccion isVisible={!hasScrolledPastHero} onArrowClick={handleArrowClick} />

      {/* El contenido principal queda presente debajo del Hero. */}
      <main>
        <section id="que-es-ana">
        <SeccionQueEsAna />
        </section>
        <section id="beneficios">
          <DivisorSeccion colorDesde="var(--color-background-ana)" colorHasta="var(--color-background-beneficios)" />
          <BeneficiosSeccion />
        </section>
        <section id="equipo">
          <DivisorSeccion colorDesde="var(--color-background-beneficios)" colorHasta="var(--color-background)" />
          <SeccionEquipo />
        </section>
        <section id="filosofia">
          <DivisorSeccion colorDesde="var(--color-background)" colorHasta="var(--color-background)" />
          <FilosofiaSeccion />
        </section>
        <section id="clientes">
          <DivisorSeccion colorDesde="var(--color-background)" colorHasta="var(--color-background)" />
          <TestimoniosSeccion />
        </section>
      </main>

      <FooterSeccion />
    </>
  );
}

/*
  const handleEntrarAlSitio = () => {
    setPingActivado(true);
    setSaliendo(true);
    setTimeout(() => {
      setVistaHero(false);
    }, 700);
  }
 
  // --- VISTA HERO ---
  if (vistaHero) {
    return (
      <main className={`
      bg-background-alt min-h-screen flex flex-col justify-center items-center relative 
      transition-opacity duration-700 ease-in-out
      animated-gradient 
      ${saliendo ? 'opacity-0' : 'opacity-100'}
    `}>
        <div className="flex flex-col items-center gap-8" onClick={handleEntrarAlSitio}>
          <Logo variant="grande" />
 
          <Boton variant="primary" >
            <TextoAnimado
              texto="AGENDA UNA DEMO"
              className="font-sans text-xl font-bold text-center"
            />
          </Boton>
        </div>
        <div className="absolute bottom-10 animate-bounce h-40 w-40 flex flex-col items-center justify-center gap-2 cursor-pointer">
          <FlechaIcono onClick={handleEntrarAlSitio} className={pingActivado ? 'animate-ping animate-once animate-duration-1000 animate-ease-in' : 'animate-bounce'} />
        </div>
      </main>
    );
  }
*/
/*
// --- VISTA SITIO ---
return (
  <>
    <HeaderSeccion />
    <main className="animate-fade-in animate-duration-1000">
      <section id="que-es-ana"><SeccionQueEsAna /></section>
      <section id="beneficios">
        <DivisorSeccion colorDesde="var(--color-background-ana)" colorHasta="var(--color-background-beneficios)" />
        <BeneficiosSeccion />
      </section>
      <section id="equipo">
        <DivisorSeccion colorDesde="var(--color-background-beneficios)" colorHasta="var(--color-background)" />
        <SeccionEquipo />
      </section>
      <section id="filosofia">
        <DivisorSeccion colorDesde="var(--color-background)" colorHasta="var(--color-background)" />
        <FilosofiaSeccion />
      </section>
      <section id="clientes">
        <DivisorSeccion colorDesde="var(--color-background)" colorHasta="var(--color-background)" />
        <TestimoniosSeccion />
      </section>
    </main>
    <FooterSeccion />
  </>
);
}
*/

export default App;