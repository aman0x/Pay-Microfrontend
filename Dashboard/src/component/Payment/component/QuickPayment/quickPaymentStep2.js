import React, { useState } from "react";
import { PaymentTypeMenu, ReceiversMenu } from ".";
import { FaCircleArrowRight } from "react-icons/fa6";
import { PaymentCard } from "./PaymentCard";
import { useNavigate } from "react-router-dom";
import { useDashboard,usePayment } from "#hooks/index";
import { BearerMenu } from "../NewPayment/mobilePaymentStep1";
const QuickPaymentStep2 = ({
  setStepIndex,
  isReceiverMenu,
  setReceiversMenuView,
  isPaymentTypeMenu,
  setPaymentMenuView,
  typeIndex,
  setTypeIndex,
  beneficiaries,
  receiverIndex,
  setReceiverIndex,
  amount,
  beneficiary,
  setPaymentDetail
}) => {
  const types = ["Vendor Payment"];

  const navigate = useNavigate();

  const { handlePaymentCardData } = useDashboard();
  const {handlePaymentCreate} = usePayment()
  const [cardSelected, setCardSelected] = useState(false);
  const [bearerIndex,setBearerIndex] = useState(0)
  const [bearerMenuView,setBererMenuView] = useState(false)
  
  const receiver = ["Me","Receiver"]
  const handlePayment = async(newData)=>{
    const paymentData = await handlePaymentCreate(newData,false)
    setPaymentDetail(paymentData)
  }
  return (
    <>
      <div className="p-5 mt-2 w-full mb-16 md:mb-0">
        <div className="mb-2" onClick={() => setStepIndex(0)}>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="18"
              y="18.5"
              width="18"
              height="18"
              rx="8"
              transform="rotate(-180 18 18.5)"
              fill="#F0F1F2"
            />
            <path
              d="M10 11.5L8 9.5L10 7.5"
              stroke="#4E5459"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <p className="text-[14px] text-[#232B31] poppins-semibold my-5">
          Details:
        </p>
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

        <div className="flex flex-col gap-1 mb-1 text-[12px] mt-8">
          <div className="flex w-full items-center mb-1">
            <div className="poppins-regular text-[#A3A6A9]">
              Convenience Fees 1.99%
            </div>
            <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
            <div className="poppins-bold text-[#787D81]">₹{amount*0.02}</div>
          </div>
          <div className="flex w-full items-center mb-1">
            <div className="poppins-regular text-[#A3A6A9]">TAX</div>
            <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
            <div className="poppins-bold text-[#787D81]">₹{amount*0.12}</div>
          </div>
          <div className="flex w-full items-center mb-1">
            <div className="poppins-regular text-[#A3A6A9]">
              Receiver will receive
            </div>
            <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
            <div className="poppins-bold text-[#787D81]">₹{amount*0.86}</div>
          </div>
          <div className="flex w-full items-center mt-2">
            <div className="poppins-semibold text-[14px] text-gradient">
              TOTAL PAY :
            </div>
            <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
            <div className="poppins-bold text-[14px] text-gradient">
              ₹{amount}
            </div>
          </div>

          <p className="text-[12px] mt-6 mb-4 poppins-semibold text-[#232B31]">
            Choose Card :
          </p>
          <div onClick={() => setCardSelected(true)}>
            <PaymentCard handlePaymentCardData={handlePaymentCardData} />
          </div>
        </div>

        <button
          type="submit"
          onClick={() => {
            if (cardSelected) {
              setStepIndex(2);
              const newData= {
                transaction_amount:amount,
                beneficiary:beneficiary.id,
                service_ids:[1],
                transaction_type:"card",
                //temp
                card_id:11
            } 
              handlePayment(newData)
            }
          }}
          className={`my-4 flex primary-btn items-center w-full justify-center rounded-[1.25rem] ${
            cardSelected ? "bg-[#232B31]" : "bg-[#cdced0]"
          } px-3 p-[1.095rem] text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        >
          <div className="text-[12px] pr-2">Pay</div>
          <span className="text-[12px] text-gradient">₹ 24,000.24</span>
          <span className="flex justify-center items-center size-8">
            <FaCircleArrowRight style={{ color: "white" }} />
          </span>
        </button>
      </div>
    </>
  );
};

export default QuickPaymentStep2;
