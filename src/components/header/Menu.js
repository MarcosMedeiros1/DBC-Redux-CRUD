import { Ul } from "./Header.styled";
import { FiLogOut } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { handleLogout } from "../../store/actions/AuthActions";
import { connect } from "react-redux";

const Menu = ({ display, handleLogout, dispatch }) => {
  const navigate = useNavigate();

  return (
    <nav>
      <Ul>
        <li style={{ display: display }}>
          <Link to="/pessoas">
            Pessoas
            <BsPeopleFill />
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => handleLogout(dispatch)}>
            Sair <FiLogOut />
          </Link>
        </li>
      </Ul>
    </nav>
  );
};

const mapDispatchToProps = () => ({
  handleLogout: (dispatch) => handleLogout(dispatch),
});

export default connect(mapDispatchToProps)(Menu);
