import { maskCardNumber } from "#utils/Helpers";
import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccessfull = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative p-5 w-full mb-20 md:mb-0">
        <div className="absolute right-4 top-6" onClick={() => navigate("/")}>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="18"
              height="18"
              rx="8"
              transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 18.5)"
              fill="#E45757"
              fill-opacity="0.2"
            />
            <path
              d="M7 11.5L9 9.5L7 7.5"
              stroke="#E45757"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M11 7.5L9 9.5L11 11.5"
              stroke="#E45757"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="flex justify-center w-full">
          <img src="/images/payment-icon.svg" alt="Payment icon" />
        </div>
        <p className="text-center mb-4 text-[#232B31] poppins-semibold text-[16px]">
          Payment Successful !
        </p>
        <p className="text-center mb-6 color-linear poppins-semibold text-[30px]">
          - ₹ 24,000.24
        </p>

        <div className="flex flex-col ">
          <div className="poppins-bold text-[12px] text-[#232B31] mt-2 mb-4">
            Transaction:
          </div>
          <div className="flex gap-1 items-center">
            <div className="bg-[#F0F1F2] p-[10px] shadow-lg shadow-gray-700 rounded-[50%]">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.376 0H12.024C11.008 0 10.4 0.564456 10.4 1.50769V3.69125C10.4 4.63448 11.008 5.19894 12.024 5.19894H14.376C15.392 5.19894 16 4.63448 16 3.69125V1.50769C16 0.564456 15.392 0 14.376 0ZM14.552 2.45836C14.456 2.54748 14.328 2.59204 14.2 2.59204C14.072 2.59204 13.944 2.54748 13.848 2.45836L13.704 2.32467V3.98833C13.704 4.24828 13.48 4.45623 13.2 4.45623C12.92 4.45623 12.696 4.24828 12.696 3.98833V2.32467L12.552 2.45836C12.36 2.63661 12.04 2.63661 11.848 2.45836C11.656 2.28011 11.656 1.98302 11.848 1.80477L12.848 0.876393C12.888 0.839257 12.944 0.809549 13 0.787268C13.016 0.779841 13.032 0.779841 13.048 0.772414C13.088 0.75756 13.128 0.750133 13.176 0.750133C13.192 0.750133 13.208 0.750133 13.224 0.750133C13.28 0.750133 13.328 0.75756 13.384 0.779841C13.392 0.779841 13.392 0.779841 13.4 0.779841C13.456 0.802122 13.504 0.83183 13.544 0.868966C13.552 0.876393 13.552 0.876393 13.56 0.876393L14.56 1.80477C14.752 1.98302 14.752 2.28011 14.552 2.45836Z"
                  fill="#CDCED1"
                />
                <path
                  d="M0 7.21167V10.9252C0 12.626 1.48 14 3.312 14H12.68C14.512 14 16 12.6186 16 10.9178V7.21167C16 6.71406 15.568 6.313 15.032 6.313H0.968C0.432 6.313 0 6.71406 0 7.21167ZM4.8 11.5119H3.2C2.872 11.5119 2.6 11.2594 2.6 10.9549C2.6 10.6504 2.872 10.3979 3.2 10.3979H4.8C5.128 10.3979 5.4 10.6504 5.4 10.9549C5.4 11.2594 5.128 11.5119 4.8 11.5119ZM10 11.5119H6.8C6.472 11.5119 6.2 11.2594 6.2 10.9549C6.2 10.6504 6.472 10.3979 6.8 10.3979H10C10.328 10.3979 10.6 10.6504 10.6 10.9549C10.6 11.2594 10.328 11.5119 10 11.5119Z"
                  fill="#CDCED1"
                />
                <path
                  d="M9.2 2.12298V4.29911C9.2 4.79672 8.768 5.19778 8.232 5.19778H0.968C0.424 5.19778 0 4.78187 0 4.28425C0.008 3.445 0.368 2.68001 0.968 2.12298C1.568 1.56595 2.4 1.22431 3.312 1.22431H8.232C8.768 1.22431 9.2 1.62537 9.2 2.12298Z"
                  fill="#CDCED1"
                />
              </svg>
            </div>
            <div className="text-[#787D81] poppins-semibold text-[12px] pl-2">
              {"Vendor Payment"}
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex w-full items-center">
              <div className="poppins-regular text-[#A3A6A9]">
                Transaction ID:
              </div>
              <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
              <div className="poppins-bold text-[#787D81]">{"54653747"}</div>
              <div className="mx-1">
                <svg
                  width="11"
                  height="14"
                  viewBox="0 0 11 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25925 2.85185C6.25925 2.98936 6.31388 3.12125 6.41112 3.21849C6.50836 3.31573 6.64024 3.37036 6.77776 3.37036H8.83421C8.79603 3.03368 8.64828 2.71886 8.41369 2.47436L7.22939 1.25118C6.97032 0.988574 6.62662 0.826187 6.25925 0.792808V2.85185ZM5.22221 2.85185V0.777771H3.14813C2.46079 0.778594 1.80183 1.05201 1.3158 1.53803C0.829777 2.02406 0.556365 2.68302 0.555542 3.37036V8.55555C0.556365 9.24289 0.829777 9.90185 1.3158 10.3879C1.80183 10.8739 2.46079 11.1473 3.14813 11.1481H6.25925C6.94659 11.1473 7.60555 10.8739 8.09158 10.3879C8.5776 9.90185 8.85101 9.24289 8.85184 8.55555V4.4074H6.77776C6.36521 4.4074 5.96954 4.24351 5.67782 3.95179C5.3861 3.66007 5.22221 3.2644 5.22221 2.85185V2.85185ZM8.33332 13.2222H3.66665C3.52913 13.2222 3.39725 13.1676 3.30001 13.0703C3.20276 12.9731 3.14813 12.8412 3.14813 12.7037C3.14813 12.5662 3.20276 12.4343 3.30001 12.337C3.39725 12.2398 3.52913 12.1852 3.66665 12.1852H8.33332C8.74588 12.1852 9.14154 12.0213 9.43326 11.7296C9.72499 11.4378 9.88888 11.0422 9.88888 10.6296V4.92592C9.88888 4.7884 9.9435 4.65651 10.0407 4.55927C10.138 4.46203 10.2699 4.4074 10.4074 4.4074C10.5449 4.4074 10.6768 4.46203 10.774 4.55927C10.8713 4.65651 10.9259 4.7884 10.9259 4.92592V10.6296C10.9251 11.317 10.6517 11.9759 10.1657 12.462C9.67962 12.948 9.02067 13.2214 8.33332 13.2222V13.2222Z"
                    fill="#232B31"
                  />
                </svg>
              </div>
            </div>
            <div className="flex w-full items-center">
              <div className="poppins-regular text-[#A3A6A9]">Date:</div>
              <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
              <div className="poppins-bold text-[#787D81]">
                {"4th Apr 2024  01:41 pm"}
              </div>
            </div>
            <div className="flex w-full items-center">
              <div className="poppins-regular text-[#A3A6A9]">Status:</div>
              <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
              <div className="flex gap-1">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="18"
                      height="18"
                      rx="9"
                      fill="#FFAC2F"
                      fill-opacity="0.15"
                    />
                    <circle cx="9" cy="9" r="4" fill="#FFB442" />
                  </svg>
                </div>
                <div className="poppins-semibold text-[#787D81]">
                  {"InProgress"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="poppins-bold text-[12px] text-[#232B31] my-4">
            Receiver:
          </div>
          <div className="flex gap-1 items-center">
            <div className="shadow-lg shadow-gray-700 rounded-[50%]">
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16.3731"
                  cy="16.3731"
                  r="15.8419"
                  fill="url(#paint0_linear_245_11742)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_245_11742"
                    x1="16.3731"
                    y1="-3.485"
                    x2="16.5962"
                    y2="37.7931"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" stop-opacity="0" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-[#787D81] poppins-semibold text-[12px] pl-2">
              {"Alice Jackson"}
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex w-full items-center">
              <div className="poppins-regular text-[#A3A6A9]">Phone:</div>
              <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
              <div className="poppins-semibold text-[#787D81]">
                {"832563634758"}
              </div>
            </div>
            <div className="flex w-full items-center">
              <div className="poppins-regular text-[#A3A6A9]">Mail:</div>
              <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
              <div className="poppins-semibold text-[#787D81]">
                {"contact@gmail.com"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="poppins-bold text-[12px] text-[#232B31] my-4">
            Bank Details:
          </div>
          <div className="flex gap-1 items-center">
            <div className="bg-[#F0F1F2] p-[10px] shadow-lg shadow-gray-700 rounded-[50%]">
              <svg
                width="16"
                height="14"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 7H3V14H5V7Z" fill="#CDCED1" />
                <path d="M8.33334 7H6.33334V14H8.33334V7Z" fill="#CDCED1" />
                <path d="M11.6667 7H9.66666V14H11.6667V7Z" fill="#CDCED1" />
                <path d="M15 7H13V14H15V7Z" fill="#CDCED1" />
                <path
                  d="M17.4255 16H0.574468C0.260426 16 0 15.5467 0 15C0 14.4533 0.260426 14 0.574468 14H17.4255C17.7396 14 18 14.4533 18 15C18 15.5467 17.7396 16 17.4255 16Z"
                  fill="#CDCED1"
                />
                <path
                  d="M16.0275 3.31238L9.2775 0.612383C9.1275 0.552383 8.8725 0.552383 8.7225 0.612383L1.9725 3.31238C1.71 3.41738 1.5 3.72488 1.5 4.00988V6.49988C1.5 6.91235 1.8375 7.24985 2.25 7.24985H15.75C16.1625 7.24985 16.5 6.91235 16.5 6.49988V4.00988C16.5 3.72488 16.29 3.41738 16.0275 3.31238ZM9 5.37488C8.3775 5.37488 7.875 4.87238 7.875 4.24988C7.875 3.62738 8.3775 3.12488 9 3.12488C9.6225 3.12488 10.125 3.62738 10.125 4.24988C10.125 4.87238 9.6225 5.37488 9 5.37488Z"
                  fill="#CDCED1"
                />
              </svg>
            </div>

            <div className="text-[#787D81] poppins-semibold text-[12px] pl-2">
              {"HDFC BANK,KODAK"}
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex w-full items-center">
              <div className="poppins-regular text-[#A3A6A9]">A/C No:</div>
              <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
              <div className="poppins-semibold text-[#787D81]">
                {"50100350093919"}
              </div>
            </div>
            <div className="flex w-full items-center">
              <div className="poppins-regular text-[#A3A6A9]">IFS Code:</div>
              <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
              <div className="poppins-semibold text-[#787D81]">{"HDFC09241"}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="poppins-bold text-[12px] text-[#232B31] my-4">
            Payment:
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-[#F0F1F2] p-[10px] shadow-lg shadow-gray-700 rounded-[50%]">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 3.24199C16 3.71782 15.568 4.10714 15.04 4.10714H0.96C0.432 4.10714 0 3.71782 0 3.24199V3.23478C0 1.58378 1.48 0.25 3.312 0.25H12.68C14.512 0.25 16 1.59099 16 3.24199Z"
                  fill="#CDCED1"
                />
                <path
                  d="M0 6.07764V10.2786C0 12.1988 1.48 13.75 3.312 13.75H12.68C14.512 13.75 16 12.1904 16 10.2702V6.07764C16 5.52422 15.568 5.07143 15.04 5.07143H0.96C0.432 5.07143 0 5.52422 0 6.07764ZM4.8 10.941H3.2C2.872 10.941 2.6 10.6559 2.6 10.3121C2.6 9.96832 2.872 9.68323 3.2 9.68323H4.8C5.128 9.68323 5.4 9.96832 5.4 10.3121C5.4 10.6559 5.128 10.941 4.8 10.941ZM10 10.941H6.8C6.472 10.941 6.2 10.6559 6.2 10.3121C6.2 9.96832 6.472 9.68323 6.8 9.68323H10C10.328 9.68323 10.6 9.96832 10.6 10.3121C10.6 10.6559 10.328 10.941 10 10.941Z"
                  fill="#CDCED1"
                />
              </svg>
            </div>
            <div className="text-[#787D81] poppins-bold text-[12px] flex items-center gap-[2px]">
              <div>
                <svg
                  width="33"
                  height="10"
                  viewBox="0 0 33 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.9869 0.408642C23.4558 0.212983 22.6225 0 21.5913 0C18.9544 0 17.0909 1.31662 17.0796 3.20086C17.0579 4.58575 18.4006 5.36635 19.4153 5.83308C20.4579 6.31102 20.8065 6.60858 20.8013 7.03251C20.7962 7.68572 19.9681 7.97717 19.206 7.97717C18.1469 7.97717 17.5725 7.83451 16.6867 7.46765L16.3577 7.31377L15.9823 9.49047C16.6268 9.75033 17.7818 9.9786 18.974 10C21.7831 10 23.6146 8.69459 23.6352 6.68195C23.6569 5.57831 22.9381 4.74065 21.4067 4.04973C20.4827 3.6044 19.9042 3.30072 19.9042 2.84419C19.9042 2.44064 20.3981 2.01671 21.4294 2.01671C22.3152 2.00041 22.9391 2.19199 23.4269 2.38255L23.6796 2.49363L24.0498 0.397432L23.9869 0.408642ZM30.8416 0.180373H28.7791C28.1346 0.180373 27.6561 0.350555 27.3714 0.98237L23.4073 9.86141H26.2113L26.7764 8.40722L30.1971 8.41231C30.2827 8.75166 30.524 9.86039 30.524 9.86039H33L30.8416 0.180373ZM13.2825 0.100887H15.9524L14.2818 9.786H11.6119L13.2825 0.0957912V0.100887ZM6.49378 5.43463L6.76706 6.78284L9.38231 0.180373H12.2131L8.00147 9.8451H5.18306L2.87306 1.66106C2.82459 1.51839 2.76581 1.42158 2.62041 1.33802C1.84181 0.934474 0.966281 0.605319 0 0.377051L0.0319688 0.174259H4.3395C4.92009 0.195659 5.39241 0.377051 5.55328 0.992561L6.49378 5.43972V5.43463ZM27.5375 6.42719L28.6069 3.71548C28.5904 3.74096 28.8265 3.15806 28.9606 2.7912L29.1431 3.62376L29.7619 6.42108H27.5375V6.42719Z"
                    fill="#B6B8BA"
                  />
                </svg>
              </div>
              <div className="text-[#787D81] poppins-semibold text-[12px]">
                {maskCardNumber("34385835683628568")}
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <div className="flex w-full items-center">
              <div className="poppins-regular text-[#A3A6A9]">
                Convenience Fee 1.99%:
              </div>
              <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
              <div className="poppins-semibold text-[#787D81]">₹{"2"}</div>
            </div>
            <div className="flex w-full items-center">
              <div className="poppins-regular text-[#A3A6A9]">TAX:</div>
              <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
              <div className="poppins-semibold text-[#787D81]">₹{"18"}</div>
            </div>
            <div className="flex w-full items-center">
              <div className="poppins-regular text-[#A3A6A9]">
                Receiver Will receive:
              </div>
              <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
              <div className="poppins-semibold text-[#787D81]">₹{"2000"}</div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <div className="color-linear text-[14px] poppins-semibold">TOTAL:</div>
          <div className="color-linear text-[14px] poppins-semibold">
            ₹{"24,000"}
          </div>
        </div>

        <button
          type="submit"
          onClick={() => {}}
          className={`my-4 flex primary-btn items-center w-full justify-center rounded-[1.25rem] ${"bg-[#232B31]"} px-3 p-[1.095rem] text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          <div className="text-[12px] pr-2">Get Receipt</div>
          <span className="flex justify-center items-center size-8">
            <svg
              width="16"
              height="19"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5556 0.5C12.7339 0.501191 13.8635 0.896657 14.6967 1.59965C15.5299 2.30265 15.9986 3.25577 16 4.24996V17.7498C15.9999 17.8862 15.9557 18.02 15.8721 18.1368C15.7886 18.2536 15.6688 18.349 15.5258 18.4126C15.3828 18.4762 15.222 18.5058 15.0606 18.498C14.8991 18.4903 14.7433 18.4455 14.6098 18.3686L12.7378 17.2893L10.8658 18.3686C10.7179 18.454 10.5428 18.4997 10.3636 18.4997C10.1843 18.4997 10.0092 18.454 9.86133 18.3686L7.99467 17.2893L6.128 18.3686C5.98001 18.4542 5.80477 18.5 5.62533 18.5C5.4459 18.5 5.27066 18.4542 5.12267 18.3686L3.256 17.2901L1.38933 18.3678C1.25589 18.4445 1.10022 18.4891 0.939015 18.4968C0.777814 18.5045 0.617176 18.475 0.47435 18.4114C0.331524 18.3479 0.211905 18.2527 0.128333 18.1362C0.0447617 18.0196 0.000395775 17.886 0 17.7498V4.24996C0.00141144 3.25577 0.470117 2.30265 1.30331 1.59965C2.13649 0.896657 3.26614 0.501191 4.44444 0.5L11.5556 0.5ZM6.22222 10.9999H11.5556C11.7913 10.9999 12.0174 10.9209 12.1841 10.7802C12.3508 10.6396 12.4444 10.4488 12.4444 10.2499C12.4444 10.051 12.3508 9.86022 12.1841 9.71957C12.0174 9.57892 11.7913 9.49991 11.5556 9.49991H6.22222C5.98647 9.49991 5.76038 9.57892 5.59368 9.71957C5.42698 9.86022 5.33333 10.051 5.33333 10.2499C5.33333 10.4488 5.42698 10.6396 5.59368 10.7802C5.76038 10.9209 5.98647 10.9999 6.22222 10.9999ZM3.55556 7.24993C3.55556 7.44884 3.64921 7.6396 3.8159 7.78025C3.9826 7.9209 4.2087 7.99992 4.44444 7.99992H11.5556C11.7913 7.99992 12.0174 7.9209 12.1841 7.78025C12.3508 7.6396 12.4444 7.44884 12.4444 7.24993C12.4444 7.05102 12.3508 6.86026 12.1841 6.7196C12.0174 6.57895 11.7913 6.49994 11.5556 6.49994H4.44444C4.2087 6.49994 3.9826 6.57895 3.8159 6.7196C3.64921 6.86026 3.55556 7.05102 3.55556 7.24993Z"
                fill="#4E5459"
              />
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default PaymentSuccessfull;
