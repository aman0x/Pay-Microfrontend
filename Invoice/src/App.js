// Invoice.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainInvoice from "./component/Main";

const Invoice = () => (
  <div className="mt-2">
    <Routes>
      <Route path="/" element={<MainInvoice />} />
    </Routes>
  </div>
);

export default Invoice;
