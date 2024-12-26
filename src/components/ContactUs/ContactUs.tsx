import React, { useState } from 'react';

interface FormData {
  nombreApellido: string;
  tipoServicio: string;
  email: string;
  ambiente: string;
  telefono: string;
  tamanoAmbiente: string;
  mensaje: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombreApellido: '',
    tipoServicio: '',
    email: '',
    ambiente: '',
    telefono: '',
    tamanoAmbiente: '',
    mensaje: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEBFORMS_ACCESS_KEY,
          ...formData,
          subject: `Nueva consulta de ${formData.nombreApellido} - ${formData.tipoServicio}`
        })
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: 'success',
          message: '¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.'
        });
        
        // Limpiar el formulario
        setFormData({
          nombreApellido: '',
          tipoServicio: '',
          email: '',
          ambiente: '',
          telefono: '',
          tamanoAmbiente: '',
          mensaje: ''
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }

    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-lg mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Información de contacto */}
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Contáctate con <span className="text-black">JP Ingeniería y Servicios</span>
          </h2>
          <p className="text-gray-600 mb-6">
            Somos una empresa especializada en la <span className="font-semibold">venta de equipos y servicios de aire acondicionado y ventilación.</span> En Ingenieros Friotemp, nos dedicamos a brindar soluciones de confort para su hogar y empresas en Lima y Perú.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">📞</span>
              <p className="text-gray-600">Teléfono: 977-727-060</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">✉️</span>
              <p className="text-gray-600">Email: ventas@jpingenieria.pe</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-blue-500 text-xl">📍</span>
              <p className="text-gray-600">Jr. Áncash 302 Alto Libertad (Paralela al Mcdo.del Pueblo)</p>
            </li>
          </ul>
        </div>

        {/* Formulario de contacto */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-center text-black mb-6">
            Escríbenos tu <span className="text-blue-700">consulta ahora</span>
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitStatus.type && (
              <div className={`p-4 rounded ${
                submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="nombreApellido"
                value={formData.nombreApellido}
                onChange={handleChange}
                placeholder="Nombre y Apellido"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="tipoServicio"
                value={formData.tipoServicio}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Tipo de servicio</option>
                <option value="Instalación">Instalación</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="Otro">Otro</option>
              </select>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="ambiente"
                value={formData.ambiente}
                onChange={handleChange}
                placeholder="Ambiente a climatizar"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="tamanoAmbiente"
                value={formData.tamanoAmbiente}
                onChange={handleChange}
                placeholder="Tamaño del ambiente m2"
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Mensaje"
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            ></textarea>
            <p className="text-sm text-gray-500">Todos los campos son obligatorios</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-500 text-white py-3 rounded-lg transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
              }`}
            >
              {isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;