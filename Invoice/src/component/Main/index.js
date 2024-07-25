import InvoiceTop from "../InvoiceTop";
import InvoiceTable from "../InvoiceTable";
import NoitificationBar from "../NotificationBar";
import { useInvoice } from "#hooks/index.js";
import { useState } from "react";
function MainInvoice() {
  const { handleInvoiceStats, handleInvoiceData } = useInvoice();
  const [isInvoiceSend, setIsInvoiceSend] = useState(true);
  return (
    <>
      <div className="md:hidden">
        <p>Mobile Content of Invoices</p>
      </div>
      <div className="hidden my-5 w-full bg-primary p-5 rounded-2xl  md:flex md:flex-col gap-2">
        <NoitificationBar />
        <InvoiceTop handleInvoiceStats={handleInvoiceStats} isInvoiceSend={isInvoiceSend} setIsInvoiceSend={setIsInvoiceSend} />
        <InvoiceTable handleInvoiceData={handleInvoiceData} isInvoiceSend={isInvoiceSend} />
      </div>
    </>
  );
}

export default MainInvoice;
