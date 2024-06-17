import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import {SideNavBar} from "./component/SideNavBar/index.js";
import {PaymentCard} from "./component/PaymentCard/index.js";
import {QuickSend} from "./component/QuickSend";
import Templates from "./component/Templates/index.js";
import TopNavbar from "./component/TopNavbar/index.js";
import RightSideBar from "./component/RightSideBar/index.js";
import LatestActions from "./component/LatestActions/index.js";
const App = () => (
  <div className=" bg-slate-50 p-[1rem]">
    <div className="flex">
      <div>
      <SideNavBar/>
      </div>
      <div className="w-full">
        <TopNavbar/>
        <div className="flex ">
          <div className="max-w-[75%] mt-5 bg-primary p-[2rem] rounded-2xl ">
            <div className="flex gap-4">
            <PaymentCard/>
            <Templates/>
            </div>
            <QuickSend/>
            <LatestActions/>
          </div>
          <div className="p-[0.8rem] mt-[1.5rem]">
            <RightSideBar/>
          </div>
        </div>
      </div>
     
    </div>
   
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
