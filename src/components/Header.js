import { Button, HeaderStyled } from "../styledComponents/Header.styled";
import { Input } from "../styledComponents/Header.styled";

const Header = (props) => {
  const placeholder = "Search for any IP address or domain";
  const { inputValue, setInputValue } = props;
  const { handleButton } = props;

  return (
    <HeaderStyled>
      <h1>IP Address Tracker</h1>
      <div>
        <Input
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => setInputValue(e)}
        />
        <Button onClick={(e) => handleButton(e)} />
      </div>
    </HeaderStyled>
  );
};

export default Header;
