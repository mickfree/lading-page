// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-custom-header-gray p-1">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <p className="text-white text-sm md:text-base">
            Somos especialistas en:{" "}
            <span className="font-bold">instalación de aire acondicionado y calefacción</span>
          </p>
        </div>

        <div className="flex items-center space-x-4 text-white">
          <p className="text-xs md:text-sm">JP Ingenieria y Servicios</p>

        </div>
      </div>
    </header>
  );
};

export default Header;
