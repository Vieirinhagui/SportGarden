import styled from "styled-components";

export const DivIcons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: row;
  gap: 1rem;

  a {
    text-decoration: none;
  }
  @media screen and (min-width: 1200px) {
    gap: 0.25rem;
  }
`;

export const IconsBackGround = styled.div`
  width: 38px;
  height: 38px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const SpanIcons = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
export const ParagraphIcons = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: white;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 6rem;
`;
