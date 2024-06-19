import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import MainInvoice from "./component/Main";

const App = () => (
  <div className="mt-10 ">
    <MainInvoice/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
