import { rest } from "msw";
import { mockedApiResponse } from "./robotsMocks";

const handlers = [
  rest.get(process.env.REACT_APP_URL!, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedApiResponse));
  }),
];

export default handlers;
