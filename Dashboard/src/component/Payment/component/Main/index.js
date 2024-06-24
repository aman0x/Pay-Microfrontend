import PaymentTable from "../PaymentTable"
import PaymentTop from "../PaymentTop"

function MainPayment(){
    return(
        <div className="max-w-[75%] mt-5 bg-primary p-[2rem] rounded-2xl flex flex-col gap-2">
            <PaymentTop/>
            <PaymentTable/>
        </div>
    )
}

export default MainPayment