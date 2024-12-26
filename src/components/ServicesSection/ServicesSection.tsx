import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Encabezado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Texto e imágenes de marcas */}
          <div>
            <h2 className="text-3xl font-bold text-black mb-4">
              Especialistas en sistemas de <br />
              <span className="text-blue-500">Aire Acondicionado y</span> <span className="text-blue-700">Ventilación Mecánica</span>
            </h2>
            <p className="text-gray-600">
              Somos Friotemp, <span className="font-semibold">empresa de aires acondicionados y ventilación mecánica.</span> Con 36 años en el Perú, brindando soluciones integrales de acondicionamiento de aire y sistemas de ventilación.
            </p>
            <div className="flex justify-start space-x-6 mt-6">
              <img src="/images/logo/daikin.png" alt="Daikin" className="h-12" />
              <img src="/images/logo/lg.png" alt="LG" className="h-12" />
              <img src="/images/logo/samsung.jpg" alt="Samsung" className="h-12" />
            </div>
          </div>

          {/* Imágenes de servicios principales */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/services/instalacion.png"
                alt="Instalación"
                className="w-full h-32 object-cover rounded-lg"
              />
              <h3 className="text-sm font-bold text-blue-500 mt-2">INSTALACIÓN</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/services/mantenimiento.png"
                alt="Proyectos"
                className="w-full h-32 object-cover rounded-lg"
              />
              <h3 className="text-sm font-bold text-blue-500 mt-2">PROYECTOS</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <img
                src="/images/services/proyectos.png"
                alt="Mantenimiento"
                className="w-full h-32 object-cover rounded-lg"
              />
              <h3 className="text-sm font-bold text-blue-500 mt-2">MANTENIMIENTO</h3>
            </div>
          </div>
        </div>

        {/* Servicios Profesionales y Distribuidores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div>
            <h4 className="text-lg font-bold text-black mb-4">Servicios profesionales</h4>
            <p className="text-gray-600">
              Ofrecemos soluciones integrales de Aire Acondicionado y Ventilación Mecánica. Desde el diseño de ingeniería
              hasta la instalación y el mantenimiento, para satisfacer tus necesidades.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded mt-6 hover:bg-blue-600">
              NUESTROS SERVICIOS
            </button>
          </div>
          <div>
            <h4 className="text-lg font-bold text-black mb-4">Distribuidores</h4>
            <p className="text-gray-600">
              Distribuidores líderes de aire acondicionado: YORK, LG y Samsung. Con equipos como Split Pared, Piso Techo,
              Split Ducto, VRF, Paquete, Fan Coils, Unidades Manejadoras de Aire y Chillers.
            </p>
            <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded mt-6 hover:bg-blue-100">
              NUESTROS EQUIPOS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
