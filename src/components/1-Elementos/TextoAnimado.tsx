import React from 'react';

interface TextoAnimadoProps {
  texto: string;
  className?: string;
}

const TextoAnimado: React.FC<TextoAnimadoProps> = ({ texto, className }) => {
  const palabras = texto.split(' ');

  return (
    <p className={`${className} flex flex-wrap justify-center`}>
      {palabras.map((palabra, index) => (
        <span
          key={index}
          className="animate-fade-up animate-ease-in-out"
          style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
        >
          {palabra}&nbsp;
        </span>
      ))}
    </p>
  );
};

export default TextoAnimado;