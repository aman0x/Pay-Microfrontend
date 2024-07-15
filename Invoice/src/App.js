// Invoice.js
import React from "react";
import { Route, Routes} from "react-router-dom";
import "./index.css";
import MainInvoice from "./component/Main";
import NewInvoice from "./component/NewInvoices/index.js";
import InvoiceDetail from "./component/InvoiceDetail/index.js";
import NewInvoiceDetail from "./component/NewInvoiceDetail/index.js";
import MakeInvoice from "./component/MakeInvoice/index.js";
import { ToastContainer } from "react-toastify";


const Invoice = () => {
  return(
    <>
    <ToastContainer/>
    <Routes>
            <Route path="/" element={<MainInvoice />} />
            <Route path="/new-invoice" element={<NewInvoice/>}/>
            <Route path="/invoice-detail" element={<InvoiceDetail/>}/>
            <Route path="/new-invoice/invoice-detail" element={<NewInvoiceDetail/>}/>
            <Route path="/send-invoice" element={<MakeInvoice/>}/>
    </Routes>
    </>
  )
  };

export default Invoice;
