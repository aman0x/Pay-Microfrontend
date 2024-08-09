import { useDashboard, usePayment } from "#hooks/index";
import { useEffect, useState } from "react";
import { FaCircleArrowRight } from "react-icons/fa6";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";
function AddCard() {
  const [isValid, setIsValid] = useState(true);
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardExpDate, setExpDate] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const { handleAddCard,handlePaymentCardCheck } = usePayment();
  const [cardCheck,setCardCheck] = useState({})
  const handleSubmit = () => {
    if (
      cardHolderName.length > 3 &&
      cardCVV.length === 3 &&
      cardExpDate.length > 0 &&
      cardNumber.replace(/\s+/g, "").length === 16
    ) {
      handleAddCard({
        card_holder_name: cardHolderName,
        card_no: cardNumber.replace(/\s+/g, ""),
        expiry_date: cardExpDate,
        cvv_no: cardCVV,
        bank:cardCheck
      });
    } else {
      if (cardNumber.replace(/\s+/g, "").length < 16) {
        setIsValid(false);
      }
      toast.error("fail");
    }
  };
  useEffect(()=>{
    const fetchCardDetail = async()=>{
      const data  = await handlePaymentCardCheck(cardNumber.replace(/\s+/g, ""))
      setCardCheck(data)
    }
    if(cardNumber.replace(/\s+/g, "").length>5 && cardNumber.replace(/\s+/g, "").length<9){
      fetchCardDetail()
    }
    
  },[cardNumber])
  return (
    <div className="mt-5 bg-primary p-[2rem] w-full h-[75vh] max-h-[800px] rounded-2xl">
      <div className="mx-auto form-width flex flex-col gap-8 mt-8">
        <div className="text-center poppins-semibold">Enter Data</div>
        <div className="flex flex-col gap-2">
          <div className="relative">
            <InputMask
              mask="9999 9999 9999 9999"
              value={cardNumber}
              maskChar=" "
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Card Number"
            >
              {(inputProps) => (
                <input
                  type="text"
                  {...inputProps}
                  className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5"
                />
              )}
            </InputMask>
              <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                {
                  cardCheck?.scheme  === "Mastercard"?
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="36px" height="36px"><path fill="#3F51B5" d="M45,35c0,2.209-1.791,4-4,4H7c-2.209,0-4-1.791-4-4V13c0-2.209,1.791-4,4-4h34c2.209,0,4,1.791,4,4V35z"/><path fill="#FFC107" d="M30 14A10 10 0 1 0 30 34A10 10 0 1 0 30 14Z"/><path fill="#FF3D00" d="M22.014,30c-0.464-0.617-0.863-1.284-1.176-2h5.325c0.278-0.636,0.496-1.304,0.637-2h-6.598C20.07,25.354,20,24.686,20,24h7c0-0.686-0.07-1.354-0.201-2h-6.598c0.142-0.696,0.359-1.364,0.637-2h5.325c-0.313-0.716-0.711-1.383-1.176-2h-2.973c0.437-0.58,0.93-1.122,1.481-1.595C21.747,14.909,19.481,14,17,14c-5.523,0-10,4.477-10,10s4.477,10,10,10c3.269,0,6.162-1.575,7.986-4H22.014z"/></svg>
                  :
                  <svg fill="none" className="h-6 text-[#1434CB] dark:text-white" viewBox="0 0 36 21"><path fill="currentColor" d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z"/></svg>
                }
                
              </div>
          </div>
          <div className="relative">
            <input
              type="text"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5"
              placeholder="Card Holder Name"
            />
            {!isValid ? (
              <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z"
                    fill="#E45757"
                  />
                </svg>
              </div>
            ) : null}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <InputMask
              mask="99/99"
              value={cardExpDate}
              onChange={(e) => setExpDate(e.target.value)}
              placeholder="MM/YY"
              maskChar=""
            >
              {(inputProps) => (
                <input
                  {...inputProps}
                  type="text"
                  className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5"
                />
              )}
            </InputMask>
            <div className="relative">
              <input
                type="number"
                value={cardCVV}
                onChange={(e) => {
                  if (e.target.value.length < 4) {
                    setCardCVV(e.target.value);
                  }
                }}
                className=" bg-white border border-gray-300 text-gray-900 text-sm rounded-2xl w-full ps-14 p-3.5"
                placeholder="CVV"
              />
              {!isValid ? (
                <div className="absolute inset-y-0 end-1 flex items-center pe-3">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.8332 6.00008C11.8332 9.22171 9.22147 11.8334 5.99984 11.8334C2.77817 11.8334 0.166504 9.22171 0.166504 6.00008C0.166504 2.77842 2.77817 0.166748 5.99984 0.166748C9.22147 0.166748 11.8332 2.77842 11.8332 6.00008ZM5.99984 9.35425C6.24145 9.35425 6.43734 9.15837 6.43734 8.91675V5.41675C6.43734 5.17513 6.24145 4.97925 5.99984 4.97925C5.75822 4.97925 5.56234 5.17513 5.56234 5.41675V8.91675C5.56234 9.15837 5.75822 9.35425 5.99984 9.35425ZM5.99984 3.08342C6.32201 3.08342 6.58317 3.34458 6.58317 3.66675C6.58317 3.98891 6.32201 4.25008 5.99984 4.25008C5.67766 4.25008 5.4165 3.98891 5.4165 3.66675C5.4165 3.34458 5.67766 3.08342 5.99984 3.08342Z"
                      fill="#E45757"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="">
          <button
            type="submit"
            onClick={() => {
              handleSubmit();
            }}
            className="flex primary-btn items-center w-full justify-center rounded-xl bg-gray-950 px-3 p-4 text-sm font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <div>{"Add Card"}</div>
            <span className="py-1.5 pl-2 size-6">
              <FaCircleArrowRight style={{ color: "white" }} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCard;
