// src/components/Slider.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Slider: React.FC = () => {
  return (
    <div className="w-full mt-4">
      <Swiper
        spaceBetween={50} // Espacio entre las imágenes
        slidesPerView={1} // Cantidad de imágenes visibles al mismo tiempo
        loop={true} // Hacer el slider cíclico
        autoplay={{ delay: 3000 }} // Autoplay con intervalo de 3 segundos
      >
        <SwiperSlide>
          <img src="/images/slider/image1.jpeg" alt="Imagen 1" className="w-full h-80  object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider/image2.jpeg" alt="Imagen 1" className="w-full h-80 object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slider/image3.jpeg" alt="Imagen 1" className="w-full h-80 object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
