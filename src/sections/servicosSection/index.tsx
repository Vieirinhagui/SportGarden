import { Card } from "../../components/card";
import {
  ImagesContainer,
  InfosContainer,
  ServicosContainer,
  ServicosSectionContainer,
  StyledButton,
  StyledParagraph,
  TitleSpan,
} from "./styles";
export const ServicosSection = () => {
  return (
    <ServicosSectionContainer>
      <ServicosContainer>
        <div>
          <Card
            imgUrl="quadra_icon.png"
            title="Construção de Quadras"
            text="Fazemos desde o projeto até o acabamento, acompanhamos de perto toda a execução da obra e deixamos sua quadra pronta para uso."
          />
          <Card
            imgUrl="rolo_icon.png"
            title="Reforma e Manutenção"
            text="Renovamos e cuidamos da sua quadra. Serviços completos de reforma e manutenção para garantir durabilidade e ótimo desempenho."
          />
          <Card
            imgUrl="mais_icon.png"
            title="Acessórios em Geral"
            text="Temos tudo para completar o seu projeto. Trabalhamos também com cercas, telas, iluminação e cobertura. "
          />
        </div>
        <InfosContainer>
          <div>
            <TitleSpan>Conheça nossos serviços</TitleSpan>
            <StyledParagraph>
              Estamos há mais de 15 anos no mercado de construção de quadras
              esportivas, com obras entregues em todo o Brasil. Nosso
              diferencial é realizar serviços com a mais alta qualidade e
              personalização, de acordo com as necessidades do cliente.
            </StyledParagraph>
          </div>
          <ImagesContainer>
            <img src="Mask group.png" alt="" />
            <img src="Mask group-1.png" alt="" />
            <img src="Mask group-2.png" alt="" />
            <img src="Mask group-3.png" alt="" />
            <img src="Mask group-4.png" alt="" />
            <img src="Mask group-5.png" alt="" />
          </ImagesContainer>
          <StyledButton>VER MAIS</StyledButton>
        </InfosContainer>
      </ServicosContainer>
    </ServicosSectionContainer>
  );
};
