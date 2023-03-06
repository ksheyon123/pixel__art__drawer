import { createHashRouter } from "react-router-dom";
import { Layout, Header } from "src/Components/index";
import { LoginPage, CanvasPage, ElementSelectPage } from "src/Pages/";

const Router = createHashRouter([
  {
    path: "/",
    element:
      <Layout>
        <LoginPage />
      </Layout>,
  },
  {
    path: "/setup",
    element:
      <Layout>
        <>
          <Header />
          <ElementSelectPage />
        </>
      </Layout>
  },
  {
    path: "/palette",
    element:
      <Layout>
        <>
          <Header />
          <CanvasPage />
        </>
      </Layout>
    // loader: rootLoader,
  },
]);

export { Router };
