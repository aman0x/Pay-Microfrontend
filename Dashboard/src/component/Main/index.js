import {SideNavBar} from "../SideNavBar/index.js";
import {PaymentCard} from "../PaymentCard/index.js";
import {QuickSend} from "../QuickSend";
import Templates from "../Templates/index.js";
import TopNavbar from "../TopNavbar/index.js";
import RightSideBar from "../RightSideBar/index.js";
import LatestActions from "../LatestActions/index.js";

function DashboardMain(){
    return(
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
    )
}

export default DashboardMain;