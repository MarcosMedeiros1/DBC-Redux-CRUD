import { SiRedux } from "react-icons/si";
import { LogoContainer } from "./Header.styled";

const Logo = ({ page }) => {
  return (
    <LogoContainer>
      <div>
        <SiRedux style={{ fontSize: 40 }} />
        <h1>{page}</h1>
      </div>
    </LogoContainer>
  );
};
export default Logo;
