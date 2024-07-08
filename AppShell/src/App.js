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
import {useLocation} from "react-router-dom"
import CommonLayout from "./components/CommonLayout";
function App() {
  const value = useSelector((state) => state.test.value);
  const dispatch = useDispatch();
  const location = useLocation()

  return (
    <div className="test mx-auto bg-primary bg-slate-50">
      {
        location.pathname==="/" ||
        location.pathname.startsWith('/accounts')?
        <Routes>
          <Route path="/*" element={<Auth />} />
       </Routes>
      :
      <CommonLayout>
        <Routes>   
          <Route path="/dashboard/*" element={<Dashboard  />} />
          <Route path="/invoice/*" element={<Invoice />} />
          <Route path="/report/*" element={<Report />} />
        </Routes>
      </CommonLayout>
      }
     

   
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);

export default App;
