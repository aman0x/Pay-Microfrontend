import PaymentTable from "../PaymentTable";
import PaymentTop from "../PaymentTop";
import { usePayment } from "#hooks/index";
function MainPayment() {
  const { handlePaymentData, handlePaymentStats } = usePayment();
  return (
    <div className="w-full my-5 bg-primary p-5 rounded-2xl flex flex-col gap-2">
      <PaymentTop handlePaymentStats={handlePaymentStats} />
      <PaymentTable handlePaymentData={handlePaymentData} />
    </div>
  );
}

export default MainPayment;
