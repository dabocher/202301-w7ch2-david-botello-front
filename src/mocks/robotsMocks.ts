import { configureStore } from "@reduxjs/toolkit";
import { robotsReducer } from "../store/features/robots/robotsSlice";
import { ApiResponseStructure, RobotsStructure } from "../types";

export const mockedStore = configureStore({
  reducer: {
    robots: robotsReducer,
  },
});

export const robots: RobotsStructure = [
  {
    id: "0",
    name: "err0R",
    image:
      "https://previews.123rf.com/images/funwayillustration/funwayillustration1609/funwayillustration160900436/63707662-robot-azul-ilustraci%C3%B3n-error-de-dise%C3%B1o.jpg",
    stats: {
      speed: 0,
      endurance: 7,
      dateOfCreation: 0,
    },
  },
  {
    id: "1",
    name: "DI3-B055",
    image:
      "https://previews.123rf.com/images/funwayillustration/funwayillustratio…",
    stats: {
      speed: 8,
      endurance: 4,
      dateOfCreation: 0,
    },
  },
  {
    id: "3",
    name: "b0-7tl3",
    image:
      "https://previews.123rf.com/images/funwayillustration/funwayillustratio…",
    stats: {
      speed: 7,
      endurance: 8,
      dateOfCreation: 0,
    },
  },
];

export const mockedApiResponse: ApiResponseStructure = { robots: robots };
