import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ResumeProvider } from "./context/ResumeContext";
import "./index.css";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResumeProvider>
        <App />
      </ResumeProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
