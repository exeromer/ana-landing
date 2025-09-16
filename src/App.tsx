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
import BeneficiosSection from './components/3-Secciones/BeneficiosSeccion'


function App() {

  const [avatarSectionRef, isAvatarSectionVisible] = useInView({ threshold: 0.3 });
  const [roundAvatarSectionRef, isRoundAvatarSectionVisible] = useInView({ threshold: 0.3 });

  //Funcion prueba para el scroll hacia abajo
  const handleArrowClick = () => {
    alert("¡La flecha fue clickeada! Aquí iría la animación de scroll.");
  };

  return (
    <main className="bg-background-alt">

      {/* === SECCIÓN 1: HERO === */}
      <section className="min-h-screen flex flex-col justify-center items-center gap-8 p-4 text-center">
        <Logo />
        <Button variant="primary">
          Agendá <br />una demo
        </Button>
        <div className="absolute bottom-10">
          <FlechaIcono onClick={handleArrowClick} />
        </div>
      </section>

      <DivisorSeccion />

           
      {/* === Sección de prueba para Módulos === */}
      <BeneficiosSection />


      <DivisorSeccion />

    </main>
  )
}

export default App;