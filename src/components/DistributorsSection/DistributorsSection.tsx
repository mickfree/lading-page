import React from 'react';

const DistributorsSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Título y descripción */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700">
            Distribuidores <span className="text-blue-500">York en Perú</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Somos distribuidores de la marca YORK, el más grande fabricante en el mundo de equipos tipo: Split
            Decorativo, Mini Split, Split ducto, VRF, Paquete o Central, Fan Coils, Unidades Manejadoras de Aire y
            Chillers para Sistemas Inteligentes.
          </p>
        </div>

        {/* Logos de marcas */}
        <div className="flex flex-wrap justify-center items-center space-x-8">
          <img src="/images/logo/daikin.png" alt="York" className="h-12" />
          <img src="/images/logo/daikin.png" alt="LG" className="h-12" />
          <img src="/images/logo/daikin.png" alt="Samsung" className="h-12" />
          <img src="/images/logo/daikin.png" alt="Coldpoint" className="h-12" />
        </div>
      </div>
    </section>
  );
};

export default DistributorsSection;

