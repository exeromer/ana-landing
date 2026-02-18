import './App.css';
import { useEffect, useState } from 'react';
import DivisorSeccion from './components/1-Elementos/DivisorSeccion';
import BeneficiosSeccion from './components/3-Secciones/BeneficiosSeccion';
import SeccionEquipo from './components/3-Secciones/ContactoSeccion';
import TestimoniosSeccion from './components/3-Secciones/TestimoniosSeccion';
import FilosofiaSeccion from './components/3-Secciones/FilosofiaSeccion';
import FooterSeccion from './components/3-Secciones/FooterSeccion';
import HeaderSeccion from './components/3-Secciones/HeaderSeccion';
import SeccionQueEsAna from './components/3-Secciones/AnaSeccion';
import HeroSeccion from './components/3-Secciones/HeroSeccion';


function App() { 
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
        <section id="filosofia">
          <DivisorSeccion colorDesde="var(--color-background-beneficios)" colorHasta="var(--color-background)" />
          <FilosofiaSeccion />
        </section>
        <section id="clientes">
          <DivisorSeccion colorDesde="var(--color-background)" colorHasta="var(--color-background-beneficios)" />
          <TestimoniosSeccion />
        </section>
        <section id="equipo">
          <DivisorSeccion colorDesde="var(--color-background-beneficios)" colorHasta="var(--color-background)" />
          <SeccionEquipo />
        </section>
      </main>

      <FooterSeccion />
    </>
  );
}

export default App;