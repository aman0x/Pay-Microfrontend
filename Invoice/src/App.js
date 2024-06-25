// Invoice.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainInvoice from "./component/Main";
import { SideNavBar } from "./component/SideNavBar"
import TopNavbar from "./component/TopNavbar/index.js";
import RightSideBar from "./component/RightSideBar"
const Invoice = () => (
  <div className="max-w-[1600px] bg-slate-50 p-[1rem]">
    <div className="flex">
      <div>
        <SideNavBar/> 
      </div>
      <div className="w-full">
        <TopNavbar/>
        <div className="flex">
          <Routes>
            <Route path="/" element={<MainInvoice />} />
          </Routes>
          <RightSideBar/>
        </div>
        
      </div>
      <div> 
      </div>     
    </div>
  </div>
);

export default Invoice;
