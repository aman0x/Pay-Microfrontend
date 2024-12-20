import InvoiceTop from "../InvoiceTop";
import InvoiceTable from "../InvoiceTable";
import NoitificationBar from "../NotificationBar";
import { useInvoice } from "#hooks/index.js";
import { IoAddCircleSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaSquare } from "react-icons/fa"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PuffLoader } from "react-spinners";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
function MainInvoice() {
  const { handleInvoiceStats, handleInvoiceData } = useInvoice();
  const [isInvoiceSend, setIsInvoiceSend] = useState(true);
  const [isDropMenuOpen, setDropMenu] = useState(false);
  const navigate = useNavigate();
  const [cardIndex, setCardIndex] = useState(0)
  const [invoices, setInvoices] = useState([])
  const swiperRef = useRef(null);
  const [searchValue,setSearchValue] = useState('')
  const [isLoading,setIsLoading] = useState(true)
  const [orderingState, setOrderingState] = useState('date')
  const [filterState, setFilterState] = useState({
    succeeded: false,
    inProgress: false,
    failed: false,
    refunded: false,
  });
 
  const toggleFilter = (filter) => {
    setFilterState((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleSlideChange = (swiper) => {
    setCardIndex(swiper.activeIndex);
  };
  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  useEffect(() => {

    const fetchInvoiceData = setTimeout(async () => {
      setIsLoading(true)
     const query =  queryCheck(isInvoiceSend,filterState,searchValue,orderingState)
      const data = await handleInvoiceData(query);
      setInvoices(data.results);
      setIsLoading(false)
    },500);
    
    return () => {
      clearTimeout(fetchInvoiceData);
    };

  }, [filterState,isInvoiceSend,searchValue,orderingState]);
  return (
    <>
      {/* Mobile Content */}
      <div className="md:hidden px-4 mt-4 mb-20 w-full">
        <div className="flex flex-col gap-2">
          <div className="flex text-[12px] mt-4 gap-2 items-center">
            <img src="/images/notify.svg" alt="notify-icon" />
            <p className="poppins-semibold">New Invoices</p>
            <p className="poppins-light">(1)</p>
          </div>
          <p className="poppins-light text-[10px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex w-full justify-center items-center my-2 ">
          {
            !isLoading?
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
            className="mySwiper h-[190px]"
          >
            {invoices.map((invoice, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="bg-white rounded-3xl w-96 shadow-md p-5 mx-auto">
                    <div className="flex justify-between items-center w-full pb-4 gap-4">
                      <div className="rounded-full w-12 h-12 shadow-inner bg-white flex justify-center items-center">
                        <img src="/images/red-transaction.svg" alt="transaction" />
                      </div>
                      <div className="flex-1 poppins-semibold justify-center items-center">
                        <p>{invoice.beneficiary_name}</p>
                      </div>
                      <div className="color-linear poppins-semibold">
                        <p className="text-right">₹ {invoice.amount}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full pb-4 gap-4">
                      <p className="text-[#A3A6A9] text-left poppins-light">Date</p>
                      <div className="flex-1 text-xs poppins-semibold">
                        <hr className="my-2 border-t-2 border-dashed border-[#CDCED1]" />
                      </div>
                      <p className="text-[#787D81] text-right poppins-semibold">
                        {moment(invoice.created_at).format('DD MM YYYY HH:mm')}
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full pb-4 gap-4">
                      <p className="text-[#A3A6A9] text-left poppins-light">Sender</p>
                      <div className="flex-1 text-xs poppins-semibold">
                        <hr className="my-2 border-t-2 border-dashed border-[#CDCED1]" />
                      </div>
                      <p className="text-[#787D81] text-right poppins-semibold">
                        {invoice.beneficiary_name}
                      </p>
                    </div>
                    <div className="flex gap-4 w-full pt-2">
                      <div className="flex-1 primary-linear-gr-bg p-[1.5px] rounded-xl">
                        <button
                          type="button"
                          className="flex w-full justify-center items-center bg-white rounded-xl py-[10px] px-5 poppins-medium text-xs gap-2"
                          onClick={() => {
                            navigate(`/invoice/invoice-detail?invoiceId=${invoice.id}`);
                          }}
                        >
                          <span className="poppins-light uppercase text-[10px]">Details</span>
                          <img src="/images/arrow-right.svg" alt="right" />
                        </button>
                      </div>
                      <div className="flex-1 bg-[#232B31] p-[1.5px] rounded-xl">
                        <button
                          type="button"
                          className="flex w-full justify-center items-center bg-[#232B31] rounded-xl py-[10px] px-5 poppins-medium text-xs gap-2"
                          onClick={() => {
                            navigate(`/dashboard/payment/new-payment`);
                          }}
                        >
                          <span className="poppins-light uppercase text-[10px] text-white">Pay</span>
                          <img src="/images/pay-icon.svg" alt="pay" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          :
          <div className="flex justify-center items-center w-full h-full py-5">
          <PuffLoader color="#ff0b0b" />
          </div>
          }

        </div>
        <div className="flex gap-2 justify-center items-center">
          {
          invoices.map((_, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  goToSlide(i)
                  setCardIndex(i)
                 }}
                className={`rounded-full cursor-pointer ${cardIndex === i
                  ? "h-2 w-2 primary-linear-gr-bg"
                  : "h-1 w-1 rounded-full bg-black"
                  }`}
              ></div>
            );
          })}
        </div>

        <div className="flex justify-between mt-4">
          <div className="flex gap-2">
            <p className="text-[#232B31] poppins-semibold">All invoices</p>
            <p className="text-[#787D81] poppins-light">({invoices.length})</p>
          </div>
          <div
            onClick={() => {
              navigate('/invoice/send-invoice')
            }}
            className="flex items-center gap-1 cursor-pointer"
          >
            <p className="poppins-regular text-[#787D81] text-[10px]">
              Create New
            </p>
            <IoAddCircleSharp size={18} />
          </div>
        </div>

        <div className="flex gap-4 py-6">
          <div className="relative w-full">
            <input
              type="text"
              value={searchValue}
              onChange={(e)=>setSearchValue(e.target.value)}
              id="voice-search"
              className="bg-[#F0F1F2] h-14 w-full focus:outline-none focus:ring-1 focus:ring-gray-300 border border-gray-300 text-gray-900 text-sm rounded-2xl block py-[0.7rem] px-5 poppins-light-italic"
              placeholder="Search for Invoice..."
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 end-0 flex items-center pe-3"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7896 16.73L13.3166 12.2569C14.5355 10.7661 15.1349 8.86379 14.9906 6.94347C14.8463 5.02315 13.9694 3.23175 12.5414 1.9398C11.1133 0.647857 9.24335 -0.0457868 7.31822 0.00234752C5.39309 0.0504818 3.56011 0.836711 2.19841 2.19841C0.836711 3.56011 0.0504818 5.39309 0.00234752 7.31822C-0.0457868 9.24335 0.647857 11.1133 1.9398 12.5414C3.23175 13.9694 5.02315 14.8463 6.94347 14.9906C8.86379 15.1349 10.7661 14.5355 12.2569 13.3166L16.73 17.7896C16.8713 17.9261 17.0606 18.0017 17.2571 18C17.4536 17.9983 17.6416 17.9195 17.7805 17.7805C17.9195 17.6416 17.9983 17.4536 18 17.2571C18.0017 17.0606 17.9261 16.8713 17.7896 16.73ZM7.51783 13.5129C6.33212 13.5129 5.17303 13.1613 4.18714 12.5026C3.20126 11.8438 2.43286 10.9075 1.9791 9.81204C1.52535 8.71659 1.40663 7.51118 1.63795 6.34825C1.86927 5.18532 2.44025 4.1171 3.27867 3.27867C4.1171 2.44025 5.18532 1.86927 6.34825 1.63795C7.51118 1.40663 8.71659 1.52535 9.81204 1.9791C10.9075 2.43286 11.8438 3.20126 12.5026 4.18714C13.1613 5.17303 13.5129 6.33212 13.5129 7.51783C13.5111 9.10727 12.8789 10.6311 11.755 11.755C10.6311 12.8789 9.10727 13.5111 7.51783 13.5129Z"
                  fill="#232B31"
                />
              </svg>
            </button>
            {isDropMenuOpen && (
              <MobileFilter toggleFilter={toggleFilter} filterState={filterState} setDropMenu={setDropMenu}  />
            )}
          </div>
          <div
            className="rounded-2xl bg-white h-14 w-16 shadow-sm flex justify-center items-center"
            onClick={() => setDropMenu(true)}
          >
            <img src="/images/filter.svg" alt="Filter icon" />
          </div>
        </div>

        <div className="flex flex-col w-full items-center my-2">
          {
             isLoading?
             <div className="flex justify-center items-center w-full h-full py-5">
                   <PuffLoader color="#ff0b0b" />
             </div>
             :
            invoices.map((data) => {
              return (
                <div className="bg-white rounded-3xl w-96 shadow-md p-5 mb-4"
                onClick={() => {
                  navigate(`/invoice/invoice-detail?invoiceId=${data.id}`);
                }}
                >
                  <div className="flex justify-between items-center w-full pb-4 gap-4">
                    <div className="rounded-full w-12 h-12 shadow-inner bg-white flex justify-center items-center">
                      {
                        data.status === "draft"?
                        <img src="/images/failed-vendor.svg" alt="transaction" />
                        :
                        (data.status === "sent"?
                        <img src="/images/red-vendor.svg" alt="transaction" />
                        :
                        <img src="/images/green-vendor.svg" alt="transaction" />)
                      }
                    </div>
                    <div className="flex-1 poppins-semibold justify-center items-center">
                      <p>{data.beneficiary_name || "Vendor Payment"}</p>
                    </div>
                    <div className="poppins-semibold">
                      <p className="text-right text-[#232B31]">₹ {data.amount}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full pb-4 gap-4">
                    <p className="text-[#A3A6A9] text-left poppins-light">Date</p>
                    <div className="flex-1 text-xs poppins-semibold">
                      <hr className="my-2 border-t-2 border-dashed border-[#CDCED1]" />
                    </div>
                    <p className="text-[#787D81] text-right poppins-semibold">
                      {moment(data.created_at).format("DD MM YYYY HH:mm")}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full pb-4 gap-4">
                    <p className="text-[#A3A6A9] text-left poppins-light">
                      Recepient
                    </p>
                    <div className="flex-1 text-xs poppins-semibold">
                      <hr className="my-2 border-t-2 border-dashed border-[#CDCED1]" />
                    </div>
                    <p className="text-[#787D81] text-right poppins-semibold">
                      {data.beneficiary_name}
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full gap-4">
                    <p className="text-[#A3A6A9] text-left poppins-light">Status</p>
                    <div className="flex-1 text-xs poppins-semibold">
                      <hr className="my-2 border-t-2 border-dashed border-[#CDCED1]" />
                    </div>
                    <div className="flex gap-2">
                      <img src="/images/yellow-status.svg" alt="In Progress" />
                      <p className="text-[#787D81] text-right poppins-semibold">
                        {data.status}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }


          {/* <div className="bg-white rounded-3xl w-96 shadow-md p-5 mb-4">
            <div className="flex justify-between items-center w-full pb-4 gap-4">
              <div className="rounded-full w-12 h-12 shadow-inner bg-white flex justify-center items-center">
                <img src="/images/failed-vendor.svg" alt="transaction" />
              </div>
              <div className="flex-1 poppins-semibold justify-center items-center text-[#E45757]">
                <p>Vendor Payment</p>
              </div>
              <div className="poppins-semibold">
                <p className="text-right text-[#E45757]">₹ 10,000.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full pb-4 gap-4">
              <p className="text-[#A3A6A9] text-left poppins-light">Date</p>
              <div className="flex-1 text-xs poppins-semibold">
                <hr className="my-2 border-t-2 border-dashed border-[#CDCED1]" />
              </div>
              <p className="text-[#787D81] text-right poppins-semibold">
                12 April 2024 11:20
              </p>
            </div>
            <div className="flex justify-between items-center w-full pb-4 gap-4">
              <p className="text-[#A3A6A9] text-left poppins-light">
                Recepient
              </p>
              <div className="flex-1 text-xs poppins-semibold">
                <hr className="my-2 border-t-2 border-dashed border-[#CDCED1]" />
              </div>
              <p className="text-[#787D81] text-right poppins-semibold">
                ANANTHARAPU A. T.
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-4">
              <p className="text-[#A3A6A9] text-left poppins-light">Status</p>
              <div className="flex-1 text-xs poppins-semibold">
                <hr className="my-2 border-t-2 border-dashed border-[#CDCED1]" />
              </div>
              <div className="flex gap-2">
                <img src="/images/red-status.svg" alt="In Progress" />
                <p className="text-[#787D81] text-right poppins-semibold">
                  Failed
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl w-96 shadow-md p-5 mb-4">
            <div className="flex justify-between items-center w-full pb-4 gap-4">
              <div className="rounded-full w-12 h-12 shadow-inner bg-white flex justify-center items-center">
                <img src="/images/green-vendor.svg" alt="transaction" />
              </div>
              <div className="flex-1 poppins-semibold justify-center items-center text-[#232B31]">
                <p>Vendor Payment</p>
              </div>
              <div className="poppins-semibold">
                <p className="text-right text-[#27A963]">₹ 10,000.00</p>
              </div>
            </div>
            <div className="flex justify-between items-center w-full pb-4 gap-4">
              <p className="text-[#A3A6A9] text-left poppins-light">Date</p>
              <div className="flex-1 text-xs poppins-semibold">
                <hr className="my-2 border-t-2 border-dashed border-[#CDCED1]" />
              </div>
              <p className="text-[#787D81] text-right poppins-semibold">
                12 April 2024 11:20
              </p>
            </div>
            <div className="flex justify-between items-center w-full pb-4 gap-4">
              <p className="text-[#A3A6A9] text-left poppins-light">
                Recepient
              </p>
              <div className="flex-1 text-xs poppins-semibold">
                <hr className="my-2 border-t-2 border-dashed border-[#CDCED1]" />
              </div>
              <p className="text-[#787D81] text-right poppins-semibold">
                ANANTHARAPU A. T.
              </p>
            </div>
            <div className="flex justify-between items-center w-full gap-4">
              <p className="text-[#A3A6A9] text-left poppins-light">Status</p>
              <div className="flex-1 text-xs poppins-semibold">
                <hr className="my-2 border-t-2 border-dashed border-[#CDCED1]" />
              </div>
              <div className="flex gap-2">
                <img src="/images/green-status.svg" alt="In Progress" />
                <p className="text-[#787D81] text-right poppins-semibold">
                  Succussed
                </p>
              </div>
            </div>
          </div> */}



        </div>
      </div>
      <div className="hidden my-5 w-full bg-primary p-5 rounded-2xl  md:flex md:flex-col gap-2">
        <NoitificationBar />
        <InvoiceTop
          handleInvoiceStats={handleInvoiceStats}
          isInvoiceSend={isInvoiceSend}
          setIsInvoiceSend={setIsInvoiceSend}
        />
        <InvoiceTable
         invoiceData={invoices}
          filterState={filterState}
          toggleFilter={toggleFilter}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setOrderingState={setOrderingState}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export function DropMenu({ setDropMenu, navigate }) {
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setDropMenu]);

  return (
    <div
      ref={menuRef}
      className="absolute -end-[4.4rem] top-0 bg-white rounded-[20px] p-[1rem] w-[295px] z-50 cursor-pointer shadow-md"
    >
      <div className="flex justify-end" onClick={() => setDropMenu(false)}>
        <svg
          width="10"
          height="11"
          viewBox="0 0 10 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 1L1 10" stroke="#232B31" strokeLinecap="round" />
          <path d="M1 1L9 10" stroke="#232B31" strokeLinecap="round" />
        </svg>
      </div>
      <div className="p-[2rem] flex flex-col gap-4 ">
        <div
          onClick={() => {
            setDropMenu(false);
            navigate("/dashboard/profile");
          }}
          className="flex items-center gap-4 text-[#A3A6A9] text-sm font-thin poppins-light hover:text-black hover:font-bold group"
        >
          <div>
            <svg
              width="13"
              height="18"
              className="fill-[#B6B8BA] group-hover:fill-black"
              viewBox="0 0 13 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.3352 0C3.97719 0 2.06018 1.91701 2.06018 4.27502C2.06018 6.58803 3.86919 8.46004 6.2272 8.54104C6.2992 8.53204 6.3712 8.53204 6.4252 8.54104C6.4432 8.54104 6.4522 8.54104 6.4702 8.54104C6.4792 8.54104 6.4792 8.54104 6.4882 8.54104C8.79221 8.46004 10.6012 6.58803 10.6102 4.27502C10.6102 1.91701 8.69321 0 6.3352 0Z" />
              <path d="M10.908 10.935C8.397 9.26096 4.30202 9.26096 1.77301 10.935C0.630003 11.7 0 12.735 0 13.842C0 14.949 0.630003 15.975 1.76401 16.731C3.02401 17.577 4.67999 18 6.33599 18C7.992 18 9.64801 17.577 10.908 16.731C12.042 15.966 12.672 14.94 12.672 13.824C12.663 12.717 12.042 11.691 10.908 10.935Z" />
            </svg>
          </div>
          <div>Profile</div>
        </div>

        <div
          onClick={() => {
            setDropMenu(false);
            navigate("/dashboard/profile");
          }}
          className="flex items-center gap-4 text-[#A3A6A9] text-sm poppins-light hover:text-[black] hover:font-bold group"
        >
          <div>
            <svg
              className="fill-[#B6B8BA] group-hover:fill-black"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.5 5.25V0.345C10.1938 0.607001 10.824 1.01348 11.3488 1.5375L13.9618 4.152C14.4864 4.67616 14.8932 5.30617 15.155 6H10.25C10.0511 6 9.86032 5.92098 9.71967 5.78033C9.57902 5.63968 9.5 5.44891 9.5 5.25ZM15.5 7.86375V14.25C15.4988 15.2442 15.1033 16.1973 14.4003 16.9003C13.6973 17.6033 12.7442 17.9988 11.75 18H4.25C3.2558 17.9988 2.30267 17.6033 1.59966 16.9003C0.896661 16.1973 0.501191 15.2442 0.5 14.25V3.75C0.501191 2.7558 0.896661 1.80267 1.59966 1.09966C2.30267 0.396661 3.2558 0.00119089 4.25 0L7.63625 0C7.7585 0 7.87925 0.00975 8 0.018V5.25C8 5.84674 8.23705 6.41903 8.65901 6.84099C9.08097 7.26295 9.65326 7.5 10.25 7.5H15.482C15.4902 7.62075 15.5 7.7415 15.5 7.86375ZM9.5 14.25C9.5 14.0511 9.42098 13.8603 9.28033 13.7197C9.13968 13.579 8.94891 13.5 8.75 13.5H5C4.80109 13.5 4.61032 13.579 4.46967 13.7197C4.32902 13.8603 4.25 14.0511 4.25 14.25C4.25 14.4489 4.32902 14.6397 4.46967 14.7803C4.61032 14.921 4.80109 15 5 15H8.75C8.94891 15 9.13968 14.921 9.28033 14.7803C9.42098 14.6397 9.5 14.4489 9.5 14.25ZM11.75 11.25C11.75 11.0511 11.671 10.8603 11.5303 10.7197C11.3897 10.579 11.1989 10.5 11 10.5H5C4.80109 10.5 4.61032 10.579 4.46967 10.7197C4.32902 10.8603 4.25 11.0511 4.25 11.25C4.25 11.4489 4.32902 11.6397 4.46967 11.7803C4.61032 11.921 4.80109 12 5 12H11C11.1989 12 11.3897 11.921 11.5303 11.7803C11.671 11.6397 11.75 11.4489 11.75 11.25Z" />
            </svg>
          </div>
          <div>KYC</div>
        </div>
        <div
          onClick={() => {
            setDropMenu(false);
            navigate("/dashboard/card");
          }}
          className="flex items-center gap-4 text-[#A3A6A9] text-sm poppins-light hover:text-[black] hover:font-bold group"
        >
          <div>
            <svg
              className="fill-[#B6B8BA] group-hover:fill-black"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 3.24199C16 3.71782 15.568 4.10714 15.04 4.10714H0.96C0.432 4.10714 0 3.71782 0 3.24199V3.23478C0 1.58378 1.48 0.25 3.312 0.25H12.68C14.512 0.25 16 1.59099 16 3.24199Z" />
              <path d="M0 6.07764V10.2786C0 12.1988 1.48 13.75 3.312 13.75H12.68C14.512 13.75 16 12.1904 16 10.2702V6.07764C16 5.52422 15.568 5.07143 15.04 5.07143H0.96C0.432 5.07143 0 5.52422 0 6.07764ZM4.8 10.941H3.2C2.872 10.941 2.6 10.6559 2.6 10.3121C2.6 9.96832 2.872 9.68323 3.2 9.68323H4.8C5.128 9.68323 5.4 9.96832 5.4 10.3121C5.4 10.6559 5.128 10.941 4.8 10.941ZM10 10.941H6.8C6.472 10.941 6.2 10.6559 6.2 10.3121C6.2 9.96832 6.472 9.68323 6.8 9.68323H10C10.328 9.68323 10.6 9.96832 10.6 10.3121C10.6 10.6559 10.328 10.941 10 10.941Z" />
            </svg>
          </div>
          <div className="min-w-fit">My Cards</div>
        </div>
        <div
          onClick={() => {
            setDropMenu(false);
            navigate("/dashboard/accounts");
          }}
          className="flex items-center gap-4 text-[#A3A6A9] text-sm poppins-light hover:text-[black] hover:font-bold group"
        >
          <div>
            <svg
              className="fill-[#B6B8BA] group-hover:fill-black"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 7H3V14H5V7Z" />
              <path d="M8.33334 7H6.33334V14H8.33334V7Z" />
              <path d="M11.6667 7H9.66666V14H11.6667V7Z" />
              <path d="M15 7H13V14H15V7Z" />
              <path d="M17.4255 16H0.574468C0.260426 16 0 15.5467 0 15C0 14.4533 0.260426 14 0.574468 14H17.4255C17.7396 14 18 14.4533 18 15C18 15.5467 17.7396 16 17.4255 16Z" />
              <path d="M16.0275 3.31238L9.2775 0.612383C9.1275 0.552383 8.8725 0.552383 8.7225 0.612383L1.9725 3.31238C1.71 3.41738 1.5 3.72488 1.5 4.00988V6.49988C1.5 6.91235 1.8375 7.24985 2.25 7.24985H15.75C16.1625 7.24985 16.5 6.91235 16.5 6.49988V4.00988C16.5 3.72488 16.29 3.41738 16.0275 3.31238ZM9 5.37488C8.3775 5.37488 7.875 4.87238 7.875 4.24988C7.875 3.62738 8.3775 3.12488 9 3.12488C9.6225 3.12488 10.125 3.62738 10.125 4.24988C10.125 4.87238 9.6225 5.37488 9 5.37488Z" />
            </svg>
          </div>
          <div className="min-w-fit">My Bank Accounts</div>
        </div>
        <div
          onClick={() => {
            setDropMenu(false);
            navigate("/dashboard/payment/new-payment");
          }}
          className="flex items-center gap-4 text-[#A3A6A9] text-sm poppins-light hover:text-[black] hover:font-bold group"
        >
          <div>
            <svg
              className="fill-[#B6B8BA] group-hover:fill-black"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.4192 16C11.4217 16 12.2819 15.9474 13.0007 15.7876C13.7286 15.6258 14.3595 15.3438 14.8517 14.8517C15.3439 14.3595 15.6259 13.7286 15.7876 13.0006C15.9474 12.2819 16 11.4217 16 10.4192V8C16 7.11632 15.2837 6.4 14.4 6.4H8.00001C7.11633 6.4 6.40001 7.11632 6.40001 8V14.4C6.40001 15.2837 7.11633 16 8.00001 16H10.4192Z" />
              <path d="M0 10.4192C0 11.4217 0.0526721 12.2819 0.212416 13.0006C0.374176 13.7286 0.656168 14.3595 1.14834 14.8517C1.64052 15.3438 2.27146 15.6258 2.99932 15.7876C3.06902 15.803 3.13908 15.8176 3.20942 15.8312C4.07703 15.9988 4.8 15.2645 4.8 14.3808V8C4.8 7.11632 4.08366 6.4 3.2 6.4H1.6C0.716344 6.4 0 7.11632 0 8V10.4192Z" />
              <path d="M5.58079 0C4.57828 0 3.71808 0.0526721 2.99931 0.212416C2.27145 0.374176 1.64051 0.656168 1.14833 1.14834C0.656156 1.64052 0.374164 2.27146 0.212404 2.99932C0.199124 3.05909 0.186628 3.11905 0.174892 3.17918C0.00338823 4.05814 0.751132 4.8 1.64665 4.8H14.3808C15.2645 4.8 15.9988 4.07703 15.8312 3.20942C15.8176 3.13908 15.8031 3.06902 15.7876 2.99932C15.6258 2.27146 15.3439 1.64052 14.8516 1.14834C14.3595 0.656168 13.7285 0.374176 13.0007 0.212416C12.2819 0.0526721 11.4217 0 10.4192 0H5.58079Z" />
            </svg>
          </div>
          <div className="min-w-fit">Payment Templates</div>
        </div>
        <div
          onClick={() => {
            setDropMenu(false);
            navigate("/dashboard/beneficiary");
          }}
          className="flex items-center gap-4 text-[#A3A6A9] text-sm poppins-light hover:text-[black] hover:font-bold group"
        >
          <div>
            <svg
              className="fill-[#B6B8BA] group-hover:fill-black"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.15 3.5C12.15 5.433 10.7397 7 8.99999 7C7.2603 7 5.85 5.433 5.85 3.5C5.85 1.567 7.2603 0 8.99999 0C10.7397 0 12.15 1.567 12.15 3.5Z" />
              <path d="M14.4 12.5C14.4 14.433 11.9823 16 8.99999 16C6.01766 16 3.6 14.433 3.6 12.5C3.6 10.567 6.01766 9 8.99999 9C11.9823 9 14.4 10.567 14.4 12.5Z" />
              <path d="M4.60986 1C4.76957 1 4.9255 1.01741 5.07606 1.05056C4.70925 1.77446 4.50001 2.61008 4.50001 3.5C4.50001 4.36825 4.69919 5.18482 5.04954 5.89636C4.90722 5.92583 4.76022 5.94126 4.60986 5.94126C3.33688 5.94126 2.30493 4.83512 2.30493 3.47063C2.30493 2.10614 3.33688 1 4.60986 1Z" />
              <path d="M3.1026 14.986C2.59148 14.3071 2.25 13.474 2.25 12.5C2.25 11.5558 2.57091 10.744 3.0562 10.0767C1.34199 10.2245 0 11.2662 0 12.5294C0 13.8044 1.36557 14.8538 3.1026 14.986Z" />
              <path d="M13.4999 3.5C13.4999 4.36825 13.3007 5.18482 12.9504 5.89636C13.0927 5.92583 13.2397 5.94126 13.3901 5.94126C14.6631 5.94126 15.695 4.83512 15.695 3.47063C15.695 2.10614 14.6631 1 13.3901 1C13.2303 1 13.0745 1.01741 12.9239 1.05056C13.2906 1.77446 13.4999 2.61008 13.4999 3.5Z" />
              <path d="M14.8973 14.986C16.6343 14.8538 17.9999 13.8044 17.9999 12.5294C17.9999 11.2662 16.6579 10.2245 14.9437 10.0767C15.429 10.744 15.7499 11.5558 15.7499 12.5C15.7499 13.474 15.4085 14.3071 14.8973 14.986Z" />
            </svg>
          </div>
          <div className="min-w-fit">My Beneficiaries</div>
        </div>
        <div
          onClick={() => {
            setDropMenu(false);
            navigate("/dashboard/support");
          }}
          className="flex items-center gap-4 text-[#A3A6A9] text-sm poppins-light hover:text-[black] hover:font-bold group"
        >
          <div>
            <svg
              className="fill-[#B6B8BA] group-hover:fill-black"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.123 8.13452C16.123 12.5528 12.5413 16.1345 8.12305 16.1345C6.84329 16.1345 5.63374 15.834 4.56107 15.2997C4.27602 15.1578 3.95019 15.1105 3.64256 15.1928L1.86173 15.6693C1.08865 15.8761 0.381407 15.1689 0.588255 14.3959L1.06474 12.615C1.14705 12.3074 1.0998 11.9816 0.957815 11.6965C0.423543 10.6238 0.123047 9.41428 0.123047 8.13452C0.123047 3.71624 3.70477 0.134521 8.12305 0.134521C12.5413 0.134521 16.123 3.71624 16.123 8.13452ZM8.12305 4.33452C8.45441 4.33452 8.72305 4.60315 8.72305 4.93452V11.3345C8.72305 11.6659 8.45441 11.9345 8.12305 11.9345C7.79169 11.9345 7.52305 11.6659 7.52305 11.3345V4.93452C7.52305 4.60315 7.79169 4.33452 8.12305 4.33452ZM5.52305 6.53452C5.52305 6.20315 5.25442 5.93452 4.92305 5.93452C4.59168 5.93452 4.32305 6.20315 4.32305 6.53452V9.73452C4.32305 10.0659 4.59168 10.3345 4.92305 10.3345C5.25442 10.3345 5.52305 10.0659 5.52305 9.73452V6.53452ZM11.323 5.93452C11.6544 5.93452 11.923 6.20315 11.923 6.53452V9.73452C11.923 10.0659 11.6544 10.3345 11.323 10.3345C10.9917 10.3345 10.723 10.0659 10.723 9.73452V6.53452C10.723 6.20315 10.9917 5.93452 11.323 5.93452Z"
              />
            </svg>
          </div>
          <div>Contact</div>
        </div>
        <div
          onClick={() => {
            setDropMenu(false);
            navigate("/dashboard/support");
          }}
          className="flex items-center gap-4 text-[#A3A6A9] text-sm poppins-light hover:text-[black] hover:font-bold group"
        >
          <div>
            <svg
              className="fill-[#B6B8BA] group-hover:fill-black"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845885 10.121 0.00229405 8 0V0ZM8 13.3333C7.86815 13.3333 7.73925 13.2942 7.62962 13.221C7.51999 13.1477 7.43454 13.0436 7.38408 12.9218C7.33362 12.8 7.32042 12.6659 7.34615 12.5366C7.37187 12.4073 7.43536 12.2885 7.5286 12.1953C7.62183 12.102 7.74062 12.0385 7.86994 12.0128C7.99926 11.9871 8.13331 12.0003 8.25512 12.0507C8.37694 12.1012 8.48106 12.1867 8.55431 12.2963C8.62757 12.4059 8.66667 12.5348 8.66667 12.6667C8.66667 12.8435 8.59643 13.013 8.47141 13.1381C8.34638 13.2631 8.17681 13.3333 8 13.3333ZM9.28667 8.33733C9.08993 8.46034 8.92905 8.63299 8.82022 8.8379C8.71138 9.04282 8.65842 9.27278 8.66667 9.50467V10C8.66667 10.1768 8.59643 10.3464 8.47141 10.4714C8.34638 10.5964 8.17681 10.6667 8 10.6667C7.82319 10.6667 7.65362 10.5964 7.5286 10.4714C7.40357 10.3464 7.33334 10.1768 7.33334 10V9.50467C7.32349 9.03428 7.43971 8.56983 7.66995 8.15953C7.90019 7.74922 8.23605 7.40802 8.64267 7.17133C8.88898 7.03567 9.0861 6.8256 9.20584 6.57116C9.32557 6.31672 9.3618 6.03093 9.30933 5.75467C9.25739 5.49147 9.12816 5.24973 8.93817 5.06033C8.74817 4.87092 8.50603 4.74246 8.24267 4.69133C8.05048 4.65576 7.85283 4.66288 7.66369 4.71217C7.47456 4.76147 7.29858 4.85175 7.14821 4.97661C6.99785 5.10147 6.87677 5.25786 6.79355 5.43472C6.71034 5.61157 6.66702 5.80455 6.66667 6C6.66667 6.17681 6.59643 6.34638 6.47141 6.4714C6.34638 6.59643 6.17681 6.66667 6 6.66667C5.82319 6.66667 5.65362 6.59643 5.5286 6.4714C5.40357 6.34638 5.33334 6.17681 5.33334 6C5.3335 5.52967 5.45806 5.06775 5.69437 4.6611C5.93068 4.25445 6.27035 3.91753 6.6789 3.68452C7.08746 3.45152 7.55037 3.33071 8.02068 3.33436C8.491 3.338 8.95198 3.46598 9.35687 3.70529C9.76176 3.94461 10.0962 4.28676 10.3261 4.69702C10.5561 5.10729 10.6735 5.57109 10.6664 6.04136C10.6592 6.51164 10.5279 6.97166 10.2855 7.37477C10.0432 7.77788 9.69863 8.10973 9.28667 8.33667V8.33733Z" />
            </svg>
          </div>
          <div>Support</div>
        </div>
      </div>
    </div>
  );
}

function MobileFilter({filterState,toggleFilter,setDropMenu}){
  return(
    <div className="flex flex-col gap-4 absolute -end-[4.4rem] top-0 bg-white rounded-[20px] p-[1rem] w-[240px] z-50 cursor-pointer shadow-md">
      <div className="w-full flex justify-end">
        <div
          className="rounded-2xl bg-white h-14 w-14 opacity-[0.4] shadow-large flex justify-center items-center"
          onClick={() => setDropMenu(false)}
        >
          <img src="/images/filter.svg" alt="Filter icon" />
        </div>
      </div>
      <div className="text-sm font-medium poppins-semibold text-[#787D81]">Show:</div>
      <div className="flex gap-2 items-center">
        <div
          className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${filterState.succeeded ? "primary-linear-gr-bg" : "bg-gray-300"
            }`}
        >
          <div className="cursor-pointer bg-white rounded-[0.225rem]">
            <FaSquare
              color={filterState.succeeded ? "black" : "white"}
              className="rounded-[0.235rem] p-[1px]"
              onClick={() => toggleFilter("succeeded")}
            />
          </div>
        </div>
        <div
          className={`cursor-default text-xs ${filterState.succeeded ? "text-[#232B31]" : "text-[#A3A6A9]"
            }`}
        >
          Succeeded
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div
          className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${filterState.inProgress ? "primary-linear-gr-bg" : "bg-gray-300"
            }`}
        >
          <div className="cursor-pointer bg-white rounded-[0.225rem]">
            <FaSquare
              color={filterState.inProgress ? "black" : "white"}
              className="rounded-[0.235rem] p-[1px]"
              onClick={() => toggleFilter("inProgress")}
            />
          </div>
        </div>
        <div
          className={`cursor-default text-xs ${filterState.inProgress ? "text-[#232B31]" : "text-[#A3A6A9]"
            }`}
        >
          In Progress
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div
          className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${filterState.failed ? "primary-linear-gr-bg" : "bg-gray-300"
            }`}
        >
          <div className="cursor-pointer bg-white rounded-[0.225rem]">
            <FaSquare
              color={filterState.failed ? "black" : "white"}
              className="rounded-[0.235rem] p-[1px]"
              onClick={() => toggleFilter("failed")}
            />
          </div>
        </div>
        <div
          className={`cursor-default text-xs ${filterState.failed ? "text-[#232B31]" : "text-[#A3A6A9]"
            }`}
        >
          Failed
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div
          className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${filterState.refunded ? "primary-linear-gr-bg" : "bg-gray-300"
            }`}
        >
          <div className="cursor-pointer bg-white rounded-[0.225rem]">
            <FaSquare
              color={filterState.refunded ? "black" : "white"}
              className="rounded-[0.235rem] p-[1px]"
              onClick={() => toggleFilter("refunded")}
            />
          </div>
        </div>
        <div
          className={`cursor-default text-xs ${filterState.refunded ? "text-[#232B31]" : "text-[#A3A6A9]"
            }`}
        >
          Refunded
        </div>
      </div>
      <div className="mx-4 mt-4 mb-8">
      <div className="flex-1 primary-linear-gr-bg p-[1.8px] rounded-2xl ">
                <button
                  type="button"
                  className="flex justify-center w-full items-center bg-[#F0F1F2] rounded-2xl py-[8px] px-2 poppins-medium text-xs  gap-2"
                  onClick={() => { 
                    setDropMenu(false)
                  }}
                >
                  <span className="poppins-regular uppercase text-[10px]">
                    SHOW
                  </span>
                </button>
          </div>
      </div>
    </div>
  )
}

export default MainInvoice;

function queryCheck(isInvoiceSend,filterState,searchValue,orderingState){
  let query = null
    if(searchValue.trim()){
      // query =`?search=${searchValue}`
       query =`?search=1`
    }
    else if(filterState.succeeded){
      query = `?status=paid`
    }
    else if(filterState.inProgress){
      query = `?status=draft`
    }
    else if(filterState.failed){
      query = `?status=cancelled`
    }
    else if(filterState.refunded){
      query = `?status=refunded`
    }
    else if(isInvoiceSend){
    query = ``
    }
    else{
    query = `?status=paid`
    }

    query =query+query?`${query}&ordering=${orderingState}`:`?ordering=${orderingState}`

  return query;
}