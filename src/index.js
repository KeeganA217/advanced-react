import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter, Route } from "react-router-dom";
import Root from "./Root";

ReactDom.render(
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>,
  document.querySelector("#root")
);
