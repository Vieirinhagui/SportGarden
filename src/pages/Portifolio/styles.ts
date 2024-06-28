import styled from "styled-components";
export const SectionContainer = styled.section`
  width: 100vw;
  height: calc(100vh - 200px);
  margin-top: 200px;
  padding-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const TitleSpan = styled.span`
  font-size: 50px;
  color: #00632c;
  font-weight: bold;
`;
export const StyledButton = styled.button`
  color: white;
  font-size: 18px;
  font-weight: bold;
  background-color: #00632c;
  margin-top: 1.5rem;
  padding: 8px 24px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
`;

export const FilterButtons = styled.button`
  color: #00632c;
  font-size: 18px;
  font-weight: bold;
  background-color: white;
  margin-top: 1.5rem;
  padding: 8px 24px;
  outline: none;
  border: 1px solid #00632c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: 0.5s;
  cursor: pointer;

  &.active {
    background-color: #00632c;
    color: white;
  }

  &:hover {
    background-color: #00632c;
    color: white;
    transition: 0.5s;
  }
`;
