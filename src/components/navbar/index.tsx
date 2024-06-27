import { useCallback, useEffect, useState } from "react";
import {
  ButtonsNavBar,
  DivIcons,
  HamburguerButton,
  IconsBackGround,
  IconsContainer,
  Logo,
  MenuMobile,
  NavBarContainer,
  NavBarSection,
  ParagraphIcons,
  SpanIcons,
} from "./styles";
import WhatsappLogo from "../../../node_modules/phosphor-react/src/icons/WhatsappLogo";
import { Mail } from "lucide-react";

const NavBar = () => {
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
        <DivIcons onClick={toggleIcon}>
          <IconsBackGround>
            <WhatsappLogo size={32} color={"#00632C"} />
          </IconsBackGround>
          <div>
            <SpanIcons>(61) 9 9970-6589</SpanIcons>
            <ParagraphIcons>Whatsapp</ParagraphIcons>
          </div>
        </DivIcons>
        <DivIcons onClick={toggleIcon}>
          <IconsBackGround>
            <Mail size={28} color={"#00632C"} />
          </IconsBackGround>
          <div>
            <SpanIcons>contato@sportgarden.com.br</SpanIcons>
            <ParagraphIcons>E-mail</ParagraphIcons>
          </div>
        </DivIcons>
      </IconsContainer>
    ),
    [toggleIcon]
  );
  const MenuLinksMobile = useCallback(
    () => (
      <>
        <a href="#home" onClick={toggleIcon}>
          Home
        </a>
        <a href="#procedimentos" onClick={toggleIcon}>
          Procedimentos
        </a>
        <a href="#avaliacoes" onClick={toggleIcon}>
          Avaliações
        </a>
        <a href="#contato" onClick={toggleIcon}>
          Contato
        </a>
      </>
    ),
    [toggleIcon]
  );
  return (
    <NavBarSection>
      <NavBarContainer>
        <Logo src="/logotipo.png" alt="Logo" />
        {isMobile ? (
          <>
            <HamburguerButton isOpen={isMenuOpen} onClick={toggleIcon}>
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
      {!isMobile && (
        <ButtonsNavBar>
          <a href="">Quadras de Tênis</a>
          <a href="">Quadras de Areia</a>
          <a href="">Quadras Poliesportivas</a>
          <a href="">Campos de Futebol</a>
          <a href="">Grama Sintética</a>
          <a href="">Quadras de Pickleball</a>
        </ButtonsNavBar>
      )}
    </NavBarSection>
  );
};

export default NavBar;
