import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom/client";

import { Router } from "src/Router";
import { Loader } from "src/Components/index";

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing  : content-box;
  }
  body {
    margin : 0px;
  }
`;



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={{}}>
    <GlobalStyling />
    <RouterProvider
      router={Router}
      fallbackElement={<Loader />}
    />
  </ThemeProvider>

);
