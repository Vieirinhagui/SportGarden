import { Link } from "react-router-dom";
import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  padding: 2rem 1.25rem;
  box-sizing: border-box;
  @media (min-width: 1280px) {
    padding: 4rem 7.5rem;
  }
  @media (min-width: 1440px) {
    padding: 4rem 12rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const ContainerLeft = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1440px) {
    width: 50%;
  }
`;

export const ContainerRight = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 1200px) {
    width: 60%;
  }
  @media (min-width: 1440px) {
    width: 70%;
  }
`;

export const InfosContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.span`
  width: 100%;
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
  width: 100%;
  font-size: 16px;
  color: black;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled(Link)`
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  background-color: #00632c;
  padding: 8px 24px;
  outline: none;
  border: 1px solid transparent;

  border-radius: 8px;
  cursor: pointer;
  transition: 0.7s;
  &:hover {
    background-color: white;
    color: #00632c;
    border: 1px solid #00632c;
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1200px) {
    align-items: start;
  }
`;

export const Images = styled.img`
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    width: 45%;
    height: 45%;
  }

  @media (min-width: 1200px) {
    width: 31.5%;
  }
  @media (min-width: 1440px) {
    width: 30%;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  min-height: 100px;
  height: 120px;
  background-color: white;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 18px;

  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  p {
    font-weight: bold;
  }
  img {
    width: 60%;
  }
  span {
    width: 100%;
    font-size: 14px;
  }
  @media (min-width: 768px) {
    span {
      font-size: 16px;
    }
    img {
      width: 20%;
    }
  }
  @media (min-width: 1280px) {
    height: 132px;
    img {
      width: 50%;
    }
  }
`;
