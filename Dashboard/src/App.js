// Dashboard.js
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import { SideNavBar } from "./component/SideNavBar/index.js";
import TopNavbar from "./component/TopNavbar/index.js";
import RightSideBar from "./component/RightSideBar/index.js";
import DashboardMain from "./component/Main/index.js";
import MainPayment from "./component/Payment/component/Main/index.js";
import ContactForm from "./component/Support/ContactUsFrom/index.js";
import Notification from "./component/Notification/index.js";
import Statistic from "./component/Statistics/index.js";
import RightSideStatsBar from "./component/Statistics/RightSideStatsBar/index.js";
import PaymentDetailPage from "./component/Payment/component/PaymentDetailPage/index.js";

const Dashboard = () => {
  const [isRightBarShown, setIsRightBarShown] = useState(true);
  const location  = useLocation()
  return (
    <div>
      <div className="bg-slate-50 p-[1rem] min-w-[1320px]">
        <div className="flex justify-center">
          <SideNavBar />
          <div className="">  
            <TopNavbar />   
            <div className="flex">
              <Routes>
                <Route path="/" element={<DashboardMain />} />
                <Route path="/payment" element={<MainPayment />} />
                <Route path="/support" element={<ContactForm />} />
                <Route path="/notification" element={<Notification/>}/>
                 <Route path="/statistic" element={<Statistic/>}/>
                 <Route path="/payment/payment-detail" element={<PaymentDetailPage/>}/>
              </Routes>
              {
                location.pathname === '/dashboard/statistic' ?
                <RightSideStatsBar/>
                :
                <RightSideBar/>
              }
            
             
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
