"use client";

import { useState } from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import ParticlesBackground from "./ParticlesBackground";

export default function Header() {
  const [menuActivo, setMenuActivo] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Servicios", href: "#mis-servicios" },
    { label: "Portafolio", href: "#portafolio" },
    { label: "Experiencias", href: "#experiencia" },
    { label: "Contáctame", href: "#contacto" },
  ];

  return (
    <div className="relative w-full bg-[#0e1f2e] min-h-screen flex flex-col overflow-hidden">
      
      {/* Fondo de partículas */}
      <ParticlesBackground />
      
      {/* HEADER TOP (Logo y Navegación) */}
      <header className="max-w-[1100px] w-full mx-auto px-4 relative z-20">
        <div className="flex justify-between items-center py-8">
          <div className="logo">
            <span className="text-white text-3xl font-oxanium font-bold">
              {"< Gregorick Liriano />"}
            </span>
          </div>

          {/* Botón Responsive (Mobile) */}
          <button
            onClick={() => setMenuActivo(!menuActivo)}
            className="md:hidden flex items-center gap-2 border border-white text-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300 relative z-50"
          >
            <svg viewBox="0 0 20 20" width="1.2em" height="1.2em">
              <path
                fill="currentColor"
                d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314 c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743 s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314 c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
              ></path>
            </svg>
            MENU
          </button>

          {/* Navegación Desktop & Mobile */}
          <nav
            className={`absolute md:relative top-[110px] md:top-0 left-0 w-full md:w-[55%] bg-white md:bg-transparent transition-transform duration-500 z-50 py-5 md:py-0 ${
              menuActivo ? "translate-x-0 shadow-lg md:shadow-none" : "-translate-x-full md:translate-x-0"
            }`}
          >
            <ul className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 md:gap-8">
              {navItems.map((item) => (
                <li key={item.label} className="w-full md:w-auto text-center border-b border-gray-200 md:border-none pb-4 md:pb-0">
                  <a
                    href={item.href}
                    className="text-gray-800 md:text-white text-sm capitalize hover:text-[#ff324d] transition-colors"
                    onClick={() => setMenuActivo(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* PORTADA PERFIL (Hero) */}
      <div className="flex-1 max-w-[1100px] w-full mx-auto px-4 relative flex flex-col md:flex-row justify-end items-center z-10">
        
        {/* Imagen anclada al fondo de la pantalla */}
        <div className="hidden md:block absolute bottom-0 left-4 md:left-4 lg:left-0 w-[45%] lg:w-[45%] max-w-[550px] z-10 pointer-events-none">
          <Image
            src="/img/Perfil-Gregorick-principal.png"
            alt="Imagen Perfil Principal"
            width={600}
            height={800}
            className="w-full h-auto object-contain object-bottom block" 
            priority 
          />
        </div>

        {/* Contenido principal */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center md:items-start text-center md:text-left z-20 pb-16 md:pb-24 pointer-events-auto">
          <h1 className="text-white text-5xl md:text-6xl font-oxanium font-bold mb-4 tracking-wide">
            <span className="text-white inline-block">Gregorick</span> Liriano
          </h1>
          
          <div className="text-white text-xl py-2">
            Yo soy{" "}
            <span className="font-semibold">
              <ReactTyped
                strings={[
                  "UX Designer",
                  "Desarrollador Web",
                  "Publicista"
                ]}
                typeSpeed={50}
                backSpeed={40}
                loop
              />
            </span>
          </div>
          
          <div className="py-4 mb-6">
            <p className="text-white/90 font-light text-base md:text-lg max-w-lg leading-relaxed">
              Soy licenciado en publicidad con un máster en Dirección de Publicidad Integrada. 
              Apasionado por crear marcas digitales a través del marketing digital y desarrollo de sitios webs.
            </p>
          </div>
          
          <a href="#contactame">
            <button className="text-white bg-[#ff324d] px-8 py-3 rounded-full hover:bg-white hover:text-[#1d1e30] transition-colors duration-300 font-semibold shadow-lg">
              Contáctame
            </button>
          </a>
        </div>
      </div>
      
    </div>
  );
}