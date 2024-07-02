import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: auto;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
  .swiper-pagination-bullet-active {
    background-color: #00632c !important;
  }

  @media (max-width: 768px) {
    .swiper-slide {
      width: 70%;
    }
  }

  @media (max-width: 1024px) {
    .swiper-slide {
      width: 50%;
    }
  }

  @media (min-width: 1200px) {
    .swiper-slide {
      width: 40%;
    }
  }

  @media (min-width: 1440px) {
    .swiper-slide {
      width: 50%;
    }
  }
`;
