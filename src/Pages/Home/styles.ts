import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 5rem 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  align-items: start;
  justify-content: center;
  gap: 4rem;

  text-align: left;
`;

export const CardsContainer = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 2rem;
`;

export const CardContainer = styled.div`
  width: 380px;
  height: 160px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 28px;

  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }
  span {
    font-size: 16px;
    font-weight: 400;
  }
`;
export const InfosContainer = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 2rem;
`;
export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2.5rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;
export const TitleSpan = styled.span`
  font-size: 50px;
  color: #00632c;
  font-weight: bold;
`;

export const StyledParagraph = styled.p`
  width: 100%;
  font-size: 20px;
  color: black;
  text-align: left;
`;

export const StyledButton = styled.button`
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: #00632c;
  padding: 8px 24px;
  outline: none;
  border: none;

  border-radius: 8px;
`;
