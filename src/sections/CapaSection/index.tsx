import {
  SectionContainer,
  Title,
  Paragraph,
  TextContainer,
  ImagemCapa,
  Onda,
} from "./styles";

export const CapaSection = () => (
  <SectionContainer>
    <picture>
      <source media="(min-width: 1200px)" srcSet="capa.png" />
      <ImagemCapa src="capa-mobile.png" alt="Descrição da imagem" />
    </picture>
    <TextContainer>
      <Title>Construção e Reforma de Quadras Esportivas</Title>
      <Paragraph>
        Aqui, unimos paixão e expertise para criar quadras esportivas de
        primeira linha. Descubra como nossas soluções personalizadas transformam
        espaços em verdadeiras arenas de excelência, impulsionando o seu jogo
        para um novo nível.
      </Paragraph>
    </TextContainer>
    <Onda src="./onda.png" alt="design de onda" />
  </SectionContainer>
);
