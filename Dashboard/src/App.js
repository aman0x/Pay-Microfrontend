// Dashboard.js
import React from "react";
import ReactDOM from "react-dom/client";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import DashboardMain from "./component/Main/index.js";
import MainPayment from "./component/Payment/component/Main/index.js";
import ContactForm from "./component/Support/ContactUsFrom/index.js";
import Notification from "./component/Notification/index.js";
import Statistic from "./component/Statistics/index.js";
import PaymentDetailPage from "./component/Payment/component/PaymentDetailPage/index.js";
import NewPayment from "./component/Payment/component/NewPayment/index.js";
import MyAccounts from "./component/BankAccount/MyAccounts/index.js";
import AddNewAccount from "./component/BankAccount/MyAccounts/AddNewAccouunt/index.js";
import MyBeneficiary from "./component/Beneficiary/MyBeneficiary/index.js";
import AddNewBeneficiary from "./component/Beneficiary/AddBeneficiary/index.js";
import CardsDetail from "./component/MyCards/CardsDetail/index.js";
import AddCard from "./component/MyCards/AddCard/index.js";
import MyCards from "./component/MyCards/index.js";
import AxiosInstance from "controllers/AxiosInstance/index";
import { ToastContainer } from "react-toastify";
import ProfileOrKyc from "./component/ProfileOrKyc";
import MyContacts from "./component/MyContacts";
import BankDetails from "./component/BankDetails";
import QuickPayment from "./component/Payment/component/QuickPayment";
import ShellStore from "AppShell/shellStore";
import { Provider } from "react-redux";
const Dashboard = () => {
  return (
    <>
      {/* <ToastContainer/> */}
      <Routes>
        <Route path="/" element={<DashboardMain />} />
        <Route path="/payment" element={<MainPayment />} />
        <Route path="/support" element={<ContactForm />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/statistic" element={<Statistic />} />
        <Route path="/payment/payment-detail" element={<PaymentDetailPage />} />
        <Route path="/payment/new-payment" element={<NewPayment />} />
        <Route path="/payment/quick-payment" element={<QuickPayment />} />
        <Route path="/my-contacts" element={<MyContacts />} />
        <Route path="/profile" element={<ProfileOrKyc />} />
        <Route path="/kyc" element={<ProfileOrKyc />} />
        <Route path="/bankdetails" element={<BankDetails />} />
        <Route path="/accounts" element={<MyAccounts />} />
        <Route path="/accounts/add-new" element={<AddNewAccount />} />
        <Route path="/beneficiary" element={<MyBeneficiary />} />
        <Route path="/beneficiary/add-new" element={<AddNewBeneficiary />} />
        <Route path="/card" element={<MyCards />} />
        <Route path="/card/card-detail" element={<CardsDetail />} />
        <Route path="/card/add-card" element={<AddCard />} />
      </Routes>
    </>
  );
};

// const root = ReactDOM.createRoot(document.getElementById("app"));
// root.render(
//   <Provider store={ShellStore}>
//     <BrowserRouter>
//       <Dashboard />
//     </BrowserRouter>
//   </Provider>
// );

export default Dashboard;
