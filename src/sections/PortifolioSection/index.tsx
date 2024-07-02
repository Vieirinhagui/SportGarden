import { CarrosselEstrutura } from "../../components/Carrossel";
import { CarrosselMobile } from "../../components/Carrossel-Mobile";
import { Button, Container, SectionContainer, Title } from "./styles";

export const PortifolioSection = () => {
  const width = window.innerWidth;

  const fotosMobile = [
    "teste3.png",
    "teste3.png",
    "teste3.png",
    "teste3.png",
    "teste3.png",
  ];
  const fotosDesktop = [
    "teste.png",
    "teste.png",
    "teste.png",
    "teste.png",
    "teste.png",
  ];
  return (
    <SectionContainer>
      <Container>
        <Title>Portifólio</Title>
        {width > 768 && <CarrosselEstrutura fotos={fotosDesktop} />}
        {width < 768 && <CarrosselMobile fotos={fotosMobile} />}
        <Button>VER MAIS</Button>
      </Container>
    </SectionContainer>
  );
};
