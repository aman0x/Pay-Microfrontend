// Invoice.js
import React from "react";
import { Route, Routes ,useLocation} from "react-router-dom";
import "./index.css";
import MainInvoice from "./component/Main";
import { SideNavBar } from "./component/SideNavBar"
import TopNavbar from "./component/TopNavbar/index.js";
import RightSideBar from "./component/RightSideBar"
import NewInvoice from "./component/NewInvoices/index.js";
import InvoiceDetail from "./component/InvoiceDetail/index.js";
import NewInvoiceDetail from "./component/NewInvoiceDetail/index.js";
import MakeInvoice from "./component/MakeInvoice/index.js";
import SecondaryTopBar from "./component/SecondaryTopBar/index.js";
import MainFooter from "./component/Footer/index.js";

const Invoice = () => {
  const location  = useLocation()
  return(
  <div className="bg-slate-50">
    <div className="flex justify-center">
      <div>
        <SideNavBar/> 
      </div>
      <div className="w-full">
       {
        location.pathname==="/invoice/send-invoice" ?
        <SecondaryTopBar/>
        :
        <TopNavbar/>
       } 
        <div className="flex ml-1">
          <Routes>
            <Route path="/" element={<MainInvoice />} />
            <Route path="/new-invoice" element={<NewInvoice/>}/>
            <Route path="/invoice-detail" element={<InvoiceDetail/>}/>
            <Route path="/new-invoice/invoice-detail" element={<NewInvoiceDetail/>}/>
            <Route path="/send-invoice" element={<MakeInvoice/>}/>
          </Routes>
        
            <RightSideBar/>
           
        </div>
        
      </div>
      <div> 
      </div>     
    </div>
    <MainFooter/>
  </div>
)
};

export default Invoice;
