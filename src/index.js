import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./globalStyle";
import Navbar from "./components/Navbar/Navbar";

ReactDOM.render(
  <React.StrictMode>
    {/* <GlobalStyle /> */}
    {/* <Navbar /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
