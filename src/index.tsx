import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Router } from "src/Router";
import { theme } from "src/Styles/theme";
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
  <ThemeProvider theme={theme}>
    <GlobalStyling />
    <RouterProvider
      router={Router}
      fallbackElement={<Loader />}
    />
  </ThemeProvider>

);
