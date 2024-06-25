// Dashboard.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import { SideNavBar } from "./component/SideNavBar/index.js";
import TopNavbar from "./component/TopNavbar/index.js";
import RightSideBar from "./component/RightSideBar/index.js";
import DashboardMain from "./component/Main/index.js";
import MainPayment from "./component/Payment/component/Main/index.js";
import ContactForm from "./component/Support/ContactUsFrom/index.js";

const Dashboard = () => {
  const [isRightBarShown, setIsRightBarShown] = useState(true);
  return (
    <div className="w-full">
      <div className="bg-slate-50 p-[1rem]">
        <div className="flex">
          <SideNavBar />
          <div className="w-full">
            <TopNavbar />
            <Routes>
              <Route path="/" element={<DashboardMain />} />
              <Route path="/payment" element={<MainPayment />} />
              <Route path="/support" element={<ContactForm />} />
            </Routes>
            {isRightBarShown && (
              <div className="p-[0.8rem] mt-[1.5rem]">
                <RightSideBar />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
