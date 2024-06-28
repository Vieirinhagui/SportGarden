import styled from "styled-components";

export const CapaSectionContainer = styled.section`
  width: 100vw;
  height: calc(100vh - 200px);
  /* background-color: black; */
  margin-top: 200px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;

  background-image: url("capa.png");
  background-size: cover; /* Ajusta a imagem para cobrir todo o espaço */
  background-position: top; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita a repetição da imagem */
`;

export const Title = styled.span`
  width: 50vw;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-top: 128px;
`;
export const Paragraph = styled.span`
  width: 40vw;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  color: white;
  margin-top: 1rem;
`;
