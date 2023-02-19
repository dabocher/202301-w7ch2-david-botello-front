import RobotList from "../../components/RobotsList/RobotsList";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled className="home">
      <h1 className="home__title">A place to fall in love with Robots</h1>

      <RobotList />
    </HomePageStyled>
  );
};

export default HomePage;
