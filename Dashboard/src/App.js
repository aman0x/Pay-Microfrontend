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
import Profile from "./component/Profile/index.js";
import NewPayment from "./component/Payment/component/NewPayment/index.js";
import SecondaryTopBar from "./component/SecondaryTopBar/index.js";
import MyAccounts from "./component/BankAccount/MyAccounts/index.js";
import AddNewAccount from "./component/BankAccount/MyAccounts/AddNewAccouunt/index.js";
import MyBeneficiary from "./component/Beneficiary/MyBeneficiary/index.js";
import AddNewBeneficiary from "./component/Beneficiary/AddBeneficiary/index.js";
import MainFooter from "./component/Footer/index.js";
const Dashboard = () => {
  const [isRightBarShown, setIsRightBarShown] = useState(true);
  const location  = useLocation()
  return (
      <div className="bg-slate-50  flex flex-col ">
        <div className="flex justify-center">
          <SideNavBar />
          <div className="w-full ">  
            {
              ( location.pathname !== '/dashboard/payment/new-payment' &&
                !location.pathname.startsWith('/dashboard/beneficiary') &&
                !location.pathname.startsWith('/dashboard/accounts')
               )?
               <TopNavbar /> 
               :
              <SecondaryTopBar/>
              
              
            }  
            <div className="flex ml-1">
              <Routes>
                <Route path="/" element={<DashboardMain />} />
                <Route path="/payment" element={<MainPayment />} />
                <Route path="/support" element={<ContactForm />} />
                <Route path="/notification" element={<Notification/>}/>
                 <Route path="/statistic" element={<Statistic/>}/>
                 <Route path="/payment/payment-detail" element={<PaymentDetailPage/>}/>
                 <Route path ="/payment/new-payment" element={<NewPayment/>}/>
                 <Route path="/profile" element={<Profile/>}/>
                 <Route path="/accounts" element={<MyAccounts/>}/>
                 <Route path="/accounts/add-new" element={<AddNewAccount/>}/>
                 <Route path="/beneficiary" element={<MyBeneficiary/>}/>
                 <Route path="/beneficiary/add-new" element={<AddNewBeneficiary/>}/>
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
        <MainFooter/>
      </div>
  );
};

export default Dashboard;
