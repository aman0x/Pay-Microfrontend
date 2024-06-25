import InvoiceTop from "../InvoiceTop"
import InvoiceTable from "../InvoiceTable"
import NoitificationBar from "../NotificationBar"
//import { SideNavBar } from "../SideNavBar"
function MainInvoice(){
    return(
        <div className="flex">
            <div>
                {/* <SideNavBar/> */}
            </div>
            <div className="max-w-[64%] mt-5 bg-primary p-[2rem] rounded-2xl  mx-auto flex flex-col gap-2">
            <NoitificationBar/>
            <InvoiceTop/>
            <InvoiceTable/>
        </div>

        </div>
        
    )
}

export default MainInvoice