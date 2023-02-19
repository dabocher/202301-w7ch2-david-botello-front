import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a main section with Aria-label `Manage your robots`", () => {
      const arialLabelText = "Manage your robots";
      render(
        <Provider store={store}>
          <Layout />
        </Provider>
      );

      const expectedAriaLabel = screen.getByRole("main", {
        name: arialLabelText,
      });

      expect(expectedAriaLabel).toBeInTheDocument();
    });
  });
});
