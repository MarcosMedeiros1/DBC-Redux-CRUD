import { Ul } from "./Header.styled";
import { FiLogOut } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../store/actions/AuthActions";
import { connect } from "react-redux";

const Menu = ({ display, handleLogout, dispatch }) => {
  const navigate = useNavigate();
  return (
    <nav>
      <Ul>
        <li style={{ display: display }}>
          <button onClick={() => navigate("/pessoas")}>
            Pessoas
            <BsPeopleFill />
          </button>
        </li>
        <li>
          <button onClick={() => handleLogout(dispatch, navigate)}>
            Sair <FiLogOut />
          </button>
        </li>
      </Ul>
    </nav>
  );
};

const mapDispatchToProps = () => ({
  handleLogout: (dispatch, navigate) => handleLogout(dispatch, navigate),
});

export default connect(mapDispatchToProps)(Menu);
