import { MdVerified } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiSolidShow } from "react-icons/bi";
import { IoAddCircleSharp } from "react-icons/io5";
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
export function PaymentCard({ handlePaymentCardData }) {
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
                    isArrowShown={false}
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
    </div>
  );
}

export function FlipCard({
  cardColorbg = "#232B31",
  isArrowShown = true,
  cardData = {},
}) {
  const { handlePaymentCardDelete } = useDashboard();
  const navigate = useNavigate();
  const [isCardClicked, setCardClicked] = useState(false);
  const [cardColor, setCardColor] = useState(cardColorbg);
  const [isCvvShown, setCVV] = useState(false);
  return (
    <div className={`flip-card relative shadow-xl rounded-3xl h-60 w-full`}>
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
              <img src="/dashboard/visa.png" alt="paymorz-logo" width="60px" />
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
            <div
              onClick={() =>
                navigate(`/dashboard/card/card-detail?id=${cardData.id}`)
              }
              className="mt-6 underline poppins-thin text-xs hover:text-rose-300 "
            >
              <a href="#" className="invisible">
                Details
              </a>
            </div>
          </div>
          <div
            onClick={() =>
              navigate(`/dashboard/card/card-detail?id=${cardData.id}`)
            }
            className="mt-2 underline poppins-thin text-xs hover:text-rose-300 text-right"
          >
            <a href="#" className="">
              Details
            </a>
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
                <a
                  href="#"
                  onClick={() => {
                    handlePaymentCardDelete(cardData.id);
                  }}
                >
                  <RiDeleteBin5Fill color="red" size="16px" />
                </a>
              </div>
            </div>
            <div>
              <p className="poppins-thin text-xs mb-2">Change Color</p>
              <div className="flex gap-2">
                <img
                  onClick={() => setCardColor("#232B31")}
                  src="/dashboard/color1.png"
                />
                <img
                  onClick={() => setCardColor("#E872D4")}
                  src="/dashboard/color2.png"
                />
                <img
                  onClick={() => setCardColor("#964EC2")}
                  src="/dashboard/color3.png"
                />
                <img
                  onClick={() => setCardColor("#F6DEC6")}
                  src="/dashboard/color4.png"
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