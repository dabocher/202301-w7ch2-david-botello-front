import { useCallback } from "react";
import { loadRobotsActionCreator } from "../store/features/robots/robotsSlice";
import { useAppDispatch } from "../store/hooks";
import { ApiResponseStructure } from "../types";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getRobots = useCallback(async () => {
    const response = await fetch(process.env.REACT_APP_URL!);
    const { robots } = (await response.json()) as ApiResponseStructure;
    dispatch(loadRobotsActionCreator(robots));
  }, [dispatch]);

  return { getRobots };
};

export default useApi;
