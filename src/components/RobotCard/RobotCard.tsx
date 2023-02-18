import { RobotStructure } from "../../types";
import { RobotCardStyled } from "./RobotCardStyled";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: {
    _id: { $oid },
    name,
    image,
    stats: { endurance, speed, dateOfCreation },
  },
}: RobotCardProps): JSX.Element => {
  return (
    <>
      <RobotCardStyled>
        <article className="robot-card">
          <h2>{name}</h2>
          <img src={image} alt={`a robot named ${name}`} />
          <ul className="robot-card__stats">
            <li>Speed: {speed} / 10</li>
            <li>Endurence: {endurance} / 10</li>
            <li>Date of creation: {dateOfCreation}</li>
          </ul>
        </article>
      </RobotCardStyled>
    </>
  );
};
export default RobotCard;
