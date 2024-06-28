import { Container, Message, Title } from "./styles";

export const NotFound = () => {
  return (
    <Container>
      <Title>404 Not Found</Title>
      <Message>A página que você está procurando não foi encontrada.</Message>
    </Container>
  );
};
