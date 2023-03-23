import { createHashRouter } from "react-router-dom";
import { Layout, Header } from "src/Components/index";
import { PATH } from "src/Constants/index";
import { LoginPage, CanvasPage, ElementSelectPage, SignInPage } from "src/Pages/";

const Router = createHashRouter([
  {
    path: PATH.LOGIN,
    element:
      <Layout>
        <Header />
        <LoginPage />
      </Layout>,
  },
  {
    path: PATH.SETUP,
    element:
      <Layout>
        <Header />
        <ElementSelectPage />
      </Layout>
  },
  {
    path: PATH.SIGN_IN,
    element:
      <Layout>
        <Header />
        <SignInPage />
      </Layout>
  },
  {
    path: PATH.PALETTE,
    element:
      <Layout>
        <Header />
        <CanvasPage />
      </Layout>
  },
]);

export { Router };
