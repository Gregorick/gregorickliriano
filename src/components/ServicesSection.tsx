"use client";

import { useEffect, useState, useRef } from "react";
import ParticlesBackground from "./ParticlesBackground";

const services = [
  {
    title: "Diseño Personalizado",
    description: "Diseño elegante de páginas web desde cero desarrollado a la medida.",
  },
  {
    title: "Desarrollo Web",
    description: "Desarrollo web dinámico para escritorio y dispositivos móviles, maquetado y programado a la medida con rendimiento y seguridad optimizados.",
  },
  {
    title: "Marketing Digital",
    description: "Posicionamiento web a través del SEO, SEM y campañas de correos masivos.",
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
    <section
      id="mis-servicios"
      ref={sectionRef}
      className="relative w-full bg-[#0e1f2e] py-24 text-white overflow-hidden"
    >
      {/* Fondo de partículas con opacidad reducida */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <ParticlesBackground />
      </div>

      <div className="max-w-[1250px] w-full mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Título principal grande */}
        <div className="mb-12">
          <h3 className="text-3xl lg:text-4xl font-oxanium font-bold tracking-wide text-white">
            Servicios
          </h3>
        </div>

        {/* Tarjetas de servicios con más padding, zoom y tipografía ajustada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const reverseIndex = services.length - 1 - index;

            return (
              <div
                key={index}
                className="bg-white text-gray-800 p-10 lg:p-12 rounded-lg shadow-2xl flex flex-col justify-between transition-all duration-700 ease-out"
                style={{
                  transform: isVisible ? "scale(1)" : "scale(0)",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${reverseIndex * 150}ms`,
                }}
              >
                <div>
                  {/* Título de cada tarjeta en color #555 */}
                  <h4 className="text-xl lg:text-2xl font-bold font-oxanium mb-4 text-[#555]">
                    {service.title}
                  </h4>
                  {/* Texto descriptivo un poco más pequeño */}
                  <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}