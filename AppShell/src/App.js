// AppShell.js (Folder A)
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./themes/index.css";
import Auth from "Auth/Auth";
import Dashboard from "Dashboard/Dashboard";
import Invoice from "Invoice/Invoice";
import Report from "Report/Report";
import Admin from "Admin/Admin";
import reduxStore from "./store";
import {useLocation} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'; 
import CommonLayout from "./components/CommonLayout";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import AxiosInstance from "controllers/AxiosInstance/index"
import NotFound from "./components/Error";
function App() {
  const value = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  const location = useLocation()
  //console.log("working",AxiosInstance({url:"hello"}))
  return (
    <ErrorBoundary>
    <div className="test  bg-primary bg-slate-50">
      <ToastContainer limit={1}/>
      {
        location.pathname==="/" ||
        location.pathname.startsWith('/accounts')?
        <ErrorBoundary>
        <Routes>
          <Route path="/*" element={<Auth />} />
       </Routes>
       </ErrorBoundary>
      :
      <CommonLayout>
        <Routes> 
        
          <Route path="/dashboard/*" element={<ErrorBoundary> <Dashboard  /></ErrorBoundary>} />
          
          <Route path="/invoice/*" element={<ErrorBoundary><Invoice /></ErrorBoundary>} />
          <Route path="/report/*" element={<ErrorBoundary><Report /></ErrorBoundary>} />
         <Route path="/admin/*" element={<ErrorBoundary><Admin  /></ErrorBoundary>}/> 
         <Route path="*" element={<NotFound/>} />
        </Routes>
      </CommonLayout>
      }
    </div>
    </ErrorBoundary>
  );
}

const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </Provider>
);

export default App;
