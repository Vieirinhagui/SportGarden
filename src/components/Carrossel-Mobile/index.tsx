import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { CarouselContainer } from "./styles";

interface CarrosselEstruturaProps {
  fotos: string[];
}

export const CarrosselMobile: React.FC<CarrosselEstruturaProps> = ({
  fotos,
}) => {
  return (
    <CarouselContainer>
      <Swiper
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        pagination={true}
        modules={[Pagination]}
        initialSlide={1}
        className="swiper-container"
      >
        {fotos.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Imagem ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  );
};
