import { CarrosselEstrutura } from "../../components/carrossel";
import { PortifolioSectionContainer, StyledButton, TitleSpan } from "./styles";

export const PortifolioSection = () => {
  const fotos = [
    "teste.png",
    "teste.png",
    "teste.png",
    "teste.png",
    "teste.png",
  ];
  return (
    <PortifolioSectionContainer>
      <TitleSpan>Portifólio</TitleSpan>
      <CarrosselEstrutura fotos={fotos} />
      <StyledButton>VER MAIS</StyledButton>
    </PortifolioSectionContainer>
  );
};
