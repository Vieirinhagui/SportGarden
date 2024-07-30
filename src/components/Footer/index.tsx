import { ContatoIcons } from "../ContatoIcons";
import {
  BlackFooter,
  Button,
  FaleConoscoContainer,
  FormContainer,
  InfosBodyContainer,
  InfosContainer,
  InfosFooterContainer,
  InfosHeaderContainer,
  Input,
  Logo,
  Onda,
  Paragraph,
  RelativeDiv,
  SectionContainer,
  SocialMediaContainer,
  Textarea,
  Title,
} from "./styles";

export const Footer = () => {
  return (
    <RelativeDiv>
      <Onda src="./ondaVerde.png" alt="" />
      <SectionContainer>
        <FaleConoscoContainer>
          <Title>Fale Conosco</Title>
          <Paragraph>
            Ficou interessado em nosso serviço? Envie-nos uma mensagem e
            entraremos em contato o mais brevemente possível.
          </Paragraph>
          <FormContainer>
            <Input type="text" placeholder="*Nome" />
            <Input type="email" placeholder="*Email" />
            <Input type="tel" placeholder="*Número de Contato" />
            <Textarea
              name=""
              id=""
              wrap="hard"
              placeholder="*Mensagem"
            ></Textarea>
            <Button type="submit">Enviar</Button>
          </FormContainer>
        </FaleConoscoContainer>
        <InfosContainer>
          <InfosHeaderContainer>
            <Title>Contatos</Title>
            <Paragraph>
              Sinta-se à vontade para nos contatar através das nossas redes
              sociais ou dos meios de contato listados abaixo. Conecte-se
              conosco!
            </Paragraph>
          </InfosHeaderContainer>
          <InfosBodyContainer>
            <ContatoIcons
              endereco="(61) 9 9608-3535"
              href="tel:+5561996083535"
              type="Telefone"
            />
            <ContatoIcons
              endereco="(61) 9 9970-6589"
              href="https://wa.me/5561999706589"
              type="WhatsApp"
            />
            <ContatoIcons
              endereco="contato@sportgarden.com.br"
              href="mailto:contato@sportgarden.com.br"
              type="E-mail"
            />
            <ContatoIcons
              endereco="sportsgardens@gmail.com"
              href="mailto:sportsgardens@gmail.com"
              type="E-mail"
            />
          </InfosBodyContainer>
          <InfosFooterContainer>
            <SocialMediaContainer>
              <span>Redes Sociais:</span>
              <div>
                <img src="instagram.svg" alt="" />
                <img src="facebook.svg" alt="" />
                <img src="twitter.svg" alt="" />
              </div>
            </SocialMediaContainer>
            <Logo src="logotipo.png" alt="" />
          </InfosFooterContainer>
        </InfosContainer>
      </SectionContainer>
      <BlackFooter>
        <span>© SportGarden 2024. Todos os direitos reservados.</span>
      </BlackFooter>
    </RelativeDiv>
  );
};
