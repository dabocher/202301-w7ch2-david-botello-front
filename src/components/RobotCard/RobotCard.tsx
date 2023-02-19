import { RobotStructure } from "../../types";
import { RobotCardStyled } from "./RobotCardStyled";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: {
    id,
    name,
    image,
    stats: { endurance, speed, dateOfCreation },
  },
}: RobotCardProps): JSX.Element => {
  return (
    <>
      <RobotCardStyled className="robot-card">
        <h2 className="robot-card__title">{name}</h2>
        <img
          className="robot-card__image"
          src={image}
          alt={`a robot named ${name}`}
          width="300"
          height="300"
        />
        <ul className="robot-card__stats">
          <li>Speed: {speed} / 10</li>
          <li>Endurence: {endurance} / 10</li>
          <li>Date of creation: {dateOfCreation}</li>
        </ul>
      </RobotCardStyled>
    </>
  );
};
export default RobotCard;
