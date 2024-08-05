// AppShell.js (Folder A)
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Auth from "Auth/Auth";
import Dashboard from "Dashboard/Dashboard";
import Invoice from "Invoice/Invoice";
import Report from "Report/Report";
import Admin from "Admin/Admin";
import reduxStore from "./store";
import { useLocation } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CommonLayout from "./components/CommonLayout";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import AxiosInstance from "controllers/AxiosInstance/index";
import NotFound from "./components/Error";
import Home from "./components/LandingPage/page";
function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const location = useLocation();
  return (
    <ErrorBoundary>
      <div className="2xl:container mx-auto  bg-primary">
        <ToastContainer
          toastStyle={{
            borderRadius: "10px",
          }}
          autoClose={2000}
          transition={Slide}
          pauseOnHover={false}
          limit={1}
        />
        {
          //  (location.pathname==="/" ||
          //   location.pathname.startsWith('/accounts'))
          !isLogin ? (
            <ErrorBoundary>
              <Routes>
                <Route path="/"  element={<Home/>}/>
                 <Route path="/accounts/*" element={<Auth />} />
              </Routes>
            </ErrorBoundary>
          ) : (
            <CommonLayout>
              <Routes>
                <Route
                  path="/dashboard/*"
                  element={
                    <ErrorBoundary>
                      {" "}
                      <Dashboard />
                    </ErrorBoundary>
                  }
                />
                <Route
                  path="/invoice/*"
                  element={
                    <ErrorBoundary>
                      <Invoice />
                    </ErrorBoundary>
                  }
                />
                <Route
                  path="/report/*"
                  element={
                    <ErrorBoundary>
                      <Report />
                    </ErrorBoundary>
                  }
                />
                <Route
                  path="/admin/*"
                  element={
                    <ErrorBoundary>
                      <Admin />
                    </ErrorBoundary>
                  }
                />
                {/* <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                /> */}
              </Routes>
            </CommonLayout>
          )
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
