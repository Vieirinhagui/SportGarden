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
  display: flex;
  flex-direction: column;
`;
export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100vw;
  height: 100px;
  padding: 16px 0;

  background-color: ${colors.background};
  font-size: 18px;
  @media (min-width: 768px) {
    height: 145px;
  }
  @media (min-width: 1280px) {
    height: 115px;
  }
`;

export const StyledNavLink = styled(Link)`
  width: 100%;
  font-weight: bold;
  text-decoration: none;
  color: ${colors.link};
  cursor: pointer;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #b5b5b5;

  .border-none {
    border: 0px;
  }
`;

export const Logo = styled.img`
  width: 50vw;
  height: auto;
  @media (min-width: 768px) {
    width: 40vw;
  }
  @media (min-width: 1200px) {
    width: 18vw;
    margin-left: -7px;
  }
  @media screen and (min-width: 1440px) {
    width: 15vw;
    margin-left: 0;
  }
`;

export const MenuMobile = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: ${colors.background};
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding-top: 10rem;
`;

export const MenuMobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  font-size: 24px;
  margin: 0 auto;
`;

export const RedesContainerMobile = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 8px;

  .alignRight {
    justify-content: start;
  }
`;
interface HamburguerButtonProps {
  isOpen: boolean;
}

export const HamburguerButton = styled.button<HamburguerButtonProps>`
  background: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: ${buttonDimensions.width};
  height: ${buttonDimensions.height};
  padding: 0;
  z-index: 11;

  div {
    width: ${buttonDimensions.barWidth};
    height: ${buttonDimensions.barHeight};
    background: ${colors.barBackground};
    border-radius: 50px;
    margin: 3px 0;
    transition: transform 0.5s ease;

    &:nth-child(1) {
      transition: transform 0.5s ease;

      // Transformações condicionais
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(7px, 6px)" : "none"};
    }
    &:nth-child(2) {
      transition: transform 0.5s ease;

      opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
    }
    &:nth-child(3) {
      transition: transform 0.5s ease;

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
  @media screen and (min-width: 1280px) {
    a {
      font-size: 16px;
    }
  }
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
