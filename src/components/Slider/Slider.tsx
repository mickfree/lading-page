import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Slider: React.FC = () => {
  return (
    <div className="bg-gray-100 w-full">
      <Swiper
        spaceBetween={50} // Espacio entre las imágenes
        slidesPerView={1} // Cantidad de imágenes visibles al mismo tiempo
        loop={true} // Hacer el slider cíclico
        autoplay={{ delay: 3000 }} // Autoplay con intervalo de 3 segundos
      >
        <SwiperSlide>
          <img
            src="/images/slider/banner-aire-acondicionado.avif"
            alt="Imagen 1"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slider/banner-aire-acondicionado.avif"
            alt="Imagen 2"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/slider/banner-aire-acondicionado.avif"
            alt="Imagen 3"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
