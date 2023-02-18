import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout", () => {
  describe("When it renders", () => {
    test("Then it should show a heading of level one with the text `The Robots`", () => {
      const headingText = "The Robots";
      const levelHeading = 1;
      render(<Layout />);

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
        level: levelHeading,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
