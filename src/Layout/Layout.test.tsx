import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a main section with Aria-label `Manage your robots`", () => {
      const arialLabelText = "Manage your robots";
      render(<Layout />, { wrapper: BrowserRouter });

      const expectedAriaLabel = screen.getByRole("main", {
        name: arialLabelText,
      });

      expect(expectedAriaLabel).toBeInTheDocument();
    });
  });
});
