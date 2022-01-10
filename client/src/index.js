import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./components/reducers";
import App from "./components/App";
import Welcome from "./components/Welcome";
import Signup from "./components/auth/Signup";
import Feature from "./components/Feature";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") },
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/feature" element={<Feature />} />
          <Route exact path="/signout" element={<Signout />} />
          <Route exact path="/signin" element={<Signin />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
