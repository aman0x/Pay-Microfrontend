// Auth.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import LoginUser from "./component/Login/index.js";
import SignUpUser from "./component/Signup/index.js";
import AccountType from "./component/AccountType/index.js";
import { OtpScreen } from "./component/OtpScreen/index.js";
import { ToastContainer } from "react-toastify";
const Auth = () => (
  
  <div className="bg-white">
    
  <Routes>
    <Route path="/" element={<LoginUser />} />
    <Route path="/accounts/login" element={<LoginUser />} />
    <Route path="/accounts/signup" element={<SignUpUser />} />
    <Route path="/accounts/type" element={<AccountType />} />
    <Route path="/accounts/otp-verification" element={<OtpScreen />} />
  </Routes>

  </div>
);

export default Auth;
