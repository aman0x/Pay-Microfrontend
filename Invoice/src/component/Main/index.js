import InvoiceTop from "../InvoiceTop"
import InvoiceTable from "../InvoiceTable"
import NoitificationBar from "../NotificationBar"
import { useInvoice } from "#hooks/index.js"
function MainInvoice(){
    const {handleInvoiceStats,handleInvoiceData} = useInvoice()
    return(
        
            <div className="mt-5 w-full bg-primary p-[2rem] rounded-2xl  flex flex-col gap-2">
            <NoitificationBar/>
            <InvoiceTop handleInvoiceStats={handleInvoiceStats}/>
            <InvoiceTable handleInvoiceData={handleInvoiceData}/> 
            </div>

      
        
    )
}

export default MainInvoice