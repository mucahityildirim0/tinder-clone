import whitelogo from "../images/tinder_logo_white.png";
import colorLogo from "../images/color-logo-tinder.png";

const Nav = ({ minimal, authToken }) => {
  return (
    <nav>
      <div className="logo-container">
        <img className="logo" src={minimal ? colorLogo : whitelogo} alt="" />
      </div>

      {!authToken && <button className="nav-button">Log In</button>}
    </nav>
  );
};

export default Nav;
