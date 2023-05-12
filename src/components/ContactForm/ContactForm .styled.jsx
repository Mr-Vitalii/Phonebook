import styled from "@emotion/styled";
import { Form, Field, ErrorMessage } from "formik";

export const ContactsForm = styled(Form)`
  margin-bottom: 15px;
`;

export const InputContainer = styled.div`
  padding: 10px 0;
  &:last-of-type {
    margin-bottom: 10px;
  }
`;

export const Input = styled(Field)`
  margin-left: 5px;
  outline: none;
  border: 2px solid ${(props) => props.theme.colors.turquoise};
  padding: 5px 10px;
`;

export const FormError = styled(ErrorMessage)`
  color: red;
  
`;

export const Button = styled.button`
  background-color: turquoise;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover {
    background-color: #32c8de;
  }
`;
