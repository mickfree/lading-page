import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-lg mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información de contacto */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Contáctate con <span className="text-black">Friotemp</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Somos una empresa especializada en la <span className="font-semibold">venta de equipos y servicios de aire acondicionado y ventilación.</span> En Ingenieros Friotemp, nos dedicamos a brindar soluciones de confort para su hogar y empresas en Lima y Perú. Distribuidores York, LG, Samsung, Midea, ColdPoint y Alfano.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">📞</span>
              <p className="text-gray-600">Teléfono: (+51) 01 461 2277</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✉️</span>
              <p className="text-gray-600">Email: ventas@friotemp.com.pe</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">📍</span>
              <p className="text-gray-600">Calle José Mariano Arce N.º 493, Pueblo Libre - Lima - Perú</p>
            </li>
          </ul>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-center text-black mb-6">
            Escríbenos tu <span className="text-blue-700">consulta ahora</span>
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre y Apellido"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Tipo de servicio</option>
                <option>Instalación</option>
                <option>Mantenimiento</option>
                <option>Otro</option>
              </select>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Ambiente a climatizar"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Tamaño del ambiente m2"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Mensaje"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
            <p className="text-sm text-gray-500">Todos los campos son obligatorios</p>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              ENVIAR MENSAJE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

