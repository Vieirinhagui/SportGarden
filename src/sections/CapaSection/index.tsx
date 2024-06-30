import {
  SectionContainer,
  Title,
  Paragraph,
  TextContainer,
  ImagemCapa,
} from "./styles";

export const CapaSection = () => (
  <SectionContainer>
    <ImagemCapa src="capa.png" alt="Descrição da imagem" loading="lazy" />
    <TextContainer>
      <Title>Construção e Reforma de Quadras Esportivas</Title>
      <Paragraph>
        Aqui, unimos paixão e expertise para criar quadras esportivas de
        primeira linha. Descubra como nossas soluções personalizadas transformam
        espaços em verdadeiras arenas de excelência, impulsionando o seu jogo
        para um novo nível.
      </Paragraph>
    </TextContainer>
  </SectionContainer>
);
