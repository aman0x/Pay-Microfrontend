import { useState, useEffect } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./gradientSvg.js";
import { FaSquare, FaSearch } from "react-icons/fa";
function InvoiceTop({ handleInvoiceStats,isInvoiceSend,setIsInvoiceSend }) {
  const idCSS = "hello";
  const [invoiceStats, setInvoiceStats] = useState({
    all_invoices: 6,
    successful: 1,
    in_progress: 4,
    failed: 1,
    refunded: 0,
    today_successful: 0,
    today_in_progress: 0,
    today_failed: 0,
    today_refunded: 0,
  });
  const [percentage, setPercentage] = useState({
    percentage1: 66,
    percentage2: 64,
    percentage3: 69,
    percentage4: 72,
  });
  useEffect(() => {
    const fetchStats = async () => {
      const data = await handleInvoiceStats();
      setInvoiceStats(data);
      const perc = {
        percentage1: Math.round((data.successful / data.all_invoices) * 100),
        percentage2: Math.round((data.in_progress / data.all_invoices) * 100),
        percentage3: Math.round(
          (data.failed / invoiceStats.all_invoices) * 100
        ),
        percentage4: Math.round((data.refunded / data.all_invoices) * 100),
      };
      setPercentage(perc);
    };
    // fetchStats();
  }, []);
  
  const percentage1 = percentage.percentage1;
  const percentage2 = percentage.percentage2;
  const percentage3 = percentage.percentage3;
  const percentage4 = percentage.percentage4;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center mt-4">
        <div>
          <div className="poppins-semibold text-lg">All Invoices</div>
          <div className="poppins-light text-xs text-[#A3A6A9]">
            {invoiceStats.all_invoices}
          </div>
        </div>
        <div className="flex w-72 xl:w-96 bg-[#E6E8EA] py-[6px] rounded-xl justify-evenly ">
          <button
            className="px-2 py-[0.4rem] rounded-lg poppins-light text-xs"
            style={{
              backgroundColor: isInvoiceSend ? "#FFFFFF" : null,
              width: "45%",
              fontWeight: isInvoiceSend ? "500" : "normal",
              color: isInvoiceSend ? "black" : "#A3A6A9",
            }}
            onClick={() => setIsInvoiceSend(true)}
          >
            Invoices Sent
          </button>
          <button
            className="px-2 py-[0.4rem] rounded-lg poppins-light text-xs"
            style={{
              backgroundColor: !isInvoiceSend ? "#FFFFFF" : null,
              width: "45%",
              fontWeight: !isInvoiceSend ? "500" : "normal",
              color: !isInvoiceSend ? "black" : "#A3A6A9",
            }}
            onClick={() => setIsInvoiceSend(false)}
          >
            Invoices Received
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-2">
        <div className="flex bg-white  py-6 px-4 rounded-3xl justify-between items-center border">
          <div className="flex flex-col gap-1">
            <div className="poppins-regular text-xs text-[#A3A6A9]">
              Successfull
            </div>
            <div className="poppins-semibold text-lg text-[#27272E]">
              {invoiceStats.successful}
            </div>
            <div className="flex items-center gap-1 text-green-600 text-xs">
              <span className="poppins-bold ">
                {invoiceStats.today_successful}
              </span>
              <span className="poppins-light ">Today</span>{" "}
            </div>
          </div>
          <div className="w-20">
            <GradientSVG />
            <CircularProgressbarWithChildren
              strokeWidth={6}
              styles={{
                path: { stroke: `url(#${idCSS})` },
              }}
              className="h-14  relative"
              value={percentage1}
            >
              <div className="primary-linear-gr-bg-light rounded-[50%]  h-11 w-11  flex justify-center items-center  absolute top-[23px] sm:top-[29.2px] ">
                <div className="color-linear poppins-semibold text-xs">
                  {percentage1}%
                </div>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="flex bg-white  py-6 px-4 rounded-3xl justify-between items-center border">
          <div className="flex flex-col gap-1">
            <div className="poppins-regular text-xs text-[#A3A6A9]">
              In Progress
            </div>
            <div className="poppins-semibold text-lg text-[#27272E]">
              {invoiceStats.in_progress}
            </div>
            <div className="flex items-center gap-1 text-[#FFB442] text-xs">
              <span className="poppins-bold">
                {invoiceStats.today_in_progress}
              </span>
              <span className="poppins-light ">Today</span>{" "}
            </div>
          </div>
          <div className="w-20">
            <GradientSVG />
            <CircularProgressbarWithChildren
              strokeWidth={6}
              styles={{
                path: { stroke: `url(#${idCSS})` },
              }}
              className="h-14 relative"
              value={percentage2}
            >
              <div className="primary-linear-gr-bg-light rounded-[50%]  h-11 w-11  flex justify-center items-center  absolute top-[23px] sm:top-[29.2px]">
                <div className="color-linear poppins-semibold text-xs">
                  {percentage2}%
                </div>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="flex bg-white  py-6 px-4 rounded-3xl justify-between items-center border">
          <div className="flex flex-col gap-1">
            <div className="poppins-regular text-xs text-[#A3A6A9]">Failed</div>
            <div className="poppins-semibold text-lg text-[#27272E]">
              {invoiceStats.failed}
            </div>
            <div className="flex items-center gap-1 text-[#E45757] text-xs">
              <span className="poppins-bold">{invoiceStats.today_failed}</span>
              <span className="poppins-light ">Today</span>{" "}
            </div>
          </div>
          <div className="w-20">
            <GradientSVG />
            <CircularProgressbarWithChildren
              strokeWidth={6}
              styles={{
                path: { stroke: `url(#${idCSS})` },
              }}
              className="h-14  relative"
              value={percentage3}
            >
              <div className="primary-linear-gr-bg-light rounded-[50%]  h-11 w-11  flex justify-center items-center  absolute top-[23px] sm:top-[29.2px]  ">
                <div className="color-linear poppins-semibold text-xs">
                  {percentage3}%
                </div>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="flex bg-white  py-6 px-4 rounded-3xl justify-between items-center border">
          <div className="flex flex-col gap-1">
            <div className="poppins-regular text-xs text-[#A3A6A9]">
              Refunded
            </div>
            <div className="poppins-semibold text-lg text-[#27272E]">
              {invoiceStats.refunded}
            </div>
            <div className="flex items-center gap-1 text-[#964EC2] text-xs">
              <span className="poppins-bold">
                {invoiceStats.today_refunded}
              </span>
              <span className="poppins-light">Today</span>{" "}
            </div>
          </div>
          <div className="w-20">
            <GradientSVG />
            <CircularProgressbarWithChildren
              strokeWidth={6}
              styles={{
                path: { stroke: `url(#${idCSS})` },
              }}
              className="h-14  relative"
              value={percentage4}
            >
              <div className="primary-linear-gr-bg-light rounded-[50%]  h-11 w-11  flex justify-center items-center  absolute top-[23px] sm:top-[29.2px] ">
                <div className="color-linear poppins-semibold text-xs">
                  {percentage4}%
                </div>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceTop;
