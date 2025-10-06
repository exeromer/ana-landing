import React, { useEffect, useState } from "react";

import Logo from '../1-Elementos/Logo';
import Boton from '../1-Elementos/Boton';
import navIconUrl from '../../assets/nav_icon.svg';

const navLinks = [
    { name: 'Qué es ANA', href: '#que-es-ana' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Filosofía', href: '#filosofia' },
    { name: 'Clientes', href: '#clientes' },
];

interface HeaderSeccionProps {
    isVisible: boolean;
}

const HeaderSeccion: React.FC<HeaderSeccionProps> = ({ isVisible }) => {
    // Estado para manejar el menú en celu
    const [menuAbierto, setMenuAbierto] = useState(false);
    const [hasBackground, setHasBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasBackground(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`
            sticky top-0 z-50 w-full px-8
            transition-all duration-500 ease-in-out
            ${isVisible ? 'opacity-100' : 'opacity-0 -translate-y-full'}
            ${hasBackground ? 'bg-blue-100/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}
        `}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Logo variant="pequeno" />

                {/* Navegación para sen pantallas grandes ('lg') */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-bold text-primary hover:text-secondary transition-colors">
                            {link.name}
                        </a>
                    ))}
                </nav>
                <div className="lg:hidden">
                    <button onClick={() => setMenuAbierto(!menuAbierto)}>
                        <img src={navIconUrl} alt="Menú de navegación" className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* --- Menú Desplegable Celu --- */}
            {menuAbierto && (
                <nav className="lg:hidden mt-4 flex flex-col items-center gap-4 bg-blue-60 py-4">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={() => setMenuAbierto(false)} className="text-base font-bold text-primary hover:text-secondary transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <Boton variant="primary">
                        Agendá <br /> una demo
                    </Boton>
                </nav>
            )}
        </header>
    );
};

export default HeaderSeccion;