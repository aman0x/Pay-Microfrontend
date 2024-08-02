import React, { useEffect, useState } from "react";
import { PaymentTypeMenu, ReceiversMenu } from ".";
import { FaCircleArrowRight } from "react-icons/fa6";

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
}) => {
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const isTyping = amount.length > 0;

  const types = ["Vendor Payment"];

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
                value={beneficiaries[receiverIndex].name}
                className=" bg-white drop-shadow-sm text-gray-900 text-[12px] rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-[12px] p-4 outline-none"
                placeholder="Receiver"
              />
              <button
                type="button"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
                onClick={() => setReceiversMenuView(!isReceiverMenu)}
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
            {isReceiverMenu && (
              <ReceiversMenu
                cardIndex={receiverIndex}
                setCardIndex={setReceiverIndex}
                beneficiaries={beneficiaries}
                setReceiversMenuView={setReceiversMenuView}
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

export default MobilePaymentStep1;
