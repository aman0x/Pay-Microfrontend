import { MdVerified } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";
import "./style.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { authActions } from "Auth/authReducer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useDashboard } from "#hooks/index.js";
export function PaymentCard({
  handlePaymentCardData,
  setStepIndex,
  amount,
  beneficiary,
  buttonEnabled,
  setButtonEnabled
}) {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.auth.cards);
  const [cardIndex, setCardIndex] = useState(0);
  const [cards, setCards] = useState([
    {
      card_holder_name: "Holder Name",
      card_no: "1234567824681257",
      card_type: "VISA",
      exp_date: "02/28",
      cvv_no: "123",
      balance: 12000,
      payments: 12,
      verified: true,
    },
  ]);

  const handleSlideChange = (swiper) => {
    setCardIndex(swiper.activeIndex);
  };
  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
  useEffect(() => {
    const fetchCards = async () => {
      const data = await handlePaymentCardData();
      setCards(data.results);
    };
    fetchCards();
  }, []);
  return (
    <div className="flex flex-col gap-2 w-full justify-center">
      <div className="flex justify-center w-svw">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          cssMode={true}
          navigation={false}
          pagination={false}
          mousewheel={true}
          keyboard={false}
          onSlideChange={handleSlideChange}
          defaultValue={0}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper h-[17rem]"
        >
          {cards.map((card, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="payment-card-size flex justify-center">
                  <FlipCard
                    index={cardIndex}
                    cardData={card}
                    setButtonEnabled={setButtonEnabled}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex gap-1 justify-center items-center">
        {cards.map((_, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                goToSlide(i);
                setCardIndex(i);
              }}
              className={`rounded-full cursor-pointer ${
                cardIndex === i
                  ? "h-2 w-2 primary-linear-gr-bg"
                  : "h-1 w-1 rounded-full bg-black"
              }`}
            ></div>
          );
        })}
      </div>
      {/* <button
        type="submit"
        disabled={!buttonEnabled}
        onClick={() => {
          setStepIndex(3);
          const newData = {
            transaction_amount: amount,
            beneficiary: beneficiary.id,
            service_ids: [1],
            transaction_type: "card",
            //temp
            card_id: 11,
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
      </button> */}
    </div>
  );
}

export function FlipCard({
  cardColorbg = "#232B31",
  cardData = {},
  setButtonEnabled,
}) {
  const { handlePaymentCardDelete } = useDashboard();
  const navigate = useNavigate();

  const [isCardClicked, setCardClicked] = useState(false);

  const [cvv, setCVV] = useState("");

  return (
    <>
      {isCardClicked ? (
        <div
          className={`flip-card relative shadow-xl rounded-3xl h-60 w-full bg-[#232B31]`}
        >
          <div
            onClick={() => setCardClicked((prev) => !prev)}
            className={`flip-card-inner blur-md`}
          >
            <div
              className={`flip-card-front flex flex-col gap-4 p-[2rem] justify-between rounded-3xl h-full`}
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-0.5 text-xs">
                    <p className="poppins-thin text-[10px] text-[#787D81] mr-2">
                      Card Name
                    </p>
                    <MdVerified color="#27A963" display="flex" />
                  </div>
                  <div className="poppin-bold text-sm mt-2">
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
            </div>
          </div>
          <div className="absolute w-[70%] mx-auto top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="relative border-b-[1px] border-[#676b6d]">
              <div
                className={`absolute inset-y-0 left-0 flex gap-2 items-center pl-5 pointer-events-none text-[12px] poppins-regular italic`}
              >
                <span className="text-[#676b6e] poppins-regular">CVV :</span>
              </div>
              <input
                type="tel"
                value={cvv || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,3}$/.test(value)) {
                    setCVV(value);
                    value.length > 0
                      ? setButtonEnabled(true)
                      : setButtonEnabled(false);
                  }
                }}
                className="poppins-light bg-transparent text-[#c3c5c7] border-none text-[12px] w-full pl-20 placeholder:italic placeholder:text-[12px] placeholder:text-[#B6B8BA] py-2 focus:outline-none focus:ring-0 caret-white"
                placeholder="Enter CVV to confirm ..."
                maxLength={3}
                pattern="\d{3}"
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`flip-card relative shadow-xl rounded-3xl h-60 w-full bg-[#232B31]`}
        >
          <div
            onClick={() => setCardClicked((prev) => !prev)}
            className={`flip-card-inner`}
          >
            <div
              className={`flip-card-front flex flex-col gap-4 p-[2rem] justify-between rounded-3xl h-full`}
            >
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-0.5 text-xs">
                    <p className="poppins-thin text-[10px] text-[#787D81] mr-2">
                      Card Name
                    </p>
                    <MdVerified color="#27A963" display="flex" />
                  </div>
                  <div className="poppin-bold text-sm mt-2">
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
            </div>
          </div>
        </div>
      )}
    </>
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
