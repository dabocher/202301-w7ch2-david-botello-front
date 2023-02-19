import HomePage from "../HomePage/HomePage";
import Layout from "../Layout/Layout";

const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
];

export default router;
