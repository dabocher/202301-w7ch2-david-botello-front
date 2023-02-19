import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it renders", () => {
    test("Then it should show a image logo with an alternative text 'a robot icon'", () => {
      const alternativeText = "a robot icon";
      render(<Header />, { wrapper: BrowserRouter });

      const expectedText = screen.getByAltText(alternativeText);

      expect(expectedText).toBeInTheDocument();
    });
  });

  test("Then it should show a heading of level 1 with the text 'theRobots'", () => {
    const headingText = "theRobots";
    const headingLevel = 1;

    render(<Header />, { wrapper: BrowserRouter });

    const expectedHeading = screen.getByRole("heading", {
      name: headingText,
      level: headingLevel,
    });

    expect(expectedHeading).toBeInTheDocument();
  });
});
