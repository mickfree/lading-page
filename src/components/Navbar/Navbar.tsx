import React from 'react';
import logo from '/images/logo/logo-jp.jpg';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white py-3 sticky top-0 z-50 shadow">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between px-6">
        <img src={logo} alt="Logo" className="w-[185px] h-[100px] mt-3" />

        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-black text-sm font-semibold hover:text-blue-500">
            Inicio
          </a>
          <a href="/about" className="text-black text-sm font-semibold hover:text-blue-500">
            Nosotros
          </a>
          <a href="/services" className="text-black text-sm font-semibold hover:text-blue-500">
            Servicios
          </a>
          <a href="/products" className="text-black text-sm font-semibold hover:text-blue-500">
            Productos
          </a>
          <a href="/brands" className="text-black text-sm font-semibold hover:text-blue-500">
            Marcas
          </a>
          <a href="/projects" className="text-black text-sm font-semibold hover:text-blue-500">
            Proyectos
          </a>
          <a href="/blog" className="text-black text-sm font-semibold hover:text-blue-500">
            Blog
          </a>
          <a href="/contact" className="text-black text-sm font-semibold hover:text-blue-500">
            Contáctanos
          </a>
        </div>

        {/* Menú para pantallas pequeñas (hamburguesa) */}
        <div className="md:hidden flex items-center">
          <button className="text-black text-2xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
