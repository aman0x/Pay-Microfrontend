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
        cvv_no: cardCVV
      });
    } else {
      if (cardNumber.replace(/\s+/g, "").length < 16) {
        setIsValid(false);
      }
      // setIsValid(false)
      toast.error("fail");
    }
  };
  useEffect(()=>{
    const fetchCardDetail = async()=>{
      const data  = await handlePaymentCardCheck()
      
    }
    fetchCardDetail()
  })
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
