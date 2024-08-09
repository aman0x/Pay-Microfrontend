import { MdVerified } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { IoAddCircleSharp } from "react-icons/io5";
import "./style.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "Auth/authReducer";
import {useDashboard} from "#hooks/index.js"
import moment from "moment";
export function PaymentCard({ handlePaymentCardData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cardIndex, setCardIndex] = useState(0);
  const [cards, setCards] = useState([
  ]);
  useEffect(() => {
    const fetchCards = async () => {
      const data = await handlePaymentCardData();
      setCards(data.results);
      dispatch(authActions.setCards({ cards: data.results }));
    };
    fetchCards();
  }, []);
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between ">
        <div className="poppins-semibold text-[#232B31] text-base">
          My Cards
        </div>
        <div
          onClick={() => navigate("/dashboard/card/add-card")}
          className="flex items-center gap-1 cursor-pointer"
        >
          <IoAddCircleSharp size={18} />
          <p className="poppins-regular text-[#787D81] text-xs">New Card</p>
        </div>
      </div>
      {
        cards.length>0?
        <FlipCard index={cardIndex} cardData={cards[cardIndex]} setCards={setCards} cards={cards} />
        :
        <div className="primary-linear-gr-bg p-[2px] flex w-[400px] justify-center rounded-3xl max-w-[400px] h-60">
          <div
            onClick={() => navigate("/dashboard/card/add-card")}
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
            <div className="text-xs  poppins-lights cursor-pointer">
              Add New Card
            </div>
          </div>
        </div>
      }
      
      <div className="flex gap-1 justify-center items-center">
        {cards.map((_, i) => {
          return (
            <div
              key={i}
              onClick={() => setCardIndex(i)}
              className={`rounded-full cursor-pointer ${
                cardIndex === i
                  ? "h-2 w-2 primary-linear-gr-bg"
                  : "h-1 w-1 rounded-full bg-black"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export function FlipCard({
  cardColorbg = "#232B31",
  isArrowShown = true,
  cardData = {},
  cards=[],
  setCards =()=>{}
}) {
  const navigate = useNavigate();
  const [isCardClicked, setCardClicked] = useState(false);
  const [cardColor, setCardColor] = useState(cardColorbg);
  const [isCvvShown, setCVV] = useState(false);
  const {handlePaymentCardDelete} = useDashboard()
  return (
    <div className={`flip-card relative shadow-xl rounded-3xl h-60 w-full max-w-[400px]`}>
      {isArrowShown ? (
        <div
          onClick={() => setCardClicked(!isCardClicked)}
          className="rounded-[50%] p-[6px] bg-black absolute right-2 translate-x-[100%] top-[42%] primary-arrow z-50"
        >
          <svg
            width="9"
            height="8"
            viewBox="0 0 9 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 4H7M7 4L4 1M7 4L4 7"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ) : null}
      <div
        onClick={() => setCardClicked(!isCardClicked)}
        className={`flip-card-inner ${
          isCardClicked ? "flip-card-transform" : ""
        }`}
      >
        <div
          className={`flip-card-front flex flex-col p-[2rem] justify-between rounded-3xl h-full`}
          style={{
            backgroundColor: cardColor,
          }}
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-0.5 text-xs">
                <p className="poppins-thin text-[10px] text-[#787D81] mr-2">
                  Card Name
                </p>
                <MdVerified color="#27A963" display="flex" />
                {/* <div className="text-green-500 poppins">
                  {cardData.verified_at ? "Verified" : "Not Verified"}
                </div> */}
              </div>
              <div className="poppin-bold text-sm">
                {cardData.card_holder_name}
              </div>
            </div>
            <div>
              <img src="/images/visa.png" alt="paymorz-logo" width="60px" />
            </div>
          </div>
          <div>
            <p className="poppins-regular text-[14px]">
              {maskCardNumber(cardData.card_no)}
            </p>
          </div>
          <div className="flex justify-between text-xs">
            <div>
              <p className="poppins-thin text-[10px] text-[#787D81] mb-2">
                Exp. Date
              </p>
              <p>{cardData.expiry_date}</p>
            </div>
            <div>
              <p className="poppins-thin text-[10px] text-[#787D81] mb-2">
                CVV
              </p>
              <p>***</p>
            </div>
            <div>
              <p className="poppins-thin text-[10px] text-[#787D81] mb-2">
                Balance
              </p>
              <p>₹{cardData.balance || 0}</p>
            </div>
          </div>
          <div
            onClick={() =>
              navigate(`/dashboard/card/card-detail?id=${cardData.id}`)
            }
            className="mt-2 underline poppins-thin text-xs hover:text-rose-300 text-right cursor-pointer"
          >
              Details            
          </div>
          <div></div>
        </div>
        <div
          className={`flip-card-back rounded-3xl`}
          style={{
            backgroundColor: cardColor,
          }}
        >
          <div className="flex flex-col  px-[2rem] py-[1.5rem] justify-between  h-full">
            <div className="flex flex-row justify-between text-xs">
              <div>
                <p className="poppins-thin text-xs mb-2">Payments</p>
                <p className="poppins-bold">{cardData.payments || 0}</p>
              </div>
              <div>
                <p className="poppins-thin text-xs mb-2">Status</p>
                <div className="flex items-center gap-0.5 text-xs">
                  <MdVerified color="#27A963" display="flex" />
                  <div className="text-green-500 poppins">
                    Verified{" "}
                    {moment(cardData.verified_at).format("DD MMMM YYYY")}
                  </div>
                </div>
              </div>
              <div className="mt-6 ">
                <div onClick={()=>{
                  handlePaymentCardDelete(cardData.id)
                  const newCards = cards.filter(
                    (card) => card.id !== cardData.id
                  );
                  setCards(newCards)
                }}>
                  <RiDeleteBin5Fill color="red" size="16px" />
                </div>
              </div>
            </div>
            <div>
              <p className="poppins-thin text-xs mb-2">Change Color</p>
              <div className="flex gap-2">
                <img
                  onClick={() => setCardColor("#232B31")}
                  src="/images/color1.png"
                />
                <img
                  onClick={() => setCardColor("#E872D4")}
                  src="/images/color2.png"
                />
                <img
                  onClick={() => setCardColor("#964EC2")}
                  src="/images/color3.png"
                />
                <img
                  onClick={() => setCardColor("#F6DEC6")}
                  src="/images/color4.png"
                />
              </div>
            </div>
            <div>
              <p className="poppins-thin text-xs mb-2">CVV</p>
              <p className="flex gap-2  text-xs ">
                {isCvvShown ? cardData.cvv_no : "***"}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setCVV(!isCvvShown);
                  }}
                >
                  <BiSolidShow color="gray" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function maskCardNumber(cardNumber) {
  // if (cardNumber.length !== 16) {
  //   throw new Error('Card number must be 16 digits long.');
  // }
  const lastFourDigits = cardNumber.slice(-4);
  const maskedSection = "*".repeat(12);
  const maskedCardNumber = maskedSection + lastFourDigits;
  const formattedCardNumber = maskedCardNumber.match(/.{1,4}/g).join(" ");
  return formattedCardNumber;
}

export function UploadCardStatement({isOpen,setOpen=()=>{}}){
  if (!isOpen) return null;
  return(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="flex overflow-hidden flex-col p-7 max-w-xs bg-white rounded-3xl">
        <div className="flex gap-5 justify-between w-full">
          <div className="text-xs font-semibold text-gray-800">
            Upload Card Steatement
          </div>
          <div className="flex gap-2.5 justify-center items-center px-2 bg-gray-100 rounded-lg h-[18px] min-h-[18px] w-[18px]"
          onClick={()=>{
            setOpen(false)
          }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="18" rx="8" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 0 18)" fill="#F0F1F2"/>
            <path d="M7 11L9 9L7 7" stroke="#A3A6A9" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11 7L9 9L11 11" stroke="#A3A6A9" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <div className="flex overflow-hidden flex-col justify-center px-9 py-11 mt-5 font-light bg-gray-100 rounded-2xl">
          <div className="flex flex-col">
            <div className="text-xs italic text-center text-zinc-500">
              Tap here to choose a file on your device...
            </div>
            <div className="mt-1.5 text-xs italic text-zinc-400">
              Acceptable files .JPG, .PNG or .PDF up to 5 MB size
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}