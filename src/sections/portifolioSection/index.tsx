import { CarrosselEstrutura } from "../../components/carrossel";
import { Container, SectionContainer, StyledButton, TitleSpan } from "./styles";

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
        <TitleSpan>Portifólio</TitleSpan>
        <CarrosselEstrutura fotos={fotos} />
        <StyledButton>VER MAIS</StyledButton>
      </Container>
    </SectionContainer>
  );
};
