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

        {/* Skeleton de carga o Pestañas de Filtros */}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <span className="text-gray-500 text-lg font-oxanium animate-pulse">
              Cargando proyectos...
            </span>
          </div>
        ) : (
          <>
            {/* Pestañas (Filtros) */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
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

            {/* Grid de Proyectos en 4 columnas */}
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
                    {/* Imagen del Proyecto (más pequeña, h-48) */}
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

                    {/* Contenido (padding ajustado) */}
                    <div className="p-5 flex flex-col flex-1 justify-between">
                      <h4
                        className="text-lg font-bold font-oxanium mb-3 text-gray-900"
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