import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./index.css";
import DashboardMain from "./component/Main/index.js";
const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/dashboard" element={<DashboardMain/>}/>
  </Routes>
  </BrowserRouter>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
export default App;