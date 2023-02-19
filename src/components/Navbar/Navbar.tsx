import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled>
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <i
            className="fa-solid fa-house-chimney"
            role="navigation"
            aria-label="Home"
          ></i>
        </li>
        <li className="navbar-list-item">
          <i
            className="fa-solid fa-plus"
            role="navigation"
            aria-label="Create a robot"
          ></i>
        </li>
        <li className="navbar-list-item">
          <i
            className="fa-solid fa-heart"
            role="navigation"
            aria-label="My favourite robots"
          ></i>
        </li>
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
