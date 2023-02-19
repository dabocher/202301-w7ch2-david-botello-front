import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading of level 1 with the text 'A place to fall in love with Robots'", () => {
      const headingText = "A place to fall in love with Robots";
      const headingLevel = 1;

      render(<HomePage />, { wrapper: BrowserRouter });

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
        level: headingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
