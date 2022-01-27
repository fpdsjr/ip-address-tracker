import { Button, HeaderStyled } from "../styledComponents/Header.styled";
import { Input } from "../styledComponents/Header.styled";

const Header = () => {
  const placeholder = "Search for any IP address or domain";

  return (
    <HeaderStyled>
      <h1>IP Address Tracker</h1>
      <div>
        <Input placeholder={placeholder} />
        <Button />
      </div>
    </HeaderStyled>
  );
};

export default Header;
