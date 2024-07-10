// Auth.js
import React from "react";
import ReactDOM from "react-dom/client"
import { Routes, Route ,BrowserRouter} from "react-router-dom";
import "./index.css";
import LoginUser from "./component/Login/index.js";
import SignUpUser from "./component/Signup/index.js";
import AccountType from "./component/AccountType/index.js";
import { OtpScreen } from "./component/OtpScreen/index.js";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import reduxStore from "./store/index.js";
const Auth = () => (
  
  <div className="bg-white">
    <ToastContainer/>
  <Routes>
    <Route path="/" element={<LoginUser />} />
    <Route path="/accounts/login" element={<LoginUser />} />
    <Route path="/accounts/signup" element={<SignUpUser />} />
    <Route path="/accounts/type" element={<AccountType />} />
    <Route path="/accounts/otp-verification" element={<OtpScreen />} />
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
