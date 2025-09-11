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


function App() {
  return (
    <main className="bg-background-alt min-h-screen flex flex-col justify-center items-center gap-8">

      {/* === Sección 1: Probando texto  === */}
      <section className="min-h-screen flex flex-col justify-center items-center gap-4 p-4">
        <Titulos variant="section">
          Título de Sección
        </Titulos>
        <Card className="w-full max-w-sm">
          <Titulos variant="card">
            Título de Tarjeta
          </Titulos>
        </Card>
        <div>
          <Titulos variant="name">
            Nombre de Persona
          </Titulos>
          <p className="text-center text-sm text-secondary">Subtítulo</p>
        </div>

        {/* Variante por defecto */}
        <Parrafos variant="default">
          Este es un párrafo por defecto. Se usa para el cuerpo de texto principal y tiene un ancho máximo para mejorar la legibilidad.
        </Parrafos>
        {/* Variante para tarjetas */}
        <Card className="w-full max-w-sm">
          <Parrafos variant="card">
            Este es un párrafo de tarjeta. El texto usa el color primario de la marca para resaltar sobre el fondo amarillo.
          </Parrafos>
        </Card>
        {/* Variante para el footer */}
        <div className="w-full max-w-sm mt-4 p-4 bg-gray-200 rounded-lg">
          <Parrafos variant="footer">
            Este es un párrafo de footer. <br />
            Es más pequeño y está alineado a la izquierda. <br />
            Ideal para información de contacto.
          </Parrafos>
        </div>

        {/* Probando Logo y Botón */}
        
        <Logo />
        <Button variant="primary">
          Agendá <br />una demo
        </Button>
        <h2 className="text-2xl font-bold text-primary">Iconos de Redes Sociales</h2>
        <div className="flex items-center gap-4">
          <RedesIcono type="linkedin" href="https://linkedin.com" />
          <RedesIcono  type="instagram" href="https://instagram.com" />
        </div>
        <h2 className="text-2xl font-bold text-primary">Iconos de Estrellas</h2>
        <div className="flex items-center gap-4 text-accent-yellow">
          <StarIcono className='animate-jump-in animate-duration-1000 animate-ease-out' variant="full" />
          <StarIcono className='animate-jump-in  animate-duration-1250 animate-ease-out' variant="full" />
          <StarIcono className='animate-jump-in  animate-duration-1500 animate-ease-out' variant="full" />
          <StarIcono className='animate-jump-in  animate-duration-1750 animate-ease-out' variant="full" />
          <StarIcono className='animate-jump-in animate-duration-2000 animate-ease-out' variant="half" />
        </div>
        <h2 className="text-2xl font-bold text-primary mt-6">Iconos de Check</h2>
        <div className="flex items-center gap-4 text-green-500">
          <CheckIcono />
        </div>

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
              className="w-full h-full object-cover animate-fade animate-duration-[750ms] animate-ease-linear"
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
            className="w-full h-full object-cover animate-fade  animate-duration-[750ms] animate-ease-linear"
          />
        </ImageContainer>
      </section>


    </main>
  )
}

export default App;