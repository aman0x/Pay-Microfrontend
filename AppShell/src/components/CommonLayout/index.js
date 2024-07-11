import { useLocation } from "react-router-dom"
import { SideNavBar } from "./SideNavBar";
import TopNavbar from "./TopNavbar";
import SecondaryTopBar from "./SecondaryTopBar";
import RightSideStatsBar from "./RightSideStatsBar";
import RightSideBar from "./RightSideBar";
import MainFooter from "./Footer";
import AdminSideBar from "./AdminSideBar";
import AdminRightSideBar from "./AdminRightSideBar";

function CommonLayout({children}){
    const location = useLocation()
    return(
        <div className="bg-slate-50  flex flex-col ">
        <div className="flex">
          {
            location.pathname.startsWith('/admin')?
            <AdminSideBar/>
            :
            <SideNavBar />
          }
          <div className="w-full will-change-auto">  
            {
              ( location.pathname !== '/dashboard/payment/new-payment' &&
                !location.pathname.startsWith('/dashboard/beneficiary') &&
                !location.pathname.startsWith('/dashboard/accounts') &&
                !location.pathname.startsWith('/dashboard/payment/') &&
                !location.pathname.startsWith('/dashboard/profile')&&
                !location.pathname.startsWith('/dashboard/card')&&
                !location.pathname.startsWith('/invoice/')
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
                location.pathname.startsWith('/admin') &&
                !location.pathname.startsWith('/admin/users')?
                <AdminRightSideBar/>
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