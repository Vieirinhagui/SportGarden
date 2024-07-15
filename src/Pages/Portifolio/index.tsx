import { useEffect, useState } from "react";
import {
  ButtonDownload,
  ButtonsContainer,
  Container,
  Image,
  ImagesContainer,
  OptionsButton,
  OptionsContainer,
} from "./styles";
import NavBar from "../../components/NavBar";

const Portfolio = () => {
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const newUrls: string[] = [];
    for (let i = 1; i <= 47; i++) {
      newUrls.push(`/images/portifolio/${i}.jpg`);
    }
    setUrls(newUrls);
  }, []);

  return (
    <>
      <NavBar isActive={false} />
      <Container>
        <h1>Conheça nosso portifólio </h1>
        <ButtonsContainer>
          <ButtonDownload href="https://drive.google.com/file/d/14533l6sMcKvvI8SgpVj79t_bOGQvCUPd/view">
            Baixar Portifolio
          </ButtonDownload>
          <OptionsContainer>
            <OptionsButton className="activated">Todas</OptionsButton>
            <OptionsButton>Saibro</OptionsButton>
            <OptionsButton>Asfaltica</OptionsButton>
            <OptionsButton>Areia</OptionsButton>
            <OptionsButton>Poliesportiva</OptionsButton>
            <OptionsButton>Grama</OptionsButton>
            <OptionsButton>Pickeball</OptionsButton>
          </OptionsContainer>
        </ButtonsContainer>
        <ImagesContainer>
          {urls.map((url, index) => (
            <Image src={url} key={index} alt="" />
          ))}
        </ImagesContainer>
      </Container>
    </>
  );
};

export default Portfolio;
