import { HeaderContainer } from "./Header.styled";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = ({ display, page }) => {
  return (
    <HeaderContainer>
      <Logo page={page} />
      <Menu display={display} />
    </HeaderContainer>
  );
};
export default Header;
