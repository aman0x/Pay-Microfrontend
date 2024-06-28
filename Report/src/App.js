// Report.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainReport from "./component/MainReport";
import { SideNavBar } from "./component/SideNavBar";
import TopNavbar from "./component/TopNavbar/index.js"
const Report = () => (
  // <div>
  //   <Routes>
  //     <Route path="/" element={<MainReport />} />
  //   </Routes>
  // </div>
  <div className="bg-slate-50 p-[1rem]">
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
</div>
);

export default Report;
