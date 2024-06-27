// AppShell.js (Folder A)
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./themes/index.css";
import Auth from "Auth/Auth";
import Dashboard from "Dashboard/Dashboard";
import Invoice from "Invoice/Invoice";
import Report from "Report/Report";
import reduxStore from "./store";

function App() {
  const value = useSelector((state) => state.test.value);
  const dispatch = useDispatch();
 // console.log("env",process.env.REACT_APP_URL)
  return (
    <div className="bg-slate-50">
    <div className="test mx-auto bg-primary">
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Auth />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/invoice/*" element={<Invoice />} />
        <Route path="/report/*" element={<Report />} />
      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);

export default App;
