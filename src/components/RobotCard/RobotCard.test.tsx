import { render, screen } from "@testing-library/react";
import RobotCard from "./RobotCard";

describe("Given the RobotCard component", () => {
  const robot = {
    _id: {
      $oid: "63efce0c21ec1e5f6aee76ee",
    },
    name: "err0R",
    image:
      "https://previews.123rf.com/images/funwayillustration/funwayillustration1609/funwayillustration160900436/63707662-robot-azul-ilustraci%C3%B3n-error-de-dise%C3%B1o.jpg",
    stats: {
      speed: 0,
      endurance: 7,
      dateOfCreation: 0,
    },
  };

  describe("When it's rendered", () => {
    test("Then it should have a heading level 2", () => {
      const headingLevel = 2;

      render(<RobotCard robot={robot} />);

      const expectedHeading = screen.getByRole("heading", {
        level: headingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });

    test("The it should have an image with alternative text 'a robot named err0r'", () => {
      const alternativeText = `a robot named ${robot.name}`;

      render(<RobotCard robot={robot} />);

      const expectedAlternativeText = screen.getByAltText(alternativeText);

      expect(expectedAlternativeText).toBeInTheDocument();
    });
  });
});
