import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./index.css";
import MainReport from "./component/MainReport";

const App = () => (
  
  <div >
    <BrowserRouter>
      <Routes>
        <Route path="/report" element={<MainReport/>}/>
      </Routes>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

export default App;