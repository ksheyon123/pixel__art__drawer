import { createBrowserRouter } from "react-router-dom";
import { LoginPage, PalettePage } from "src/Pages/index";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    // loader: rootLoader,
  },
  {
    path: "/palette",
    element: <PalettePage />,
    // loader: rootLoader,
  },
]);

export { Router };
