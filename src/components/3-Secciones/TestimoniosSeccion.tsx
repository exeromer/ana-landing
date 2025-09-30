import React from 'react';
import Titulos from '../1-Elementos/Titulos';
import TestimoniosCard from '../2-Modulos/TestimoniosCard';
import { useInView } from '../../hooks/useInView';

const testimoniosData = [
  {
    calificacion: 5,
    testimonio: "Con ANA dejamos de mirar planillas eternas sin saber qué hacer. En 30 días ya teníamos un reporte que nos mostró con qué productos perdíamos plata. Ahí entendimos eI valor real de los datos.",
    nombre: "Jorge Gómez - ENUM",
  },
  {
    calificacion: 4.5,
    testimonio: "La rotación del personal era altísima y no sabíamos por qué. ANA cruzó datos de ausencias, desempeño y feedback y nos dio una respuesta clara. Bajamos un 40% la salida de agentes en tres meses.",
    nombre: "Pedro Piedra - FARMACIA",
  },
  {
    calificacion: 5,
    testimonio: "Estábamos gastando en visitas comerciales que no generaban ventas.ANA nos ayudó a redirigir recursos y ahora tenemos más cierre con menos costo.Es análisis con impacto real.",
    nombre: "Juana Manso",
  },
];

const TestimoniosSeccion: React.FC = () => {
  const [ref, isVisible] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      ref={ref}
      className={`w-full max-w-6xl mx-auto py-16 px-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <Titulos variant="section" className={`mb-12 ${isVisible ? 'animate-fade-down' : 'opacity-0'}`}>
        Clientes
      </Titulos>
      <div className="flex flex-wrap justify-center gap-8">
        {testimoniosData.map((testimonio, index) => (
          <div
            key={testimonio.nombre}
            className={`w-full md:w-[45%] lg:w-[30%] flex justify-center ${isVisible ? 'animate-fade-up animate-ease-in-out' : 'opacity-0'}`}
            style={{ animationDelay: `${index * 300}ms` }} 
          >
            <TestimoniosCard {...testimonio} isVisible={isVisible} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimoniosSeccion;