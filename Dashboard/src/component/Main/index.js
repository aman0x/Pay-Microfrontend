import { PaymentCard } from "../PaymentCard/index.js";
import { QuickSend } from "../QuickSend";
import Templates from "../Templates/index.js";
import LatestActions from "../LatestActions/index.js";
import NoitificationBar from "../NotificationBar/index.js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDashboard } from "#hooks/index.js";
import MobileTopNavbar from "../MobileTopNavbar/index.js";
import { MobilePaymentCard } from "../MobilePaymentCard/index.js";
import { useEffect, useState } from "react";
import moment from "moment";
function DashboardMain() {
  const userId = useSelector((state) => state.auth.userId);
  const [latestActions, setLatestActions] = useState([]);
  const navigate = useNavigate();
  const {
    handleLatestActionData,
    handlePaymentCardData,
    handleQuickSendData,
    handleTemplateData,
  } = useDashboard();

  useEffect(() => {
    const fetchLatestAction = async () => {
      const data = await handleLatestActionData();
      setLatestActions(data);
    };
    fetchLatestAction();
  }, []);
  return (
    <>
      {/* Mobile Content */}
      <div className="md:hidden ">
        <MobileTopNavbar />
        <div className="p-4 bg-[#f5f5f5]">
          <div className="flex justify-between my-4">
            <p className="text-sm poppins-semibold">Active cards</p>
            <p onClick={()=> navigate("/dashboard/card")} className="text-xs ">All Cards</p>
          </div>
          <MobilePaymentCard handlePaymentCardData={handlePaymentCardData} />
          <div className="flex justify-evenly mt-8">
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                onClick={() => navigate("/dashboard/card/add-card")}
                src="/images/addCard.svg"
                className="w-20 h-auto"
                alt="Add Card"
              />
              <p className="text-[#B6B8BA] uppercase text-xs poppins-light">
                Add Card
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                onClick={() => navigate("/invoice/send-invoice")}
                className="w-20 h-auto"
                src="/images/sentInvoice.svg"
                alt="Sent Invoice"
              />
              <p className="text-[#B6B8BA] uppercase text-xs poppins-light">
                Sent Invoice
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <img
                className="w-20 h-auto"
                src="/images/makePayment.svg"
                alt="Make a Payment"
              />
              <p className="text-[#B6B8BA] uppercase text-xs poppins-light">
                Make a Payment
              </p>
            </div>
          </div>
          <div className="flex justify-between my-8">
            <p className="text-sm poppins-semibold">Latest Transactions</p>
            <p onClick={() => navigate("/dashboard/payment")} className="text-[#4E5459] text-xs">View All</p>
          </div>

          {latestActions.map((card) => {
            return (
              <div
                onClick={() =>
                  navigate(
                    `/dashboard/payment/payment-detail?paymentId=${card.id}`
                  )
                }
                className="grid grid-cols-6 gap-4 mt-4"
              >
                <div className="flex justify-start items-center">
                  <div className="rounded-full w-10 h-10 shadow-inner bg-white flex justify-center items-center">
                    <img src="/images/red-transaction.svg" alt="transaction" />
                  </div>
                </div>
                <div className="flex flex-col col-span-3">
                  <p className="text-[#4E5459] text-sm">
                    {card.payment_type || "Vendor Payment"}
                  </p>
                  <p className="text-[#787D81] text-xs">
                    {moment(card.payment_datetime).format("DD MMMM YYYY HH:mm")}
                  </p>
                </div>
                <div className="flex flex-col col-span-2 items-end">
                  <p className="text-[#E45757] text-sm">
                    - ₹ {card.transaction_amount}
                  </p>
                  <div className="flex gap-2">
                    <img src="/images/green-status.svg" alt="Status" />
                    <p className="text-[#787D81] text-xs">In Progress</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="h-20"></div>
        </div>
      </div>
      <div className="hidden mt-5 mb-5 bg-primary  p-5 rounded-2xl w-full md:flex md:flex-col gap-6">
        <NoitificationBar userId={userId} />
        <div className="flex gap-3">
          <div className="flex-1">
            <PaymentCard
              userId={userId}
              handlePaymentCardData={handlePaymentCardData}
            />
          </div>
          <div className="flex-1 pl-4">
            <Templates
              userId={userId}
              handleTemplateData={handleTemplateData}
            />
          </div>
        </div>
        <QuickSend userId={userId} handleQuickSendData={handleQuickSendData} />
        <LatestActions
          userId={userId}
          handleLatestActionData={handleLatestActionData}
        />
      </div>
    </>
  );
}

export default DashboardMain;
