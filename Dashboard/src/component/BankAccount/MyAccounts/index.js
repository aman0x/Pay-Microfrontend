import { useAccounts } from "#hooks/index";
import { useEffect, useState } from "react";
import BanksTable from "./BankTable";
import { useNavigate } from "react-router-dom";

function MyAccounts() {
  const navigate = useNavigate();
  const [searchValue,setSearchValue] = useState('')
  const [banks, setBank] = useState([
    {
      id: 1,
      account_name: "ANANTHARAPU ARUNA THEJASWINI",
      account_number: "23647586473424574",
      bank_name: "SBI BANK",
      ifsc_code: "SBIN02400",
      user_account_type: "INDIVIDUAL",
      bank_account_type: "SAVINGS",
      pan_no: "GGR20493295930",
      gstin_no: "",
      created_at: "2024-07-16T11:57:57.059382Z",
      modified_at: "2024-07-16T11:57:57.059398Z",
      user: 2,
    },
  ]);
  const { handleGetBankAccount ,handleDeleteBankAccount} = useAccounts();
  useEffect(() => {
    const fetchBankAccounts = setTimeout(async () => {
      let query = null
      if(searchValue.trim().length>2){
        query = `?serach=${searchValue}`
      }
      const data = await handleGetBankAccount(query);
      console.log("Bank data", data);
      setBank(data.results);
    },500);
    return () => {
      clearTimeout(fetchBankAccounts);
    };
  }, [searchValue]);
  return (
    <>
      {/* MobileCotent */}
      <div className="md:hidden w-full">
        <div className="p-4 ">
          <div className="relative w-full">
            <input
              type="text"
              id="voice-search"
              value={searchValue}
              onChange={(e)=>{setSearchValue(e.target.value)}}
              className="bg-[#F0F1F2] h-14 w-full focus:outline-none focus:ring-1 focus:ring-gray-300 border border-gray-300 text-gray-900 text-sm rounded-2xl block py-[0.7rem] px-5 poppins-light-italic"
              placeholder="Search for Bank Accounts..."
              required
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center my-4">
              <div className="poppins-semibold">All Banks</div>
              <div className="text-xs poppins-light text-[#787D81] ">
                ({banks?.length})
              </div>
            </div>
            <div
              onClick={() => navigate("/dashboard/accounts/add-new")}
              className="flex gap-2 items-center"
            >
              <div className="text-xs text-[#787D81] poppins-lights cursor-pointer">
                Add New
              </div>
              <div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0V0ZM12 9.75H9.75V12C9.75 12.1989 9.67099 12.3897 9.53033 12.5303C9.38968 12.671 9.19892 12.75 9 12.75C8.80109 12.75 8.61033 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12V9.75H6C5.80109 9.75 5.61033 9.67098 5.46967 9.53033C5.32902 9.38968 5.25 9.19891 5.25 9C5.25 8.80109 5.32902 8.61032 5.46967 8.46967C5.61033 8.32902 5.80109 8.25 6 8.25H8.25V6C8.25 5.80109 8.32902 5.61032 8.46967 5.46967C8.61033 5.32902 8.80109 5.25 9 5.25C9.19892 5.25 9.38968 5.32902 9.53033 5.46967C9.67099 5.61032 9.75 5.80109 9.75 6V8.25H12C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9C12.75 9.19891 12.671 9.38968 12.5303 9.53033C12.3897 9.67098 12.1989 9.75 12 9.75Z"
                    fill="#232B31"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-center my-2 gap-2">
            {banks.map((bank) => {
              return (
                <div
                  className="bg-white rounded-3xl w-full shadow-sm p-5 mb-4"
                  onClick={() => {
                    navigate("/dashboard/bankdetails", {
                      state: bank,
                    });
                  }}
                >
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
                          <path
                            d="M8.33334 7H6.33334V14H8.33334V7Z"
                            fill="#CDCED1"
                          />
                          <path
                            d="M11.6667 7H9.66666V14H11.6667V7Z"
                            fill="#CDCED1"
                          />
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

                      <div className="text-[#787D81] poppins-bold text-[12px]">
                        {bank.bank_name || "HDFC BANK,KODAK"}
                      </div>
                    </div>
                    <div onClick={(e) => {
                      e.stopPropagation()
                      handleDeleteBankAccount(bank.id)}
                      }>
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
                  <div className="mt-3 flex flex-col gap-1">
                    <div className="flex w-full items-center">
                      <div className="poppins-regular text-[#A3A6A9]">
                        A/C No:
                      </div>
                      <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
                      <div className="poppins-bold text-[#787D81]">
                        {bank.account_number || "235463636346"}
                      </div>
                    </div>
                    <div className="flex w-full items-center">
                      <div className="poppins-regular text-[#A3A6A9]">
                        IFS Code:
                      </div>
                      <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
                      <div className="poppins-bold text-[#787D81]">
                        {bank.ifsc_code || "HDFC09241"}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="primary-linear-gr-bg p-[2px] flex justify-center rounded-3xl w-full h-32">
              <div
                onClick={() => navigate("/dashboard/accounts/add-new")}
                className="flex gap-1 items-center bg-primary w-full justify-center rounded-3xl"
              >
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0V0ZM12 9.75H9.75V12C9.75 12.1989 9.67099 12.3897 9.53033 12.5303C9.38968 12.671 9.19892 12.75 9 12.75C8.80109 12.75 8.61033 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12V9.75H6C5.80109 9.75 5.61033 9.67098 5.46967 9.53033C5.32902 9.38968 5.25 9.19891 5.25 9C5.25 8.80109 5.32902 8.61032 5.46967 8.46967C5.61033 8.32902 5.80109 8.25 6 8.25H8.25V6C8.25 5.80109 8.32902 5.61032 8.46967 5.46967C8.61033 5.32902 8.80109 5.25 9 5.25C9.19892 5.25 9.38968 5.32902 9.53033 5.46967C9.67099 5.61032 9.75 5.80109 9.75 6V8.25H12C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9C12.75 9.19891 12.671 9.38968 12.5303 9.53033C12.3897 9.67098 12.1989 9.75 12 9.75Z"
                      fill="#232B31"
                    />
                  </svg>
                </div>
                <div className="text-xs text-[#787D81] poppins-lights cursor-pointer">
                  Add New Bank
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20"></div>
      </div>
      <div className=" hidden mt-5 mb-5 bg-primary p-[2rem] rounded-2xl md:flex md:flex-col gap-3 w-full">
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
            <div className="poppins-semibold">All Bank Accounts</div>
            <div className="text-xs poppins-light text-[#787D81] ">({banks.length})</div>
          </div>
          <div
            onClick={() => navigate("/dashboard/accounts/add-new")}
            className="flex gap-1 items-center"
          >
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389957 7.20038 -0.17433 9.00998 0.172937 10.7558C0.520204 12.5016 1.37737 14.1053 2.63604 15.364C3.89472 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9974 6.61384 17.0484 4.32616 15.3611 2.63889C13.6738 0.951621 11.3862 0.00258081 9 0V0ZM12 9.75H9.75V12C9.75 12.1989 9.67099 12.3897 9.53033 12.5303C9.38968 12.671 9.19892 12.75 9 12.75C8.80109 12.75 8.61033 12.671 8.46967 12.5303C8.32902 12.3897 8.25 12.1989 8.25 12V9.75H6C5.80109 9.75 5.61033 9.67098 5.46967 9.53033C5.32902 9.38968 5.25 9.19891 5.25 9C5.25 8.80109 5.32902 8.61032 5.46967 8.46967C5.61033 8.32902 5.80109 8.25 6 8.25H8.25V6C8.25 5.80109 8.32902 5.61032 8.46967 5.46967C8.61033 5.32902 8.80109 5.25 9 5.25C9.19892 5.25 9.38968 5.32902 9.53033 5.46967C9.67099 5.61032 9.75 5.80109 9.75 6V8.25H12C12.1989 8.25 12.3897 8.32902 12.5303 8.46967C12.671 8.61032 12.75 8.80109 12.75 9C12.75 9.19891 12.671 9.38968 12.5303 9.53033C12.3897 9.67098 12.1989 9.75 12 9.75Z"
                  fill="#232B31"
                />
              </svg>
            </div>
            <div className="text-xs text-[#787D81] poppins-lights cursor-pointer">
              Add New Bank Account
            </div>
          </div>
        </div>
        <BanksTable banks={banks} handleDeleteBankAccount={handleDeleteBankAccount} setBank={setBank} />
        <div className="flex justify-center">
          <div className="primary-linear-gr-bg p-[2px] rounded-xl">
            <button
              onClick={() => navigate("/dashboard/accounts/add-new")}
              className="flex items-center gap-2 bg-primary text-[#232B31] rounded-xl px-3 py-2 poppins-semibold text-sm"
            >
              <span>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.1569 13.6568C11.0327 16.781 5.96731 16.781 2.84315 13.6568C-0.28105 10.5326 -0.281022 5.4673 2.84315 2.34313C5.96734 -0.781062 11.0327 -0.781062 14.1569 2.34313C17.281 5.4673 17.281 10.5326 14.1569 13.6568ZM8.49999 4.57153C8.83136 4.57153 9.09998 4.84015 9.09999 5.17153L9.10002 7.39996L11.3284 7.39995C11.6598 7.39995 11.9284 7.6686 11.9284 7.99997C11.9284 8.33134 11.6598 8.59998 11.3284 8.59995H9.09997L9.10002 10.8284C9.10002 11.1597 8.83138 11.4284 8.5 11.4284C8.16862 11.4284 7.89998 11.1597 7.89998 10.8284V8.60001L5.67157 8.59995C5.34021 8.59996 5.07157 8.33133 5.07158 7.99996C5.07158 7.66859 5.34023 7.39994 5.67154 7.39999L7.89998 7.39996L7.89999 5.17152C7.89998 4.84015 8.16862 4.57152 8.49999 4.57153Z"
                    fill="#232B31"
                  />
                </svg>
              </span>
              Add New Bank Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default MyAccounts;
