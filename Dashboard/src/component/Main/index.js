import {SideNavBar} from "../SideNavBar/index.js";
import {PaymentCard} from "../PaymentCard/index.js";
import {QuickSend} from "../QuickSend";
import Templates from "../Templates/index.js";
import TopNavbar from "../TopNavbar/index.js";
import RightSideBar from "../RightSideBar/index.js";
import LatestActions from "../LatestActions/index.js";
import NoitificationBar from "../NotificationBar/index.js";

function DashboardMain(){
    return(
      <div className=" mt-5 bg-primary p-[2rem] rounded-2xl ">
        <NoitificationBar/>
            <div className="flex gap-4">
            <PaymentCard/>
            <Templates/>
            </div>
            <QuickSend/>
            <LatestActions/>
      </div>
    )
}

export default DashboardMain;