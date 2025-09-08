import './App.css'
import Logo from './components/1-Elementos/Logo'
import Button from './components/1-Elementos/Boton'
import ImageContainer from './components/1-Elementos/ContenedorImagen'

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-3xl font-bold text-accent-green p-4 font">
        Proyecto ANA
      </h1>

      {/* Sección de prueba para el Logo y Botón */}

      <div className="flex flex-col items-center gap-4">
        <Logo /></div>

      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold text-secondary">Botones</h2>
        <div className="flex items-center gap-4">
          <Button variant="primary">Agendá <br />una demo</Button>
          <Button variant="outline">Agendá <br />una demo</Button>
        </div>
      </div>

      {/* Sección de prueba para el Contenedor de Imagen */}

      <div className="w-full h-full object-hidden">
        <ImageContainer>
          <img
            src="/avatars.jpg"
            alt="Imagen de Prueba"
            className="w-full h-full object-cover"
          />
        </ImageContainer>
      </div>
    </div>
  )
}

export default App;