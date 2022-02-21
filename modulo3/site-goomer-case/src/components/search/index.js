import { InputContainer, InputStyled, SearchIconContainer } from "./styles";
import SearchIcon from '@mui/icons-material/Search';

export const SearchBox = ({ value, onChange }) => {
  return (
    <InputContainer>
      <InputStyled value={value} onChange={onChange} placeholder="Buscar Estabelecimento" />
      <SearchIconContainer><SearchIcon /></SearchIconContainer>
    </InputContainer>
  );
};
