import { useCallback, useEffect, useState } from "react";
import {
  ButtonsNavBar,
  HamburguerButton,
  IconsContainer,
  Logo,
  MenuMobile,
  NavBarContainer,
  NavBarSection,
} from "./styles";
import { Link, NavLink } from "react-router-dom";
import { ContatoIcons } from "../ContatoIcons";
interface NavBarProps {
  isActive: boolean;
}
const NavBar = ({ isActive }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  // Atualiza o estado isMobile quando a janela é redimensionada
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 767);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Alterna o estado do menu
  const toggleIcon = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Componente de links de menu, criado somente quando toggleIcon é alterado
  const MenuLinksDesktop = useCallback(
    () => (
      <IconsContainer>
        <ContatoIcons
          onClick={toggleIcon}
          endereco="(61) 9 9970-6589"
          href="https://wa.me/5561999706589"
          type="WhatsApp"
        />
        <ContatoIcons
          onClick={toggleIcon}
          endereco="contato@sportgarden.com.br"
          href="mailto:contato@sportgarden.com.br"
          type="E-mail"
        />
      </IconsContainer>
    ),
    [toggleIcon]
  );
  const MenuLinksMobile = useCallback(
    () => (
      <>
        <NavLink to="/portifolio?filter=todas" onClick={toggleIcon}>
          Quadras de Tênis
        </NavLink>
        <NavLink to="/portifolio?filter=areia" onClick={toggleIcon}>
          Quadras de Areia
        </NavLink>
        <NavLink to="/portifolio?filter=poliesportiva" onClick={toggleIcon}>
          Quadras Poliesportivas
        </NavLink>
        <NavLink to="/portifolio?filter=futebol" onClick={toggleIcon}>
          Campos de Futebol
        </NavLink>
        <NavLink to="/portifolio?filter=grama" onClick={toggleIcon}>
          Grama Sintética
        </NavLink>
        <NavLink to="/portifolio?filter=pickleball" onClick={toggleIcon}>
          Quadras de Pickleball
        </NavLink>
      </>
    ),
    [toggleIcon]
  );
  return (
    <NavBarSection>
      <NavBarContainer>
        <Link to="/">
          <Logo src="/logotipo.png" alt="Logo" />
        </Link>
        {isMobile ? (
          <>
            <HamburguerButton
              isOpen={isMenuOpen}
              onClick={toggleIcon}
              title="Menu Hamburguer"
            >
              <div />
              <div />
              <div />
            </HamburguerButton>
            {isMenuOpen && (
              <MenuMobile>
                <div>{MenuLinksMobile()}</div>
              </MenuMobile>
            )}
          </>
        ) : (
          <div>{MenuLinksDesktop()}</div>
        )}
      </NavBarContainer>
      {!isMobile && isActive && (
        <ButtonsNavBar>
          <NavLink to="/portifolio?filter=todas">Quadras de Tênis</NavLink>
          <NavLink to="/portifolio?filter=areia">Quadras de Areia</NavLink>
          <NavLink to="/portifolio?filter=poliesportiva">
            Quadras Poliesportivas
          </NavLink>
          <NavLink to="/portifolio?filter=futebol">Campos de Futebol</NavLink>
          <NavLink to="/portifolio?filter=grama">Grama Sintética</NavLink>
          <NavLink to="/portifolio?filter=pickeball">
            Quadras de Pickleball
          </NavLink>
        </ButtonsNavBar>
      )}
    </NavBarSection>
  );
};

export default NavBar;
