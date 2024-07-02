import InvoiceTop from "../InvoiceTop"
import InvoiceTable from "../InvoiceTable"
import NoitificationBar from "../NotificationBar"
function MainInvoice(){
    return(
        
            <div className="mt-5 w-full bg-primary p-[2rem] rounded-2xl  flex flex-col gap-2">
            <NoitificationBar/>
            <InvoiceTop/>
            <InvoiceTable/>
            </div>

      
        
    )
}

export default MainInvoice