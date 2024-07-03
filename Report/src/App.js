// Report.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainReport from "./component/MainReport";

const Report = () => (
      <Routes>
          <Route path="" element={<MainReport />} />
      </Routes>
);

export default Report;
