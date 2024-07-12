import React from "react";
import ReactDOMClient from 'react-dom/client';
import { Routes, Route,BrowserRouter } from "react-router-dom";
import Main from "./components/Dashboard";
import "./index.css"
import UserActivity from "./components/UserActivity/index.js"
import UserInvoice from "./components/InvoiceStats/index.js";
import AllUsers from "./components/UserActivity/AllUsers/index.js";
const Admin = () => (
  <Routes>
    <Route path="/" element={<Main/>} />
    <Route path="user-activity" element={<UserActivity/>} />
    <Route path="user-invoice" element={<UserInvoice/>}/>
    <Route path="users" element={<AllUsers/>}/>
  </Routes>
);

// const container = document.getElementById('app');
// let root = container._reactRoot;
// if(root){
//   console.log("rott",root)
// }
// else{
//   console.log("no-root")
// }
// // Check if root exists for the container

// if (!root) {
//   root = ReactDOMClient.createRoot(container);
//   container._reactRoot = root;
// }

// // Render the application using root.render()
// root.render(
//   <BrowserRouter basename="admin">
//     <Admin />
//   </BrowserRouter>
// );

export default Admin