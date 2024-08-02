import React, { useEffect, useState } from "react";
import { PaymentTypeMenu, ReceiversMenu } from ".";
import { FaCircleArrowRight } from "react-icons/fa6";
import { FaSquare } from "react-icons/fa6";
const MobilePaymentStep1 = ({
  stepIndex,
  setStepIndex,
  typeIndex,
  setTypeIndex,
  isPaymentTypeMenu,
  setPaymentMenuView,
  beneficiaries,
  isReceiverMenu,
  setReceiversMenuView,
  receiverIndex,
  setReceiverIndex,
  setBankId,
  amount,
  setAmount
}) => {
  const [total, setTotal] = useState(0);
  const [isValid, setIsValid] = useState(true);
  const [bearerIndex,setBearerIndex] = useState(0)
  const isTyping = amount.length > 0;
  const [bearerMenuView,setBererMenuView] = useState(false)
  const types = ["Vendor Payment"];
  const receiver = ["Me","Receiver"]
  useEffect(() => {
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount) && numericAmount > 10) {
      const tax = numericAmount * 0.12;
      setTotal(numericAmount - tax);
    } else {
      setTotal(0);
    }
  }, [amount]);

  return (
    <>
      <div className="p-5 mt-2 w-full mb-16 md:mb-0">
        <div className="flex flex-col gap-2 items-center justify-center w-full">
          <div className="text-center text-[16px] text-[#232B31] poppins-semibold">
            Enter Data
          </div>
          <div className="text-[10px] text-[#A3A6A9]">{`0${
            stepIndex + 1
          }/03`}</div>
        </div>

        <div className="mt-10">
          <div className="relative form-width mx-auto">
            <p className="mb-3 text-[#787D81] text-[10px] poppins-light">
              Payment Type :
            </p>
            <div className="relative">
              <input
                type="text"
                value={types[typeIndex]}
                className=" bg-white drop-shadow-sm text-gray-900 text-[12px] rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-[12px] p-4 outline-none"
                placeholder="Vendor Payment, Vendor Payment"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
                onClick={() => setPaymentMenuView(!isPaymentTypeMenu)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="18"
                    width="18"
                    height="18"
                    rx="8"
                    transform="rotate(90 18 0)"
                    fill="#DFE0E2"
                  />
                  <path
                    d="M11 8L9 10L7 8"
                    stroke="#4E5459"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {isPaymentTypeMenu && (
              <PaymentTypeMenu
                setCardIndex={setTypeIndex}
                cardIndex={typeIndex}
                setPaymentMenuView={setPaymentMenuView}
              />
            )}
          </div>
          <div className="relative form-width mx-auto">
            <p className="mt-[1.1rem] mb-3 text-[#787D81] text-[10px] poppins-light">
              Pays commission :
            </p>
            <div className="relative">
              <input
                type="text"
                value={receiver[bearerIndex]}
                className=" bg-white drop-shadow-sm text-gray-900 text-[12px] rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-[12px] p-4 outline-none"
                placeholder="Receiver"
              />
              <button
                type="button"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
                onClick={() => setBererMenuView(!bearerMenuView)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="18"
                    width="18"
                    height="18"
                    rx="8"
                    transform="rotate(90 18 0)"
                    fill="#DFE0E2"
                  />
                  <path
                    d="M11 8L9 10L7 8"
                    stroke="#4E5459"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            {bearerMenuView && (
              <BearerMenu
              cardIndex={bearerIndex}
              setCardIndex={setBearerIndex}
              setReceiverMenuView={setBererMenuView}
              types={receiver}
              />
            )}
          </div>
          <div className="flex flex-col justify-center items-center mt-28 px-12">
            <div className="relative border-b-[1px] border-gray-300">
              <div
                className={`absolute inset-y-0 left-0 flex gap-2 items-center pl-5 pointer-events-none text-3xl poppins-regular italic ${
                  isTyping ? "text-gradient" : "text-[#DFE0E2]"
                }`}
              >
                <span className={` ${isTyping ? "text-gradient" : ""}`}>
                  ₹
                </span>
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
        </div>

        <div className="mt-14">
          <button
            type="submit"
            onClick={() => {
              if (amount.length > 1) {
                setStepIndex(1);
              } else {
                setIsValid(false);
                toast.error("Set Valid Amount!!");
              }
            }}
            className={`flex primary-btn items-center w-full justify-center rounded-[1.25rem] ${amount.length > 1 ? 'bg-[#232B31]' : 'bg-[#cdced0]'} px-3 p-[1.095rem] text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
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

function BearerMenu({
  cardIndex,
  setCardIndex,
  setReceiverMenuView,
  types
}) {
  return (
    <div
      className="absolute w-[100%] bg-white rounded-2xl shadow-lg top-10  py-[1rem] px-[1.2rem] gap-4 z-50"
      onClick={() =>
        setTimeout(() => {
          setReceiverMenuView(false);
        }, 100)
      }
    >
      <div className="text-sm poppins-semibold my-2 flex gap-1 items-start">
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_380_21893)">
              <path
                d="M12 24C14.3734 24 16.6935 23.2962 18.6668 21.9776C20.6402 20.6591 22.1783 18.7849 23.0866 16.5922C23.9948 14.3995 24.2324 11.9867 23.7694 9.65892C23.3064 7.33115 22.1635 5.19295 20.4853 3.51472C18.8071 1.83649 16.6689 0.693605 14.3411 0.230582C12.0133 -0.232441 9.60051 0.00519943 7.4078 0.913451C5.21509 1.8217 3.34094 3.35977 2.02236 5.33316C0.703788 7.30655 0 9.62663 0 12C0.00344108 15.1815 1.26883 18.2318 3.51852 20.4815C5.76821 22.7312 8.81846 23.9966 12 24ZM12 5.00001C12.2967 5.00001 12.5867 5.08798 12.8334 5.2528C13.08 5.41762 13.2723 5.65189 13.3858 5.92598C13.4994 6.20007 13.5291 6.50167 13.4712 6.79264C13.4133 7.08361 13.2704 7.35089 13.0607 7.56067C12.8509 7.77044 12.5836 7.91331 12.2926 7.97118C12.0017 8.02906 11.7001 7.99936 11.426 7.88582C11.1519 7.77229 10.9176 7.58003 10.7528 7.33336C10.588 7.08669 10.5 6.79668 10.5 6.50001C10.5 6.10218 10.658 5.72065 10.9393 5.43934C11.2206 5.15804 11.6022 5.00001 12 5.00001ZM11 10H12C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12V18C14 18.2652 13.8946 18.5196 13.7071 18.7071C13.5196 18.8946 13.2652 19 13 19C12.7348 19 12.4804 18.8946 12.2929 18.7071C12.1054 18.5196 12 18.2652 12 18V12H11C10.7348 12 10.4804 11.8946 10.2929 11.7071C10.1054 11.5196 10 11.2652 10 11C10 10.7348 10.1054 10.4804 10.2929 10.2929C10.4804 10.1054 10.7348 10 11 10Z"
                fill="#374957"
              />
            </g>
            <defs>
              <clipPath id="clip0_380_21893">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <div className="text-xs poppins-regular text-[#787D81]">
          Select  from the list (only one)
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {types.map((card, i) => {
          return (
            <div className="flex gap-4 justify-between items-center " key={i}>
              <div
                className={`${
                  cardIndex === i ? "poppins-bold" : "text-[#A3A6A9]"
                } flex gap-1 items-center text-sm`}
              >
                {card}
              </div>
              <div
                className={`max-w-[15px]  max-h-[15px] rounded-sm   ${
                  cardIndex === i ? "primary-linear-gr-bg" : "bg-gray-300"
                }`}
              >
                <FaSquare
                  color={`${cardIndex === i ? "black" : "white"}`}
                  className="rounded-sm p-[1px]"
                  onClick={() => {
                    setCardIndex(i)

                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MobilePaymentStep1;
