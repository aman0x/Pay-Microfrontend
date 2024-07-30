import React from "react";
import { useLocation } from "react-router-dom";

// {
//     "id": 1,
//     "user": 1,
//     "account_name": "ANANTHARAPU ARUNA THEJASWINI",
//     "account_number": "23647586473424574",
//     "ifsc_code": "wrewtrwe234",
//     "account_type": "BUSINESS",
//     "account_type_2": "CURRENT",
//     "gstin": null,
//     "pan": null,
//     "bank_name": null
// }

const BankDetails = () => {
  const { state } = useLocation();
  return (
    <div className="w-full p-5 mt-6 mb-4">
      <div className="flex justify-between">
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

          <div className="text-[#787D81] poppins-bold text-[12px] pl-2">
            {state.bank_name || "HDFC BANK,KODAK"}
          </div>
        </div>
        <div onClick={() => null}>
          <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6667 3.16666H10.6C10.281 1.61572 8.91672 0.502 7.33331 0.5H5.99997C4.41656 0.502 3.05225 1.61572 2.73331 3.16666H0.666656C0.298469 3.16666 0 3.46513 0 3.83331C0 4.2015 0.298469 4.5 0.666656 4.5H1.33331V13.1667C1.33553 15.0067 2.82663 16.4978 4.66666 16.5H8.66666C10.5067 16.4978 11.9978 15.0067 12 13.1667V4.5H12.6667C13.0348 4.5 13.3333 4.20153 13.3333 3.83334C13.3333 3.46516 13.0348 3.16666 12.6667 3.16666ZM6 11.8333C6 12.2015 5.70153 12.5 5.33334 12.5C4.96512 12.5 4.66666 12.2015 4.66666 11.8333V7.83334C4.66666 7.46516 4.96512 7.16669 5.33331 7.16669C5.7015 7.16669 5.99997 7.46516 5.99997 7.83334V11.8333H6ZM8.66666 11.8333C8.66666 12.2015 8.36819 12.5 8 12.5C7.63181 12.5 7.33334 12.2015 7.33334 11.8333V7.83334C7.33334 7.46516 7.63181 7.16669 8 7.16669C8.36819 7.16669 8.66666 7.46516 8.66666 7.83334V11.8333ZM4.114 3.16666C4.39756 2.36819 5.15269 1.83434 6 1.83331H7.33334C8.18066 1.83434 8.93578 2.36819 9.21934 3.16666H4.114Z"
              fill="#E45757"
            />
          </svg>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1">
        <div className="flex w-full items-center">
          <div className="poppins-regular text-[#A3A6A9]">A/C No:</div>
          <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
          <div className="poppins-bold text-[#787D81]">
            {state.account_number || "235463636346"}
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="poppins-regular text-[#A3A6A9]">IFS Code:</div>
          <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
          <div className="poppins-bold text-[#787D81]">
            {state.ifsc_code || "HDFC09241"}
          </div>
        </div>
      </div>

      <p className="my-6 text-[#4E5459] poppins-semibold">Account</p>

      <div className="flex flex-col gap-1">
        <div className="flex w-full items-center">
          <div className="poppins-regular text-[#A3A6A9]">No:</div>
          <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
          <div className="poppins-bold text-[#787D81]">
            {state.account_number || "235463636346"}
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="poppins-regular text-[#A3A6A9]">Name</div>
          <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
          <div className="poppins-bold text-[#787D81]">
            {state.account_name || "ANANTHARAPU ARUNA THEJASWINI"}
          </div>
        </div>
        <div className="flex w-full items-center">
          <div className="poppins-regular text-[#A3A6A9]">Type</div>
          <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
          <div className="poppins-bold text-[#787D81]">
            {state.account_type || "BUSINESS"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
