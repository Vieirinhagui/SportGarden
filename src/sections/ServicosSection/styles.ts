import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  padding: 4rem 1.25rem;
  box-sizing: border-box;

  @media (min-width: 1440px) {
    // Dispositivos extra grandes (telas wide)
    padding: 4rem 12rem;
  }
  /* @media (min-width: 768px) {
    // Dispositivos médios (tablets)
    background-color: black;

    max-width: 720px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    // Dispositivos grandes (desktops)
    background-color: purple;

    max-width: 960px;
  }

  @media (min-width: 1200px) {
    // Dispositivos extra grandes (telas wide)
    background-color: green;
    max-width: 1340px;
  } */
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 768px) {
    // Dispositivos médios (tablets)
  }

  @media (min-width: 1024px) {
    // Dispositivos grandes (desktops)
  }

  @media (min-width: 1200px) {
    // Dispositivos extra grandes (telas wide)
    flex-direction: row;
  }
  /* @media (min-width: 768px) {
    // Dispositivos médios (tablets)
  }

  @media (min-width: 1024px) {
    // Dispositivos grandes (desktops)
  }

  @media (min-width: 1200px) {
    // Dispositivos extra grandes (telas wide)
  } */
`;

export const ContainerLeft = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    // Dispositivos médios (tablets)
  }

  @media (min-width: 1024px) {
    // Dispositivos grandes (desktops)
    width: 40%;
  }

  @media (min-width: 1200px) {
    // Dispositivos extra grandes (telas wide)
  }
  @media (min-width: 1440px) {
    // Dispositivos extra grandes (telas wide)
    width: 30%;
  }
`;

export const ContainerRight = styled.div`
  max-width: 100%;
  height: 100%;

  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    // Dispositivos médios (tablets)
  }

  @media (min-width: 1024px) {
    // Dispositivos grandes (desktops)
  }

  @media (min-width: 1200px) {
    // Dispositivos extra grandes (telas wide)
    max-width: 60%;
  }
  @media (min-width: 1440px) {
    // Dispositivos extra grandes (telas wide)
    max-width: 60%;
  }
`;

export const InfosContainer = styled.div`
  width: 75%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.span`
  width: 100%;
  font-size: 30px;
  color: #00632c;
  font-weight: bold;

  @media (min-width: 768px) {
    // Dispositivos médios (tablets)
    font-size: 50px;
  }
`;
export const Paragraph = styled.p`
  width: 100%;
  font-size: 16px;
  color: black;
  text-align: left;
  @media (min-width: 768px) {
    // Dispositivos médios (tablets)
    font-size: 20px;
  }
`;

export const Button = styled.button`
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: #00632c;
  padding: 8px 24px;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #00632c;
    border: 1px solid #00632c;
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) {
    // Dispositivos médios (tablets)
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1200px) {
    // Dispositivos extra grandes (telas wide)
    align-items: start;
  }
`;

export const Images = styled.img`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    // Dispositivos médios (tablets)
    width: 45%;
    height: 45%;
  }

  @media (min-width: 1024px) {
    // Dispositivos grandes (desktops)
  }

  @media (min-width: 1200px) {
    // Dispositivos extra grandes (telas wide)
    width: 30%;
  }
  @media (min-width: 1440px) {
    // Dispositivos extra grandes (telas wide)
    width: 24%;
  }
  /* 

  @media (min-width: 1024px) {
    // Dispositivos grandes (desktops)
  }

  @media (min-width: 1200px) {
    // Dispositivos extra grandes (telas wide)
  } */
`;

export const CardContainer = styled.div`
  width: 100%;
  height: 160px;
  background-color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 28px;

  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
