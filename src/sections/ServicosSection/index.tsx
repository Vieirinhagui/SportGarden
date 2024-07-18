import { useState } from "react";
import {
  Button,
  CardContainer,
  Container,
  ContainerLeft,
  ContainerRight,
  Images,
  ImagesContainer,
  InfosContainer,
  Paragraph,
  SectionContainer,
  Title,
} from "./styles";

export const ServicosSection = () => {
  const [width] = useState(window.innerWidth);
  return (
    <SectionContainer>
      <Container>
        {width < 768 && (
          <InfosContainer>
            <Title>Conheça nossos serviços</Title>
            <Paragraph>
              Estamos há mais de 15 anos no mercado de construção de quadras
              esportivas, com obras entregues em todo o Brasil. Nosso
              diferencial é realizar serviços com a mais alta qualidade e
              personalização, de acordo com as necessidades do cliente.
            </Paragraph>
          </InfosContainer>
        )}
        <ContainerLeft>
          <CardContainer>
            <img src="quadra_icon.png" alt="" />
            <div>
              <p>Construção de Quadras</p>
              <span>
                Fazemos desde o projeto até o acabamento, acompanhamos de perto
                toda a execução da obra e deixamos sua quadra pronta para uso.
              </span>
            </div>
          </CardContainer>
          <CardContainer>
            <img src="rolo_icon.png" alt="" />
            <div>
              <p>Reforma e Manutenção</p>
              <span>
                Renovamos e cuidamos da sua quadra. Serviços completos de
                reforma e manutenção para garantir durabilidade e ótimo
                desempenho.
              </span>
            </div>
          </CardContainer>
          <CardContainer>
            <img src="mais_icon.png" alt="" />
            <div>
              <p>Acessórios em Geral</p>
              <span>
                Temos tudo para completar o seu projeto. Trabalhamos também com
                cercas, telas, iluminação e cobertura.
              </span>
            </div>
          </CardContainer>
        </ContainerLeft>
        <ContainerRight>
          {width > 768 && (
            <>
              <InfosContainer>
                <Title>Conheça nossos serviços</Title>
                <Paragraph>
                  Estamos há mais de 15 anos no mercado de construção de quadras
                  esportivas, com obras entregues em todo o Brasil. Nosso
                  diferencial é realizar serviços com a mais alta qualidade e
                  personalização, de acordo com as necessidades do cliente.
                </Paragraph>
              </InfosContainer>
              <ImagesContainer>
                <Images src="Mask group.png" alt="" />
                <Images src="Mask group-1.png" alt="" />
                <Images src="Mask group-2.png" alt="" />
                <Images src="Mask group-3.png" alt="" />
                <Images src="Mask group-4.png" alt="" />
                <Images src="Mask group-5.png" alt="" />
              </ImagesContainer>
            </>
          )}
          <Button to="/portifolio">VER MAIS</Button>
        </ContainerRight>
      </Container>
    </SectionContainer>
  );
};
