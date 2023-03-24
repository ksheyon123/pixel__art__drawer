import { createHashRouter } from "react-router-dom";
import { Layout, Header } from "src/Components/index";
import { PATH } from "src/Constants/index";
import { SignUpPage, CanvasPage, ElementSelectPage, SignInPage } from "src/Pages/";

const Router = createHashRouter([
  {
    path: PATH.SIGN_IN,
    element:
      <Layout>
        <Header />
        <SignInPage />
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
    path: PATH.SIGN_UP,
    element:
      <Layout>
        <Header />
        <SignUpPage />
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
