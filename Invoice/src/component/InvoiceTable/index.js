// DUMMY DATA

const transactions = [
  {
    date: "15th Jan 2023",
    time: "10:30am",
    recipient: "Rajesh Kumar",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "State Bank of India",
    accountType: "Savings",
    transactionID: "TXN12345601",
    status: "Succeeded",
    sum: 5000,
  },
  {
    date: "17th Feb 2023",
    time: "02:45pm",
    recipient: "Anita Singh",
    type: "House Professional Payment",
    paymentType: "Debit",
    bank: "HDFC Bank",
    accountType: "Current",
    transactionID: "TXN12345602",
    status: "Succeeded",
    sum: 2000,
  },
  {
    date: "21st Mar 2023",
    time: "11:15am",
    recipient: "Sunil Sharma",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "ICICI Bank",
    accountType: "Savings",
    transactionID: "TXN12345603",
    status: "In Progress",
    sum: 7500,
  },
  {
    date: "5th Apr 2023",
    time: "03:50pm",
    recipient: "Meena Verma",
    type: "House Professional Payment",
    paymentType: "Debit",
    bank: "Axis Bank",
    accountType: "Current",
    transactionID: "TXN12345604",
    status: "Succeeded",
    sum: 1000,
  },
  {
    date: "10th May 2023",
    time: "09:30am",
    recipient: "Vikram Patel",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "Punjab National Bank",
    accountType: "Savings",
    transactionID: "TXN12345605",
    status: "Succeeded",
    sum: 3000,
  },
  {
    date: "15th Jun 2023",
    time: "12:45pm",
    recipient: "Sneha Reddy",
    type: "House Professional Payment",
    paymentType: "Debit",
    bank: "Kotak Mahindra Bank",
    accountType: "Current",
    transactionID: "TXN12345606",
    status: "Succeeded",
    sum: 4500,
  },
  {
    date: "20th Jul 2023",
    time: "04:10pm",
    recipient: "Amitabh Desai",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "Bank of Baroda",
    accountType: "Savings",
    transactionID: "TXN12345607",
    status: "Succeeded",
    sum: 5200,
  },
  {
    date: "25th Aug 2023",
    time: "01:20pm",
    recipient: "Ravi Gupta",
    type: "House Professional Payment",
    paymentType: "Debit",
    bank: "Canara Bank",
    accountType: "Current",
    transactionID: "TXN12345608",
    status: "In Progress",
    sum: 1800,
  },
  {
    date: "10th Sep 2023",
    time: "10:00am",
    recipient: "Priya Iyer",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "Union Bank of India",
    accountType: "Savings",
    transactionID: "TXN12345609",
    status: "Succeeded",
    sum: 6200,
  },
  {
    date: "5th Oct 2023",
    time: "02:35pm",
    recipient: "Karan Kapoor",
    type: "House Professional Payment",
    paymentType: "Debit",
    bank: "IDFC First Bank",
    accountType: "Current",
    transactionID: "TXN12345610",
    status: "Succeeded",
    sum: 2500,
  },
  {
    date: "12th Nov 2023",
    time: "09:45am",
    recipient: "Lata Joshi",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "IndusInd Bank",
    accountType: "Savings",
    transactionID: "TXN12345611",
    status: "Succeeded",
    sum: 8000,
  },
  {
    date: "17th Dec 2023",
    time: "11:30am",
    recipient: "Nitin Agrawal",
    type: "Vendor Payment",
    paymentType: "Debit",
    bank: "Yes Bank",
    accountType: "Current",
    transactionID: "TXN12345612",
    status: "Succeeded",
    sum: 3200,
  },
  {
    date: "22nd Jan 2024",
    time: "01:55pm",
    recipient: "Pooja Rao",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "Bank of India",
    accountType: "Savings",
    transactionID: "TXN12345613",
    status: "In Progress",
    sum: 5400,
  },
  {
    date: "5th Feb 2024",
    time: "04:15pm",
    recipient: "Suresh Nair",
    type: "Vendor Payment",
    paymentType: "Debit",
    bank: "Central Bank of India",
    accountType: "Current",
    transactionID: "TXN12345614",
    status: "Succeeded",
    sum: 1500,
  },
  {
    date: "15th Mar 2024",
    time: "10:05am",
    recipient: "Geeta Jain",
    type: "Vendor Payment",
    paymentType: "Credit",
    bank: "Indian Bank",
    accountType: "Savings",
    transactionID: "TXN12345615",
    status: "Succeeded",
    sum: 4000,
  },
];

