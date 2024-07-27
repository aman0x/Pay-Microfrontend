import { useState, useEffect } from "react";
const menu = ["General", "Payment", "KYC", "Account", "Transaction", "Cards"];
import { useNotfication } from "#hooks/index";
import moment from "moment";
function Notification() {
  const [notificationIndex0, setnotificationIndex0] = useState(true);
  const [notificationIndex1, setnotificationIndex1] = useState(false);
  const [notificationIndex2, setnotificationIndex2] = useState(false);
  const [notificationIndex3, setnotificationIndex3] = useState(false);
  const [notificationIndex4, setnotificationIndex4] = useState(false);
  const [notificationIndex5, setnotificationIndex5] = useState(false);
  const [tophead, setTopHead] = useState(0);
  const [CardIndex, setCardIndex] = useState(0);
  const [notificationData, setNotificationData] = useState([
    {
      date: "2024-06-21T10:21:17.116232Z",
      message_title: "title2",
      type: "General",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.  Curabitur tempus urna at turpis condimentum lobortis. Curabitur tempus urna at turpis condimentum lobortis.",
    },
  ]);
  const { handleGetNotification } = useNotfication();

  useEffect(() => {
    const fetchNotificationData = async () => {
      const topic = menu[tophead].toLowerCase();
      const data = await handleGetNotification(topic);
      console.log("nI", data);
      setNotificationData(data);
    };

    fetchNotificationData();
  }, [tophead]);

  return (
    <>
      <div className="md:hidden p-5 w-full mb-20 md:mb-0">
        <div className="w-full">
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
              All(5)
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
              Read(1)
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
              Unread(2)
            </button>
          </div>
        </div>
        {CardIndex === 0 && (
          <div className="mt-8">
            <div className="bg-white rounded-3xl shadow-md p-5 mb-4">
              <div className="flex justify-between items-center w-full gap-4">
                <div className="rounded-full w-12 h-12 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/red-notice.svg" alt="notice" />
                </div>
                <div className="flex-1 poppins-semibold justify-center items-center text-[#232B31]">
                  <p>Title of Message</p>
                </div>
                <div className="poppins-regular">
                  <p className="text-right text-[#787D81]">12.05.2024</p>
                </div>
              </div>
              <div className="w-full pl-16">
                <p className="text-[#A3A6A9] text-left poppins-light">
                  Lorem ipsum dolor sit amet consectetur. Erat eros tincidunt
                  eleifend egestas.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-md p-5 mb-4">
              <div className="flex justify-between items-center w-full gap-4">
                <div className="rounded-full w-12 h-12 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/green-notice.svg" alt="notice" />
                </div>
                <div className="flex-1 poppins-semibold justify-center items-center text-[#232B31]">
                  <p>Title of Message</p>
                </div>
                <div className="poppins-regular">
                  <p className="text-right text-[#787D81]">12.05.2024</p>
                </div>
              </div>
              <div className="w-full pl-16">
                <p className="text-[#A3A6A9] text-left poppins-light">
                  Lorem ipsum dolor sit amet consectetur. Erat eros tincidunt
                  eleifend egestas.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-md p-5 mb-4">
              <div className="flex justify-between items-center w-full gap-4">
                <div className="rounded-full w-12 h-12 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/yellow-notice.svg" alt="notice" />
                </div>
                <div className="flex-1 poppins-semibold justify-center items-center text-[#232B31]">
                  <p>Title of Message</p>
                </div>
                <div className="poppins-regular">
                  <p className="text-right text-[#787D81]">12.05.2024</p>
                </div>
              </div>
              <div className="w-full pl-16">
                <p className="text-[#A3A6A9] text-left poppins-light">
                  Lorem ipsum dolor sit amet consectetur. Erat eros tincidunt
                  eleifend egestas.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-md p-5 mb-4">
              <div className="flex justify-between items-center w-full gap-4">
                <div className="rounded-full w-12 h-12 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/green-notice.svg" alt="notice" />
                </div>
                <div className="flex-1 poppins-semibold justify-center items-center text-[#232B31]">
                  <p>Title of Message</p>
                </div>
                <div className="poppins-regular">
                  <p className="text-right text-[#787D81]">12.05.2024</p>
                </div>
              </div>
              <div className="w-full pl-16">
                <p className="text-[#A3A6A9] text-left poppins-light">
                  Lorem ipsum dolor sit amet consectetur. Erat eros tincidunt
                  eleifend egestas.
                </p>
              </div>
            </div>
          </div>
        )}
        {CardIndex === 1 && (
          <div className="mt-8">
            <div className="bg-white rounded-3xl shadow-md p-5 mb-4">
              <div className="flex justify-between items-center w-full gap-4">
                <div className="rounded-full w-12 h-12 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/red-notice.svg" alt="notice" />
                </div>
                <div className="flex-1 poppins-semibold justify-center items-center text-[#232B31]">
                  <p>Title of Message</p>
                </div>
                <div className="poppins-regular">
                  <p className="text-right text-[#787D81]">12.05.2024</p>
                </div>
              </div>
              <div className="w-full pl-16">
                <p className="text-[#A3A6A9] text-left poppins-light">
                  Lorem ipsum dolor sit amet consectetur. Erat eros tincidunt
                  eleifend egestas.
                </p>
              </div>
            </div>
          </div>
        )}
        {CardIndex === 2 && (
          <div className="mt-8">
            <div className="bg-white rounded-3xl shadow-md p-5 mb-4">
              <div className="flex justify-between items-center w-full gap-4">
                <div className="rounded-full w-12 h-12 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/green-notice.svg" alt="notice" />
                </div>
                <div className="flex-1 poppins-semibold justify-center items-center text-[#232B31]">
                  <p>Title of Message</p>
                </div>
                <div className="poppins-regular">
                  <p className="text-right text-[#787D81]">12.05.2024</p>
                </div>
              </div>
              <div className="w-full pl-16">
                <p className="text-[#A3A6A9] text-left poppins-light">
                  Lorem ipsum dolor sit amet consectetur. Erat eros tincidunt
                  eleifend egestas.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-3xl shadow-md p-5 mb-4">
              <div className="flex justify-between items-center w-full gap-4">
                <div className="rounded-full w-12 h-12 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/yellow-notice.svg" alt="notice" />
                </div>
                <div className="flex-1 poppins-semibold justify-center items-center text-[#232B31]">
                  <p>Title of Message</p>
                </div>
                <div className="poppins-regular">
                  <p className="text-right text-[#787D81]">12.05.2024</p>
                </div>
              </div>
              <div className="w-full pl-16">
                <p className="text-[#A3A6A9] text-left poppins-light">
                  Lorem ipsum dolor sit amet consectetur. Erat eros tincidunt
                  eleifend egestas.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden mt-5 bg-primary p-5 rounded-3xl md:flex md:flex-col gap-4 mr-2 min-h-[80vh] mb-4 w-full">
        <div className="flex mt-4 h-full">
          <div className="flex flex-col gap-1 border-r-2 border-r-[#DFE0E2] pt-10  pr-6 h-full">
            {tophead === 0 ? (
              <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-red-200 shadow-2xl">
                <button
                  className="flex justify-between items-center bg-black-primary rounded-xl p-3 poppins-medium text-xs w-36 lg:w-40 xl:w-44"
                  onClick={() => setnotificationIndex0(false)}
                >
                  General
                </button>
              </div>
            ) : (
              <button
                className="text-[#B6B8BA] text-xs p-3 text-start"
                onClick={() => {
                  setnotificationIndex0(true);
                  setTopHead(0);
                }}
              >
                General
              </button>
            )}
            {tophead === 1 ? (
              <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                <button
                  className="flex justify-between items-center bg-black-primary rounded-xl p-3 poppins-medium text-xs w-36 lg:w-40 xl:w-44"
                  onClick={() => {
                    setnotificationIndex1(false);
                  }}
                >
                  Payment
                </button>
              </div>
            ) : (
              <button
                className="text-[#B6B8BA] text-xs p-3 text-start"
                onClick={() => {
                  setnotificationIndex1(true);
                  setTopHead(1);
                }}
              >
                Payment
              </button>
            )}
            {tophead === 2 ? (
              <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                <button
                  className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-44 px-3 poppins-medium text-xs"
                  onClick={() => {
                    setnotificationIndex2(false);
                  }}
                >
                  KYC
                </button>
              </div>
            ) : (
              <button
                className="text-[#B6B8BA] text-xs p-3 text-start"
                onClick={() => {
                  setnotificationIndex2(true);
                  setTopHead(2);
                }}
              >
                KYC
              </button>
            )}
            {tophead === 3 ? (
              <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                <button
                  className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-44 px-3 poppins-medium text-xs"
                  onClick={() => setnotificationIndex3(false)}
                >
                  Account
                </button>
              </div>
            ) : (
              <button
                className="text-[#B6B8BA] text-xs p-3 text-start"
                onClick={() => {
                  setnotificationIndex3(true);
                  setTopHead(3);
                }}
              >
                Account
              </button>
            )}
            {tophead === 4 ? (
              <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                <button
                  className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-44 px-3 poppins-medium text-xs"
                  onClick={() => setnotificationIndex4(false)}
                >
                  Transaction
                </button>
              </div>
            ) : (
              <button
                className="text-[#B6B8BA] text-xs p-3 text-start"
                onClick={() => {
                  setnotificationIndex4(true);
                  setTopHead(4);
                }}
              >
                Transaction
              </button>
            )}
            {tophead === 5 ? (
              <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-2xl">
                <button
                  className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] w-44 px-3 poppins-medium text-sm"
                  onClick={() => setnotificationIndex5(false)}
                >
                  Cards
                </button>
              </div>
            ) : (
              <button
                className="text-[#B6B8BA] text-sm p-3 text-start"
                onClick={() => {
                  setnotificationIndex5(true);
                  setTopHead(5);
                }}
              >
                Cards
              </button>
            )}
          </div>
          <div className="flex-1 pl-6 xl:px-[2rem] w-full">
            <div className="poppins-semibold text-lg mb-4">
              {menu[tophead]}
              <span className="poppins-light text-gray-400 text-xs mx-1">
                (1)
              </span>
            </div>
            <div className="flex flex-col gap-2 divide-y divide-slate-200 ">
              {notificationData.map((val, i) => {
                return (
                  <div className={`flex flex-col  gap-2  py-2`}>
                    <div className="flex justify-between poppins-semibold text-base">
                      <div className="text-sm">{val.title}</div>
                      <div className="text-xs">
                        {moment(val.created_at)
                          .locale("en")
                          .format("DD MMMM YYYY HH:mm")}
                      </div>
                    </div>
                    <div className="flex poppins-regular text-[#787D81] gap-2 text-[14px]">
                      <div>{val.description}</div>
                    </div>

                    <div className="divide-x divide-slate-200 mb-2"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
