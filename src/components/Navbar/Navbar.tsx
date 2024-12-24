// src/components/Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center"> {/* Cambié justify-between por justify-end */}
        {/* Enlaces de navegación */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-white text-lg hover:text-blue-300">Inicio</a>
          <a href="/about" className="text-white text-lg hover:text-blue-300">Nosotros</a>
          <a href="/about" className="text-white text-lg hover:text-blue-300">Clientes</a>
          <a href="/about" className="text-white text-lg hover:text-blue-300">Catalogo</a>
          <a href="/about" className="text-white text-lg hover:text-blue-300">Testimonios</a>
          <a href="/about" className="text-white text-lg hover:text-blue-300">Productos</a>
          <a href="/services" className="text-white text-lg hover:text-blue-300">Servicios</a>
          <a href="/services" className="text-white text-lg hover:text-blue-300">Documentacion JP</a>
          <a href="/contact" className="text-white text-lg hover:text-blue-300">Contacto</a>
        </div>

        {/* Menú para pantallas pequeñas (hamburguesa) */}
        <div className="md:hidden flex items-center">
          <button className="text-white text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
