import React, { useState, useEffect } from 'react';

interface SlideData {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const SliderComponent: React.FC = () => {
  const slides: SlideData[] = [
    {
      image: "/images/slider/banner-aire-acondicionado.avif",
      title: "Aire Acondicionado",
      subtitle: "Máximo confort para tu hogar",
      description: "Descubre nuestra línea premium de equipos"
    },
    {
      image: "/images/slider/banner-aire-acondicionado.avif",
      title: "Instalación Profesional",
      subtitle: "Servicio garantizado",
      description: "Técnicos certificados a tu servicio"
    },
    {
      image: "/images/slider/banner-aire-acondicionado.avif",
      title: "Mantenimiento",
      subtitle: "Cuida tu inversión",
      description: "Planes de mantenimiento preventivo"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden bg-gray-100">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-1000 transform ${
            currentSlide === index 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full'
          }`}
        >
          {/* Imagen de fondo */}
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay y contenido */}
          <div className="absolute inset-0 bg-black/40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
              <h2 
                className={`
                  text-4xl font-bold mb-4 
                  transition-all duration-1000 delay-300
                  ${currentSlide === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-10'
                  }
                `}
              >
                {slide.title}
              </h2>
              
              <h3 
                className={`
                  text-2xl mb-4
                  transition-all duration-1000 delay-500
                  ${currentSlide === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                  }
                `}
              >
                {slide.subtitle}
              </h3>
              
              <p 
                className={`
                  text-lg max-w-2xl mx-auto
                  transition-all duration-1000 delay-700
                  ${currentSlide === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                  }
                `}
              >
                {slide.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Indicadores de navegación */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${currentSlide === index 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/75'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;