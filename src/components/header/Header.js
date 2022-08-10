import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Pessoas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
