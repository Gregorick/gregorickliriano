import Link from "next/link";

export default function ContactSection() {
  return (
    <footer id="contacto" className="w-full bg-white py-12 text-gray-800 border-t border-gray-200">
      <div className="max-w-[1250px] w-full mx-auto px-6 lg:px-12">
        
        {/* Título sutil */}
        <div className="mb-8 text-center md:text-left">
          <h3 className="text-2xl font-oxanium font-bold tracking-wide text-gray-800">
            Contacto
          </h3>
        </div>

        {/* Información distribuida horizontalmente */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          
          {/* Teléfono */}
          <div className="flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors">
            <div className="p-3 bg-gray-50 rounded-full border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold font-oxanium text-gray-800">Teléfono</p>
              <p className="text-sm">+1 (829) 202-8514</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors">
            <div className="p-3 bg-gray-50 rounded-full border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold font-oxanium text-gray-800">Email</p>
              <p className="text-sm">gregorick.liriano@gmail.com</p>
            </div>
          </div>

          {/* Ubicación */}
          <div className="flex items-center gap-4 text-gray-600 hover:text-gray-900 transition-colors">
            <div className="p-3 bg-gray-50 rounded-full border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold font-oxanium text-gray-800">Ubicación</p>
              <p className="text-sm">República Dominicana</p>
            </div>
          </div>

        </div>

        {/* Línea divisoria y Copyright */}
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Gregorick Liriano. Todos los derechos reservados.
          </p>
          <div className="text-xs text-gray-400 flex gap-4">
            <Link 
              href="https://www.linkedin.com/in/gregorickliriano/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-600 transition-colors"
            >
              LinkedIn
            </Link>
            <Link 
              href="https://github.com/Gregorick/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-gray-600 transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}