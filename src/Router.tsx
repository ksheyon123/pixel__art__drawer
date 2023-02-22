import { createHashRouter } from "react-router-dom";
import { Layout, Header } from "src/Components/index";
import { LoginPage, PalettePage } from "src/Pages/index";

const Router = createHashRouter([
  {
    path: "/",
    element:
      <Layout>
        <LoginPage />
      </Layout>,
  },
  {
    path: "/palette",
    element:
      <Layout>
        <>
          <Header />
          <PalettePage />
        </>
      </Layout>
    // loader: rootLoader,
  },
]);

export { Router };
