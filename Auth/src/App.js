// Auth.js
import React from "react";
import ReactDOM from "react-dom/client"
import { Routes, Route ,BrowserRouter,Navigate} from "react-router-dom";
import "./index.css";
import LoginUser from "./component/Login/index.js";
import SignUpUser from "./component/Signup/index.js";
import AccountType from "./component/AccountType/index.js";
import { OtpScreen } from "./component/OtpScreen/index.js";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import AxiosInstance from "controllers/AxiosInstance/index"
import ErrorBoundary from "./component/ErrorBoundary/index.js";
import NotFound from "./component/Error";
import reduxStore from "./store";
const Auth = () => (
  
  <div className="bg-[#fcfcfc] min-h-screen">
    {/* <ToastContainer/> */}
  <Routes>
    {/* <Route path="/" element={<LoginUser />} /> */}
    <Route path="/login" element={<LoginUser />} />
    <Route path="/signup" element={<SignUpUser />} />
    <Route path="/type" element={<AccountType />} />
    <Route path="/otp-verification" element={<OtpScreen />} />
    {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
  </Routes>
  </div>

);
// const root = ReactDOM.createRoot(document.getElementById("app"));
// root.render(
//   <Provider store={reduxStore}>
//   <BrowserRouter>
//     <Auth />
//   </BrowserRouter>
//   </Provider>
// )

export default Auth;
