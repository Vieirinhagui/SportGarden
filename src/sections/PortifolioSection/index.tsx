import { CarrosselEstrutura } from "../../components/Carrossel";
import { Button, Container, SectionContainer, Title } from "./styles";

export const PortifolioSection = () => {
  const fotos = [
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
        <CarrosselEstrutura fotos={fotos} />
        <Button>VER MAIS</Button>
      </Container>
    </SectionContainer>
  );
};