import { useState, useEffect } from "react";
import { FaSquare, FaSearch } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import "./style.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
function InvoiceTable({ handleInvoiceData }) {
  const [isDateClicked, setIsDateClicked] = useState(false);
  const statusColor = "#27A963";
  const navigate = useNavigate();
  const [invoiceData, setInvoiceData] = useState(transactions);
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

  useEffect(() => {
    const fetchInvoiceData = async () => {
      const data = await handleInvoiceData();

      setInvoiceData(data);
    };

    fetchInvoiceData();
  }, []);

  return (
    <div className="w-full mt-2 overflow-x-auto">
      <div className="flex gap-3 poppins-light text-[14px] sm:items-center mt-3 mb-6 w-full justify-evenly">
        <div className="text-xs font-medium text-[#787D81]">Show:</div>
        <div className="flex gap-2 items-center">
          <div
            className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${
              filterState.succeeded ? "primary-linear-gr-bg" : "bg-gray-300"
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
            className={`cursor-default text-xs ${
              filterState.succeeded ? "text-[#232B31]" : "text-[#A3A6A9]"
            }`}
          >
            Succeeded
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div
            className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${
              filterState.inProgress ? "primary-linear-gr-bg" : "bg-gray-300"
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
            className={`cursor-default text-xs ${
              filterState.inProgress ? "text-[#232B31]" : "text-[#A3A6A9]"
            }`}
          >
            In Progress
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div
            className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${
              filterState.failed ? "primary-linear-gr-bg" : "bg-gray-300"
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
            className={`cursor-default text-xs ${
              filterState.failed ? "text-[#232B31]" : "text-[#A3A6A9]"
            }`}
          >
            Failed
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div
            className={`max-w-[16px] max-h-[16px] rounded-[0.225rem] p-[1px]  ${
              filterState.refunded ? "primary-linear-gr-bg" : "bg-gray-300"
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
            className={`cursor-default text-xs ${
              filterState.refunded ? "text-[#232B31]" : "text-[#A3A6A9]"
            }`}
          >
            Refunded
          </div>
        </div>

        <div className="relative min-w-64">
          <input
            type="text"
            id="voice-search"
            className="bg-[#e6e8ea] py-2 px-5 focus:outline-none focus:ring-1 focus:ring-gray-300  focus:border-2 border border-gray-300 text-gray-900 text-xs rounded-2xl block w-full italic"
            placeholder="Search for Invoices..."
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <FaSearch color="gray" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer hover:size-10 transition-all duration-1000"
          >
            <path
              d="M10.5 20H9.5V21.25H10.5C10.875 21.25 11.125 21 11.125 20.625C11.125 20.25 10.875 20 10.5 20ZM17.3661 5.36612C17.1317 5.1317 16.8138 5 16.4822 5H8.25C7.55964 5 7 5.55964 7 6.25V23.75C7 24.4404 7.55964 25 8.25 25H22C22.6904 25 23.25 24.4404 23.25 23.75V11.7678C23.25 11.4362 23.1183 11.1183 22.8839 10.8839L17.3661 5.36612ZM12.25 20.75C12.25 21.75 11.5 22.5 10.5 22.5H9.5V23.75H8.25V18.75H10.5C11.5 18.75 12.25 19.5 12.25 20.5V20.75ZM17.375 21.375C17.375 22.625 16.375 23.75 15 23.75H13.25V18.75H15C16.25 18.75 17.375 19.75 17.375 21.125V21.375ZM22 20H19.5V21.25H21.375V22.5H19.5V23.75H18.25V18.75H22V20ZM22 17.5H8.25V6.66667C8.25 6.43655 8.43655 6.25 8.66667 6.25H16.5833C16.8135 6.25 17 6.43655 17 6.66667V10.8333C17 11.0635 17.1865 11.25 17.4167 11.25H21.5833C21.8135 11.25 22 11.4365 22 11.6667V17.5ZM15 20H14.5V22.5H15C15.75 22.5 16.25 22 16.25 21.25C16.25 20.5 15.625 20 15 20Z"
              fill="#232B31"
            />
            <path
              d="M12.7811 13.8328C12.861 13.8328 12.9371 13.7992 12.991 13.7403L14.5081 12.081C14.6141 11.965 14.6061 11.7851 14.4902 11.6791C14.3742 11.5731 14.1943 11.5811 14.0883 11.6971L13.0656 12.8157V8.61779C13.0656 8.46069 12.9382 8.33333 12.7811 8.33333C12.624 8.33333 12.4967 8.46069 12.4967 8.61779V12.8157L11.474 11.6971C11.3679 11.5811 11.188 11.5731 11.0721 11.6791C10.9561 11.7851 10.9481 11.965 11.0541 12.081L12.5712 13.7403C12.6251 13.7992 12.7012 13.8328 12.7811 13.8328Z"
              fill="#232B31"
            />
            <path
              d="M9.36779 12.8845C9.52489 12.8845 9.65224 13.0119 9.65224 13.169C9.65224 13.7134 9.65285 14.0931 9.69136 14.3796C9.72878 14.6579 9.79722 14.8053 9.90219 14.9102C10.0072 15.0152 10.1545 15.0836 10.4328 15.1211C10.7193 15.1596 11.099 15.1602 11.6434 15.1602H13.9191C14.4635 15.1602 14.8432 15.1596 15.1297 15.1211C15.408 15.0836 15.5553 15.0152 15.6603 14.9102C15.7653 14.8053 15.8337 14.6579 15.8711 14.3796C15.9096 14.0931 15.9102 13.7134 15.9102 13.169C15.9102 13.0119 16.0376 12.8845 16.1947 12.8845C16.3518 12.8845 16.4792 13.0119 16.4792 13.169V13.1898C16.4792 13.7085 16.4792 14.1266 16.435 14.4554C16.3891 14.7968 16.2909 15.0842 16.0626 15.3125C15.8343 15.5408 15.5469 15.639 15.2055 15.6849C14.8767 15.7291 14.4586 15.7291 13.9399 15.7291H11.6226C11.1039 15.7291 10.6858 15.7291 10.357 15.6849C10.0156 15.639 9.7282 15.5408 9.49991 15.3125C9.27162 15.0842 9.17343 14.7968 9.12753 14.4554C9.08332 14.1266 9.08333 13.7085 9.08333 13.1899V13.169C9.08333 13.0119 9.21069 12.8845 9.36779 12.8845Z"
              fill="#232B31"
            />
          </svg>
          <svg
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer hover:size-8 transition-all duration-1000"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.48223 0C9.81375 0 10.1317 0.131697 10.3661 0.366117L15.8839 5.88388C16.1183 6.1183 16.25 6.43625 16.25 6.76777V18.75C16.25 19.4404 15.6904 20 15 20H1.25C0.559644 20 0 19.4404 0 18.75V1.25C0 0.559644 0.559644 0 1.25 0H9.48223ZM14.5833 12.5C14.8135 12.5 15 12.3135 15 12.0833V6.66667C15 6.43655 14.8135 6.25 14.5833 6.25H10.4167C10.1865 6.25 10 6.06345 10 5.83333V1.66667C10 1.43655 9.81345 1.25 9.58333 1.25H1.66667C1.43655 1.25 1.25 1.43655 1.25 1.66667V12.0833C1.25 12.3135 1.43655 12.5 1.66667 12.5H14.5833ZM4.18619 17.8006L4.70687 18.6783H6.20929L4.50202 16.1963L6.1236 13.8292H4.63853L4.15172 14.7141C4.00683 14.9946 3.89599 15.2106 3.75926 15.5197H3.74261C3.60575 15.2465 3.47761 15.0091 3.30693 14.7141L2.80346 13.8292H1.30989L2.91447 16.2249L1.25 18.6783H2.73507L3.21334 17.8006C3.25462 17.7227 3.29409 17.6494 3.33184 17.5792C3.45795 17.345 3.56497 17.1461 3.65705 16.9301H3.67414C3.71449 16.9999 3.75327 17.068 3.79205 17.136C3.90905 17.3413 4.02604 17.5466 4.18619 17.8006ZM6.90825 18.6783H10.5018V17.7575H8.21448V13.8296H6.90825V18.6783ZM11.0478 18.455C11.372 18.6061 12.0208 18.75 12.6778 18.75C14.2572 18.75 14.9996 18.0597 15 17.2461C15 16.5626 14.5219 16.1169 13.5063 15.8002C12.7638 15.5628 12.4396 15.4262 12.4396 15.1169C12.4396 14.8649 12.7126 14.6493 13.2759 14.6493C13.8386 14.6493 14.2486 14.7859 14.4791 14.8794L14.7693 13.9946C14.4277 13.8653 13.9498 13.75 13.3014 13.75C11.9438 13.75 11.1243 14.3833 11.1243 15.2106C11.1243 15.9154 11.748 16.3615 12.7038 16.642C13.3949 16.8506 13.6682 17.0232 13.6682 17.3255C13.6682 17.6422 13.3526 17.8506 12.7552 17.8506C12.2004 17.8506 11.6627 17.6995 11.3125 17.5487L11.0478 18.455Z"
              fill="#232B31"
            />
            <path
              d="M5.78111 8.83279C5.86099 8.83279 5.93715 8.79923 5.99104 8.74029L7.50813 7.08097C7.61414 6.96502 7.6061 6.7851 7.49015 6.67909C7.37421 6.57308 7.19428 6.58112 7.08828 6.69707L6.06557 7.81566V3.61779C6.06557 3.46069 5.93821 3.33333 5.78111 3.33333C5.62402 3.33333 5.49666 3.46069 5.49666 3.61779V7.81566L4.47396 6.69707C4.36795 6.58112 4.18803 6.57308 4.07208 6.67909C3.95613 6.7851 3.94808 6.96502 4.05408 7.08097L5.57118 8.74029C5.62508 8.79923 5.70124 8.83279 5.78111 8.83279Z"
              fill="#232B31"
            />
            <path
              d="M2.36779 7.88455C2.52489 7.88455 2.65224 8.01191 2.65224 8.169C2.65224 8.71341 2.65285 9.0931 2.69136 9.3796C2.72878 9.65792 2.79722 9.80526 2.90219 9.91024C3.00716 10.0152 3.15453 10.0836 3.43283 10.1211C3.71932 10.1596 4.09901 10.1602 4.64343 10.1602H6.91906C7.46347 10.1602 7.84316 10.1596 8.12967 10.1211C8.40798 10.0836 8.55532 10.0152 8.66031 9.91024C8.76529 9.80526 8.83371 9.65792 8.87114 9.3796C8.90964 9.0931 8.91025 8.71341 8.91025 8.169C8.91025 8.01191 9.03761 7.88455 9.1947 7.88455C9.3518 7.88455 9.47916 8.01191 9.47916 8.169V8.18983C9.47916 8.70852 9.47916 9.12659 9.43497 9.45542C9.38908 9.79681 9.29088 10.0842 9.0626 10.3125C8.83428 10.5408 8.54687 10.639 8.20548 10.6849C7.87665 10.7291 7.45858 10.7291 6.93989 10.7291H4.62262C4.10393 10.7291 3.68585 10.7291 3.35703 10.6849C3.01564 10.639 2.7282 10.5408 2.49991 10.3125C2.27162 10.0842 2.17343 9.79681 2.12753 9.45542C2.08332 9.1266 2.08333 8.70855 2.08333 8.18988V8.169C2.08333 8.01191 2.21069 7.88455 2.36779 7.88455Z"
              fill="#232B31"
            />
          </svg>
        </div>
      </div>

      <div className="w-full mt-2  overflow-x-auto ">
        <table className="w-full  rounded-2xl overflow-hidden ">
          <tr className="poppins-light text-xs text-white bg-[#232B31] items-center">
            <td>
              <div className="flex items-center gap-2 td-element1 text-[10px] ml-2 ">
                <div className={`w-[13px]  h-[13px] rounded-[4px] ${isDateClicked ? 'primary-linear-gr-bg' : 'bg-white'}`} onClick={() => { setIsDateClicked(!isDateClicked) }}>
                  <TiTick color="white" size="13px" />
                </div>
                <div>Date</div>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4L4 1L7 4" stroke="#B6B8BA" strokeLinecap="round" />
                  <path d="M1 9L4 12L7 9" stroke="#B6B8BA" strokeLinecap="round" />
                </svg>
              </div>
            </td>
            <td>
              <div className="td-element1 text-[10px]">Recepient</div>
            </td>
            <td>
              <div className="td-element1 text-[10px]">Type</div>
            </td>
            <td>
              <div className="td-element1 text-[10px]"> Bank</div>
            </td>
            <td>
              <div className="td-element1 text-[10px]"> Account Type</div>
            </td>
            <td>
              <div className="td-element1 text-[10px]">Transaction ID</div>
            </td>
            <td>
              <div className="flex items-center gap-1 td-element1 text-[10px]">
                <div>Status</div>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4L4 1L7 4" stroke="#B6B8BA" strokeLinecap="round" />
                  <path d="M1 9L4 12L7 9" stroke="#B6B8BA" strokeLinecap="round" />
                </svg>
              </div>
            </td>
            <td>
              <div className="flex items-center gap-1 td-element1 text-[10px]">
                <div>Sum</div>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 4L4 1L7 4" stroke="#B6B8BA" strokeLinecap="round" />
                  <path d="M1 9L4 12L7 9" stroke="#B6B8BA" strokeLinecap="round" />
                </svg>
              </div>

            </td>
          </tr>
          {/* {
            paymentData.map((transaction, i) => {
              return (
                <tr
                  key={i}
                  onClick={() => navigate(`/dashboard/payment/payment-detail?paymentId=${i}`)}
                  className="text-xs poppins-regular"
                >
                  <td>
                    <div className="flex items-center gap-3 td-element text-[10px]">
                      <div className={`w-[12px]  h-[12px] rounded-[4px] ${isDateClicked ? 'primary-linear-gr-bg' : 'bg-white'}`} onClick={() => { setIsDateClicked(!isDateClicked) }}>
                        <TiTick color="white" size="12px" />
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>{moment(transaction.payment_datetime).format('DD MMMM YYYY')}</span>
                        <span>{moment(transaction.payment_datetime).format('HH:mm')}</span>
                      </div>
                    </div>
                  </td>
                  <td><div className="td-element text-[10px]">{transaction.beneficiary}</div></td>
                  <td><div className="td-element text-[10px]">{transaction.type}</div></td>
                  <td><div className="td-element text-[10px]">{transaction.bank}</div></td>
                  <td><div className="td-element text-[10px]">{transaction.transaction_id}</div></td>
                  <td>

                    <div className="flex gap-2 items-center td-element text-[10px]">
                      <div>
                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="4.5" cy="4.5" r="4.5" fill={`${transaction.status === 'Succeeded' ? '#27A963' : '#FFB442'}`} />
                        </svg>
                      </div>
                      <div>{transaction.status}</div>
                    </div>

                  </td>
                  <td>
                    <div className="flex gap-6 items-center td-element text-[10px]">
                      <div>{transaction.sum}</div>
                      <svg width="24" height="28" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="24" height="24" rx="5.74489" fill="white" />
                        <path d="M12.75 8.5C12.75 8.91421 12.4142 9.25 12 9.25C11.5858 9.25 11.25 8.91421 11.25 8.5C11.25 8.08579 11.5858 7.75 12 7.75C12.4142 7.75 12.75 8.08579 12.75 8.5Z" fill="#232B31" />
                        <path d="M12.75 12.5C12.75 12.9142 12.4142 13.25 12 13.25C11.5858 13.25 11.25 12.9142 11.25 12.5C11.25 12.0858 11.5858 11.75 12 11.75C12.4142 11.75 12.75 12.0858 12.75 12.5Z" fill="#232B31" />
                        <path d="M12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5C12.75 16.0858 12.4142 15.75 12 15.75C11.5858 15.75 11.25 16.0858 11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25Z" fill="#232B31" />
                      </svg>

                    </div></td>
                </tr>
              )

            })
          } */}

        </table>

      </div>
    </div>
  );
}
export default InvoiceTable;
