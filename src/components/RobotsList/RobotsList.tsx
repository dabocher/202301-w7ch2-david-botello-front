import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import RobotCard from "../RobotCard/RobotCard";
import RobotListStyled from "./RobotListStyled";

const RobotList = (): JSX.Element => {
  const { getRobots } = useApi();
  const robots = useAppSelector((state) => state.robots);

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return (
    <RobotListStyled className="home__list">
      {robots.map((robot) => (
        <li key={robot.name}>
          <RobotCard robot={robot} />
        </li>
      ))}
    </RobotListStyled>
  );
};

export default RobotList;
