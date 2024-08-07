import Avatar from "@mui/material/Avatar";
import { IoAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDashboard,useAccounts } from "#hooks/index";
import { PaymentCard } from "./PaymentCard";
import { useEffect, useState } from "react";
import { usePayment } from "#hooks/index";
import { FaCircleArrowRight } from "react-icons/fa6";
const MobilePaymentStep3 = ({ stepIndex, setStepIndex, selectedName,beneficiary,bankDetail,setBankDetail,amount,setPaymentDetail }) => {
  const navigate = useNavigate();
  const {handlePaymentCreate} = usePayment()
  const { handlePaymentCardData } = useDashboard();
  const {handleGetBankById} = useAccounts()
  const [cardSelected, setCardSelected] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [cardId,setCardId] = useState(0)
  useEffect(()=>{
    const fetchBankDetails = async(bankId)=>{
     const data = await handleGetBankById(bankId)
     setBankDetail(data)
    }
    fetchBankDetails(beneficiary?.bank_account)
  },[beneficiary?.bank_account])

  const handlePayment = async(newData)=>{
    const paymentData = await handlePaymentCreate(newData,false)
    setPaymentDetail(paymentData)
  }
  return (
    <>
      <div className="p-5 mt-2 w-full mb-16 md:mb-0">
        <div className="relative flex flex-col gap-2 items-center justify-center w-full">
          <div className="text-center text-[16px] text-[#232B31] poppins-semibold">
            Choose Receiver
          </div>
          <div className="text-[10px] text-[#A3A6A9]">{`0${
            stepIndex + 1
          }/03`}</div>
          <div className="absolute left-0" onClick={() => setStepIndex(1)}>
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
          <div className="absolute right-0" onClick={() => navigate("/")}>
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
        </div>

        <div className="mt-10">
          <p className="text-[#232B31] poppins-semibold text-14px">
            Receiver Name:
          </p>
          <div className="mt-4">
            <p className="poppins-light text-[10px] text-[#A3A6A9]">
              {selectedName}
            </p>
          </div>
        </div>

        <p className="my-4 text-[#232B31] poppins-semibold">Details</p>

        <div className="flex flex-col gap-1 mb-1 text-[12px]">
          <div className="flex w-full items-center">
            <div className="poppins-regular text-[#A3A6A9]">Bank:</div>
            <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
            <div className="poppins-bold text-[#787D81]">
              {bankDetail.account_number}
            </div>
          </div>
          <div className="flex w-full items-center mb-1">
            <div className="poppins-regular text-[#A3A6A9]">
              Convenience Fees 1.99%
            </div>
            <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
            <div className="poppins-bold text-[#787D81]">{"₹"}{amount*0.02}</div>
          </div>
          <div className="flex w-full items-center mb-1">
            <div className="poppins-regular text-[#A3A6A9]">TAX</div>
            <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
            <div className="poppins-bold text-[#787D81]">{"₹"}{amount*0.12}</div>
          </div>
          <div className="flex w-full items-center mb-1">
            <div className="poppins-regular text-[#A3A6A9]">
              Receiver will receive
            </div>
            <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
            <div className="poppins-bold text-[#787D81]">{"₹"}{amount*0.86}</div>
          </div>
          <div className="flex w-full items-center mt-2">
            <div className="poppins-semibold text-[14px] text-gradient">
              TOTAL PAY :
            </div>
            <hr className="border-t-2 border-dashed border-[#CDCED1] flex-grow mx-1" />
            <div className="poppins-bold text-[14px] text-gradient">
              {"₹"}{amount}
            </div>
          </div>

          <p className="text-[12px] my-4 poppins-semibold text-[#232B31]">
            Choose Card :
          </p>
          <div onClick={() => setCardSelected(true)}>
            <PaymentCard handlePaymentCardData={handlePaymentCardData} setCardId={setCardId} setStepIndex={setStepIndex} amount={amount} beneficiary={beneficiary} buttonEnabled={buttonEnabled} setButtonEnabled={setButtonEnabled}/>
          </div>
        </div>

        <button
        type="submit"
        disabled={!buttonEnabled}
        onClick={() => {
          setStepIndex(3);
          const newData = {
            transaction_amount: amount,
            beneficiary: beneficiary.id,
            service_ids: [1],
            transaction_type: "card",
            card_id: cardId,
          };
          handlePayment(newData);
        }}
        className={`my-4 flex primary-btn items-center w-full justify-center rounded-[1.25rem] ${
          buttonEnabled ? "bg-[#232B31]" : "bg-[#CCCDD0]"
        }  px-3 p-[1.095rem] text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      >
        <div
          className={`text-[12px] ${
            buttonEnabled ? "text-white" : "#B6B8BA"
          } pr-2`}
        >
          Pay
        </div>
        <span
          className={`text-[12px] ${
            buttonEnabled ? "text-gradient" : "#B6B8BA"
          }`}
        >
          ₹ {amount}
        </span>
        <span className="flex justify-center items-center size-8">
          <FaCircleArrowRight
            style={{ color: buttonEnabled ? "white" : "#B6B8BA" }}
          />
        </span>
      </button>
      </div>
    </>
  );
};

export default MobilePaymentStep3;
