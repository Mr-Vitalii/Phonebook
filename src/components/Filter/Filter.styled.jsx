import styled from "@emotion/styled";

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  outline: none;
  border: 2px solid ${(props) => props.theme.colors.turquoise};
  padding: 5px 10px;
`;
