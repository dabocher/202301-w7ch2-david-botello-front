import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RobotsStructure } from "../../../types";

export const robotsSlice = createSlice({
  name: "robots",
  initialState: [] as RobotsStructure,
  reducers: {
    loadRobots: (
      curentRobots: RobotsStructure,
      action: PayloadAction<RobotsStructure>
    ) => [...action.payload],
  },
});
