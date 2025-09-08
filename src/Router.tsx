import { createBrowserRouter } from "react-router";
import { Home } from "./pages/home/Home";
import { Animals } from "./pages/animals/Animals";
import { Layout } from "./pages/Layout/Layout";
import { Animal } from "./pages/animal/Animal";
import { Error404 } from "./pages/error/Error404";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error404 />,
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
  ],
  {
    basename: import.meta.env.DEV ? "" : "/the-zoo-MalinRosenquist/",
  }
);
