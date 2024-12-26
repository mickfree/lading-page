import React from 'react';

const ServicesList: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-lg mx-auto px-6">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Nuestros <span className="text-blue-500">Servicios</span>
        </h2>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tarjeta de Servicio */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img src="/images/services/tools.png" alt="Instalación" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-blue-700 mb-2">Instalación</h3>
            <p className="text-gray-600">
              Nos encargamos de la instalación de su equipo, desde la operación y el mantenimiento del sistema integral de equipos residenciales, comerciales e industriales.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img src="/images/services/employee.png" alt="Mantenimiento" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-blue-700 mb-2">Mantenimiento</h3>
            <p className="text-gray-600">
              El mantenimiento debe realizarse para evitar enfermedades, alto consumo eléctrico, reparaciones costosas, bajo rendimiento del equipo.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img src="/images/services/calefaction.png" alt="Proyectos" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-blue-700 mb-2">Elaboración y Ejecución de Proyectos</h3>
            <p className="text-gray-600">
              Desarrollamos proyectos de aires acondicionados y ventilación, con profesionales de experiencia en cada uno de los temas.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img src="/images/services/air-conditioner.png" alt="Venta de Equipos" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-blue-700 mb-2">Venta de Equipos York, Daikin y Trane</h3>
            <p className="text-gray-600">
              Tenemos los mejores equipos residenciales, comerciales e industriales. Comienza tu proyecto con nosotros.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img src="/images/services/propeller-conditioner.avif" alt="Presurización de Escaleras" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-blue-700 mb-2">Presurización de Escaleras</h3>
            <p className="text-gray-600">
              En caso de incendio en un edificio, un ventilador de escaleras presurizadas utiliza aire exterior limpio para presurizar el aire en las escaleras.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <img src="/images/services/propeller.png" alt="Extracción de Monóxido" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-blue-700 mb-2">Extracción de Monóxido</h3>
            <p className="text-gray-600">
              La extracción de monóxido de carbono (CO₂), de las Playas de Estacionamientos, tiene como objetivo garantizar la no acumulación de monóxido.
            </p>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mt-12">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            DESCARGUE NUESTRO BROCHURE
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg hover:bg-blue-100">
            ¿NECESITAS AYUDA? ¡CONTÁCTANOS YA!
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

