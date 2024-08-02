import { PiLineVertical } from "react-icons/pi";
import { FaCircleArrowRight, FaSquare } from "react-icons/fa6";
import { useEffect, useState } from "react";
import PaymentStep2 from "./paymentStep2";
import PaymentStep3 from "./paymentStep3";
import "./style.css";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import { useAccounts } from "#hooks/index";
import { MobilePaymentStep2 } from "./mobilePaymentStep2";
import MobilePaymentStep1 from "./mobilePaymentStep1";
import MobilePaymentStep3 from "./mobilePaymentStep3";
import PaymentSuccessfull from "./paymentSuccessfull";
const receivers = [
  {
    name: "test",
    id: 1,
  },
];
const types = ["Vendor Payment"];
function NewPayment({ isRepeatPayment = false }) {
  const [isPaymentTypeMenu, setPaymentMenuView] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isReceiverMenu, setReceiversMenuView] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [receiverIndex, setReceiverIndex] = useState(0);
  const [paymentDetail, setPaymentDetail] = useState({});
  const [typeIndex, setTypeIndex] = useState(0);
  const [cardId, setCardId] = useState(0);
  const [amount, setAmount] = useState("");
  const [searchParams] = useSearchParams();
  const bankId = searchParams.get("bankId");
  const [beneficiaries, setBeneficiaries] = useState(receivers);
  const [bankDetail, setBankDetail] = useState({
    id: 10,
    user: 1,
    account_name: "test",
    account_number: "23647586473424574",
    ifsc_code: "sfsdg",
    account_type: "INDIVIDUAL",
    account_type_2: "SAVINGS",
    gstin: null,
    pan: null,
    bank_name: "SBI BANK",
  });

  const [selectedName, setSelectedName] = useState("");

  const { handleGetBankById, handleGetBeneficiary } = useAccounts();
  useEffect(() => {
    const fetchBankDetails = async (bankId) => {
      const data = await handleGetBankById(bankId);
      setBankDetail(data);
    };
    const fetchBeneficiary = async () => {
      const beneficiaries = await handleGetBeneficiary();
      setBeneficiaries(beneficiaries.results);
    };
    if (bankId) {
      fetchBankDetails(bankId);
    }
    fetchBeneficiary();
  }, [bankId]);

  return (
    <>
      <div className="md:hidden w-full">
        {stepIndex === 0 && (
          <MobilePaymentStep1
            stepIndex={stepIndex}
            setStepIndex={setStepIndex}
            typeIndex={typeIndex}
            setTypeIndex={setTypeIndex}
            isPaymentTypeMenu={isPaymentTypeMenu}
            setPaymentMenuView={setPaymentMenuView}
            beneficiaries={beneficiaries}
            setBeneficiaries={setBeneficiaries}
            isReceiverMenu={isReceiverMenu}
            setReceiversMenuView={setReceiversMenuView}
            receiverIndex={receiverIndex}
            setReceiverIndex={setReceiverIndex}
          />
        )}
        {stepIndex === 1 && (
          <MobilePaymentStep2
            stepIndex={stepIndex}
            setStepIndex={setStepIndex}
            selectedName={selectedName}
            setSelectedName={setSelectedName}
          />
        )}

        {stepIndex === 2 && (
          <MobilePaymentStep3
            stepIndex={stepIndex}
            setStepIndex={setStepIndex}
            selectedName={selectedName}
          />
        )}

        {stepIndex === 3 && (
          <PaymentSuccessfull
            stepIndex={stepIndex}
            setStepIndex={setStepIndex}
          />
        )}
      </div>

      <div className="hidden mt-5 bg-primary p-[2rem] rounded-2xl md:flex md:flex-col gap-3 w-full min-h-[600px] mb-4 ">
        <div className="flex justify-evenly gap-2">
          <div className="flex flex-col items-center gap-1">
            {stepIndex <= 0 ? (
              <div className="">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 8C16 12.4182 12.4182 16 8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8ZM11.2242 5.57574C11.4586 5.81005 11.4586 6.18995 11.2242 6.42424L7.22424 10.4242C6.98992 10.6586 6.61008 10.6586 6.37574 10.4242L4.77574 8.82424C4.54142 8.58992 4.54142 8.21008 4.77574 7.97576C5.01005 7.74144 5.38995 7.74144 5.62426 7.97576L6.8 9.15144L8.58784 7.3636L10.3758 5.57574C10.6101 5.34142 10.9899 5.34142 11.2242 5.57574Z"
                    fill={stepIndex === 0 ? "#232B31" : "#B6B8BA"}
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 9C17 13.4182 13.4182 17 9 17C4.58172 17 1 13.4182 1 9C1 4.58172 4.58172 1 9 1C13.4182 1 17 4.58172 17 9ZM12.2242 6.57574C12.4586 6.81005 12.4586 7.18995 12.2242 7.42424L8.22424 11.4242C7.98992 11.6586 7.61008 11.6586 7.37574 11.4242L5.77574 9.82424C5.54142 9.58992 5.54142 9.21008 5.77574 8.97576C6.01005 8.74144 6.38995 8.74144 6.62426 8.97576L7.8 10.1514L9.58784 8.3636L11.3758 6.57574C11.6101 6.34142 11.9899 6.34142 12.2242 6.57574Z"
                    fill="url(#paint0_linear_1298_2821)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1298_2821"
                      x1="-1.55083"
                      y1="10.4222"
                      x2="19.666"
                      y2="5.56723"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F6DEC6" />
                      <stop offset="0.47" stopColor="#E872D4" />
                      <stop offset="0.656667" stopColor="#C190D9" />
                      <stop offset="0.881578" stopColor="#A2DCFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
            <div className="poppins-light text-[10px] flex gap-1">
              Step <div>1</div>
            </div>
          </div>
          <hr
            className={`my-2 ${
              stepIndex > 0
                ? "hr-gradient"
                : "w-full border-t-2 border-gray-200"
            }`}
          />
          <div className="flex flex-col items-center gap-1">
            {stepIndex <= 1 ? (
              <div className="">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 8C16 12.4182 12.4182 16 8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8ZM11.2242 5.57574C11.4586 5.81005 11.4586 6.18995 11.2242 6.42424L7.22424 10.4242C6.98992 10.6586 6.61008 10.6586 6.37574 10.4242L4.77574 8.82424C4.54142 8.58992 4.54142 8.21008 4.77574 7.97576C5.01005 7.74144 5.38995 7.74144 5.62426 7.97576L6.8 9.15144L8.58784 7.3636L10.3758 5.57574C10.6101 5.34142 10.9899 5.34142 11.2242 5.57574Z"
                    fill={stepIndex === 1 ? "#232B31" : "#B6B8BA"}
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 9C17 13.4182 13.4182 17 9 17C4.58172 17 1 13.4182 1 9C1 4.58172 4.58172 1 9 1C13.4182 1 17 4.58172 17 9ZM12.2242 6.57574C12.4586 6.81005 12.4586 7.18995 12.2242 7.42424L8.22424 11.4242C7.98992 11.6586 7.61008 11.6586 7.37574 11.4242L5.77574 9.82424C5.54142 9.58992 5.54142 9.21008 5.77574 8.97576C6.01005 8.74144 6.38995 8.74144 6.62426 8.97576L7.8 10.1514L9.58784 8.3636L11.3758 6.57574C11.6101 6.34142 11.9899 6.34142 12.2242 6.57574Z"
                    fill="url(#paint0_linear_1298_2821)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1298_2821"
                      x1="-1.55083"
                      y1="10.4222"
                      x2="19.666"
                      y2="5.56723"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F6DEC6" />
                      <stop offset="0.47" stopColor="#E872D4" />
                      <stop offset="0.656667" stopColor="#C190D9" />
                      <stop offset="0.881578" stopColor="#A2DCFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
            <div className="poppins-light text-[10px]  flex gap-1">
              Step <div>2</div>
            </div>
          </div>
          <hr
            className={`my-2 ${
              stepIndex > 1
                ? "hr-gradient"
                : "w-full border-t-2 border-gray-200"
            }`}
          />
          <div className="flex flex-col items-center gap-1">
            {stepIndex <= 2 ? (
              <div className="">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 8C16 12.4182 12.4182 16 8 16C3.58172 16 0 12.4182 0 8C0 3.58172 3.58172 0 8 0C12.4182 0 16 3.58172 16 8ZM11.2242 5.57574C11.4586 5.81005 11.4586 6.18995 11.2242 6.42424L7.22424 10.4242C6.98992 10.6586 6.61008 10.6586 6.37574 10.4242L4.77574 8.82424C4.54142 8.58992 4.54142 8.21008 4.77574 7.97576C5.01005 7.74144 5.38995 7.74144 5.62426 7.97576L6.8 9.15144L8.58784 7.3636L10.3758 5.57574C10.6101 5.34142 10.9899 5.34142 11.2242 5.57574Z"
                    fill={stepIndex === 2 ? "#232B31" : "#B6B8BA"}
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 9C17 13.4182 13.4182 17 9 17C4.58172 17 1 13.4182 1 9C1 4.58172 4.58172 1 9 1C13.4182 1 17 4.58172 17 9ZM12.2242 6.57574C12.4586 6.81005 12.4586 7.18995 12.2242 7.42424L8.22424 11.4242C7.98992 11.6586 7.61008 11.6586 7.37574 11.4242L5.77574 9.82424C5.54142 9.58992 5.54142 9.21008 5.77574 8.97576C6.01005 8.74144 6.38995 8.74144 6.62426 8.97576L7.8 10.1514L9.58784 8.3636L11.3758 6.57574C11.6101 6.34142 11.9899 6.34142 12.2242 6.57574Z"
                    fill="url(#paint0_linear_1298_2821)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_1298_2821"
                      x1="-1.55083"
                      y1="10.4222"
                      x2="19.666"
                      y2="5.56723"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F6DEC6" />
                      <stop offset="0.47" stopColor="#E872D4" />
                      <stop offset="0.656667" stopColor="#C190D9" />
                      <stop offset="0.881578" stopColor="#A2DCFE" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            )}
            <div className="poppins-light text-[10px] flex gap-1">
              Step <div>3</div>
            </div>
          </div>
        </div>
        {stepIndex === 0 && (
          <div className="mx-auto form-width flex flex-col gap-8 mt-4">
            <div className="text-center poppins-semibold">Enter Data</div>
            <div className="flex flex-col gap-4">
              <div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex gap-2 items-center ps-5 pointer-events-none text-gray-400 text-xs poppins-semibold italic">
                    ₹
                    <PiLineVertical color="gray" />
                  </div>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full !ps-16 placeholder:italic placeholder:text-xs p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter Amount."
                  />
                </div>
                {!isValid && (
                  <div className="text-red-400 text-xs">
                    Amount Should be greater than 10.
                  </div>
                )}
              </div>
              {!isRepeatPayment ? (
                <div className="relative">
                  <div className="relative">
                    <input
                      type="text"
                      value={beneficiaries[receiverIndex].name}
                      className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-xs p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              ) : null}

              <div className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={types[typeIndex]}
                    className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full !ps-5 placeholder:italic placeholder:text-xs p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            </div>

            <div className="">
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
                className="flex primary-btn items-center w-full justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <div>{"Next Step"}</div>
                <span className="py-1.5 pl-2 size-6">
                  <FaCircleArrowRight style={{ color: "white" }} />
                </span>
              </button>
            </div>
          </div>
        )}
        {stepIndex === 1 && (
          <PaymentStep2
            setStepIndex={setStepIndex}
            data={{
              transaction_amount: amount,
              transaction_type: "card",
              beneficiary: beneficiaries[receiverIndex],
            }}
            setCardId={setCardId}
            bankDetail={bankDetail}
            setPaymentDetail={setPaymentDetail}
          />
        )}

        {stepIndex === 2 && (
          <PaymentStep3
            setStepIndex={setStepIndex}
            data={{
              transaction_amount: amount,
              transaction_type: "card",
              beneficiary: beneficiaries[receiverIndex],
              card_id: cardId,
              bank_id: beneficiaries[receiverIndex].bank_account,
            }}
            paymentDetail={paymentDetail}
            bankDetail={bankDetail}
          />
        )}
      </div>
    </>
  );
}
export function PaymentTypeMenu({
  cardIndex,
  setCardIndex,
  setPaymentMenuView,
}) {
  return (
    <div
      className="absolute w-[100%] top-10 bg-white rounded-2xl shadow-lg py-[1rem] px-[1.2rem] gap-4 z-50"
      onClick={() => {
        setTimeout(() => {
          setPaymentMenuView(false);
        }, 100);
      }}
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
          Select the Payment Type from the list (only one)
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {types.map((card, i) => {
          return (
            <div className="flex gap-4 justify-between items-center" key={i}>
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
                  onClick={() => setCardIndex(i)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export function ReceiversMenu({
  cardIndex,
  setCardIndex,
  beneficiaries,
  setReceiversMenuView,
}) {
  return (
    <div
      className="absolute w-[100%] bg-white rounded-2xl shadow-lg top-10  py-[1rem] px-[1.2rem] gap-4 z-50"
      onClick={() =>
        setTimeout(() => {
          setReceiversMenuView(false);
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
          Select the Receiver from the list (only one)
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {beneficiaries.map((card, i) => {
          return (
            <div className="flex gap-4 justify-between items-center " key={i}>
              <div
                className={`${
                  cardIndex === i ? "poppins-bold" : "text-[#A3A6A9]"
                } flex gap-1 items-center text-sm`}
              >
                {card.name}
              </div>
              <div
                className={`max-w-[15px]  max-h-[15px] rounded-sm   ${
                  cardIndex === i ? "primary-linear-gr-bg" : "bg-gray-300"
                }`}
              >
                <FaSquare
                  color={`${cardIndex === i ? "black" : "white"}`}
                  className="rounded-sm p-[1px]"
                  onClick={() => setCardIndex(i)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default NewPayment;
