import React, { useState } from "react";

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
const HeaderSeccion: React.FC = () => {
    // Estado para manejar el menú en celu
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <header className="sticky -top-1 z-50 w-full bg-background/80 backdrop-blur-sm py-1 px-8 shadow-md">
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
                        <img src={navIconUrl} alt="Menú de navegación" className="w-8 h-8" />
                    </button>
                </div>
            </div>

            {/* --- Menú Desplegable Celu --- */}
            {menuAbierto && (
                <nav className="lg:hidden mt-4 flex flex-col items-center gap-4 bg-background py-4">
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