import { Link } from "react-router-dom";
import styled from "styled-components";

const colors = {
  background: "#00632C",
  link: "white",
  linkHover: "#838383",
  barBackground: "#fff",
};
const buttonDimensions = {
  width: "30px",
  height: "27px",
  barHeight: "5px",
  barWidth: "30px",
};
export const NavBarSection = styled.nav`
  display: flex; // Flexbox
  flex-direction: column;
`;
export const NavBarContainer = styled.div`
  display: flex; // Flexbox
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100vw; // Dimensões
  height: 130px;
  padding: 16px 0;

  background-color: ${colors.background}; // Cores e fonte
  font-size: 18px;

  a {
    font-weight: bold; // Estilo dos links
    text-decoration: none;
    color: ${colors.link};
    margin: 0 16px;
    cursor: pointer;

    &:hover,
    &.active {
      color: ${colors.linkHover};
      border-bottom: 2px solid ${colors.linkHover};
    }
  }
  @media (min-width: 768px) {
    height: 176px;
  }
`;

export const Logo = styled.img`
  width: 50vw;
  height: auto;
  @media (min-width: 768px) {
    width: 40vw;
  }
  @media (min-width: 1200px) {
    width: 30vw;
  }
  @media screen and (min-width: 1440px) {
    width: 20vw;
  }
`;

export const MenuMobile = styled.div`
  position: fixed; // Posicionamento
  top: 0;
  left: 0;
  z-index: 10;

  display: flex; // Flexbox
  flex-direction: column;
  align-items: start;

  width: 100vw; // Dimensões
  height: 100vh;
  overflow: hidden; // Escondendo overflow
  padding-top: 10rem; // Espaçamento superior
  background-color: ${colors.background}; // Cor de fundo

  div {
    display: flex; // Flexbox para itens internos
    flex-direction: column;
    align-items: start;
    gap: 8px; // Espaçamento entre itens
    font-size: 24px; // Tamanho da fonte
    margin: 0 auto; // Centralizando horizontalmente
  }
`;

interface HamburguerButtonProps {
  isOpen: boolean;
}

export const HamburguerButton = styled.button<HamburguerButtonProps>`
  background: transparent; // Estilo do botão
  border: none;
  cursor: pointer;

  display: flex; // Configurações do flexbox
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: ${buttonDimensions.width}; // Dimensões do botão
  height: ${buttonDimensions.height};
  padding: 0;
  z-index: 11; // Posicionamento na stack de camadas

  div {
    width: ${buttonDimensions.barWidth}; // Estilo das barras
    height: ${buttonDimensions.barHeight};
    background: ${colors.barBackground};
    border-radius: 50px;
    margin: 3px 0;
    transition: transform 0.5s ease; // Transição para as transformações

    &:nth-child(1) {
      transition: transform 0.5s ease; // Transição para as transformações

      // Transformações condicionais
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(7px, 6px)" : "none"};
    }
    &:nth-child(2) {
      transition: transform 0.5s ease; // Transição para as transformações

      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    &:nth-child(3) {
      transition: transform 0.5s ease; // Transição para as transformações

      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(6px, -6px)" : "none"};
    }
  }
`;

export const ButtonsNavBar = styled.div`
  background-color: #1e1e1e;
  width: 100vw;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 1rem;

  padding: 8px 0;
  box-sizing: border-box;

  a {
    font-size: 20px;
    font-weight: 400;
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: #00632c;
    transition: 0.2s;
  }
`;

export const IconsBackGround = styled.div`
  width: 38px;
  height: 38px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const SpanIcons = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
export const ParagraphIcons = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: white;
`;
export const DivIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 6rem;

  @media screen and (min-width: 768px) {
    align-items: start;
    flex-direction: column;
    gap: 1rem;
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

export const StyledLink = styled(Link)``;
