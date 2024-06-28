import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  height:auto;
  padding: 5rem 10rem;
  background-color: #f3f3f3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  align-items: start;
  justify-content: space-between;
  text-align: left;

  div {
    width: 35%;
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
