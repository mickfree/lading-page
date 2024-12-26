import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-500 text-white py-10">
      <div className="max-w-screen-lg mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sección de Informes */}
        <div>
          <h4 className="text-lg font-bold mb-4">Informes</h4>
          <p className="flex items-center mb-2">
            📞 <span className="ml-2">(+51) 01 461 2277</span>
          </p>
          <p className="font-semibold">Ventas e Instalación:</p>
          <ul className="text-sm space-y-1">
            <li>Anexos 204 - 205</li>
            <li>+51 989 454 003</li>
            <li>+51 989 316 332</li>
          </ul>
          <p className="font-semibold mt-4">Posventa y Mantenimiento:</p>
          <ul className="text-sm space-y-1">
            <li>Anexo 202</li>
            <li>+51 989 311 600</li>
          </ul>
        </div>

        {/* Sección Recomendados */}
        <div>
          <h4 className="text-lg font-bold mb-4">Recomendados</h4>
          <ul className="text-sm space-y-1">
            <li>Nosotros</li>
            <li>Contáctanos</li>
            <li>Blog</li>
            <li>Ver Nuestros Proyectos</li>
            <li>Equipos de Aire Acondicionado</li>
            <li>Equipos de Ventilación Mecánica</li>
            <li>Aire Acondicionado Portátil</li>
          </ul>
        </div>

        {/* Sección Marcas */}
        <div>
          <h4 className="text-lg font-bold mb-4">Marcas</h4>
          <ul className="text-sm space-y-1">
            <li>Aire Acondicionado York</li>
            <li>Aire Acondicionado LG</li>
            <li>Aire Acondicionado Samsung</li>
            <li>Aire Acondicionado ColdPoint</li>
            <li>Aire Acondicionado Daikin</li>
            <li>Aire Acondicionado Midea</li>
            <li>Aire Acondicionado Khöne</li>
            <li>Aire Acondicionado y Deshumidificadores Alfano</li>
          </ul>
        </div>

        {/* Sección Servicios */}
        <div>
          <h4 className="text-lg font-bold mb-4">Servicios</h4>
          <ul className="text-sm space-y-1">
            <li>Instalación de Aire Acondicionado</li>
            <li>Mantenimiento de Aire Acondicionado</li>
            <li>Presurización de Escaleras</li>
            <li>Extracción de Monóxido</li>
            <li>Elaboración y Ejecución de Proyectos</li>
            <li>Ductos de Aire Acondicionado y Ventilación</li>
            <li>Otros Mantenimientos</li>
          </ul>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-white opacity-50 my-8"></div>

      {/* Redes sociales y copyright */}
      <div className="max-w-screen-lg mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex space-x-4">
          <a href="#" className="text-white text-xl hover:opacity-75">🌐</a>
          <a href="#" className="text-white text-xl hover:opacity-75">📘</a>
          <a href="#" className="text-white text-xl hover:opacity-75">🐦</a>
          <a href="#" className="text-white text-xl hover:opacity-75">📺</a>
        </div>
        <p className="text-sm text-center">
          © INGENIEROS FRIOTEMP S.A.C. • Teléf. (+511) 461 2277 • Calle José Mariano Arce N.º 493, Pueblo Libre - Lima - Perú
        </p>
      </div>
    </footer>
  );
};

export default Footer;

