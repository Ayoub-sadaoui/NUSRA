import { Button } from "react-daisyui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage, About, HomeLayout } from "./pages";

import React, { useContext } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
