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
import ImagesPath from "../../utils/ImagesPath.json";

type ImageType = {
  id: number;
  path: string;
  type: string;
};

const Portfolio = () => {
  const [urls, setUrls] = useState<ImageType[]>([]);
  const [filter, setFilter] = useState("todas");

  useEffect(() => {
    setUrls(ImagesPath);
  }, []);

  const handleFilterClick = (selectedFilter: string) => {
    setFilter(selectedFilter);
  };

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
            <OptionsButton
              className={filter === "todas" ? "activated" : ""}
              onClick={() => handleFilterClick("todas")}
            >
              Todas
            </OptionsButton>
            <OptionsButton
              className={filter === "saibro" ? "activated" : ""}
              onClick={() => handleFilterClick("saibro")}
            >
              Saibro
            </OptionsButton>
            <OptionsButton
              className={filter === "asfaltica" ? "activated" : ""}
              onClick={() => handleFilterClick("asfaltica")}
            >
              Asfáltica
            </OptionsButton>
            <OptionsButton
              className={filter === "areia" ? "activated" : ""}
              onClick={() => handleFilterClick("areia")}
            >
              Areia
            </OptionsButton>
            <OptionsButton
              className={filter === "poliesportiva" ? "activated" : ""}
              onClick={() => handleFilterClick("poliesportiva")}
            >
              Poliesportiva
            </OptionsButton>
            <OptionsButton
              className={filter === "grama" ? "activated" : ""}
              onClick={() => handleFilterClick("grama")}
            >
              Grama
            </OptionsButton>
            <OptionsButton
              className={filter === "pickeball" ? "activated" : ""}
              onClick={() => handleFilterClick("pickeball")}
            >
              Pickeball
            </OptionsButton>
          </OptionsContainer>
        </ButtonsContainer>
        <ImagesContainer>
          {urls
            .filter((url) => filter === "todas" || url.type === filter)
            .map((url, index) => (
              <Image src={url.path} key={index} alt="" />
            ))}
        </ImagesContainer>
      </Container>
    </>
  );
};

export default Portfolio;
