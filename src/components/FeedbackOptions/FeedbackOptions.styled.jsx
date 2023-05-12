import styled from "@emotion/styled";

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors.turquoise};
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
    background-color: #aa9f00;
  }

  &:nth-of-type(1) {
    background-color: ${(props) => props.theme.colors.green};
    &:hover {
      background-color: ${(props) => props.theme.colors.darkGreen};
    }
  }
  &:nth-of-type(2) {
    background-color: ${(props) => props.theme.colors.yellow};
    &:hover {
      background-color: ${(props) => props.theme.colors.darkYellow};
    }
  }
  &:nth-of-type(3) {
    background-color: ${(props) => props.theme.colors.red};
    &:hover {
      background-color: ${(props) => props.theme.colors.darkRed};
    }
  }
`;
