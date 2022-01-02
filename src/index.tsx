import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GoalContextProvider from "./context";
import "./index.scss";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

render(
  <React.StrictMode>
    <Router>
      <GoalContextProvider>
        <App />
      </GoalContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
reportWebVitals();
