import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  height: calc(50vh - 130px);
  position: relative;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  z-index: 1;
  @media (min-width: 768px) {
    height: calc(100vh - 244px);
  }
  @media (min-width: 1200px) {
    height: calc(100vh - 370px);
  }
`;
export const Onda = styled.img`
  width: 100vw;
  height: 50px;
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  @media (min-width: 1280px) {
    height: 100px;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -15%);

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const ImagemCapa = styled.img`
  width: 100vw;
  height: calc(50vh - 130px);
  object-fit: cover;
  @media (min-width: 768px) {
    height: calc(100vh - 244px);
  }
  @media (min-width: 1200px) {
    height: calc(100vh - 370px);
  }
`;

export const Title = styled.span`
  width: 100vw;
  padding-top: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (min-width: 1200px) {
    width: 50vw;
    font-size: 50px;
  }
  @media (min-width: 1440px) {
    width: 40vw;
    font-size: 60px;
  }
`;

export const Paragraph = styled.span`
  width: 100vw;
  padding: 8px 20px 0;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: white;

  @media (min-width: 1200px) {
    width: 40vw;
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    width: 35vw;
    font-size: 22px;
  }
`;
