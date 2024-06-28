import { useLocation } from "react-router-dom";
import NavBar from "../../components/navbar/index";
import {
  SectionContainer,
  Container,
  TitleSpan,
  StyledButton,
  FilterButtons,
} from "./styles";
import { useState } from "react";

const Portifolio = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const initialFilter = query.get("filter") || "TODAS";
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    
  };

  return (
    <div>
      <NavBar isActive={false} />
      <SectionContainer>
        <TitleSpan>Conheça nosso portifólio</TitleSpan>
        <StyledButton>BAIXAR O PORTIFÓLIO</StyledButton>
        <div>
          {[
            "TODAS",
            "SAIBRO",
            "ASFÁLTICO",
            "AREIA",
            "POLIESPORTIVA",
            "GRAMA",
            "PICKLEBALL",
          ].map((filter) => (
            <FilterButtons
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </FilterButtons>
          ))}
        </div>
        <Container>
          <h1>{activeFilter}</h1>
        </Container>
      </SectionContainer>
    </div>
  );
};

export { Portifolio };
