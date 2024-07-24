import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { authActions } from "Auth/authReducer";
import { FaBell, FaCog, FaHome, FaInfo, FaUser } from "react-icons/fa";

export function MobileNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { name: "home", icon: <FaHome />, label: "Home", path: "/dashboard" },
    {
      name: "transactions",
      icon: <FaUser />,
      label: "Transactions",
      path: "/dashboard/payment",
    },
    { name: "invoice", icon: <FaBell />, label: "Invoice", path: "/invoice" },
    {
      name: "statistic",
      icon: <FaCog />,
      label: "Statistic",
      path: "/dashboard/statistic",
    },
  ];

  const [navIndex, setNavIndex] = useState(() => {
    return parseInt(localStorage.getItem("navIndex")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("navIndex", navIndex);
  }, [navIndex]);

  useEffect(() => {
    const pathToIndex = {
      "/dashboard": 0,
      "/dashboard/payment": 1,
      "/invoice": 2,
      "/dashboard/statistic": 3,
      "/dashboard/notification": 4,
      "/dashboard/support": 5,
    };
    setNavIndex(pathToIndex[location.pathname] ?? 0);
  }, [location.pathname]);

  const handleNavigation = (index, path) => {
    setNavIndex(index);
    navigate(path);
  };

  return (
    <>
      {/* <div className="hide md:block">
        <div
          className={`hidden bg-primary cursor-pointer ${
            isNavOpen ? "min-w-[13.5rem]" : "nav-close"
          } sm:flex flex-col h-[85vh] max-h-[600px] text-sm justify-between border-gray-400 py-[1.5rem] pr-[1rem] rounded-3xl mx-[0.5rem] my-[0.5rem] transition-all duration-300 shadow-2xl overflow-y-hidden`}
        >
          <div
            className="flex gap-1 items-center pl-4"
            onClick={() => setNavOpen(!isNavOpen)}
          >
            <img
              src="/dashboard/paymorz-logo.png"
              alt="paymorz-logo"
              width={isNavOpen ? "34px" : "34px"}
              style={{
                marginInline: isNavOpen ? "0px" : "14px",
              }}
            />
            <span
              className="cursor-pointer"
              style={{ display: isNavOpen ? "none" : "flex" }}
            >
              <svg
                width="7"
                height="12"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.49951L6 6.49951L1 11.4995"
                  stroke="#B6B8BA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <p className="italic pl-2 font-extrabold from-neutral-900 text-base">
              Paymorz
              <span className="pl-1 text-xl font-extrabold size-8 color-linear">
                .
              </span>
            </p>
            <span className="ml-9 cursor-pointer">
              {" "}
              <svg
                width="7"
                height="12"
                viewBox="0 0 8 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.49951L6 6.49951L1 11.4995"
                  stroke="#B6B8BA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <button
              className={`flex gap-4 items-center ${
                navIndex === 0 ? "font-semibold text-black" : ""
              }`}
              onClick={() => handleNavigation(0, "/dashboard")}
              style={{ color: "grey" }}
            >
              {navIndex === 0 ? (
                <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
              ) : (
                <div className="h-[40px] w-[2.5px]"></div>
              )}
              <span>
                <img
                  src={
                    navIndex === 0
                      ? "/images/union_selected.svg"
                      : "/images/union.svg"
                  }
                  className={`${isNavOpen ? "" : "mobile-nav"}`}
                  alt="Dashboard logo"
                />
              </span>
              <p className={`${navIndex === 0 ? "text-black" : ""} text-sm`}>
                Dashboard
              </p>
              {notificationIndex === 1 && (
                <div className="relative primary-linear-gr-bg p-[1.5px] rounded-2xl">
                  <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">
                    1 New
                  </div>
                </div>
              )}
            </button>

            <button
              className={`flex gap-4 items-center ${
                navIndex === 1 ? "font-semibold text-black" : ""
              }`}
              onClick={() => handleNavigation(1, "/dashboard/payment")}
              style={{ color: "grey" }}
            >
              {navIndex === 1 ? (
                <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
              ) : (
                <div className="h-[40px] w-[2.5px]"></div>
              )}
              <span>
                <img
                  src={
                    navIndex === 1
                      ? "/images/credit_selected.svg"
                      : "/images/credit.svg"
                  }
                  className={`${isNavOpen ? "" : "mobile-nav"}`}
                  alt="Credit logo"
                />
              </span>
              <p className={`${navIndex === 1 ? "text-black" : ""} text-sm`}>
                Payments
              </p>
              {notificationIndex === 2 && (
                <div className="relative primary-linear-gr-bg p-[1.5px] rounded-2xl">
                  <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">
                    1 New
                  </div>
                </div>
              )}
            </button>

            <button
              className={`flex gap-4 items-center ${
                navIndex === 2 ? "font-semibold text-black" : ""
              }`}
              onClick={() => handleNavigation(2, "/invoice")}
              style={{ color: "grey" }}
            >
              {navIndex === 2 ? (
                <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
              ) : (
                <div className="h-[40px] w-[2.5px]"></div>
              )}
              <span>
                <img
                  src={
                    navIndex === 2
                      ? "/images/invoice_selected.svg"
                      : "/images/invoice.svg"
                  }
                  className={`${isNavOpen ? "" : "mobile-nav"}`}
                  alt="Invoice logo"
                />
              </span>
              <p className={`${navIndex === 2 ? "text-black" : ""} text-sm`}>
                Invoices
              </p>
              {notificationIndex === 3 && (
                <div className="relative primary-linear-gr-bg p-[1.5px] rounded-2xl">
                  <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">
                    1 New
                  </div>
                </div>
              )}
            </button>

            <button
              className={`flex gap-4 items-center ${
                navIndex === 3 ? "font-semibold text-black" : ""
              }`}
              onClick={() => handleNavigation(3, "/dashboard/statistic")}
              style={{ color: "grey" }}
            >
              {navIndex === 3 ? (
                <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
              ) : (
                <div className="h-[40px] w-[2.5px]"></div>
              )}
              <span>
                <img
                  src={
                    navIndex === 3
                      ? "/images/statistics_selected.png"
                      : "/images/statistics.svg"
                  }
                  className={`${isNavOpen ? "" : "mobile-nav"}`}
                  alt="Statistics logo"
                />
              </span>
              <p className={`${navIndex === 3 ? "text-black" : ""} text-sm`}>
                Statistic
              </p>
              {notificationIndex === 4 && (
                <div className="relative primary-linear-gr-bg p-[1.5px] rounded-2xl">
                  <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">
                    1 New
                  </div>
                </div>
              )}
            </button>

            <button
              className={`flex gap-4 items-center ${
                navIndex === 4 ? "font-semibold text-black" : ""
              }`}
              onClick={() => handleNavigation(4, "/dashboard/notification")}
              style={{ color: "grey" }}
            >
              {navIndex === 4 ? (
                <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
              ) : (
                <div className="h-[40px] w-[2.5px]"></div>
              )}
              <span>
                <img
                  src={
                    navIndex === 4
                      ? "/images/notification_selected.svg"
                      : "/images/notification.svg"
                  }
                  className={`${isNavOpen ? "" : "mobile-nav"}`}
                  alt="Notification logo"
                />
              </span>
              <p className={`${navIndex === 4 ? "text-black" : ""} text-sm`}>
                Notifications
              </p>
              {notificationIndex === 5 && (
                <div className="relative primary-linear-gr-bg p-[1.5px] rounded-2xl">
                  <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">
                    1 New
                  </div>
                </div>
              )}
            </button>

            <button
              className={`flex gap-4 items-center ${
                navIndex === 5 ? "font-semibold text-black" : ""
              }`}
              onClick={() => handleNavigation(5, "/dashboard/support")}
              style={{ color: "grey" }}
            >
              {navIndex === 5 ? (
                <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
              ) : (
                <div className="h-[40px] w-[2.5px]"></div>
              )}
              <span>
                <img
                  src={
                    navIndex === 5
                      ? "/images/support_selected.svg"
                      : "/images/support.svg"
                  }
                  className={`${isNavOpen ? "" : "mobile-nav"}`}
                  alt="Support logo"
                />
              </span>
              <p className={`${navIndex === 5 ? "text-black" : ""} text-sm`}>
                Support
              </p>
              {notificationIndex === 6 && (
                <div className="relative primary-linear-gr-bg p-[1.5px] rounded-2xl">
                  <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">
                    1 New
                  </div>
                </div>
              )}
            </button>
          </div>
          <button
            onClick={() => {
              dispatch(authActions.logout());
              localStorage.clear();
              navigate("/");
            }}
            className="cursor-pointer flex gap-4 items-center pl-6"
          >
            <span>
              <img
                src="/images/logout.svg"
                className={`${isNavOpen ? "" : "mobile-nav"}`}
                alt="Logout logo"
              />
            </span>
            <p className="hover:text-black hover:font-semibold">Logout</p>
          </button>
        </div>
      </div> */}

      <div className="bg-green-200 w-[100vw] px-2 flex h-20">
        {tabs.map((tab, index) => (
          <div
            key={tab.name}
            className={`flex flex-1 w-full h-full justify-center items-center ${
              navIndex === index ? "flex-row" : "flex-col"
            }`}
            onClick={() => handleNavigation(index, tab.path)}
          >
            <div
              className={`${
                navIndex === index ? "text-black" : "text-gray-500"
              }`}
            >
              {tab.icon}
            </div>
            {navIndex === index && (
              <p
                className={`ml-2 ${
                  navIndex === index ? "text-black" : "text-gray-500"
                }`}
              >
                {tab.label}
              </p>
            )}
          </div>
        ))}
        <div className="flex">
          <div className="w-14 h-14 bg-red-400 rounded-full -mt-4 mr-2"></div>
        </div>
      </div>
    </>
  );
}
