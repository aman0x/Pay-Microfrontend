import { useLocation } from "react-router-dom";
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
import { MobileNavBar } from "./MobileNavBar";
import MobileTopNavbar from "./MobileTopNavbar";
function CommonLayout({ children }) {
  const location = useLocation();
  const { handleGetUserDetail } = useUserCommon();
  useEffect(() => {
    const fetchUser = async () => {
      const data = await handleGetUserDetail();
      console.log("user", data);
    };
    fetchUser();
  }, []);
  return (
    <div className="bg-slate-50  flex flex-col ">
      <div className="flex">
        <div>
          {location.pathname.startsWith("/admin") ? (
            <AdminSideBar />
          ) : (
            <>
              <SideNavBar />
              <div className="md:hidden fixed bottom-0 z-50">
                <MobileNavBar />
              </div>
            </>
          )}
        </div>
        <div className="flex flex-col w-full">
          {location.pathname === "/dashboard/payment/new-payment" ||
          location.pathname.startsWith("/dashboard/beneficiary") ||
          location.pathname.startsWith("/dashboard/accounts") ||
          location.pathname.startsWith("/dashboard/payment/") ||
          location.pathname.startsWith("/dashboard/profile") ||
          location.pathname.startsWith("/dashboard/card") ||
          location.pathname.startsWith("/report")||
          location.pathname.startsWith("/invoice/") ? (
            <>
            <SecondaryTopBar />
            {location.pathname !== "/dashboard/" &&
              location.pathname !== "/dashboard" ? (
                <div className="md:hidden">
                  <MobileTopNavbar />
                </div>
              ) : null}
              </>
          ) : (
            <>
              <TopNavbar />
              {location.pathname !== "/dashboard/" &&
              location.pathname !== "/dashboard" ? (
                <div className="md:hidden">
                  <MobileTopNavbar />
                </div>
              ) : null}
            </>
          )}
          <div className="flex justify-between w-full h-full md:px-4 gap-4">
            {children}
            <div className="hide-show">
              {location.pathname === "/dashboard/statistic" ? (
                <RightSideStatsBar />
              ) : location.pathname.startsWith("/admin") &&
                !location.pathname.startsWith("/admin/users") ? (
                <AdminRightSideBar />
              ) : (
                <RightSideBar />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom hide md:block">
        <MainFooter />
      </div>
    </div>
  );
}

export default CommonLayout;
