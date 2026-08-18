"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const skillsColumn1 = [
  { name: "HTML5", percentage: 90 },
  { name: "CSS / SASS", percentage: 90 },
  { name: "JAVASCRIPT", percentage: 85 },
];

const skillsColumn2 = [
  { name: "WORDPRESS", percentage: 90 },
  { name: "REACT / NODE / EXPRESS", percentage: 65 },
  { name: "Mysql / MOGODB", percentage: 65 },
];

const tools = [
  { src: "/img/adobe-psd.png", alt: "Photoshop" },
  { src: "/img/adobeXD.png", alt: "Adobe XD" },
  { src: "/img/VisualCodeEstudio.png", alt: "Visual Studio Code" },
  { src: "/img/wordpress.png", alt: "WordPress" },
  { src: "/img/mern-img.png", alt: "MERN Stack" },
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Asigna true al entrar y false al salir para que se reinicie al volver
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobremi" ref={sectionRef} className="w-full bg-white py-20 text-gray-800">
      <div className="max-w-[1250px] w-full mx-auto px-6 lg:px-12">
        
        {/* Bloque principal: Foto izquierda y Conocimientos derecha */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-stretch justify-between">
          
          {/* Imagen de perfil */}
          <div className="w-full lg:w-[32%] flex justify-center items-center">
            <div className="bg-white p-4 shadow-xl border border-gray-100 max-w-[340px] w-full rounded-sm">
              <Image
                src="/img/Perfil-Gregorick-3.jpg"
                alt="Imagen Perfil"
                width={400}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Bloque de Conocimientos */}
          <div className="w-full lg:w-[65%] flex flex-col justify-between">
            <h3 className="text-3xl font-oxanium font-bold mb-6 text-gray-900">
              Conocimientos
            </h3>

            {/* Ajuste en el gap-y para separar más las dos columnas en móvil */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 flex-1 justify-between">
              
              {/* Columna 1: Agregado gap-6 para móvil, md:gap-0 para escritorio */}
              <div className="flex flex-col gap-6 md:gap-0 justify-around h-full py-2">
                {skillsColumn1.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm font-semibold tracking-wide">
                      <span>{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="bg-[#ff324d] h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.percentage}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Columna 2: Agregado gap-6 para móvil, md:gap-0 para escritorio */}
              <div className="flex flex-col gap-6 md:gap-0 justify-around h-full py-2">
                {skillsColumn2.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-sm font-semibold tracking-wide">
                      <span>{skill.name}</span>
                      <span className="text-gray-600">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden shadow-inner">
                      <div
                        className="bg-[#ff324d] h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.percentage}%` : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Herramientas inferiores con animación Zoom (0 a 100) de Derecha a Izquierda */}
        <div className="mt-20 pt-12 border-t border-gray-100 overflow-hidden">
          <div className="flex flex-wrap justify-between items-center gap-6 px-4">
            {tools.map((tool, index) => {
              // Calculamos el índice inverso para que comience desde la derecha (último elemento al primero)
              const reverseIndex = tools.length - 1 - index;

              return (
                <div 
                  key={index} 
                  className="flex-1 min-w-[120px] h-20 relative flex items-center justify-center transition-all duration-500 ease-out"
                  style={{
                    transform: isVisible ? "scale(1)" : "scale(0)",
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${reverseIndex * 120}ms`, // Retraso escalonado de derecha a izquierda
                  }}
                >
                  <Image
                    src={tool.src}
                    alt={tool.alt}
                    width={110}
                    height={90}
                    className="object-contain max-h-16 w-auto"
                  />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}