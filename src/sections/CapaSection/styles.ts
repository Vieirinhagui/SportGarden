import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  height: calc(100vh - 130px);
  padding-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  background-image: url("capa.png");
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    // Dispositivos médios (tablets)
    height: calc(100vh - 244px);
    padding-top: 7rem;
  }
  @media (max-width: 1024px) {
  }
  @media (min-width: 1200px) {
    // Dispositivos extra grandes (telas wide)
    height: calc(100vh - 210px);
  }
`;

export const Title = styled.span`
  width: 100vw;
  padding: 20px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    // Dispositivos médios (tablets)
    font-size: 50px;
  }
  @media (min-width: 1200px) {
    // Dispositivos extra grandes (telas wide)
    width: 100vw;
    font-size: 60px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 70px;
  }
`;
export const Paragraph = styled.span`
  width: 100vw;
  padding: 20px;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  color: white;
  margin-top: 1rem;

  @media (min-width: 768px) {
    // Dispositivos médios (tablets)
  }
  @media (max-width: 1024px) {
  }
  @media (min-width: 1200px) {
    // Dispositivos extra grandes (telas wide)
    width: 70vw;
  }
  @media screen and (min-width: 1440px) {
    font-size: 70px;
    font-size: 26px;
  }
`;
