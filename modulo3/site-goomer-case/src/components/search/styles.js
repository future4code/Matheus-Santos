import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin: 30px;
`;

export const InputStyled = styled.input`
  width: 840px;
  box-shadow: 0px 2px 4px #00000029; 
  border: none;
  border-radius: 50px; 
  padding: 10px;
`;
 
export const SearchIconContainer = styled.div`
  &:hover {
    cursor: pointer
  }
  transform: translate(-35px, 5px);
`