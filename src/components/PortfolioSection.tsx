"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Definimos interfaces básicas para TypeScript
interface Term {
  name: string;
}

interface Proyecto {
  id: number;
  title: { rendered: string };
  meta?: { link?: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
    "wp:term"?: Array<Array<Term>>;
  };
}

export default function PortfolioSection() {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);
  const [filtros, setFiltros] = useState<string[]>(["Todos"]);
  const [filtroActivo, setFiltroActivo] = useState("Todos");
  const [loading, setLoading] = useState(true);
  
  // Nuevo estado para controlar el Popup en la versión móvil
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPortafolios = async () => {
      try {
        const res = await fetch(
          "https://grlnow.com/gregoricklirianoheadless/wp-json/wp/v2/portafolios?_embed&orderby=menu_order&order=desc&per_page=100"
        );
        const data: Proyecto[] = await res.json();
        setProyectos(data);

        // Extraer los nombres de los filtros de forma dinámica desde los proyectos
        const nombresFiltros = new Set<string>(["Todos"]);
        data.forEach((proyecto) => {
          const terms = proyecto._embedded?.["wp:term"]?.[0] || [];
          terms.forEach((term) => nombresFiltros.add(term.name));
        });
        
        setFiltros(Array.from(nombresFiltros));
      } catch (error) {
        console.error("Error al obtener los portafolios:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortafolios();
  }, []);

  // Filtrar los proyectos según la pestaña activa
  const proyectosFiltrados =
    filtroActivo === "Todos"
      ? proyectos
      : proyectos.filter((proyecto) => {
          const terms = proyecto._embedded?.["wp:term"]?.[0] || [];
          return terms.some((term) => term.name === filtroActivo);
        });

  // Función combinada para actualizar el filtro y cerrar el popup en móviles
  const handleFilterSelection = (filtro: string) => {
    setFiltroActivo(filtro);
    setIsModalOpen(false);
  };

  return (
    <section id="portafolio" className="w-full bg-gray-50 py-24 text-gray-800">
      <div className="max-w-[1250px] w-full mx-auto px-6 lg:px-12">
        
        {/* Título */}
        <div className="mb-10 text-center md:text-left">
          <h3 className="text-3xl lg:text-4xl font-oxanium font-bold tracking-wide text-gray-900">
            Portafolio
          </h3>
          <p className="text-gray-500 mt-2">Explora algunos de mis trabajos más recientes.</p>
        </div>

        {/* Skeleton de carga o Contenido */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <span className="text-gray-500 text-lg font-oxanium animate-pulse">
              Cargando proyectos...
            </span>
          </div>
        ) : (
          <>
            {/* =========================================
                CONTROLES DE FILTRO (DESKTOP & MOBILE)
            ========================================= */}
            
            {/* VERSIÓN DESKTOP: Pestañas visibles (Ocultas en pantallas menores a 'md') */}
            <div className="hidden md:flex flex-wrap justify-start gap-4 mb-12">
              {filtros.map((filtro) => (
                <button
                  key={filtro}
                  onClick={() => setFiltroActivo(filtro)}
                  className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                    filtroActivo === filtro
                      ? "bg-[#ff324d] text-white shadow-md"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-[#ff324d] hover:text-[#ff324d]"
                  }`}
                >
                  {filtro}
                </button>
              ))}
            </div>

            {/* VERSIÓN MOBILE: Botón para abrir Popup (Oculto en pantallas mayores a 'md') */}
            <div className="md:hidden w-full mb-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-white border border-gray-300 text-gray-800 py-3 px-4 rounded-lg flex items-center justify-between shadow-sm font-semibold active:bg-gray-100 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[#ff324d]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                  {filtroActivo === "Todos" ? "Filtrar Proyectos" : `Filtro: ${filtroActivo}`}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>

            {/* =========================================
                MODAL POPUP DE FILTROS (MOBILE)
            ========================================= */}
            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm md:hidden">
                <div className="bg-white w-full rounded-t-3xl p-6 pb-12 shadow-2xl transform transition-transform">
                  
                  {/* Encabezado del Modal */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold font-oxanium text-gray-900">
                      Selecciona una categoría
                    </h3>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-800 rounded-full transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Lista de botones en el Modal */}
                  <div className="flex flex-col gap-3 max-h-[60vh] overflow-y-auto">
                    {filtros.map((filtro) => (
                      <button
                        key={filtro}
                        onClick={() => handleFilterSelection(filtro)}
                        className={`text-left px-5 py-4 rounded-xl font-semibold text-base transition-colors ${
                          filtroActivo === filtro
                            ? "bg-[#ff324d] text-white shadow-md"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {filtro}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* =========================================
                GRID DE PROYECTOS
            ========================================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {proyectosFiltrados.map((proyecto) => {
                const imageUrl =
                  proyecto._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                const projectLink = proyecto.meta?.link;

                return (
                  <div
                    key={proyecto.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
                  >
                    {/* Imagen del Proyecto */}
                    {imageUrl && (
                      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                        <Image
                          src={imageUrl}
                          alt={proyecto.title.rendered}
                          fill
                          className="object-cover object-top"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                    )}

                    {/* Contenido */}
                    <div className="p-5 flex flex-col flex-1 justify-between">
                      <h4
                        className="text-lg font-bold font-oxanium mb-3 text-gray-900 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: proyecto.title.rendered }}
                      />
                      
                      {projectLink ? (
                        <a
                          href={projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block w-full text-center bg-gray-900 text-white py-2 text-sm rounded font-medium hover:bg-[#ff324d] transition-colors duration-300"
                        >
                          Ver Proyecto ↗
                        </a>
                      ) : (
                        <span className="inline-block w-full text-center bg-gray-200 text-gray-500 py-2 text-sm rounded font-medium cursor-not-allowed">
                          Link no disponible
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}