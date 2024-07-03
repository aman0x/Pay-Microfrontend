import { useLocation } from "react-router-dom"
import { SideNavBar } from "./SideNavBar";
import TopNavbar from "./TopNavbar";
import SecondaryTopBar from "./SecondaryTopBar";
import RightSideStatsBar from "./RightSideStatsBar";
import RightSideBar from "./RightSideBar";
import MainFooter from "./Footer";

function CommonLayout({children}){
    const location = useLocation()
    return(
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
                {children}
              
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
    )
}

export default CommonLayout;