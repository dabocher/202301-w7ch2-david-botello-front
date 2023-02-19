import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Given a Navbar Component", () => {
  describe("When its rendered with a list of 3 icons", () => {
    test("Then it should show 3 li elements", () => {
      render(<Navbar />, { wrapper: BrowserRouter });

      const expectedElements = screen.getAllByRole("listitem").length;

      expect(expectedElements).toBe(3);
    });
  });

  describe("When it's rendered with a list", () => {
    test("Then it should show a element with ul tag", () => {
      render(<Navbar />, { wrapper: BrowserRouter });

      const expectedElement = screen.getByRole("list").innerHTML;

      expect(expectedElement).toContain("<li");
    });
  });
});
