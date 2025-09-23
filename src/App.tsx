import './App.css'
import Titulos from './components/1-Elementos/Titulos'
import Parrafos from './components/1-Elementos/Parrafos'
import Logo from './components/1-Elementos/Logo'
import Button from './components/1-Elementos/Boton'
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



function App() {

  const [avatarSectionRef, isAvatarSectionVisible] = useInView({ threshold: 0.3 });
  const [roundAvatarSectionRef, isRoundAvatarSectionVisible] = useInView({ threshold: 0.3 });

  //Funcion prueba para el scroll hacia abajo
  const handleArrowClick = () => {
    alert("¡La flecha fue clickeada! Aquí iría la animación de scroll.");
  };

  return (
    <>
      <HeaderSeccion />

      <main className="bg-background">

        <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center relative p-4">
          <div className="flex flex-col items-center gap-8">
            <Logo />
          </div>
          <a href="#que-es-ana" className="absolute bottom-10 animate-bounce">
            <FlechaIcono />
          </a>
        </section>

        <section id="que-es-ana"><DivisorSeccion /><SeccionQueEsAna /></section>
        <section id="beneficios"><DivisorSeccion /><BeneficiosSeccion /></section>
        <section id="equipo"><DivisorSeccion /><SeccionEquipo /></section>
        <section id="filosofia"><DivisorSeccion /><FilosofiaSeccion /></section>
        <section id="clientes"><DivisorSeccion /><TestimoniosSeccion /></section>

      </main>

      <FooterSeccion />
    </>
  );
}

export default App;