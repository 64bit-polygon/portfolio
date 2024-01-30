import React from "react";
import "./index.scss";
import ReactDOMServer from "react-dom/server";
import { RecoilRoot } from "recoil";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export function render(url) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <RecoilRoot>
        <StaticRouter location={`/${url}`}>
          <App />
        </StaticRouter>
      </RecoilRoot>
    </React.StrictMode>
  )
  return { html }
}
