import './App.css'
import { useState } from 'react'
import Titulos from './components/1-Elementos/Titulos'
import Parrafos from './components/1-Elementos/Parrafos'
import Logo from './components/1-Elementos/Logo'
import Boton from './components/1-Elementos/Boton'
import ImageContainer from './components/1-Elementos/ContenedorImagen'
import DivisorSeccion from './components/1-Elementos/DivisorSeccion'
import RedesIcono from './components/1-Elementos/RedesIcono'
import StarIcono from './components/1-Elementos/StarIcono'
import CheckIcono from './components/1-Elementos/CheckIcono'
import Card from './components/1-Elementos/Card'
import FlechaIcono from './components/1-Elementos/FlechaIcono'
import { useInView } from './hooks/useInView'
import BeneficiosCard from './components/2-Modulos/BeneficiosCard'
import BeneficiosSeccion from './components/3-Secciones/BeneficiosSeccion'
import EquipoCard from './components/2-Modulos/EquipoCard'
import SeccionEquipo from './components/3-Secciones/EquipoSeccion'
import TestimoniosSeccion from './components/3-Secciones/TestimoniosSeccion'
import FilosofiaSeccion from './components/3-Secciones/FilosofiaSeccion'
import FooterSeccion from './components/3-Secciones/FooterSeccion'
import HeaderSeccion from './components/3-Secciones/HeaderSeccion'
import SeccionQueEsAna from './components/3-Secciones/AnaSeccion'
import TextoAnimado from './components/1-Elementos/TextoAnimado'



function App() {

  const [vistaHero, setVistaHero] = useState(true);
  const [saliendo, setSaliendo] = useState(false);
  const [pingActivado, setPingActivado] = useState(false);


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

export default App;