import { useState } from "react";
import { TiTick } from "react-icons/ti";
import "./style.css";
import CalenderComponent from "../Calender/calender";
import ReportDownloadButtons from "../ReportFooter";
import moment from "moment";

function ReportTable({ reportIndex, data }) {
  const [isDateClicked, setIsDateClicked] = useState(false);
  const [dateIndex, setDateIndex] = useState([]);
  const handleRowClick = (index) => {
    setDateIndex((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  const isRowSelected = (index) => dateIndex.includes(index);
  return (
    <div className={`${reportIndex === 2 ? "flex gap-4" : ""} mt-2`}>
      {reportIndex === 2 ? (
        <div>
          <CalenderComponent />
          <ReportDownloadButtons vertical={true} />
        </div>
      ) : null}
      <div className="w-full  bg-white p-[1.5rem] rounded-2xl">
        <div className="flex flex-col gap-1 mt-4">
          <div className="poppins-bold text-base">Monthly Report</div>
          <div className="flex gap-2 items-center">
            <div className="poppins-light text-sm text-[#B6B8BA]">
              Transactions details:
            </div>
            <div className="poppins-semibold text-sm">01 - 31 March 2024</div>
          </div>
        </div>
        <table
          className="w-full  rounded-2xl overflow-hidden mt-7"
          id="report-content"
        >
          <thead>
            <tr className="poppins-light text-xs text-white bg-black-primary items-center ">
              <td>
                <div className="flex items-center gap-2 td-element1 ml-2 ">
                  <div
                    className={`w-[13px]  h-[13px] rounded-[4px] ${
                      isDateClicked
                        ? "primary-linear-gr-bg"
                        : "bg-white border-2"
                    }`}
                    onClick={() => {
                      setIsDateClicked(!isDateClicked);
                    }}
                  >
                    {isDateClicked ? (
                      <TiTick className="text-white" size="13px" />
                    ) : null}
                  </div>
                  <div>Date</div>
                  <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L4 1L7 4"
                      stroke="#B6B8BA"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1 9L4 12L7 9"
                      stroke="#B6B8BA"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <div className="td-element1">Sent from</div>
              </td>
              <td>
                <div className="td-element1">Type</div>
              </td>
              <td>
                <div className="td-element1"> Bank</div>
              </td>
              <td>
                <div className="td-element1">Account Type</div>
              </td>
              <td>
                <div className="td-element1">Transaction ID</div>
              </td>
              <td>
                <div className="flex items-center gap-1 td-element1">
                  <div>Status</div>
                  <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L4 1L7 4"
                      stroke="#B6B8BA"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1 9L4 12L7 9"
                      stroke="#B6B8BA"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-1 td-element1">
                  <div>Sum</div>
                  <svg
                    width="8"
                    height="13"
                    viewBox="0 0 8 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 4L4 1L7 4"
                      stroke="#B6B8BA"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1 9L4 12L7 9"
                      stroke="#B6B8BA"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {data.map((transaction, i) => {
              return (
                <tr className="text-xs poppins-regular">
                  <td>
                    <div className="flex items-center gap-3 td-element">
                      <div
                        className={`w-[12px]  h-[12px] rounded-[4px] ${
                          isDateClicked || isRowSelected(i)
                            ? "primary-linear-gr-bg"
                            : "bg-white border-2"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRowClick(i);
                        }}
                      >
                        {isDateClicked || isRowSelected(i) ? (
                          <TiTick color="white" size="12px" />
                        ) : null}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span>
                          {moment(transaction.created_at).format(
                            "DD MMMM YYYY"
                          )}
                        </span>
                        <span>
                          {moment(transaction.created_at).format("HH:mm")}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="td-element">
                      {transaction.beneficiary_name}
                    </div>
                  </td>
                  <td>
                    <div className="td-element">
                      {transaction.transaction_type}
                    </div>
                  </td>
                  <td>
                    <div className="td-element">
                      {transaction?.beneficiary_bank_account?.bank_name}
                    </div>
                  </td>
                  <td>
                    <div className="td-element">
                      {transaction?.beneficiary_bank_account?.bank_type ||
                        "Individual"}
                    </div>
                  </td>
                  <td>
                    <div className="td-element">
                      {transaction.transaction_number}
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-2 items-center td-element">
                      <div>
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="4.5"
                            cy="4.5"
                            r="4.5"
                            fill={`${
                              transaction.transaction_status === "completed"
                                ? "#27A963"
                                : "#FFB442"
                            }`}
                          />
                        </svg>
                      </div>

                      <div>{transaction.transaction_status}</div>
                    </div>
                  </td>
                  <td>
                    <div className="flex gap-6 items-center td-element">
                      <div>{transaction.transaction_amount}</div>
                      <svg
                        width="24"
                        height="28"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.5"
                          width="24"
                          height="24"
                          rx="5.74489"
                          fill="white"
                        />
                        <path
                          d="M12.75 8.5C12.75 8.91421 12.4142 9.25 12 9.25C11.5858 9.25 11.25 8.91421 11.25 8.5C11.25 8.08579 11.5858 7.75 12 7.75C12.4142 7.75 12.75 8.08579 12.75 8.5Z"
                          fill="#232B31"
                        />
                        <path
                          d="M12.75 12.5C12.75 12.9142 12.4142 13.25 12 13.25C11.5858 13.25 11.25 12.9142 11.25 12.5C11.25 12.0858 11.5858 11.75 12 11.75C12.4142 11.75 12.75 12.0858 12.75 12.5Z"
                          fill="#232B31"
                        />
                        <path
                          d="M12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5C12.75 16.0858 12.4142 15.75 12 15.75C11.5858 15.75 11.25 16.0858 11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25Z"
                          fill="#232B31"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {reportIndex === 2 ? null : (
        <div className="mt-4">
          <ReportDownloadButtons />
        </div>
      )}
    </div>
  );
}
export default ReportTable;
