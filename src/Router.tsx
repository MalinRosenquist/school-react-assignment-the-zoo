import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Animals } from "./pages/Animals";
import { Layout } from "./pages/Layout/Layout";
import { Animal } from "./pages/Animal";
import { Error } from "./pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/animals",
        element: <Animals />,
      },
      {
        path: "/animal/:id",
        element: <Animal />,
      },
    ],
  },
]);
