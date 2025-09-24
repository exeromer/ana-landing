import React from 'react';
import Parrafos from '../1-Elementos/Parrafos';
import RedesIcono from '../1-Elementos/RedesIcono';
import selloAnaUrl from '../../assets/ANA_sello.svg';

const FooterSeccion: React.FC = () => {
    return (
        <footer className="w-full bg-background-footer py-8 px-4">
            <div className="max-w-7xl mx-auto flex 
        flex-col items-center gap-8                  
        md:flex-row md:justify-between">

                {/* --- Columna Izquierda: Logo e Info --- */}
                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                    <img src={selloAnaUrl} alt="Sello de ANA" className="w-40 h-40" loading="lazy" />
                    <Parrafos variant="footer">
                        Santiago del Estero, Mendoza, Argentina <br />
                        Manizales, Colombia <br />
                        Teléfono: (021) 456-7890 <br />
                        Mobile: (0123) 456-7890
                    </Parrafos>
                </div>
                {/* --- Columna Derecha: Redes Sociales --- */}
                <div className="flex gap-6">
                    <RedesIcono type="linkedin" href="#" className="w-10 h-10" />
                    <RedesIcono type="instagram" href="#" className="w-10 h-10" />
                </div>

            </div>
        </footer>
    );
};

export default FooterSeccion;