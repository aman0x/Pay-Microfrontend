import { useEffect, useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GradientSVG from "./gradientSvg.js";

function PaymentTop({ handlePaymentStats }) {
  const [paymentStats, setPaymentStats] = useState({
    all_payments: 600,
    successful: 12,
    in_progress: 122,
    failed: 123,
    refunded: 123,
    today_successful: 4,
    today_in_progress: 1,
    today_failed: 2,
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
      const data = await handlePaymentStats();
      setPaymentStats(data);
      const perc = {
        percentage1: Math.round((data.successful / data.all_payments) * 100),
        percentage2: Math.round((data.in_progress / data.all_payments) * 100),
        percentage3: Math.round((data.failed / data.all_payments) * 100),
        percentage4: Math.round((data.refunded / data.all_payments) * 100),
      };
      setPercentage(perc);
    };
    fetchStats();
  }, []);
  const idCSS = "hello";
  const percentage1 = percentage.percentage1;
  const percentage2 = percentage.percentage2;
  const percentage3 = percentage.percentage3;
  const percentage4 = percentage.percentage4;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div>
          <div className="poppins-semibold text-lg text-[#232B31]">
            All Payments
          </div>
          <div className="poppins-regular text-xs text-[#A3A6A9]">
            {paymentStats.all_payments}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-2">
        <div className="flex bg-white  py-6 px-4 rounded-3xl justify-between items-center border">
          <div className="flex flex-col gap-1">
            <div className="poppins-regular text-xs text-[#A3A6A9]">
              Successfull
            </div>
            <div className="poppins-semibold text-lg text-[#27272E]">
              {paymentStats.successful}
            </div>
            <div className="flex items-center gap-1 text-green-600 text-xs">
              <span className="poppins-bold ">
                {paymentStats.today_successful}
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
              {paymentStats.in_progress}
            </div>
            <div className="flex items-center gap-1 text-[#FFB442] text-xs">
              <span className="poppins-bold">
                {paymentStats.today_in_progress}
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
              {paymentStats.failed}
            </div>
            <div className="flex items-center gap-1 text-[#E45757] text-xs">
              <span className="poppins-bold">{paymentStats.today_failed}</span>
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
              {paymentStats.refunded}
            </div>
            <div className="flex items-center gap-1 text-[#964EC2] text-xs">
              <span className="poppins-bold">
                {paymentStats.today_refunded}
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

export default PaymentTop;
