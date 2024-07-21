import { MdDashboard, MdOutlineHelp } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { RiPieChart2Fill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { RiNotification4Fill } from "react-icons/ri";
import { FaCreditCard, FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.css";
import { useDispatch } from "react-redux";
import { authActions } from "Auth/authReducer";
export function SideNavBar() {
  const navigate = useNavigate();
  const [isNavOpen, setNavOpen] = useState(true);
  const [navIndex, setNavIndex] = useState(0);
  const [notificationIndex, setnotificationIndex] = useState(0);
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const [pathName, setPathName] = useState(pathname)

  useEffect(() => {
    setPathName(pathname);
  }, [pathname]);
  

  return (
    <div
      className={` hidden bg-primary cursor-pointer ${
        isNavOpen ? "min-w-[13.5rem]" : "nav-close"
      } sm:flex flex-col h-[85vh] max-h-[800px]  text-sm justify-between border-gray-400  py-[1.5rem] pr-[1rem] rounded-3xl mx-[0.5rem] my-[0.5rem]  transition-all duration-300 shadow-2xl overflow-y-hidden`}
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
              stroke-width="1.5"
              stroke-linecap="round"
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
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <button
          className="flex gap-4 items-center"
          onClick={() => {
            setNavIndex(0);
            navigate("/dashboard");
          }}
          style={{ color: "grey" }}
        >
          {(pathName.startsWith('/dashboard') && pathName !== '/dashboard/support' && pathName !== '/dashboard/notification' && pathName !== '/dashboard/statistic' && pathName !== '/dashboard/payment') ? (
            <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
          ) : (
            <div className="h-[40px] w-[2.5px]"></div>
          )}
          <span>
            {(pathName.startsWith('/dashboard') && pathName !== '/dashboard/support' && pathName !== '/dashboard/notification' && pathName !== '/dashboard/statistic' && pathName !== '/dashboard/payment') ? (
              <img
                src="/images/union_selected.svg"
                className={`${isNavOpen ? "" : "mobile-nav"}`}
                alt="Dashboard logo"
              />
            ) : (
              <img
                src="/images/union.svg"
                className={`${isNavOpen ? "" : "mobile-nav"}`}
                alt="Dashboard logo"
              />
            )}
          </span>
          <p
            className={`${
              (pathName.startsWith('/dashboard') && pathName !== '/dashboard/support' && pathName !== '/dashboard/notification' && pathName !== '/dashboard/statistic' && pathName !== '/dashboard/payment') ? "font-semibold text-black" : ""
            } hover:text-black hover:font-semibold text-sm`}
          >
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
          className="flex gap-4 items-center"
          onClick={() => {
            setNavIndex(1);
            navigate("/dashboard/payment");
          }}
          style={{ color: "grey" }}
        >
          {pathName.startsWith('/dashboard/payment') ? (
            <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
          ) : (
            <div className="h-[40px] w-[2.5px]"></div>
          )}
          <span>
            <span className={`${isNavOpen ? "" : "nav-element"}`}>
              {pathName.startsWith('/dashboard/payment') ? (
                <img
                  src="/images/credit_selected.svg"
                  className={`${isNavOpen ? "" : "mobile-nav"}`}
                  alt="Credit logo"
                />
              ) : (
                <img
                  src="/images/credit.svg"
                  className={`${isNavOpen ? "" : "mobile-nav"}`}
                  alt="Credit logo"
                />
              )}
            </span>
          </span>
          <p
            className={`${
              pathName.startsWith('/dashboard/payment') ? "font-semibold text-black" : ""
            } hover:text-black hover:font-semibold mr-2`}
          >
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
          className="flex gap-4 items-center"
          onClick={() => {
            setNavIndex(2);
            navigate("/invoice");
          }}
          style={{ color: "grey" }}
        >
          {pathName.startsWith('/invoice') ? (
            <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
          ) : (
            <div className="h-[40px] w-[2.5px]"></div>
          )}
          <span>
            {pathName.startsWith('/invoice') ? (
              <img
                src="/images/invoice_selected.svg"
                className={`${isNavOpen ? "" : "mobile-nav"}`}
                alt="Invoice logo"
              />
            ) : (
              <img
                src="/images/invoice.svg"
                className={`${isNavOpen ? "" : "mobile-nav"}`}
                alt="Invoice logo"
              />
            )}
          </span>
          <p
            className={`${
              pathName.startsWith('/invoice') ? "font-semibold text-black" : ""
            }  hover:text-black hover:font-semibold mr-5`}
          >
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
          className="flex gap-4 items-center"
          onClick={() => {
            setNavIndex(3);
            navigate("/dashboard/statistic");
          }}
          style={{ color: "grey" }}
        >
          {pathName.startsWith('/dashboard/statistic') ? (
            <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
          ) : (
            <div className="h-[40px] w-[2.5px]"></div>
          )}
          <span>
            {pathName.startsWith('/dashboard/statistic') ? (
              <img
                src="/images/statistics_selected.png"
                className={`${isNavOpen ? "" : "mobile-nav"}`}
                alt="Statistics logo"
              />
            ) : (
              <img
                src="/images/statistics.svg"
                className={`${isNavOpen ? "" : "mobile-nav"}`}
                alt="Statistics logo"
              />
            )}
          </span>
          <p
            className={`${
              pathName.startsWith('/dashboard/statistic') ? "font-semibold text-black" : ""
            }  hover:text-black hover:font-semibold mr-[1.40rem]`}
          >
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
          className="flex gap-4 items-center"
          onClick={() => {
            setNavIndex(4);
            navigate("/dashboard/notification");
          }}
          style={{ color: "grey" }}
        >
          {pathName.startsWith('/dashboard/notification') ? (
            <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
          ) : (
            <div className="h-[40px] w-[2.5px]"></div>
          )}
          <span>
            {pathName.startsWith('/dashboard/notification') ? (
              <img
                src="/images/notification_selected.svg"
                className={`${isNavOpen ? "" : "mobile-nav"}`}
                alt="Notification logo"
              />
            ) : (
              <img
                src="/images/notification.svg"
                className={`${isNavOpen ? "" : "mobile-nav"}`}
                alt="Notification logo"
              />
            )}
          </span>
          <p
            className={`${
              pathName.startsWith('/dashboard/notification') ? "font-semibold text-black" : ""
            } hover:text-black hover:font-semibold`}
          >
            Notification
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
          className="flex gap-4 items-center"
          onClick={() => {
            navigate("/dashboard/support");
            setNavIndex(5);
          }}
          style={{ color: "grey" }}
        >
          {pathName.startsWith('/dashboard/support') ? (
            <div className="primary-linear-gr-bg-up h-6 active-bar"></div>
          ) : (
            <div className="h-[40px] w-[2.5px]"></div>
          )}
          <span>
            {pathName.startsWith('/dashboard/support') ? (
              <img
                src="/images/support_selected.svg"
                className={`${isNavOpen ? "" : "mobile-nav"}`}
                alt="Support logo"
              />
            ) : (
              <img
                src="/images/support.svg"
                className={`${isNavOpen ? "" : "mobile-nav"}`}
                alt="Support logo"
              />
            )}
          </span>
          <p
            className={`${
              pathName.startsWith('/dashboard/support') ? "font-semibold text-black" : ""
            } hover:text-black hover:font-semibold mr-6`}
          >
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
        className="flex gap-4 items-center pl-4"
        onClick={() => {
          dispatch(authActions.logout());
          localStorage.clear();
          navigate("/");
        }}
        style={{
          color: "grey",
        }}
      >
        {/* <span className={`${isNavOpen ? "" : "nav-element"}`}>
          <CiLogout />
        </span>
        <p className="hover:text-black hover:font-semibold">Logout</p> */}
        <span>
          <img
            src="/images/logout_icon.svg"
            className={`${isNavOpen ? "ml-2" : "mobile-nav"}`}
            alt="Logout logo"
          />
        </span>
        <p className={`hover:text-black hover:font-semibold`}>Logout</p>
      </button>
    </div>
  );
}
