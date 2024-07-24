import InvoiceTop from "../InvoiceTop";
import InvoiceTable from "../InvoiceTable";
import NoitificationBar from "../NotificationBar";
import { useInvoice } from "#hooks/index.js";
function MainInvoice() {
  const { handleInvoiceStats, handleInvoiceData } = useInvoice();
  return (
    <>
      <div className="md:hidden">
        <p>Mobile Content of Invoices</p>
      </div>
      <div className="hidden my-5 w-full bg-primary p-5 rounded-2xl  md:flex md:flex-col gap-2">
        <NoitificationBar />
        <InvoiceTop handleInvoiceStats={handleInvoiceStats} />
        <InvoiceTable handleInvoiceData={handleInvoiceData} />
      </div>
    </>
  );
}

export default MainInvoice;
