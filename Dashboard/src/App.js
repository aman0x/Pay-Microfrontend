import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { SideNavBar } from "./component/SideNavBar";
import { PaymentCard } from "./component/PaymentCard";

const App = () => (
  <div className="test flex">
    <SideNavBar/>
    <PaymentCard/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
