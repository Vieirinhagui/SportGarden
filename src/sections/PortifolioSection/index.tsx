import { CarrosselEstrutura } from "../../components/Carrossel";
import { CarrosselMobile } from "../../components/Carrossel-Mobile";
import { Button, Container, SectionContainer, Title } from "./styles";

export const PortifolioSection = () => {
  const width = window.innerWidth;

  const fotosMobile = [
    "images/portifolio/2.jpg",
    "images/portifolio/45.jpg",
    "images/portifolio/5.jpg",
    "images/portifolio/21.jpg",
    "images/portifolio/39.jpg",
    "images/portifolio/40.jpg",
    "images/portifolio/44.jpg",
  ];
  const fotosDesktop = [
    "images/portifolio/2.jpg",
    "images/portifolio/45.jpg",
    "images/portifolio/5.jpg",
    "images/portifolio/21.jpg",
    "images/portifolio/39.jpg",
    "images/portifolio/40.jpg",
    "images/portifolio/44.jpg",
  ];
  return (
    <SectionContainer>
      <Container>
        <Title>Portifólio</Title>
        {width > 768 && <CarrosselEstrutura fotos={fotosDesktop} />}
        {width < 768 && <CarrosselMobile fotos={fotosMobile} />}
        <Button to="/portifolio">VER MAIS</Button>
      </Container>
    </SectionContainer>
  );
};
