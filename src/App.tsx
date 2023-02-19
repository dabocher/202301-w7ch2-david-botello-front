import Layout from "./Layout/Layout";
import { useEffect } from "react";
import useApi from "./hooks/useApi";

const App = (): JSX.Element => {
  const { getRobots } = useApi();

  useEffect(() => {
    getRobots();
  }, [getRobots]);

  return <Layout />;
};

export default App;
