import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./components/reducers";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";

ReactDOM.render(
  <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
