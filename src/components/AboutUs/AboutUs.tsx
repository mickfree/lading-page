import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Nosotros - JP Ingeniería y Servicios</h2>
          <p className="text-lg md:text-xl">
            Somos una empresa dedicada a ofrecer soluciones innovadoras en el campo de la ingeniería, con más de 10 años de experiencia en la instalación de sistemas de aire acondicionado y calefacción. Nuestro equipo está comprometido con brindar un servicio de alta calidad y un excelente soporte postventa.
          </p>
          <p className="mt-4 text-lg md:text-xl">
            <strong>¿Quiénes somos?</strong><br />
            En JP Ingeniería y Servicios, nos especializamos en la instalación, mantenimiento y reparación de sistemas de climatización, tanto en el ámbito residencial como comercial. Nos enorgullece ser una empresa confiable, que prioriza la satisfacción de nuestros clientes mediante soluciones eficientes y personalizadas.
          </p>
        </div>
      </div>

      {/* Sección "¿Por qué elegirnos?" */}
      <aside className="bg-gray-100 p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-semibold text-blue-500 mb-4">¿Por qué elegirnos?</h2>
        <ul className="list-none space-y-4 text-lg">
          <li><strong className="text-blue-500">Experiencia y Confianza:</strong> Contamos con más de 10 años de experiencia en el sector.</li>
          <li><strong className="text-blue-500">Innovación Constante:</strong> Siempre estamos a la vanguardia de las últimas tecnologías.</li>
          <li><strong className="text-blue-500">Atención Personalizada:</strong> Nos aseguramos de ofrecer un servicio adaptado a tus necesidades.</li>
          <li><strong className="text-blue-500">Compromiso con la Calidad:</strong> Ofrecemos productos y servicios de la más alta calidad.</li>
        </ul>
      </aside>
      {/* Sección Misión y Visión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center hover:scale-105 transform transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-500 mb-4">Misión</h3>
          <p className="text-gray-700">Brindar soluciones innovadoras que impacten positivamente en nuestros clientes, superando sus expectativas y necesidades.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center hover:scale-105 transform transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-500 mb-4">Visión</h3>
          <p className="text-gray-700">Convertirnos en líderes del mercado, siendo reconocidos por nuestra capacidad de innovación, compromiso y calidad en todo lo que hacemos.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
