import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  height: calc(50vh - 130px);
  position: relative;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  @media (min-width: 768px) {
    height: calc(100vh - 244px);
  }
  @media (min-width: 1200px) {
    height: calc(100vh - 210px);
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
    /* padding-top: 7rem; */
  }
  @media (min-width: 1200px) {
    height: calc(100vh - 210px);
  }
`;

export const Title = styled.span`
  width: 100vw;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (min-width: 1200px) {
    font-size: 60px;
  }
  @media (min-width: 1440px) {
    font-size: 70px;
  }
`;

export const Paragraph = styled.span`
  width: 100vw;
  padding: 20px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: white;
  margin-top: 1rem;

  @media (min-width: 1200px) {
    width: 70vw;
    font-size: 20px;
  }
  @media (min-width: 1440px) {
    font-size: 26px;
  }
`;
