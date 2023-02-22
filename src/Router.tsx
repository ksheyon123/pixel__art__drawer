import { createHashRouter } from "react-router-dom";
import { Layout } from "src/Components/index";
import { LoginPage, PalettePage } from "src/Pages/index";

const Router = createHashRouter([
  {
    path: "/",
    element:
      <Layout>
        <LoginPage />
      </Layout>,
    // loader: rootLoader,
  },
  {
    path: "/palette",
    element: <PalettePage />,
    // loader: rootLoader,
  },
]);

export { Router };
