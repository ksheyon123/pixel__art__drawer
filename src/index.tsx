import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Router } from "src/Router";
import "src/Styles/fonts.css";
import { theme } from "src/Styles/theme";
import { Loader } from "src/Components/index";

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        onResize(channel: string, args: any): void;
      };
    };
  }
}

const GlobalStyling = createGlobalStyle`
  * {
    box-sizing  : border-box;
  }
  body {
    font-family : Kong;
    font-style: normal;
    font-weight: 400;
    margin : 0px;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyling />
    <RecoilRoot>
      <RouterProvider
        router={Router}
        fallbackElement={<Loader />}
      />
    </RecoilRoot>
  </ThemeProvider>

);
