import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import { SideNavBar } from "./SideNavBar";
import TopNavbar from "./TopNavbar";
import SecondaryTopBar from "./SecondaryTopBar";
import RightSideStatsBar from "./RightSideStatsBar";
import RightSideBar from "./RightSideBar";
import MainFooter from "./Footer";
import AdminSideBar from "./AdminSideBar";
import AdminRightSideBar from "./AdminRightSideBar";
import { useUserCommon } from "#hooks/index.js";
function CommonLayout({children}){
    const location = useLocation()
    const {handleGetUserDetail} = useUserCommon()
    useEffect(()=>{
      const fetchUser=async()=>{
          const data = await  handleGetUserDetail()
          console.log("user",data)
      }
      fetchUser()
  },[])
    return(
        <div className="bg-slate-50  flex flex-col ">
        <div className="flex">
          <div>
          {
            location.pathname.startsWith('/admin')?
            <AdminSideBar/>
            :
            <div className="block">
              <SideNavBar />
            </div>
          }
          </div>
          <div className="flex flex-col w-full">  
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
            <div className="ml-2 flex">
                
                {children}   
               
                <div className="hide">
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
        </div>
        <MainFooter/>
      </div>
    )
}

export default CommonLayout;