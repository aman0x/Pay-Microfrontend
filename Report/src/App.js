// Report.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainReport from "./component/MainReport";
import { SideNavBar } from "./component/SideNavBar";
import TopNavbar from "./component/TopNavbar/index.js"
import MainFooter from "./component/Footer/index.js";
const Report = () => (
  // <div>
  //   <Routes>
  //     <Route path="/" element={<MainReport />} />
  //   </Routes>
  // </div>
  <div className="bg-slate-50">
  <div className="flex justify-center">
    <div>
      <SideNavBar/> 
    </div>
    <div className="w-full">
      <TopNavbar/>
      <div className="flex w-full">
        <Routes>
          <Route path="/" element={<MainReport />} />
        </Routes>
      </div>
      
    </div>
    <div> 
    </div>     
  </div>
  <MainFooter/>
</div>
);

export default Report;
