import React from "react";
import { RouterProvider } from "react-router-dom";
// import { ThemeProvider, createGlobalStyle } from "styled-components";

import ReactDOM from "react-dom/client";
import { Router } from "src/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={Router} />
);
