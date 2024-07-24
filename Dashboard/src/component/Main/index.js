import { PaymentCard } from "../PaymentCard/index.js";
import { QuickSend } from "../QuickSend";
import Templates from "../Templates/index.js";
import LatestActions from "../LatestActions/index.js";
import NoitificationBar from "../NotificationBar/index.js";
import { useSelector } from "react-redux";
import { useDashboard } from "#hooks/index.js";
function DashboardMain() {
  const userId = useSelector((state) => state.auth.userId);
  const {
    handleLatestActionData,
    handlePaymentCardData,
    handleQuickSendData,
    handleTemplateData,
  } = useDashboard();
  return (
    <>
      <div className="md:hidden">
        {/* <div className="flex justify-between">
          <TopNavbar />
        </div> */}
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
