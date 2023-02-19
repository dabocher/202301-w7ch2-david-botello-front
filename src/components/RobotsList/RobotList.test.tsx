import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "..";
import RobotList from "./RobotsList";

describe("Given a RobotList Component", () => {
  describe("When it is rendered and it receives a list of 1 item", () => {
    test("Then it should show a list element", () => {
      render(
        <Provider store={store}>
          <RobotList />
        </Provider>
      );

      const expectedName = screen.getByRole("list");

      expect(expectedName).toBeInTheDocument();
    });
  });
});
