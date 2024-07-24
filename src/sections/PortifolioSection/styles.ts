import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  padding: 2rem 1.25rem 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1280px) {
    padding: 2rem 7.5rem;
  }

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
  gap: 1rem;
`;

export const Title = styled.span`
  font-size: 30px;
  color: #00632c;
  align-self: center;
  font-weight: bold;
  @media (min-width: 1200px) {
    font-size: 40px;
  }
`;

export const Button = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: #00632c;
  text-decoration: none;
  transition: 0.7s;
  padding: 8px 24px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: white;
    color: #00632c;
    border: 1px solid #00632c;
  }
`;
