import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import HomePage from "./HomePage";

describe("Given a HomePage", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading of level 1 with the text 'A place to fall in love with Robots'", () => {
      const headingText = "A place to fall in love with Robots";
      const headingLevel = 1;

      render(
        <Provider store={store}>
          <HomePage />
        </Provider>
      );

      const expectedHeading = screen.getByRole("heading", {
        name: headingText,
        level: headingLevel,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
