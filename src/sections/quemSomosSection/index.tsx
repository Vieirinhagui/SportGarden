import {
  Container,
  Paragraph,
  QuemSomosSectionContainer,
  Title,
} from "./styles";

export const QuemSomosSection = () => {
  return (
    <QuemSomosSectionContainer>
      <Container>
        <div>
          <Title>Quem Somos?</Title>
          <Paragraph>
            Somos uma empresa de construção de quadras esportivas fundada pelo
            (CEO) Ricardo Magalhães. Atuamos há mais de 15 anos no mercado,
            construindo quadras em todo o Brasil, com maior atuação na região
            Centro-Oeste.
          </Paragraph>
        </div>
        <div>
          <Title>Nosso Objetivo</Title>
          <Paragraph>
            Nossa empresa se compromete a proporcionar satisfação aos clientes,
            atendendo às suas necessidades e preferências. Buscamos soluções
            personalizadas, cumprindo prazos e garantindo qualidade no trabalho.
          </Paragraph>
        </div>
      </Container>
    </QuemSomosSectionContainer>
  );
};
