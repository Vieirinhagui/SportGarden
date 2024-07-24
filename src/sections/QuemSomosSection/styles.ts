import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  background-color: #f3f3f3;
  padding: 4rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    align-items: start;
  }

  @media (min-width: 1200px) {
    width: 100%;
    padding: 3rem 7.5rem;
  }
  @media (min-width: 1440px) {
    padding: 4rem 18rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1200px) {
    width: 100%;
    flex-direction: row;
  }
  @media (min-width: 1440px) {
    width: 100%;
    gap: 4rem;
    justify-content: space-between;
    div {
      width: 40%;
    }
  }
`;

export const Title = styled.span`
  font-size: 30px;
  color: #00632c;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 50px;
  }
  @media (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: black;
  text-align: left;
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
