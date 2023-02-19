import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <img
        className="header__logo"
        src="./favicon.png"
        alt="a robot icon"
        width="50"
        height="50"
      />
      <h1 className="header__title">theRobots</h1>
    </HeaderStyled>
  );
};

export default Header;
