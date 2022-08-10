import styled from "styled-components";
import { backgroundDark, primaryColor, textLight } from "../../utils/utils";

export const FormContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 380px;
  padding: 16px;
  height: 100vh;
  background-color: ${backgroundDark};
`;

export const FormSection = styled.section`
  padding: 32px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #dfe0eb;
`;

export const TitleDiv = styled.div`
  display: grid;
  gap: 12px;
  margin-bottom: 32px;
  text-align: center;
`;

export const SubTitle = styled.span`
  color: ${textLight};
`;

export const FormDiv = styled.div`
  display: grid;
  gap: 16px;

  & span {
    text-align: center;

    & a {
      color: ${primaryColor};
      text-decoration: none;
      font-weight: 600;

      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export const FormItem = styled.div`
  display: grid;
  align-content: start;
  gap: 6px;
  color: ${textLight};

  & input,
  select {
    background-color: #fcfdfe;
    border: 1px solid ${textLight};
    border-radius: 8px;
    padding: 12px 16px;
  }

  & input::placeholder {
    color: ${textLight};
  }

  & div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ErrorMessage = styled.span`
  color: #f12b2c;
  font-size: 14px;
`;
