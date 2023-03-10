import React from "react";
import ReactDOM from "react-dom/client";

import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.querySelector(".container") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
