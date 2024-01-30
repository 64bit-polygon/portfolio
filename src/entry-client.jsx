import "./index.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig.js";
initializeApp(firebaseConfig);

ReactDOM.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
)
