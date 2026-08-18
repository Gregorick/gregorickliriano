"use client";

import { useState } from "react";

// Datos extraídos del diseño
const educationData = [
  {
    title: "Colegio Oratorio María Auxiliadora (OMA)",
    date: "Finalizado en el 2005",
    role: "",
    description: "Bachiller",
  },
  {
    title: "Universidad Católica Santo Domingo (UCSD)",
    date: "Finalizado en el 2012",
    role: "",
    description: "Lic. en publicidad",
  },
  {
    title: "Universidad Antonio de Nebrija. Madrid, España",
    date: "Finalizado en el 2015",
    role: "",
    description: "Máster en Dirección de Publicidad Integrada (TBWA)",
  },
];

const workData = [
  {
    title: "Dumplignet",
    date: "2017",
    role: "Webmaster y diseñador gráfico",
    description: "Encargado de diseño, maquetación y programación de páginas web.",
  },
  {
    title: "EL TALLER",
    date: "2018",
    role: "Webmaster y diseñador gráfico",
    description: "Encargado de diseño, maquetación y programación de páginas web. Realización de campañas de marketing digital, SEO, SEM y MailChimp.",
  },
  {
    title: "Bubblegum",
    date: "Actualidad",
    role: "Webmaster y Director de Arte",
    description: "Encargado de diseño, maquetación y programación de páginas web. Realización de campañas de marketing digital, SEO, SEM y MailChimp.",
  },
];

type TabType = "Educación" | "Laboral";

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<TabType>("Educación");
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedData, setDisplayedData] = useState(educationData);

  const handleTabSwitch = (tab: TabType) => {
    if (tab === activeTab) return;

    // 1. Iniciar animación de salida (desvanece y reduce un poco)
    setIsAnimating(true);

    // 2. Esperar a que termine la animación para cambiar los datos
    setTimeout(() => {
      setActiveTab(tab);
      setDisplayedData(tab === "Educación" ? educationData : workData);
      
      // 3. Quitar el estado de animación para que entren las nuevas tarjetas (fade in + zoom)
      setIsAnimating(false);
    }, 400); // 400ms hace match con la duración de Tailwind
  };

  return (
    <section id="experiencia" className="w-full bg-[#f4f3f3] py-24 text-gray-800">
      <div className="max-w-[1250px] w-full mx-auto px-6 lg:px-12">
        
        {/* Título */}
        <div className="mb-8">
          <h3 className="text-3xl lg:text-4xl font-oxanium font-bold tracking-wide text-gray-900">
            Experiencia
          </h3>
        </div>

        {/* Contenedor de Pestañas (Pill shape) */}
        <div className="inline-flex bg-white rounded-full p-1.5 shadow-sm mb-12">
          <button
            onClick={() => handleTabSwitch("Educación")}
            className={`px-8 py-2.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ${
              activeTab === "Educación"
                ? "bg-[#ff324d] text-white shadow-md"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            Educación
          </button>
          <button
            onClick={() => handleTabSwitch("Laboral")}
            className={`px-8 py-2.5 rounded-full text-sm lg:text-base font-semibold transition-all duration-300 ${
              activeTab === "Laboral"
                ? "bg-[#ff324d] text-white shadow-md"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            Laboral
          </button>
        </div>

        {/* Grid de Tarjetas con Animación de Zoom y Fade */}
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out transform ${
            isAnimating ? "opacity-0 scale-95 translate-y-4" : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          {displayedData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 lg:p-10 shadow-lg flex flex-col justify-start border border-gray-100"
            >
              {/* Título de la tarjeta */}
              <h4 className="text-xl font-bold font-oxanium text-[#555] mb-3">
                {item.title}
              </h4>
              
              {/* Fecha y Rol */}
              <div className="text-base mb-4 text-gray-800">
                <span className="text-[#ff324d] font-medium mr-2">{item.date}</span>
                {item.role && <span>{item.role}</span>}
              </div>
              
              {/* Línea divisoria suave */}
              <hr className="border-gray-200 mb-5" />
              
              {/* Descripción */}
              <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}