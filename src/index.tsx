import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./App";
import Layout from "./Layout";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Layout />
    </StyledEngineProvider>
  </React.StrictMode>
);
