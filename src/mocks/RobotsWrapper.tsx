import { Provider } from "react-redux";
import { mockedStore } from "./robotsMocks";

interface RobotsWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const RobotsWrapper = ({ children }: RobotsWrapperProps): JSX.Element => {
  return <Provider store={mockedStore}>{children}</Provider>;
};

export default RobotsWrapper;
