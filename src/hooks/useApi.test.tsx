import { renderHook } from "@testing-library/react";
import RobotsWrapper from "../mocks/RobotsWrapper";
import robotsServer from "../mocks/setupServer";
import useApi from "./useApi";

const mockDispatch = jest.fn();

jest.mock("../store/hooks", () => ({
  useAppDispatch: () => mockDispatch,
}));

beforeAll(() => robotsServer.listen());
afterEach(() => robotsServer.resetHandlers());
afterAll(() => robotsServer.close());

describe("Given a useApi hook", () => {
  describe("When it is called", () => {
    test("The it dispatch should be called", async () => {
      const {
        result: {
          current: { getRobots },
        },
      } = renderHook(() => useApi(), {
        wrapper({ children }) {
          return <RobotsWrapper children={children} />;
        },
      });

      await getRobots();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
