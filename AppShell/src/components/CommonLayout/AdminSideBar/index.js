import { MdDashboard, MdOutlineHelp } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import { RiPieChart2Fill } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { RiNotification4Fill } from "react-icons/ri";
import { FaCreditCard, FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
function AdminSideBar() {
  const navigate = useNavigate();
  const [isNavOpen, setNavOpen] = useState(true);
  const [navIndex, setNavIndex] = useState(0);

  return (
    <div
      className={`bg-primary cursor-pointer ${
        isNavOpen ? "min-w-[13.5rem]" : "nav-close"
      } flex flex-col h-[85vh] max-h-[800px]  text-sm justify-between border-gray-400  py-[1.5rem] pr-[1rem] rounded-3xl mx-[0.5rem] my-[0.5rem]  transition-all duration-150 shadow-2xl overflow-y-hidden`}
    >
      <div
        className="flex gap-1 items-center pl-4"
        onClick={() => setNavOpen(!isNavOpen)}
      >
        <img
          src="/dashboard/paymorz-logo.png"
          alt="paymorz-logo"
          width={isNavOpen ? "25px" : "40px"}
          style={{
            marginInline: isNavOpen ? "0px" : "14px",
          }}
        />
        <span
          className="cursor-pointer"
          style={{ display: isNavOpen ? "none" : "flex" }}
        >
          <FaGreaterThan color="gray" fontSize="14px" />
        </span>
        <p className="italic pl-1 font-extrabold from-neutral-900 text-base">
          Paymorz
          <span className="pl-1 text-xl font-extrabold size-8 color-linear">
            .
          </span>
        </p>
        <span className="ml-9 cursor-pointer">
          <FaLessThan color="gray" fontSize="10px" />
        </span>
      </div>
      <div className="flex flex-col gap-1 ">
        <button
          className="flex gap-4 items-center "
          onClick={() => {
            setNavIndex(0);
            navigate("/admin");
          }}
          style={{
            color: "grey",
            // lineHeight:"0px"
          }}
        >
          {navIndex === 0 ? (
            <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
          ) : (
            <div className="h-[40px] w-[2.5px]"></div>
          )}
          <span className={`${isNavOpen ? "" : "nav-element"}`}>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.54545 0.499512H4.45455C5.86036 0.499512 7 1.63915 7 3.04497V4.95406C7 6.35987 5.86036 7.49951 4.45455 7.49951H2.54545C1.13964 7.49951 0 6.35987 0 4.95406V3.04497C0 1.63915 1.13964 0.499512 2.54545 0.499512ZM11.5455 0.499512H13.4545C14.8604 0.499512 16 1.63915 16 3.04497V4.95406C16 6.35987 14.8604 7.49951 13.4545 7.49951H11.5455C10.1396 7.49951 9 6.35987 9 4.95406V3.04497C9 1.63915 10.1396 0.499512 11.5455 0.499512ZM4.45455 9.49951H2.54545C1.13964 9.49951 0 10.6392 0 12.045V13.9541C0 15.3599 1.13964 16.4995 2.54545 16.4995H4.45455C5.86036 16.4995 7 15.3599 7 13.9541V12.045C7 10.6392 5.86036 9.49951 4.45455 9.49951ZM11.5455 9.49951H13.4545C14.8604 9.49951 16 10.6392 16 12.045V13.9541C16 15.3599 14.8604 16.4995 13.4545 16.4995H11.5455C10.1396 16.4995 9 15.3599 9 13.9541V12.045C9 10.6392 10.1396 9.49951 11.5455 9.49951Z"
                fill="#CDCED1"
              />
            </svg>
          </span>
          <p className="hover:text-black hover:font-semibold">Dashboard</p>
          {/* <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                    <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                    </div> */}
        </button>
        <button
          className="flex gap-4 items-center"
          style={{
            color: "grey",
          }}
          onClick={() => {
            setNavIndex(1);
            navigate("/admin/user-activity");
          }}
        >
          {navIndex === 1 ? (
            <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
          ) : (
            <div className="h-[40px] w-[2.5px]"></div>
          )}
          <span className={`${isNavOpen ? "" : "nav-element"}`}>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.15 3.99957C12.15 5.93257 10.7397 7.49957 8.99999 7.49957C7.2603 7.49957 5.85 5.93257 5.85 3.99957C5.85 2.06657 7.2603 0.499573 8.99999 0.499573C10.7397 0.499573 12.15 2.06657 12.15 3.99957Z"
                fill="#CDCED1"
              />
              <path
                d="M14.4 12.9996C14.4 14.9326 11.9823 16.4996 8.99999 16.4996C6.01766 16.4996 3.6 14.9326 3.6 12.9996C3.6 11.0666 6.01766 9.49957 8.99999 9.49957C11.9823 9.49957 14.4 11.0666 14.4 12.9996Z"
                fill="#CDCED1"
              />
              <path
                d="M4.60986 1.49957C4.76957 1.49957 4.9255 1.51698 5.07606 1.55013C4.70925 2.27403 4.50001 3.10965 4.50001 3.99957C4.50001 4.86782 4.69919 5.68439 5.04954 6.39593C4.90722 6.4254 4.76022 6.44083 4.60986 6.44083C3.33688 6.44083 2.30493 5.33469 2.30493 3.9702C2.30493 2.60571 3.33688 1.49957 4.60986 1.49957Z"
                fill="#CDCED1"
              />
              <path
                d="M3.1026 15.4856C2.59148 14.8067 2.25 13.9736 2.25 12.9996C2.25 12.0554 2.57091 11.2436 3.0562 10.5763C1.34199 10.7241 0 11.7658 0 13.029C0 14.304 1.36557 15.3534 3.1026 15.4856Z"
                fill="#CDCED1"
              />
              <path
                d="M13.4999 3.99957C13.4999 4.86782 13.3007 5.68439 12.9504 6.39593C13.0927 6.4254 13.2397 6.44083 13.3901 6.44083C14.6631 6.44083 15.695 5.33469 15.695 3.9702C15.695 2.60571 14.6631 1.49957 13.3901 1.49957C13.2303 1.49957 13.0745 1.51698 12.9239 1.55013C13.2906 2.27403 13.4999 3.10965 13.4999 3.99957Z"
                fill="#CDCED1"
              />
              <path
                d="M14.8973 15.4856C16.6343 15.3534 17.9999 14.304 17.9999 13.029C17.9999 11.7658 16.6579 10.7241 14.9437 10.5763C15.429 11.2436 15.7499 12.0554 15.7499 12.9996C15.7499 13.9736 15.4085 14.8067 14.8973 15.4856Z"
                fill="#CDCED1"
              />
            </svg>
          </span>
          <p className="hover:text-black hover:font-semibold mr-2">
            User Activity
          </p>
          {/* <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                    <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                    </div> */}
        </button>
        <button
          className="flex gap-4 items-center"
          style={{
            color: "grey",
          }}
          onClick={() => {
            setNavIndex(2);
            //window.location.href = "/invoice"
          }}
        >
          {navIndex === 2 ? (
            <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
          ) : (
            <div className="h-[40px] w-[2.5px]"></div>
          )}
          <span className={`${isNavOpen ? "" : "nav-element"}`}>
            <svg
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 3.74156C16 4.2174 15.568 4.60672 15.04 4.60672H0.96C0.432 4.60672 0 4.2174 0 3.74156V3.73435C0 2.08335 1.48 0.749573 3.312 0.749573H12.68C14.512 0.749573 16 2.09056 16 3.74156Z"
                fill="#CDCED1"
              />
              <path
                d="M0 6.57721V10.7781C0 12.6983 1.48 14.2496 3.312 14.2496H12.68C14.512 14.2496 16 12.6899 16 10.7698V6.57721C16 6.0238 15.568 5.571 15.04 5.571H0.96C0.432 5.571 0 6.0238 0 6.57721ZM4.8 11.4406H3.2C2.872 11.4406 2.6 11.1555 2.6 10.8117C2.6 10.4679 2.872 10.1828 3.2 10.1828H4.8C5.128 10.1828 5.4 10.4679 5.4 10.8117C5.4 11.1555 5.128 11.4406 4.8 11.4406ZM10 11.4406H6.8C6.472 11.4406 6.2 11.1555 6.2 10.8117C6.2 10.4679 6.472 10.1828 6.8 10.1828H10C10.328 10.1828 10.6 10.4679 10.6 10.8117C10.6 11.1555 10.328 11.4406 10 11.4406Z"
                fill="#CDCED1"
              />
            </svg>
          </span>
          <p className=" hover:text-black hover:font-semibold mr-5">
            Transaction
          </p>
          {/* <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                    <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                    </div> */}
        </button>
        <button
          className="flex gap-4 items-center"
          style={{
            color: "grey",
          }}
          onClick={() => {
            setNavIndex(3);
            navigate("/admin/user-invoice");
          }}
        >
          {navIndex === 3 ? (
            <div className="primary-linear-gr-bg-up h-6 active-bar"> </div>
          ) : (
            <div className="h-[40px] w-[2.5px]"></div>
          )}
          <span className={`${isNavOpen ? "" : "nav-element"}`}>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.44444 0.499512C4.26614 0.500703 3.1365 0.896169 2.30331 1.59917C1.47012 2.30216 1.00141 3.25529 1 4.24947V17.7493C1.00013 17.8857 1.04434 18.0195 1.12789 18.1363C1.21145 18.2531 1.33117 18.3485 1.47417 18.4121C1.61717 18.4758 1.77803 18.5053 1.93945 18.4975C2.10086 18.4898 2.25671 18.445 2.39022 18.3681L4.26222 17.2888L6.13422 18.3681C6.28212 18.4535 6.45719 18.4993 6.63644 18.4993C6.8157 18.4993 6.99077 18.4535 7.13867 18.3681L9.00533 17.2888L10.872 18.3681C11.02 18.4537 11.1952 18.4995 11.3747 18.4995C11.5541 18.4995 11.7293 18.4537 11.8773 18.3681L13.744 17.2896L15.6107 18.3673C15.7441 18.444 15.8998 18.4886 16.061 18.4963C16.2222 18.504 16.3828 18.4745 16.5257 18.4109C16.6685 18.3474 16.7881 18.2522 16.8717 18.1357C16.9552 18.0191 16.9996 17.8856 17 17.7493V4.24947C16.9986 3.25529 16.5299 2.30216 15.6967 1.59917C14.8635 0.896169 13.7339 0.500703 12.5556 0.499512L5.44444 0.499512ZM10.7778 10.9994H5.44444C5.2087 10.9994 4.9826 10.9204 4.81591 10.7797C4.64921 10.6391 4.55556 10.4483 4.55556 10.2494C4.55556 10.0505 4.64921 9.85974 4.81591 9.71909C4.9826 9.57843 5.2087 9.49942 5.44444 9.49942H10.7778C11.0135 9.49942 11.2396 9.57843 11.4063 9.71909C11.573 9.85974 11.6667 10.0505 11.6667 10.2494C11.6667 10.4483 11.573 10.6391 11.4063 10.7797C11.2396 10.9204 11.0135 10.9994 10.7778 10.9994ZM13.4444 7.24944C13.4444 7.44835 13.3508 7.63911 13.1841 7.77977C13.0174 7.92042 12.7913 7.99943 12.5556 7.99943H5.44444C5.2087 7.99943 4.9826 7.92042 4.81591 7.77977C4.64921 7.63911 4.55556 7.44835 4.55556 7.24944C4.55556 7.05053 4.64921 6.85977 4.81591 6.71912C4.9826 6.57847 5.2087 6.49945 5.44444 6.49945H12.5556C12.7913 6.49945 13.0174 6.57847 13.1841 6.71912C13.3508 6.85977 13.4444 7.05053 13.4444 7.24944Z"
                fill="#CDCED1"
              />
            </svg>
          </span>
          <p className=" hover:text-black hover:font-semibold mr-[1.40rem]">
            Invoices
          </p>
          {/* <div className="relative primary-linear-gr-bg  p-[1.5px] rounded-2xl">
                    <div className="bg-black-primary rounded-xl py-0.5 px-2 text-xs">1 New</div>
                    </div> */}
        </button>
      </div>
      <button
        className="flex gap-4 items-center pl-4"
        onClick={() => navigate("/")}
        style={{
          color: "grey",
        }}
      >
        <span className={`${isNavOpen ? "" : "nav-element"}`}>
          <CiLogout />
        </span>
        <p className="hover:text-black hover:font-semibold">Logout</p>
      </button>
    </div>
  );
}
export default AdminSideBar;
