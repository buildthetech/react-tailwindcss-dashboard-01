import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "react-circular-progressbar/dist/styles.css";
import "tailwindcss/tailwind.css";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { DashboardProvider } from "./hooks/useDashboard";

ReactDOM.render(
  <React.StrictMode>
    <DashboardProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </DashboardProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
