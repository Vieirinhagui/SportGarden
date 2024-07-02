import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  padding: 4rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    padding: 4rem 12rem;
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
`;

export const Title = styled.span`
  font-size: 30px;
  color: #00632c;
  align-self: start;
  font-weight: bold;
  @media (min-width: 1200px) {
    font-size: 50px;
  }
`;

export const Button = styled.button`
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: #00632c;
  padding: 8px 24px;
  outline: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #00632c;
    border: 1px solid #00632c;
  }
`;
