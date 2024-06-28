// Invoice.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import MainInvoice from "./component/Main";
import { SideNavBar } from "./component/SideNavBar"
import TopNavbar from "./component/TopNavbar/index.js";
import RightSideBar from "./component/RightSideBar"
import NewInvoice from "./component/NewInvoices/index.js";
import { useLocation } from "react-router-dom";

const Invoice = () => (
  
  <div className="bg-slate-50 p-[1rem]">
    <div className="flex justify-center">
      <div>
        <SideNavBar/> 
      </div>
      <div className="">
        <TopNavbar/>
        <div className="flex">
          <Routes>
            <Route path="/" element={<MainInvoice />} />
            <Route path="/new-invoice" element={<NewInvoice/>}/>
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
