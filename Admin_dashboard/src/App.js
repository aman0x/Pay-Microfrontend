import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route,BrowserRouter } from "react-router-dom";


const Admin = () => (
  <Routes>
    <Route path="/" element={<>Hello Admin</>} />
  </Routes>
);


export default Admin