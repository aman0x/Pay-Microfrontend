import { useDashboard } from "#hooks/index";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const QuickPaymentStep1 = ({ setStepIndex, selectedName, setSelectedName }) => {
  const [quickSend, setQuickSend] = useState([]);
  const navigate = useNavigate();

  const [serachValue, setSearchValue] = useState("");
  const { handleQuickSendData } = useDashboard();

  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const isTyping = amount.length > 0;

  useEffect(() => {
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount) && numericAmount > 10) {
      const tax = numericAmount * 0.12;
      setTotal(numericAmount - tax);
    } else {
      setTotal(0);
    }
  }, [amount]);

  useEffect(() => {
    const fetchQuickSend = async () => {
      const data = await handleQuickSendData();
      console.log("Contacts", data.results);
      setQuickSend(data.results);
    };
    fetchQuickSend();
  }, [serachValue]);

  function stringAvatar(name) {
    return {
      children: `${name.split("")[0]}${name.split("")[1]}`,
    };
  }

  return (
    <>
      <div className="p-5 mt-2 w-full mb-16 md:mb-0">
        <p className="text-[14px] text-[#232B31] poppins-semibold mt-2">
          Whom:
        </p>
        <div className="relative w-full my-4">
          <input
            type="text"
            id="voice-search"
            value={serachValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-[#F0F1F2] h-14 w-full focus:outline-none focus:ring-1 focus:ring-gray-300 border border-gray-300 text-gray-900 text-sm rounded-2xl block py-[0.7rem] px-5 poppins-light-italic"
            placeholder="Search for Users..."
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7896 16.73L13.3166 12.2569C14.5355 10.7661 15.1349 8.86379 14.9906 6.94347C14.8463 5.02315 13.9694 3.23175 12.5414 1.9398C11.1133 0.647857 9.24335 -0.0457868 7.31822 0.00234752C5.39309 0.0504818 3.56011 0.836711 2.19841 2.19841C0.836711 3.56011 0.0504818 5.39309 0.00234752 7.31822C-0.0457868 9.24335 0.647857 11.1133 1.9398 12.5414C3.23175 13.9694 5.02315 14.8463 6.94347 14.9906C8.86379 15.1349 10.7661 14.5355 12.2569 13.3166L16.73 17.7896C16.8713 17.9261 17.0606 18.0017 17.2571 18C17.4536 17.9983 17.6416 17.9195 17.7805 17.7805C17.9195 17.6416 17.9983 17.4536 18 17.2571C18.0017 17.0606 17.9261 16.8713 17.7896 16.73ZM7.51783 13.5129C6.33212 13.5129 5.17303 13.1613 4.18714 12.5026C3.20126 11.8438 2.43286 10.9075 1.9791 9.81204C1.52535 8.71659 1.40663 7.51118 1.63795 6.34825C1.86927 5.18532 2.44025 4.1171 3.27867 3.27867C4.1171 2.44025 5.18532 1.86927 6.34825 1.63795C7.51118 1.40663 8.71659 1.52535 9.81204 1.9791C10.9075 2.43286 11.8438 3.20126 12.5026 4.18714C13.1613 5.17303 13.5129 6.33212 13.5129 7.51783C13.5111 9.10727 12.8789 10.6311 11.755 11.755C10.6311 12.8789 9.10727 13.5111 7.51783 13.5129Z"
                fill="#232B31"
              />
            </svg>
          </button>
        </div>

        <div className="flex max-w-full overflow-x-auto gap-5 mt-5">
          {quickSend?.map((user, i) => {
            return (
              <div key={i} className="flex flex-col gap-0.5 items-center">
                <div
                  className="size-20 mb-1"
                  onClick={() => setSelectedName(user.name)}
                >
                  <Avatar
                    sx={{
                      bgcolor:
                        selectedName === user.name ? "#ecbfe8" : "#F4F4F6",
                      border:
                        selectedName === user.name
                          ? "2.5px solid #e4a6cc"
                          : "2.5px solid white",
                      color: "#B6B8BA",
                      width: "100%",
                      height: "100%",
                      fontWeight: "bold",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                    alt={user.name}
                    src={user.dp || "#"}
                    {...stringAvatar(user.name)}
                  />
                </div>
                <p className="text-[10px] text-center poppins-regular text-[#A3A6A9] mb-4">
                  {user.name}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-[14px] text-[#232B31] poppins-semibold mt-5">
          How much:
        </p>

        <div className="flex flex-col justify-center items-center mt-24 px-12">
          <div className="relative border-b-[1px] border-gray-300">
            <div
              className={`absolute inset-y-0 left-0 flex gap-2 items-center pl-5 pointer-events-none text-3xl poppins-regular italic ${
                isTyping ? "text-gradient" : "text-[#DFE0E2]"
              }`}
            >
              <span className={` ${isTyping ? "text-gradient" : ""}`}>₹</span>
            </div>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="poppins-light bg-transparent border-none text-3xl rounded-2xl w-full pl-16 placeholder:italic placeholder:text-2xl placeholder:text-[#B6B8BA] py-3.5 focus:outline-none focus:ring-0 text-gradient caret-black"
              placeholder="Enter Amount..."
            />
          </div>
          {!isValid && (
            <div className="text-red-400 text-xs mt-1">
              Amount should be greater than 10.
            </div>
          )}
          {isTyping ? (
            <div className="w-4/5 mt-4">
              <div className="flex justify-between">
                <p className="text-[10px]">Tax</p>
                <p className="text-[10px]">12%</p>
              </div>
              <div className="flex justify-between mt-2 text-gradient">
                <p className="text-[12px]">TOTAL:</p>
                <p className="text-[12px]">₹ {total.toFixed(2)}</p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="mt-20">
          <button
            type="submit"
            onClick={() => {
              if (amount.length > 1) {
                if (selectedName !== "") {
                  setStepIndex(1);
                }
              } else {
                setIsValid(false);
                toast.error("Set Valid Amount!!");
              }
            }}
            className={`flex primary-btn items-center w-full justify-center rounded-[1.25rem] ${
              selectedName !== "" && amount.length > 1
                ? "bg-[#232B31]"
                : "bg-[#cdced0]"
            } px-3 p-[1.095rem] text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            <div className="text-[12px]">Next</div>
            <span className="flex justify-center items-center size-8">
              <FaCircleArrowRight style={{ color: "white" }} />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default QuickPaymentStep1;
