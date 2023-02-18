import RobotCard from "./components/RobotCard/RobotCard";
import robots from "./data/robots";

const App = (): JSX.Element => {
  return <RobotCard robot={robots[1]} />;
};

export default App;
