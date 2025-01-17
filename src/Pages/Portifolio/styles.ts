import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  h1 {
    font-size: 30px;
    color: #00632c;
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 40px;
      color: #00632c;
    }
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const ButtonDownload = styled.a`
  padding: 0.5rem 1rem;
  font-size: 18px;
  background-color: #00632c;
  color: white;
  text-decoration: none;
  border: none;
  outline: none;
  border-radius: 8px;
  align-self: center;
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const OptionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

export const OptionsButton = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: white;
  color: #000;
  border: 2px solid #00632c;
  outline: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #00632c;
    color: white;
  }

  &.activated {
    background-color: #00632c;
    color: white;
  }
  @media (min-width: 1200px) {
    font-size: 16px;
  }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 358px;
  height: 100%;
  min-height: 258px;
  max-height: 258px;

  object-fit: cover;
  object-position: center;
`;
