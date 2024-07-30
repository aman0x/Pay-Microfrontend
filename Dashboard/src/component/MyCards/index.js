import { useNavigate } from "react-router-dom";
import { FlipCard, PaymentCard } from "../PaymentCard";
import { useState, useEffect } from "react";
import { useDashboard } from "#hooks/index.js";

function MyCards() {
  const navigate = useNavigate();
  const { handlePaymentCardData } = useDashboard();
  const [CardIndex, setCardIndex] = useState(0);
  const [cards, setCards] = useState([
    {
      card_holder_name: "Holder Name",
      card_no: "1234567824681257",
      card_type: "VISA",
      expiry_date: "02/28",
      cvv_no: "123",
      balance: 12000,
      payments: 12,
      verified: true,
    },
  ]);
  useEffect(() => {
    const fetchCards = async () => {
      const data = await handlePaymentCardData();
      setCards(data);
    };
    fetchCards();
  }, []);
  const colors = ["#E872D4", "#964EC2", "#232B31", "#232B31"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div className="mt-2 md:mt-5 md:bg-primary p-[2rem] md:rounded-3xl flex flex-col gap-3   w-full my-4">
      <div className="md:hidden">
        <div className="flex  bg-[#F0F1F2] py-[8px] rounded-xl justify-evenly px-2 shadow-sm ">
          <button
            className="px-2 py-4 rounded-xl poppins-light text-xs"
            style={{
              backgroundColor: CardIndex === 0 ? "#FFFFFF" : null,
              width: "45%",
              color: CardIndex === 0 ? "black" : "gray",
              fontWeight: CardIndex === 0 ? "500" : "normal",
              boxShadow:
                CardIndex === 0
                  ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  : null,
            }}
            onClick={() => setCardIndex(0)}
          >
            All
          </button>
          <button
            className="px-2 py-4 rounded-xl poppins-light text-xs"
            style={{
              backgroundColor: CardIndex === 1 ? "#FFFFFF" : null,
              color: CardIndex === 1 ? "black" : "gray",
              width: "45%",
              fontWeight: CardIndex === 1 ? "500" : "normal",
              boxShadow:
                CardIndex === 1
                  ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  : null,
            }}
            onClick={() => setCardIndex(1)}
          >
            Verified
          </button>
          <button
            className="px-2 py-4 rounded-xl poppins-light text-xs"
            style={{
              backgroundColor: CardIndex === 2 ? "#FFFFFF" : null,
              width: "45%",
              color: CardIndex === 2 ? "black" : "gray",
              fontWeight: CardIndex === 2 ? "500" : "normal",
              boxShadow:
                CardIndex === 2
                  ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                  : null,
            }}
            onClick={() => setCardIndex(2)}
          >
            No Verified
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <div className="poppins-semibold">All Cards</div>
          <div className="text-xs poppins-light text-[#787D81] ">(4)</div>
        </div>
        <div
          onClick={() => navigate("/dashboard/card/add-card")}
          className="flex gap-1 items-center"
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
          <div className="text-xs text-[#787D81] poppins-lights cursor-pointer">
            Add New Card
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 divide-three gap-4">
        {cards.map((card) => {
          return (
            <FlipCard
              isArrowShown={false}
              cardData={card}
              cardColorbg={getRandomColor()}
            />
          );
        })}
        {/* <FlipCard isArrowShown={false} cardData={cards} />
            <FlipCard isArrowShown={false}  cardData={cards}  cardColorbg="#E872D4"/>
            <FlipCard isArrowShown={false}  cardData={cards}  cardColorbg="#964EC2"/>
            <FlipCard isArrowShown={false}  cardData={cards}  cardColorbg="#232B31"/> */}
        <div className="primary-linear-gr-bg p-[2px] flex justify-center rounded-3xl max-w-[400px] h-60">
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
      </div>
      <div className="h-20"></div>
    </div>
  );
}
export default MyCards;
