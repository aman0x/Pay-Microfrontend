
import { FaSquare } from "react-icons/fa";
import StatsChart from "./StatsChart";
import StatsTable from "./StatsTable";
import StatsTop from "./StatsTop";
import StatsCards from "./StatsCards";
import StatsTotalBar from "./StatsTotalBar";
import { useEffect, useState } from "react";
import { useStatistic } from "#hooks/index";
import { useSelector } from "react-redux";
import { maskCardNumber } from "#utils/Helpers";
import { useDashboard } from "#hooks/index";
import CircularChart from "./StatsCards/CircularChart";
import moment from "moment";
function Statistic() {
  const [reportIndex, setReportIndex] = useState(0);
  const {handlePaymentCardData} = useDashboard()
  const [isCardMenuOpen, setCardMenuOpen] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [statsData, setStatsData] = useState([]);
  const [calenderIndex, setcalenderIndex] = useState(0);
  const card = useSelector((state) => state.auth.cards);
  const { handleStatisticStats, handleStatisticData } = useStatistic();
  const [stats, setStats] = useState({
    card_number: "1234567824681257",
    incomes: 124000.7,
    expenses: 124000.7,
    total_transactions: 11200,
    today_transactions: 14,
    succeeded: 112,
    in_progress: 112,
    failed: 112,
    refunded: 112,
    total_incomes: 124000.7,
    today_incomes: 11290.0,
    total_payments: 1240.7,
    today_payments: 112.0,
    total_successful_invoices: 1500,
    total_recieved_amount: 124000.24,
    total_paid_tax: 140.24,
  });

  useEffect(() => {
    const fetchStats = async () => {
      // const query = `?`
      const stats = await handleStatisticStats(reportIndex);
      const data = await handleStatisticData(reportIndex);
      setStats(stats);
      setStatsData(data.results);
      
    };
    fetchStats();
  }, [reportIndex]);
  useEffect(() => {
    const fetchCards = async () => {
      const data = await handlePaymentCardData();
      dispatch(authActions.setCards({ cards: data.results }));
    };
    if (card.length < 1) {
      fetchCards();
    }
  }, [card]);

  return (
    <>
      <div className="md:hidden w-full px-4 mt-2 py-6">
        <div className="flex flex-col">
          <div className="flex w-full  bg-[#f0f1f2] py-[8px] rounded-xl justify-evenly px-2 ">
            <button
              className="px-9 py-4 rounded-xl poppins-light text-[10px]"
              style={{
                backgroundColor: reportIndex === 0 ? "#FFFF" : null,
                width: "49%",
                color: reportIndex === 0 ? "black" : "#A3A6A9",
                fontWeight: reportIndex === 0 ? "500" : "normal",
                boxShadow:
                  reportIndex === 0
                    ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    : null,
              }}
              onClick={() => setReportIndex(0)}
            >
              Transactions
            </button>
            <button
              className="px-2 py-4 rounded-xl poppins-light text-[10px]"
              style={{
                backgroundColor: reportIndex === 1 ? "#FFFFFF" : null,
                color: reportIndex === 1 ? "black" : "#A3A6A9",
                width: "49%",
                fontWeight: reportIndex === 1 ? "500" : "normal",
                boxShadow:
                  reportIndex === 1
                    ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    : null,
              }}
              onClick={() => setReportIndex(1)}
            >
              Invoices
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div className="mt-2 mb-1">
            <div className="poppins-semibold text-[16px]">Show Data</div>
            <div className="poppins-regular my-1 text-[12px] text-[#B6B8BA]">
              Set Option to show :
            </div>
          </div>
          <div className="flex  bg-[#F0F1F2] py-[8px] rounded-xl justify-evenly px-2 ">
            <button
              className="px-2 py-4 rounded-xl poppins-light text-xs"
              style={{
                backgroundColor: calenderIndex === 0 ? "#FFFFFF" : null,
                width: "45%",
                color: calenderIndex === 0 ? "black" : "gray",
                fontWeight: calenderIndex === 0 ? "500" : "normal",
                boxShadow:
                  calenderIndex === 0
                    ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    : null,
              }}
              onClick={() => setcalenderIndex(0)}
            >
              Day
            </button>
            <button
              className="px-2 py-4 rounded-xl poppins-light text-xs"
              style={{
                backgroundColor: calenderIndex === 1 ? "#FFFFFF" : null,
                color: calenderIndex === 1 ? "black" : "gray",
                width: "45%",
                fontWeight: calenderIndex === 1 ? "500" : "normal",
                boxShadow:
                  calenderIndex === 1
                    ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    : null,
              }}
              onClick={() => setcalenderIndex(1)}
            >
              Week
            </button>
            <button
              className="px-2 py-4 rounded-xl poppins-light text-xs"
              style={{
                backgroundColor: calenderIndex === 2 ? "#FFFFFF" : null,
                width: "45%",
                color: calenderIndex === 2 ? "black" : "gray",
                fontWeight: calenderIndex === 2 ? "500" : "normal",
                boxShadow:
                  calenderIndex === 2
                    ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    : null,
              }}
              onClick={() => setcalenderIndex(2)}
            >
              Month
            </button>
            <button
              className="px-2 py-4 rounded-xl poppins-light text-xs"
              style={{
                backgroundColor: calenderIndex === 3 ? "#FFFFFF" : null,
                width: "45%",
                color: calenderIndex === 3 ? "black" : "gray",
                fontWeight: calenderIndex === 3 ? "500" : "normal",
                boxShadow:
                  calenderIndex === 3
                    ? "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    : null,
              }}
              onClick={() => setcalenderIndex(3)}
            >
              Year
            </button>
          </div>
          <div className="flex flex-col mt-1 gap-2 poppins-light text-sm text-gray-600 ">
            <div className="text-[10px] mt-2 mb-1 text-[#A3A6A9]">
              Choose the Card
            </div>
            <div className="flex justify-between">
              <div className="flex gap-1 items-center">
                <div>
                  <svg
                    width="33"
                    height="10"
                    viewBox="0 0 33 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.9869 0.408642C23.4558 0.212983 22.6225 0 21.5913 0C18.9544 0 17.0909 1.31662 17.0796 3.20086C17.0579 4.58575 18.4006 5.36635 19.4153 5.83308C20.4579 6.31102 20.8065 6.60858 20.8013 7.03251C20.7962 7.68572 19.9681 7.97717 19.206 7.97717C18.1469 7.97717 17.5725 7.83451 16.6867 7.46765L16.3577 7.31377L15.9823 9.49047C16.6268 9.75033 17.7818 9.9786 18.974 10C21.7831 10 23.6146 8.69459 23.6352 6.68195C23.6569 5.57831 22.9381 4.74065 21.4067 4.04973C20.4827 3.6044 19.9042 3.30072 19.9042 2.84419C19.9042 2.44064 20.3981 2.01671 21.4294 2.01671C22.3152 2.00041 22.9391 2.19199 23.4269 2.38255L23.6796 2.49363L24.0498 0.397432L23.9869 0.408642ZM30.8416 0.180373H28.7791C28.1346 0.180373 27.6561 0.350555 27.3714 0.98237L23.4073 9.86141H26.2113L26.7764 8.40722L30.1971 8.41231C30.2827 8.75166 30.524 9.86039 30.524 9.86039H33L30.8416 0.180373ZM13.2825 0.100887H15.9524L14.2818 9.786H11.6119L13.2825 0.0957912V0.100887ZM6.49378 5.43463L6.76706 6.78284L9.38231 0.180373H12.2131L8.00147 9.8451H5.18306L2.87306 1.66106C2.82459 1.51839 2.76581 1.42158 2.62041 1.33802C1.84181 0.934474 0.966281 0.605319 0 0.377051L0.0319688 0.174259H4.3395C4.92009 0.195659 5.39241 0.377051 5.55328 0.992561L6.49378 5.43972V5.43463ZM27.5375 6.42719L28.6069 3.71548C28.5904 3.74096 28.8265 3.15806 28.9606 2.7912L29.1431 3.62376L29.7619 6.42108H27.5375V6.42719Z"
                      fill="#B6B8BA"
                    />
                  </svg>
                </div>
                <div className="poppins-semibold text-[12px] text-[#B6B8BA]">
                  {maskCardNumber(card[cardIndex]?.card_no)}
                </div>
              </div>
              <div
                onClick={() => {
                  setCardMenuOpen(!isCardMenuOpen);
                }}
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
                    rx="9"
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
              </div>
            </div>
            <hr className="mt-1 w-[100%]" />
            <div className="relative">
              {isCardMenuOpen && (
                <CardsMenu
                  cardIndex={cardIndex}
                  setCardIndex={setCardIndex}
                  cards={card}
                  setCardMenuOpen={setCardMenuOpen}
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 mb-5">
          <div className="poppins-semibold text-[14px]">Statistics</div>
          <div className="poppins-regular my-1 text-[12px] text-[#B6B8BA]">
            Last Month (15 March 20204 - 15 April 2024)
          </div>
        </div>

        {reportIndex === 0 && (
          <>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between  bg-white py-4 px-5 rounded-2xl">
                <div className="flex flex-col gap-1">
                  <p className="text-[#A3A6A9] text-[12px]">All Transactions</p>
                  <p className="poppins-semibold text-[18px]">
                    ₹ {stats.total_transactions}
                  </p>
                  <p className="text-[#27A963] text-[12px]">
                    +{" "}
                    <span className="poppins-semibold">
                      {stats.today_transactions}
                    </span>
                    <span className=""> Today</span>
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src="/images/all-transactions.svg"
                    alt="all transactions"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between  bg-white py-4 px-5 rounded-2xl">
                <div className="flex flex-col gap-1">
                  <p className="text-[#A3A6A9] text-[12px]">Total Incomes</p>
                  <p className="poppins-semibold text-[18px]">
                    ₹ {stats.total_incomes}
                  </p>
                  <p className="text-[#27A963] text-[12px]">
                    <span className="poppins-semibold">
                      + {stats.today_incomes}
                    </span>
                    <span className=""> Today</span>
                  </p>
                </div>
                <div className="flex items-center">
                  <img src="/images/total-incomes.svg" alt="total incomes" />
                </div>
              </div>
              <div className="flex items-center justify-between  bg-white py-4 px-5 rounded-2xl">
                <div className="flex flex-col gap-1">
                  <p className="text-[#A3A6A9] text-[12px]">Payments</p>
                  <p className="poppins-semibold text-[18px]">
                    - ₹ {stats.total_payments}
                  </p>
                  <p className="text-[#E45757] text-[12px]">
                    -{" "}
                    <span className="poppins-semibold">
                      {stats.today_payments}
                    </span>
                    <span className=""> Today</span>
                  </p>
                </div>
                <div className="flex items-center">
                  <img src="/images/payments.svg" alt="total incomes" />
                </div>
              </div>
            </div>

            <div className="bg-white mt-4 rounded-2xl  p-[1.5rem] ">
              <div className="h-60 flex justify-center items-center relative">
                <CircularChart stats={stats} />
                <div className="absolute top-[45%] left-[48%]">
                  {Math.round(
                    (stats.succeeded / stats.total_transactions) * 100
                  ) ||
                    Math.round(
                      (stats.succeeded / stats.total_sent_invoices) * 100
                    ) ||
                    Math.round(
                      (stats.succeeded / stats.total_received_invoices) * 100
                    )}{" "}
                  %
                </div>
              </div>

              <div className="flex gap-8 mt-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#ADA1E6] rounded-[50%] h-2 w-2"></div>
                    <div className="text-xs poppins-light text-[#787D81]">
                      Succeeded
                    </div>
                    <div className="poppins-bold text-xs">
                      ({stats.succeeded})
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-[#964EC2] rounded-[50%] h-2 w-2"></div>
                    <div className="text-xs poppins-light text-[#787D81]">
                      Refunded
                    </div>
                    <div className="poppins-bold text-xs">
                      ({stats.refunded})
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#FF7BBF] rounded-[50%] h-2 w-2"></div>
                    <div className="text-xs poppins-light text-[#787D81]">
                      In Progress
                    </div>
                    <div className="poppins-bold text-xs">
                      ({stats.in_progress})
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-[#D562BE] rounded-[50%] h-2 w-2"></div>
                    <div className="text-xs poppins-light text-[#787D81]">
                      Failed
                    </div>
                    <div className="poppins-bold text-xs">({stats.failed})</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[14px] mt-6">
              <h1 className="poppins-semibold text-[#232B31]">
                Transactions{" "}
                <span className="poppins-light text-[#787D81]">
                  ({statsData.length})
                </span>{" "}
              </h1>
            </div>

            {statsData.map((data) => {
              return (
                <div className="grid grid-cols-6 gap-4 mt-4">
                  <div className="flex justify-startitems-center">
                    <div className="rounded-full w-10 h-10 shadow-inner bg-white flex justify-center items-center">
                      <img
                        src="/images/red-transaction.svg"
                        alt="transaction"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col col-span-3">
                    <p className="text-[#4E5459] text-sm">
                      {data.payment_type || "Vendor Payment"}
                    </p>
                    <p className="text-[#787D81] text-xs">
                      {moment(data.created_at).format("DD MM YYYY HH:mm")}
                    </p>
                  </div>
                  <div className="flex flex-col col-span-2 items-end">
                    <p className="text-[#E45757] text-sm">
                      - ₹ {data.transaction_amount}
                    </p>
                    <div className="flex gap-2">
                      <img src="/images/green-status.svg" alt="Status" />
                      <p className="text-[#787D81] text-xs">
                        {data.status || "In progress"}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="grid grid-cols-6 gap-4 mt-4">
              <div className="flex justify-startitems-center">
                <div className="rounded-full w-10 h-10 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/red-transaction.svg" alt="transaction" />
                </div>
              </div>
              <div className="flex flex-col col-span-3">
                <p className="text-[#4E5459] text-sm">Transaction Title</p>
                <p className="text-[#787D81] text-xs">12 April 2024 11:20</p>
              </div>
              <div className="flex flex-col col-span-2 items-end">
                <p className="text-[#E45757] text-sm">- ₹ 10,000.00</p>
                <div className="flex gap-2">
                  <img src="/images/green-status.svg" alt="Status" />
                  <p className="text-[#787D81] text-xs">Succeeded</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 mt-4">
              <div className="flex justify-start items-center">
                <div className="rounded-full w-10 h-10 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/green-transaction.svg" alt="transaction" />
                </div>
              </div>
              <div className="flex flex-col col-span-3">
                <p className="text-[#4E5459] text-sm">Transaction Title</p>
                <p className="text-[#787D81] text-xs">12 April 2024 11:20</p>
              </div>
              <div className="flex flex-col col-span-2 items-end">
                <p className="text-[#E45757] text-sm">- ₹ 10,000.00</p>
                <div className="flex gap-2">
                  <img src="/images/yellow-status.svg" alt="Status" />
                  <p className="text-[#787D81] text-xs">Succeeded</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 mt-4">
              <div className="flex justify-start items-center">
                <div className="rounded-full w-10 h-10 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/red-transaction.svg" alt="transaction" />
                </div>
              </div>
              <div className="flex flex-col col-span-3">
                <p className="text-[#4E5459] text-sm">Transaction Title</p>
                <p className="text-[#787D81] text-xs">12 April 2024 11:20</p>
              </div>
              <div className="flex flex-col col-span-2 items-end">
                <p className="text-[#E45757] text-sm">- ₹ 10,000.00</p>
                <div className="flex gap-2">
                  <img src="/images/green-status.svg" alt="Status" />
                  <p className="text-[#787D81] text-xs">Succeeded</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 mt-4">
              <div className="flex justify-start items-center">
                <div className="rounded-full w-10 h-10 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/green-transaction.svg" alt="transaction" />
                </div>
              </div>
              <div className="flex flex-col col-span-3">
                <p className="text-[#4E5459] text-sm">Transaction Title</p>
                <p className="text-[#787D81] text-xs">12 April 2024 11:20</p>
              </div>
              <div className="flex flex-col col-span-2 items-end">
                <p className="text-[#27A963] text-sm">+ ₹ 10,000.00</p>
                <div className="flex gap-2">
                  <img src="/images/yellow-status.svg" alt="Status" />
                  <p className="text-[#787D81] text-xs">Succeeded</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 mt-4">
              <div className="flex justify-start items-center">
                <div className="rounded-full w-10 h-10 shadow-inner bg-white flex justify-center items-center">
                  <img src="/images/green-transaction.svg" alt="transaction" />
                </div>
              </div>
              <div className="flex flex-col col-span-3">
                <p className="text-[#4E5459] text-sm">Transaction Title</p>
                <p className="text-[#787D81] text-xs">12 April 2024 11:20</p>
              </div>
              <div className="flex flex-col col-span-2 items-end">
                <p className="text-[#E45757] text-sm">- ₹ 10,000.00</p>
                <div className="flex gap-2">
                  <img src="/images/yellow-status.svg" alt="Status" />
                  <p className="text-[#787D81] text-xs">Succeeded</p>
                </div>
              </div>
            </div> */}

            <div className="h-20"></div>
          </>
        )}

        {reportIndex === 1 && (
          <>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between  bg-white py-4 px-5 rounded-2xl">
                <div className="flex flex-col gap-1">
                  <p className="text-[#A3A6A9] text-[12px]">All Invoices</p>
                  <p className="poppins-semibold text-[18px]">
                    ₹ {stats.total_sent_invoices}
                  </p>
                  <p className="text-[#27A963] text-[12px]">
                    +{" "}
                    <span className="poppins-semibold">
                      {stats.today_sent_invoices}
                    </span>
                    <span className=""> Today</span>
                  </p>
                </div>
                <div className="flex items-center">
                  <img src="/images/all-invoices.svg" alt="all transactions" />
                </div>
              </div>
              <div className="flex items-center justify-between  bg-white py-4 px-5 rounded-2xl">
                <div className="flex flex-col gap-1">
                  <p className="text-[#A3A6A9] text-[12px]">Sended Invoices</p>
                  <p className="poppins-semibold text-[18px]">₹ 24,000.24</p>
                  <p className="text-[#27A963] text-[12px]">
                    <span className="poppins-semibold">+ 1290 </span>
                    <span className=""> Today</span>
                  </p>
                </div>
                <div className="flex items-center">
                  <img src="/images/sended-invoices.svg" alt="total incomes" />
                </div>
              </div>
              <div className="flex items-center justify-between  bg-white py-4 px-5 rounded-2xl">
                <div className="flex flex-col gap-1">
                  <p className="text-[#A3A6A9] text-[12px]">
                    Invoices Received
                  </p>
                  <p className="poppins-semibold text-[18px]">- ₹ 240.70</p>
                  <p className="text-[#E45757] text-[12px]">
                    - <span className="poppins-semibold">12 </span>
                    <span className=""> Today</span>
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src="/images/invoices-received.svg"
                    alt="total incomes"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white mt-4 rounded-2xl  p-[1.5rem] ">
              <div className="h-60 flex justify-center items-center relative">
                <CircularChart stats={stats} />
                <div className="absolute top-[45%] left-[48%]">
                  {Math.round(
                    (stats.succeeded / stats.total_transactions) * 100
                  ) ||
                    Math.round(
                      (stats.succeeded / stats.total_sent_invoices) * 100
                    ) ||
                    Math.round(
                      (stats.succeeded / stats.total_received_invoices) * 100
                    )}{" "}
                  %
                </div>
              </div>

              <div className="flex gap-8 mt-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#ADA1E6] rounded-[50%] h-2 w-2"></div>
                    <div className="text-xs poppins-light text-[#787D81]">
                      Succeeded
                    </div>
                    <div className="poppins-bold text-xs">(12)</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-[#964EC2] rounded-[50%] h-2 w-2"></div>
                    <div className="text-xs poppins-light text-[#787D81]">
                      Rebounded
                    </div>
                    <div className="poppins-bold text-xs">(12)</div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#FF7BBF] rounded-[50%] h-2 w-2"></div>
                    <div className="text-xs poppins-light text-[#787D81]">
                      In Progress
                    </div>
                    <div className="poppins-bold text-xs">(12)</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-[#D562BE] rounded-[50%] h-2 w-2"></div>
                    <div className="text-xs poppins-light text-[#787D81]">
                      Failed
                    </div>
                    <div className="poppins-bold text-xs">(12)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[14px] mt-6">
              <h1 className="poppins-semibold text-[#232B31]">
                Invoices{" "}
                <span className="poppins-light text-[#787D81]">
                  ({statsData.length})
                </span>{" "}
              </h1>
            </div>
            {statsData.map((data) => {
              return (
                <div className="grid grid-cols-6 gap-4 mt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-full w-10 h-10 shadow-inner bg-white flex justify-center items-center">
                      <img
                        src="/images/green-transaction.svg"
                        alt="transaction"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col col-span-3">
                    <p className="text-[#4E5459] text-sm">
                      {data.beneficiary_name}
                    </p>
                    <p className="text-[#787D81] text-xs">
                      {moment(data.created_at).format("DD MM YYYY HH:mm")}
                    </p>
                  </div>
                  <div className="flex flex-col col-span-2 items-end">
                    <p className="text-[#27A963] text-sm">+ ₹ {data.amount}</p>
                    <div className="flex gap-2">
                      <img src="/images/yellow-status.svg" alt="Status" />
                      <p className="text-[#787D81] text-xs">{data.status}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="h-20"></div>
          </>
        )}
      </div>

      <div className="hidden w-full my-5 bg-primary p-5 rounded-2xl md:flex md:flex-col gap-4">
        <StatsTop
          reportIndex={reportIndex}
          setReportIndex={setReportIndex}
          stats={stats}
        />
        <StatsChart reportIndex={reportIndex} stats={stats} />
        <StatsCards reportIndex={reportIndex} stats={stats} />
        <StatsTotalBar stats={stats} reportIndex={reportIndex} />
        <StatsTable transactionDatas={statsData} reportIndex={reportIndex} />
      </div>
    </>
  );
}

function CardsMenu({ cards, cardIndex, setCardIndex, setCardMenuOpen }) {
  return (
    <div className="w-[100%] bg-white rounded-2xl shadow-lg  p-4 gap-4 absolute z-50">
      <div className="text-sm poppins-semibold my-2 flex gap-1 items-center">
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
        <div className="text-[10px] text-[#A3A6A9] poppins-regular ">
          Select the card from the list (only one)
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {cards.map((card, i) => {
          return (
            <div className="flex gap-4 justify-between items-center " key={i}>
              <div
                className={`${
                  cardIndex === i
                    ? "poppins-bold text-[#232B31]"
                    : "text-[#787D81]"
                } flex gap-1 items-center poppins-semibold text-xs `}
              >
                <div className="mr-2">
                  <svg
                    width="33"
                    height="10"
                    viewBox="0 0 33 10"
                    fill={cardIndex === i ? "#232B31" : "#787D81"}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.9869 0.408642C23.4558 0.212983 22.6225 0 21.5913 0C18.9544 0 17.0909 1.31662 17.0796 3.20086C17.0579 4.58575 18.4006 5.36635 19.4153 5.83308C20.4579 6.31102 20.8065 6.60858 20.8013 7.03251C20.7962 7.68572 19.9681 7.97717 19.206 7.97717C18.1469 7.97717 17.5725 7.83451 16.6867 7.46765L16.3577 7.31377L15.9823 9.49047C16.6268 9.75033 17.7818 9.9786 18.974 10C21.7831 10 23.6146 8.69459 23.6352 6.68195C23.6569 5.57831 22.9381 4.74065 21.4067 4.04973C20.4827 3.6044 19.9042 3.30072 19.9042 2.84419C19.9042 2.44064 20.3981 2.01671 21.4294 2.01671C22.3152 2.00041 22.9391 2.19199 23.4269 2.38255L23.6796 2.49363L24.0498 0.397432L23.9869 0.408642ZM30.8416 0.180373H28.7791C28.1346 0.180373 27.6561 0.350555 27.3714 0.98237L23.4073 9.86141H26.2113L26.7764 8.40722L30.1971 8.41231C30.2827 8.75166 30.524 9.86039 30.524 9.86039H33L30.8416 0.180373ZM13.2825 0.100887H15.9524L14.2818 9.786H11.6119L13.2825 0.0957912V0.100887ZM6.49378 5.43463L6.76706 6.78284L9.38231 0.180373H12.2131L8.00147 9.8451H5.18306L2.87306 1.66106C2.82459 1.51839 2.76581 1.42158 2.62041 1.33802C1.84181 0.934474 0.966281 0.605319 0 0.377051L0.0319688 0.174259H4.3395C4.92009 0.195659 5.39241 0.377051 5.55328 0.992561L6.49378 5.43972V5.43463ZM27.5375 6.42719L28.6069 3.71548C28.5904 3.74096 28.8265 3.15806 28.9606 2.7912L29.1431 3.62376L29.7619 6.42108H27.5375V6.42719Z" />
                  </svg>
                </div>
                <div className="my-[0.3rem] text-[12px]">{maskCardNumber(card.card_no)}</div>
              </div>
              <div
                className={`max-w-[15px]  max-h-[15px] rounded-sm   ${
                  cardIndex === i ? "primary-linear-gr-bg" : "bg-gray-300"
                }`}
              >
                <FaSquare
                  color={`${cardIndex === i ? "black" : "white"}`}
                  className="rounded-sm p-[1px]"
                  onClick={() => {
                    setCardMenuOpen(false);
                    setCardIndex(i);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Statistic;
