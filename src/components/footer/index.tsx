import { Mail, Phone } from "lucide-react";
import {
  FooterSection,
  FormContainer,
  Paragraph,
  Title,
  Container,
  Button,
  InputStyled,
  Textarea,
  DivIcons,
  IconsBackGround,
  SpanIcons,
  ParagraphIcons,
  InfosContainer,
  BottomInfosContainer,
  RedesContainer,
  Logo,
  BlackFooter,
} from "./styles";

export const Footer = () => {
  return (
    <>
      <FooterSection>
        <Container>
          <Title>Fale Conosco</Title>
          <Paragraph>
            Ficou interessado em nosso serviço? Envie-nos uma mensagem e
            entraremos em contato o mais brevemente possível.
          </Paragraph>
          <FormContainer>
            <InputStyled type="text" placeholder="*Nome" />
            <InputStyled type="email" placeholder="*Email" />
            <InputStyled type="tel" placeholder="*Número de Contato" />
            <Textarea
              name=""
              id=""
              wrap="hard"
              placeholder="*Mensagem"
            ></Textarea>
            <Button type="submit">Enviar</Button>
          </FormContainer>
        </Container>
        <Container>
          <Title>Contatos</Title>
          <Paragraph>
            Sinta-se à vontade para nos contatar através das nossas redes
            sociais ou dos meios de contato listados abaixo. Conecte-se conosco!
          </Paragraph>
          <InfosContainer>
            <DivIcons>
              <IconsBackGround>
                <Phone size={28} color="#00632C" />
              </IconsBackGround>
              <div>
                <SpanIcons>(61) 9 9608-3535</SpanIcons>
                <ParagraphIcons>Telefone</ParagraphIcons>
              </div>
            </DivIcons>
            <DivIcons>
              <IconsBackGround>
                <svg
                  fill="#00632C"
                  width="28px"
                  height="28px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
                    <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
                  </g>
                </svg>
              </IconsBackGround>
              <div>
                <SpanIcons>(61) 9 9970-6589</SpanIcons>
                <ParagraphIcons>Whatsapp</ParagraphIcons>
              </div>
            </DivIcons>
            <DivIcons>
              <IconsBackGround>
                <Mail size={28} color="#00632C" />
              </IconsBackGround>
              <div>
                <SpanIcons>contato@sportgarden.com.br</SpanIcons>
                <ParagraphIcons>E-mail</ParagraphIcons>
              </div>
            </DivIcons>
            <DivIcons>
              <IconsBackGround>
                <Mail size={28} color="#00632C" />
              </IconsBackGround>
              <div>
                <SpanIcons>sportsgardens@gmail.com</SpanIcons>
                <ParagraphIcons>E-mail</ParagraphIcons>
              </div>
            </DivIcons>
            <DivIcons>
              <IconsBackGround>
                <svg
                  fill="#00632C"
                  width="28px"
                  height="28px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
                    <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
                  </g>
                </svg>
              </IconsBackGround>
              <div>
                <SpanIcons>(61) 9 9970-6589</SpanIcons>
                <ParagraphIcons>Whatsapp</ParagraphIcons>
              </div>
            </DivIcons>

            <BottomInfosContainer>
              <RedesContainer>
                <span>Redes Sociais:</span>
                <div>
                  <img src="instagram.svg" alt="" />
                  <img src="facebook.svg" alt="" />
                  <img src="twitter.svg" alt="" />
                </div>
              </RedesContainer>
              <Logo src="logotipo.png" alt="" />
            </BottomInfosContainer>
          </InfosContainer>
        </Container>
      </FooterSection>
      <BlackFooter>
        <span>© SportGarden 2024. Todos os direitos reservados.</span>
      </BlackFooter>
    </>
  );
};
