import styled from "styled-components";

export const CardContainer = styled.div`
  width: 380px;
  height: 160px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 28px;

  -webkit-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }
  span {
    font-size: 16px;
    font-weight: 400;
  }
`;
