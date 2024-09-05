import { SlCalender } from "react-icons/sl";
import { FaGreaterThan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import CalenderComponent from "./Calender/calender";
import SpendData from "./SpendData";
import SliderDate from "./SliderDate";
import { useNavigate } from "react-router-dom";
import { useSideBar } from "#hooks/index.js";
function Stats() {
  const [isCalenderOpen, setCalenderView] = useState(false);
  const { handleTotalStats, handleMonthStats } = useSideBar();
  const [totalStats, setTotalStats] = useState({
    total_payments: 240000,
    invoice_sent: 1,
    invoice_received: 2,
  });
  const [monthStats, setMonthStats] = useState({
    card_number: "1234567824681257",
    card_type: "VISA",
    incomes: "10000",
    expenses: "00",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const fetchStats = async () => {
      const stats = await handleTotalStats();
      const data1 = await handleMonthStats();
      //setTotalStats(stats);
      // setMonthStats(data1);
    };
    fetchStats();
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <div className="relative">
        <div className="flex justify-between">
          <div className="poppins-semibold">Stats</div>
          <div
            className="flex items-center gap-1"
            onClick={() => setCalenderView(!isCalenderOpen)}
          >
            <button className="rounded-[50%] p-1 bg-black-primary primary-btn ">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="18" height="18" rx="9" fill="#232B31" />
                <g clipPath="url(#clip0_22_2878)">
                  <path
                    d="M7.22926 5.04175C7.22926 4.86916 7.08935 4.72925 6.91676 4.72925C6.74418 4.72925 6.60426 4.86916 6.60426 5.04175V5.69977C6.00454 5.74779 5.61083 5.86565 5.32158 6.1549C5.03233 6.44415 4.91448 6.83786 4.86646 7.43758H13.1337C13.0857 6.83786 12.9678 6.44415 12.6786 6.1549C12.3893 5.86565 11.9956 5.74779 11.3959 5.69977V5.04175C11.3959 4.86916 11.256 4.72925 11.0834 4.72925C10.9108 4.72925 10.7709 4.86916 10.7709 5.04175V5.67212C10.4937 5.66675 10.183 5.66675 9.83343 5.66675H8.16676C7.81717 5.66675 7.50646 5.66675 7.22926 5.67212V5.04175Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.83325 9C4.83325 8.65042 4.83325 8.33971 4.83863 8.0625H13.1612C13.1666 8.33971 13.1666 8.65042 13.1666 9V9.83333C13.1666 11.4047 13.1666 12.1904 12.6784 12.6785C12.1903 13.1667 11.4046 13.1667 9.83325 13.1667H8.16659C6.59524 13.1667 5.80956 13.1667 5.32141 12.6785C4.83325 12.1904 4.83325 11.4047 4.83325 9.83333V9ZM11.0833 9.83333C11.3134 9.83333 11.4999 9.64679 11.4999 9.41667C11.4999 9.18654 11.3134 9 11.0833 9C10.8531 9 10.6666 9.18654 10.6666 9.41667C10.6666 9.64679 10.8531 9.83333 11.0833 9.83333ZM11.0833 11.5C11.3134 11.5 11.4999 11.3135 11.4999 11.0833C11.4999 10.8532 11.3134 10.6667 11.0833 10.6667C10.8531 10.6667 10.6666 10.8532 10.6666 11.0833C10.6666 11.3135 10.8531 11.5 11.0833 11.5ZM9.41658 9.41667C9.41658 9.64679 9.23004 9.83333 8.99992 9.83333C8.76979 9.83333 8.58325 9.64679 8.58325 9.41667C8.58325 9.18654 8.76979 9 8.99992 9C9.23004 9 9.41658 9.18654 9.41658 9.41667ZM9.41658 11.0833C9.41658 11.3135 9.23004 11.5 8.99992 11.5C8.76979 11.5 8.58325 11.3135 8.58325 11.0833C8.58325 10.8532 8.76979 10.6667 8.99992 10.6667C9.23004 10.6667 9.41658 10.8532 9.41658 11.0833ZM6.91659 9.83333C7.1467 9.83333 7.33325 9.64679 7.33325 9.41667C7.33325 9.18654 7.1467 9 6.91659 9C6.68647 9 6.49992 9.18654 6.49992 9.41667C6.49992 9.64679 6.68647 9.83333 6.91659 9.83333ZM6.91659 11.5C7.1467 11.5 7.33325 11.3135 7.33325 11.0833C7.33325 10.8532 7.1467 10.6667 6.91659 10.6667C6.68647 10.6667 6.49992 10.8532 6.49992 11.0833C6.49992 11.3135 6.68647 11.5 6.91659 11.5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_22_2878">
                    <rect
                      width="10"
                      height="10"
                      fill="white"
                      transform="translate(4 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <p className="poppins-regular text-xs text-[#787D81]">Calender</p>
          </div>
        </div>
        <div className="w-64 my-2">
          <SliderDate />
        </div>

        {isCalenderOpen && <CalenderComponent />}
        <div className="flex flex-col mt-4 gap-2">
          <div
            onClick={() => navigate("/dashboard/payment")}
            className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <p className="text-[#A3A6A9] poppins-regular text-xs">
                Total Payments
              </p>
              <p className="poppins-semibold text-lg">
                {totalStats?.total_payments}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-[#eae9e9] p-3 rounded-[50%]">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6673 0H11.5767C10.6736 0 10.1331 0.564456 10.1331 1.50769V3.69125C10.1331 4.63448 10.6736 5.19894 11.5767 5.19894H13.6673C14.5704 5.19894 15.1109 4.63448 15.1109 3.69125V1.50769C15.1109 0.564456 14.5704 0 13.6673 0ZM13.8238 2.45836C13.7384 2.54748 13.6247 2.59204 13.5109 2.59204C13.3971 2.59204 13.2833 2.54748 13.198 2.45836L13.07 2.32467V3.98833C13.07 4.24828 12.8709 4.45623 12.622 4.45623C12.3731 4.45623 12.174 4.24828 12.174 3.98833V2.32467L12.046 2.45836C11.8753 2.63661 11.5909 2.63661 11.4202 2.45836C11.2496 2.28011 11.2496 1.98302 11.4202 1.80477L12.3091 0.876393C12.3447 0.839257 12.3944 0.809549 12.4442 0.787268C12.4584 0.779841 12.4727 0.779841 12.4869 0.772414C12.5224 0.75756 12.558 0.750133 12.6007 0.750133C12.6149 0.750133 12.6291 0.750133 12.6433 0.750133C12.6931 0.750133 12.7358 0.75756 12.7856 0.779841C12.7927 0.779841 12.7927 0.779841 12.7998 0.779841C12.8496 0.802122 12.8922 0.83183 12.9278 0.868966C12.9349 0.876393 12.9349 0.876393 12.942 0.876393L13.8309 1.80477C14.0016 1.98302 14.0016 2.28011 13.8238 2.45836Z" fill="url(#paint0_linear_29_2285)"/>
<path d="M0.888672 7.21167V10.9252C0.888672 12.626 2.20423 14 3.83267 14H12.1598C13.7882 14 15.1109 12.6186 15.1109 10.9178V7.21167C15.1109 6.71406 14.7269 6.313 14.2504 6.313H1.74912C1.27267 6.313 0.888672 6.71406 0.888672 7.21167ZM5.15534 11.5119H3.73312C3.44156 11.5119 3.19978 11.2594 3.19978 10.9549C3.19978 10.6504 3.44156 10.3979 3.73312 10.3979H5.15534C5.44689 10.3979 5.68867 10.6504 5.68867 10.9549C5.68867 11.2594 5.44689 11.5119 5.15534 11.5119ZM9.77756 11.5119H6.93312C6.64156 11.5119 6.39978 11.2594 6.39978 10.9549C6.39978 10.6504 6.64156 10.3979 6.93312 10.3979H9.77756C10.0691 10.3979 10.3109 10.6504 10.3109 10.9549C10.3109 11.2594 10.0691 11.5119 9.77756 11.5119Z" fill="url(#paint1_linear_29_2285)"/>
<path d="M9.06645 2.12298V4.29911C9.06645 4.79672 8.68245 5.19778 8.206 5.19778H1.74912C1.26556 5.19778 0.888672 4.78187 0.888672 4.28425C0.895783 3.445 1.21578 2.68001 1.74912 2.12298C2.28245 1.56595 3.02201 1.22431 3.83267 1.22431H8.206C8.68245 1.22431 9.06645 1.62537 9.06645 2.12298Z" fill="url(#paint2_linear_29_2285)"/>
<defs>
<linearGradient id="paint0_linear_29_2285" x1="7.99978" y1="0" x2="7.99978" y2="14" gradientUnits="userSpaceOnUse">
<stop stop-color="#CDE8E5"/>
<stop offset="1" stop-color="#124AE8" stop-opacity="0.7"/>
</linearGradient>
<linearGradient id="paint1_linear_29_2285" x1="7.99978" y1="0" x2="7.99978" y2="14" gradientUnits="userSpaceOnUse">
<stop stop-color="#CDE8E5"/>
<stop offset="1" stop-color="#124AE8" stop-opacity="0.7"/>
</linearGradient>
<linearGradient id="paint2_linear_29_2285" x1="7.99978" y1="0" x2="7.99978" y2="14" gradientUnits="userSpaceOnUse">
<stop stop-color="#CDE8E5"/>
<stop offset="1" stop-color="#124AE8" stop-opacity="0.7"/>
</linearGradient>
</defs>
</svg>

              </div>
              <div>
              <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L1 11.5"
                    stroke="#CDCED1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>

              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/invoice")}
            className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl gap-1 cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <p className="text-[#A3A6A9] poppins-regular text-xs">
                Invoice Sended
              </p>
              <p className="poppins-semibold text-lg">
                {totalStats.invoice_sent}
              </p>
            </div>
            <div className="flex gap-4 items-center">
            <div className="bg-[#eae9e9] p-3 rounded-[50%]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_563_11978)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.04717 0.97747C2.78778 0.352584 3.79191 0.00105856 4.83929 0H11.1603C12.2077 0.00105856 13.2118 0.352584 13.9524 0.97747C14.693 1.60236 15.1096 2.44958 15.1109 3.3333V15.3332C15.1105 15.4543 15.0711 15.573 14.9968 15.6766C14.9225 15.7802 14.8162 15.8648 14.6892 15.9213C14.5623 15.9777 14.4195 16.004 14.2762 15.9971C14.1329 15.9903 13.9945 15.9507 13.8759 15.8825L12.2167 14.9245L10.5574 15.8832C10.4259 15.9593 10.2701 16 10.1106 16C9.9511 16 9.79533 15.9593 9.66378 15.8832L8.00452 14.9238L6.34526 15.8832C6.2138 15.9591 6.05818 15.9998 5.89884 15.9998C5.73951 15.9998 5.58389 15.9591 5.45242 15.8832L3.78842 14.9238L2.12442 15.8832C2.00575 15.9516 1.86722 15.9913 1.72374 15.9982C1.58026 16.0051 1.43727 15.9789 1.31015 15.9223C1.18304 15.8657 1.07662 15.781 1.00236 15.6772C0.928088 15.5734 0.888783 15.4544 0.888672 15.3332V3.3333C0.889926 2.44958 1.30655 1.60236 2.04717 0.97747ZM7.99978 11.5556C10.4544 11.5556 12.4442 9.56571 12.4442 7.11111C12.4442 4.65651 10.4544 2.66667 7.99978 2.66667C5.54518 2.66667 3.55534 4.65651 3.55534 7.11111C3.55534 9.56571 5.54518 11.5556 7.99978 11.5556Z" fill="url(#paint0_linear_563_11978)"/>
<path d="M7.99984 9.77777L7.99984 4.44444M7.99984 4.44444L10.6665 7.1111M7.99984 4.44444L5.33317 7.1111" stroke="url(#paint1_linear_563_11978)" stroke-width="0.833333" stroke-linecap="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_563_11978" x1="7.99978" y1="0" x2="7.99978" y2="16" gradientUnits="userSpaceOnUse">
<stop stop-color="#CDE8E5"/>
<stop offset="1" stop-color="#124AE8" stop-opacity="0.7"/>
</linearGradient>
<linearGradient id="paint1_linear_563_11978" x1="10.6665" y1="7.1111" x2="5.33317" y2="7.1111" gradientUnits="userSpaceOnUse">
<stop stop-color="#CDE8E5"/>
<stop offset="1" stop-color="#124AE8" stop-opacity="0.7"/>
</linearGradient>
<clipPath id="clip0_563_11978">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
</div>
              <div>
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L1 11.5"
                    stroke="#CDCED1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            onClick={() => navigate("/invoice?received")}
            className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <p className="text-[#A3A6A9] poppins-regular text-xs">
                Invoice Received
              </p>
              <p className="poppins-semibold text-lg">
                {totalStats.invoice_received}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-[#eae9e9] p-3 rounded-[50%]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_563_11989)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.04717 0.97747C2.78778 0.352584 3.79191 0.00105856 4.83929 0H11.1603C12.2077 0.00105856 13.2118 0.352584 13.9524 0.97747C14.693 1.60236 15.1096 2.44958 15.1109 3.3333V15.3332C15.1105 15.4543 15.0711 15.573 14.9968 15.6766C14.9225 15.7802 14.8162 15.8648 14.6892 15.9213C14.5623 15.9777 14.4195 16.004 14.2762 15.9971C14.1329 15.9903 13.9945 15.9507 13.8759 15.8825L12.2167 14.9245L10.5574 15.8832C10.4259 15.9593 10.2701 16 10.1106 16C9.9511 16 9.79533 15.9593 9.66378 15.8832L8.00452 14.9238L6.34526 15.8832C6.2138 15.9591 6.05818 15.9998 5.89884 15.9998C5.73951 15.9998 5.58389 15.9591 5.45242 15.8832L3.78842 14.9238L2.12442 15.8832C2.00575 15.9516 1.86722 15.9913 1.72374 15.9982C1.58026 16.0051 1.43727 15.9789 1.31015 15.9223C1.18304 15.8657 1.07662 15.781 1.00236 15.6772C0.928088 15.5734 0.888783 15.4544 0.888672 15.3332V3.3333C0.889926 2.44958 1.30655 1.60236 2.04717 0.97747ZM7.99978 11.5556C10.4544 11.5556 12.4442 9.56571 12.4442 7.11111C12.4442 4.65651 10.4544 2.66667 7.99978 2.66667C5.54518 2.66667 3.55534 4.65651 3.55534 7.11111C3.55534 9.56571 5.54518 11.5556 7.99978 11.5556Z" fill="url(#paint0_linear_563_11989)"/>
<path d="M7.99984 4.44446L7.99984 9.77779M7.99984 9.77779L10.6665 7.11113M7.99984 9.77779L5.33317 7.11112" stroke="url(#paint1_linear_563_11989)" stroke-width="0.833333" stroke-linecap="round"/>
</g>
<defs>
<linearGradient id="paint0_linear_563_11989" x1="7.99978" y1="0" x2="7.99978" y2="16" gradientUnits="userSpaceOnUse">
<stop stop-color="#CDE8E5"/>
<stop offset="1" stop-color="#124AE8" stop-opacity="0.7"/>
</linearGradient>
<linearGradient id="paint1_linear_563_11989" x1="10.6665" y1="7.11113" x2="5.33317" y2="7.11112" gradientUnits="userSpaceOnUse">
<stop stop-color="#CDE8E5"/>
<stop offset="1" stop-color="#124AE8" stop-opacity="0.7"/>
</linearGradient>
<clipPath id="clip0_563_11989">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

              </div>
              <div>
                <svg
                  width="8"
                  height="13"
                  viewBox="0 0 8 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1.5L6 6.5L1 11.5"
                    stroke="#CDCED1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <SpendData monthStats={monthStats} />
      </div>
    </div>
  );
}
export default Stats;
