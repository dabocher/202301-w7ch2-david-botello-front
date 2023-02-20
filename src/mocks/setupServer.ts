import { setupServer } from "msw/node";
import handlers from "./handlers";

const robotsServer = setupServer(...handlers);

export default robotsServer;
