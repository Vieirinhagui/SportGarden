import styled from "styled-components";

export const ServicosSectionContainer = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 180px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServicosContainer = styled.div`
  width: 57vw;

  display: flex;
  align-items: start;
  justify-content: center;
  gap: 64px;

  text-align: left;
`;

export const ImagesContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 20px;
`;
export const TitleSpan = styled.span`
  font-size: 50px;
  color: #00632c;
  font-weight: bold;
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  color: black;
  text-align: left;
`;

export const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
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
