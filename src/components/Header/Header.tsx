// src/components/Header.tsx
import React from 'react';
import logo from '/images/logo/logo-jp.jpg'

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4">
      <div className="flex items-center justify-center space-x-4"> {/* Centrado horizontal y vertical */}
        <img src={logo} alt="Logo de la empresa" className="h-12" />
        <span className="bg-gray-600 text-white text-lg md:text-xl px-4 py-2 rounded-lg">
          Somos especialistas en: <span className="font-bold">instalación de aire acondicionado y calefacción</span>
        </span>
      </div>
    </header>
  );
};

export default Header;
