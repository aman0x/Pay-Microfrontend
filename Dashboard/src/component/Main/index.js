import {PaymentCard} from "../PaymentCard/index.js";
import {QuickSend} from "../QuickSend";
import Templates from "../Templates/index.js";
import LatestActions from "../LatestActions/index.js";
import NoitificationBar from "../NotificationBar/index.js";
import {useSelector} from "react-redux"
import {useDashboard} from "#hooks/index.js"
function DashboardMain(){
  const userId = useSelector(state=>state.auth.userId)
  const {handleLatestActionData,handlePaymentCardData,handleQuickSendData,handleTemplateData} = useDashboard()
    return(
      <div className="mt-5 mb-5 bg-primary  p-[16.1px] sm:p-[2rem] rounded-2xl w-full flex flex-col gap-6">
        <NoitificationBar userId={userId}/>
            <div className="sm:flex gap-4">
            <PaymentCard userId={userId} handlePaymentCardData={handlePaymentCardData}/>
            <Templates userId={userId} handleTemplateData={handleTemplateData}/>
            </div>
            <QuickSend userId={userId} handleQuickSendData={handleQuickSendData}/>
            <LatestActions userId={userId} handleLatestActionData={handleLatestActionData}/>
      </div>
    )
}

export default DashboardMain;