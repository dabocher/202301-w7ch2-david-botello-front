import { RobotsStructure } from "../../../types";
import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

describe("Given loadRobots reducer", () => {
  describe("When it receives a list of three robots and a loadRobots action", () => {
    test("The it should return a list of those robots", () => {
      const robots: RobotsStructure = [
        {
          id: "",
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
          id: "",
          name: "DI3-B055",
          image:
            "https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDI1NzU4fGltYWdlL2pwZWd8aGEzL2g1NS8xMjU4NDIwOTM4MzQ1NHw4YTgwMDRkYTZkNjA4NGY1NDk3MzExZTkxOWM2OTFiMjc1ZmMzODYyY2I5MzVkYmI3YzMwZWUxNzQ0NTA5ODVl",
          stats: {
            speed: 8,
            endurance: 4,
            dateOfCreation: 0,
          },
        },
        {
          id: "",
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

      const action = loadRobotsActionCreator(robots);

      const expectedRobotList = robotsReducer(robots, action);

      expect(robots).toStrictEqual(expectedRobotList);
    });
  });
});
