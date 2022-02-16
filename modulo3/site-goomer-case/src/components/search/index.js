import { InputContainer, InputStyled } from "./styles";

export const SearchBox = ({ value, onChange }) => {
  return (
    <InputContainer>
      <InputStyled value={value} onChange={onChange} />
    </InputContainer>
  );
};
