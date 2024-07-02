import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100vw;
  height: auto;
  background-color: #00632c;
  padding: 4rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1200px) {
    justify-content: center;
    align-items: start;
    flex-direction: row;
    gap: 16rem;
  }
  @media (min-width: 1440px) {
    padding: 4rem 12rem;
    justify-content: space-between;
  }
`;

export const FaleConoscoContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const Title = styled.span`
  width: 100%;
  font-size: 30px;
  color: white;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: white;
  text-align: left;
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  outline: none;
  border: none;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  padding: 16px;
  background-color: white;
  border-radius: 8px;
  outline: none;
  border: none;
`;

export const Button = styled.button`
  padding: 8px 32px;
  color: #00632c;
  background-color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background-color: #2a2a2a;
    color: white;
  }
`;

export const InfosContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

export const InfosHeaderContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const InfosBodyContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 1rem;
`;

export const InfosFooterContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const SocialMediaContainer = styled.div`
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;

  div {
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const Logo = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 30%;
  }
  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const BlackFooter = styled.div`
  width: 100vw;
  height: 39px;
  background-color: #2a2a2a;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 16px;
  }
`;
