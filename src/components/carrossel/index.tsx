import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { CarouselContainer } from "./styles";

interface CarrosselEstruturaProps {
  fotos: string[];
}

export const CarrosselEstrutura: React.FC<CarrosselEstruturaProps> = ({
  fotos,
}) => {
  return (
    <CarouselContainer>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        initialSlide={2}
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
