import { createHashRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing  : content-box;
  }
  body {
    margin : 0px;
  }
`;

const Router = createHashRouter([
  {
    path: "/",
    // element: <Root />,
    // loader: rootLoader,
    children: [
      {
        path: "team",
        // element: <Team />,
        // loader: teamLoader,
      },
    ],
  },
])

export { Router };
