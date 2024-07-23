import { IoDocumentText } from "react-icons/io5";
import { FaCreditCard } from "react-icons/fa6";
import Stats from "../Stats";
import { useLocation, useNavigate } from "react-router-dom";
function RightSideBar() {
  const location = useLocation();
  console.log("location", location.pathname);

  return location.pathname !== "/dashboard/support" &&
    location.pathname !== "/dashboard/notification" &&
    location.pathname !== "/dashboard/payment/payment-detail" &&
    location.pathname !== "/dashboard/payment/new-payment" &&
    location.pathname !== "/dashboard/profile" &&
    !location.pathname.startsWith("/dashboard/card") &&
    !location.pathname.startsWith("/invoice/") &&
    !location.pathname.startsWith("/report") &&
    !location.pathname.startsWith("/admin/users") &&
    !location.pathname.startsWith("/dashboard/beneficiary") &&
    !location.pathname.startsWith("/dashboard/accounts") ? (
    <div className="flex flex-col gap-4">
      <QuickAction />
      <Stats />
    </div>
  ) : (
    <></>
  );
}

export function QuickAction() {
  const navigate = useNavigate();
  return (
    <div className="min-w-48 xl:min-w-56  mt-2">
      <div className="poppins-semibold text-[#232B31] text-base my-2">
        Quick Actions
      </div>
      <div className="flex flex-col gap-2 p-1 mt-2">
        <button
          onClick={() => navigate("/dashboard/payment/new-payment")}
          className="poppins-medium text-sm flex items-center bg p-[1rem] bg-[#232B31] text-white rounded-xl min-h-[3.5rem]  gap-2 xl:gap-4 primary-btn"
        >
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.376 0.5H12.024C11.008 0.5 10.4 1.06446 10.4 2.00769V4.19125C10.4 5.13448 11.008 5.69894 12.024 5.69894H14.376C15.392 5.69894 16 5.13448 16 4.19125V2.00769C16 1.06446 15.392 0.5 14.376 0.5ZM14.552 2.95836C14.456 3.04748 14.328 3.09204 14.2 3.09204C14.072 3.09204 13.944 3.04748 13.848 2.95836L13.704 2.82467V4.48833C13.704 4.74828 13.48 4.95623 13.2 4.95623C12.92 4.95623 12.696 4.74828 12.696 4.48833V2.82467L12.552 2.95836C12.36 3.13661 12.04 3.13661 11.848 2.95836C11.656 2.78011 11.656 2.48302 11.848 2.30477L12.848 1.37639C12.888 1.33926 12.944 1.30955 13 1.28727C13.016 1.27984 13.032 1.27984 13.048 1.27241C13.088 1.25756 13.128 1.25013 13.176 1.25013C13.192 1.25013 13.208 1.25013 13.224 1.25013C13.28 1.25013 13.328 1.25756 13.384 1.27984C13.392 1.27984 13.392 1.27984 13.4 1.27984C13.456 1.30212 13.504 1.33183 13.544 1.36897C13.552 1.37639 13.552 1.37639 13.56 1.37639L14.56 2.30477C14.752 2.48302 14.752 2.78011 14.552 2.95836Z"
              fill="#4E5459"
            />
            <path
              d="M0 7.71167V11.4252C0 13.126 1.48 14.5 3.312 14.5H12.68C14.512 14.5 16 13.1186 16 11.4178V7.71167C16 7.21406 15.568 6.813 15.032 6.813H0.968C0.432 6.813 0 7.21406 0 7.71167ZM4.8 12.0119H3.2C2.872 12.0119 2.6 11.7594 2.6 11.4549C2.6 11.1504 2.872 10.8979 3.2 10.8979H4.8C5.128 10.8979 5.4 11.1504 5.4 11.4549C5.4 11.7594 5.128 12.0119 4.8 12.0119ZM10 12.0119H6.8C6.472 12.0119 6.2 11.7594 6.2 11.4549C6.2 11.1504 6.472 10.8979 6.8 10.8979H10C10.328 10.8979 10.6 11.1504 10.6 11.4549C10.6 11.7594 10.328 12.0119 10 12.0119Z"
              fill="#4E5459"
            />
            <path
              d="M9.2 2.62298V4.79911C9.2 5.29672 8.768 5.69778 8.232 5.69778H0.968C0.424 5.69778 0 5.28187 0 4.78425C0.008 3.945 0.368 3.18001 0.968 2.62298C1.568 2.06595 2.4 1.72431 3.312 1.72431H8.232C8.768 1.72431 9.2 2.12537 9.2 2.62298Z"
              fill="#4E5459"
            />
          </svg>

          <div className="text-sm w-full text-left ml-1">Make a Payment</div>
        </button>
        <button
          onClick={() => navigate("/invoice/send-invoice")}
          className="poppins-medium text-sm flex items-center bg p-[1rem] bg-[#232B31] text-white rounded-xl min-h-[3.5rem] gap-2 xl:gap-4 primary-btn"
        >
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.44444 0.5C4.26614 0.501191 3.1365 0.896657 2.30331 1.59965C1.47012 2.30265 1.00141 3.25577 1 4.24996V17.7498C1.00013 17.8862 1.04434 18.02 1.12789 18.1368C1.21145 18.2536 1.33117 18.349 1.47417 18.4126C1.61717 18.4762 1.77803 18.5058 1.93945 18.498C2.10086 18.4903 2.25671 18.4455 2.39022 18.3686L4.26222 17.2893L6.13422 18.3686C6.28212 18.454 6.45719 18.4997 6.63644 18.4997C6.8157 18.4997 6.99077 18.454 7.13867 18.3686L9.00533 17.2893L10.872 18.3686C11.02 18.4542 11.1952 18.5 11.3747 18.5C11.5541 18.5 11.7293 18.4542 11.8773 18.3686L13.744 17.2901L15.6107 18.3678C15.7441 18.4445 15.8998 18.4891 16.061 18.4968C16.2222 18.5045 16.3828 18.475 16.5257 18.4114C16.6685 18.3479 16.7881 18.2527 16.8717 18.1362C16.9552 18.0196 16.9996 17.886 17 17.7498V4.24996C16.9986 3.25577 16.5299 2.30265 15.6967 1.59965C14.8635 0.896657 13.7339 0.501191 12.5556 0.5L5.44444 0.5ZM10.7778 10.9999H5.44444C5.2087 10.9999 4.9826 10.9209 4.81591 10.7802C4.64921 10.6396 4.55556 10.4488 4.55556 10.2499C4.55556 10.051 4.64921 9.86022 4.81591 9.71957C4.9826 9.57892 5.2087 9.49991 5.44444 9.49991H10.7778C11.0135 9.49991 11.2396 9.57892 11.4063 9.71957C11.573 9.86022 11.6667 10.051 11.6667 10.2499C11.6667 10.4488 11.573 10.6396 11.4063 10.7802C11.2396 10.9209 11.0135 10.9999 10.7778 10.9999ZM13.4444 7.24993C13.4444 7.44884 13.3508 7.6396 13.1841 7.78025C13.0174 7.9209 12.7913 7.99992 12.5556 7.99992H5.44444C5.2087 7.99992 4.9826 7.9209 4.81591 7.78025C4.64921 7.6396 4.55556 7.44884 4.55556 7.24993C4.55556 7.05102 4.64921 6.86026 4.81591 6.7196C4.9826 6.57895 5.2087 6.49994 5.44444 6.49994H12.5556C12.7913 6.49994 13.0174 6.57895 13.1841 6.7196C13.3508 6.86026 13.4444 7.05102 13.4444 7.24993Z"
              fill="#4E5459"
            />
          </svg>

          <div className="text-sm w-full text-left ml-1">Sent an Invoice</div>
        </button>
      </div>
    </div>
  );
}

export default RightSideBar;
