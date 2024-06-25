// Report.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainReport from "./component/MainReport";

const Report = () => (
  <div>
    <Routes>
      <Route path="/" element={<MainReport />} />
    </Routes>
  </div>
);

export default Report;
