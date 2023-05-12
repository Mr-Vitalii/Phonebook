import styled from "@emotion/styled";

export const List = styled.ul`
  
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 2px solid ${(props) => props.theme.colors.turquoise};
`;

export const DeleteButton = styled.button`
  background-color: turquoise;
  color: white;
  padding: 5px 15px;
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


