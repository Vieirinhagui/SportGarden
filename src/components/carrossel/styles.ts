import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  .swiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 50%;
    height: auto;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;
