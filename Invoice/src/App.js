import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import MainInvoice from "./component/Main";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const App = () => (
  <div className="mt-2 ">
<BrowserRouter>
  <Routes>
    <Route path="/invoice" element={ <MainInvoice/>}/>
  </Routes>
  </BrowserRouter>
   
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

export default App;