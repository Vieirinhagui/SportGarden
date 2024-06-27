import styled from "styled-components";

export const QuemSomosSectionContainer = styled.section`
  width: 100vw;
  height: 50vh;
  background-color: #f3f3f3;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 180px 64px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  div {
    width: 40%;
  }
`;

export const Title = styled.span`
  font-size: 50px;
  color: #00632c;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: black;
  text-align: left;
`;
