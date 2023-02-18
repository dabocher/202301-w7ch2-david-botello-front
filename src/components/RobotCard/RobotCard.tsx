import { RobotStructure } from "../../types";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({
  robot: {
    id: { id },
    name,
    image,
    stats: { endurance, speed, dataOfCreation },
  },
}: RobotCardProps): JSX.Element => {
  return (
    <>
      <article className="robot-card">
        <h2>err0R</h2>
        <img
          src="https://previews.123rf.com/images/funwayillustration/funwayillustration1609/funwayillustration160900436/63707662-robot-azul-ilustraci%C3%B3n-error-de-dise%C3%B1o.jpg"
          alt="a robot"
        />
        <ul className="robot-stats">
          <li>Speed: 0 / 10</li>
          <li>Endurence: 7 / 10</li>
          <li>Date of creation: 12/05/2078</li>
        </ul>
      </article>
    </>
  );
};
export default RobotCard;
