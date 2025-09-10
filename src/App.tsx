import './App.css'
import Titulos from './components/1-Elementos/Titulos'
import Parrafos from './components/1-Elementos/Parrafos'
import Logo from './components/1-Elementos/Logo'
import Button from './components/1-Elementos/Boton'
import ImageContainer from './components/1-Elementos/ContenedorImagen'
import DivisorSeccion from './components/1-Elementos/DivisorSeccion'


function App() {
  return (
    <main className="bg-background-alt min-h-screen flex flex-col justify-center items-center gap-8">

      {/* === Sección 1: Contenido Centrado (como un Hero) === */}
      <section className="min-h-screen flex flex-col justify-center items-center gap-4 p-4">
        <Titulos>
          Qué es ANA
        </Titulos>
        <Parrafos>
          ANA es un servicio de acompañamiento que te permitirá, a través de una serie de reportes, tomar mejores decisiones para tu negocio. Iluminamos el camino para que avances con certeza.
        </Parrafos>
        <Logo />
        <Button variant="primary">
          Agendá <br />una demo
        </Button>
      </section>

      {/* === Sección 2: Divisor de Ancho Completo === */}
      <DivisorSeccion />

      {/* Sección de prueba para el Contenedor de Imagen */}

      <section className="flex flex-col justify-center items-center w-full h-full object-hidden">
        <h2 className="text-2xl font-bold text-primary">
          Probando el Avatar
        </h2>
        <ImageContainer>
          <img
            src="/avatars.jpg"
            alt="Imagen de Prueba"
            className="w-full h-full object-cover"
          />
        </ImageContainer>
      </section>

      <section className="flex flex-col justify-center items-center w-full h-full object-hidden">
        <h2 className="text-2xl font-bold text-primary">
          Variante "round"
        </h2>
        <ImageContainer variant="round">
          <img
            src="/avatars.jpg"
            alt="Imagen de Prueba Round"
            className="w-full h-full object-cover"
          />
        </ImageContainer>
      </section>

    </main>
  )
}

export default App;