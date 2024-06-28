import styled from "styled-components";

export const Container = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const FooterSection = styled.section`
  width: 100vw;
  height: auto;
  padding: 175px;
  background-color: #00632c;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 15rem;
`;
export const Title = styled.span`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: white;
`;
export const Paragraph = styled.span`
  width: 100%;
  font-size: 19px;
  font-weight: 400;
  text-align: left;
  color: white;
`;

export const FormContainer = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const InputStyled = styled.input`
  width: 100%;
  height: 48px;
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
export const DivIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
`;

export const InfosContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BottomInfosContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const RedesContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: 18px;
    font-weight: 400;
    color: white;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Logo = styled.img`
  width: 70%;
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
    font-size: 20px;
  }
`;
