// DUMMY DATA

const transactions = [
    {
      date: "15th Jan 2023",
      time: "10:30am",
      recipient: "Rajesh Kumar",
      type: "Vendor Payment",
      paymentType: "Credit",
      bank: "State Bank of India",
      accountType: "Savings",
      transactionID: "TXN12345601",
      status: "Succeeded",
      sum: 5000
    },
    {
      date: "17th Feb 2023",
      time: "02:45pm",
      recipient: "Anita Singh",
      type: "House Professional Payment",
      paymentType: "Debit",
      bank: "HDFC Bank",
      accountType: "Current",
      transactionID: "TXN12345602",
      status: "Succeeded",
      sum: 2000
    },
    {
      date: "21st Mar 2023",
      time: "11:15am",
      recipient: "Sunil Sharma",
      type: "Vendor Payment",
      paymentType: "Credit",
      bank: "ICICI Bank",
      accountType: "Savings",
      transactionID: "TXN12345603",
      status: "In Progress",
      sum: 7500
    },
    {
      date: "5th Apr 2023",
      time: "03:50pm",
      recipient: "Meena Verma",
      type: "House Professional Payment",
      paymentType: "Debit",
      bank: "Axis Bank",
      accountType: "Current",
      transactionID: "TXN12345604",
      status: "Succeeded",
      sum: 1000
    },
    {
      date: "10th May 2023",
      time: "09:30am",
      recipient: "Vikram Patel",
      type: "Vendor Payment",
      paymentType: "Credit",
      bank: "Punjab National Bank",
      accountType: "Savings",
      transactionID: "TXN12345605",
      status: "Succeeded",
      sum: 3000
    },
    {
      date: "15th Jun 2023",
      time: "12:45pm",
      recipient: "Sneha Reddy",
      type: "House Professional Payment",
      paymentType: "Debit",
      bank: "Kotak Mahindra Bank",
      accountType: "Current",
      transactionID: "TXN12345606",
      status: "Succeeded",
      sum: 4500
    },
    {
      date: "20th Jul 2023",
      time: "04:10pm",
      recipient: "Amitabh Desai",
      type: "Vendor Payment",
      paymentType: "Credit",
      bank: "Bank of Baroda",
      accountType: "Savings",
      transactionID: "TXN12345607",
      status: "Succeeded",
      sum: 5200
    },
    {
      date: "25th Aug 2023",
      time: "01:20pm",
      recipient: "Ravi Gupta",
      type: "House Professional Payment",
      paymentType: "Debit",
      bank: "Canara Bank",
      accountType: "Current",
      transactionID: "TXN12345608",
      status: "In Progress",
      sum: 1800
    },
    {
      date: "10th Sep 2023",
      time: "10:00am",
      recipient: "Priya Iyer",
      type: "Vendor Payment",
      paymentType: "Credit",
      bank: "Union Bank of India",
      accountType: "Savings",
      transactionID: "TXN12345609",
      status: "Succeeded",
      sum: 6200
    },
    {
      date: "5th Oct 2023",
      time: "02:35pm",
      recipient: "Karan Kapoor",
      type: "House Professional Payment",
      paymentType: "Debit",
      bank: "IDFC First Bank",
      accountType: "Current",
      transactionID: "TXN12345610",
      status: "Succeeded",
      sum: 2500
    },
    {
      date: "12th Nov 2023",
      time: "09:45am",
      recipient: "Lata Joshi",
      type: "Vendor Payment",
      paymentType: "Credit",
      bank: "IndusInd Bank",
      accountType: "Savings",
      transactionID: "TXN12345611",
      status: "Succeeded",
      sum: 8000
    },
    {
      date: "17th Dec 2023",
      time: "11:30am",
      recipient: "Nitin Agrawal",
      type: "Vendor Payment",
      paymentType: "Debit",
      bank: "Yes Bank",
      accountType: "Current",
      transactionID: "TXN12345612",
      status: "Succeeded",
      sum: 3200
    },
    {
      date: "22nd Jan 2024",
      time: "01:55pm",
      recipient: "Pooja Rao",
      type: "Vendor Payment",
      paymentType: "Credit",
      bank: "Bank of India",
      accountType: "Savings",
      transactionID: "TXN12345613",
      status: "In Progress",
      sum: 5400
    },
    {
      date: "5th Feb 2024",
      time: "04:15pm",
      recipient: "Suresh Nair",
      type: "Vendor Payment",
      paymentType: "Debit",
      bank: "Central Bank of India",
      accountType: "Current",
      transactionID: "TXN12345614",
      status: "Succeeded",
      sum: 1500
    },
    {
      date: "15th Mar 2024",
      time: "10:05am",
      recipient: "Geeta Jain",
      type: "Vendor Payment",
      paymentType: "Credit",
      bank: "Indian Bank",
      accountType: "Savings",
      transactionID: "TXN12345615",
      status: "Succeeded",
      sum: 4000
    }
  ];
  
  
import {useState} from "react"
import { TiTick } from "react-icons/ti";
import "./style.css"
import { useNavigate } from "react-router-dom";
function PaymentTable(){
  const navigate = useNavigate()
    const [isDateClicked,setIsDateClicked] = useState(false)
    const statusColor = '#27A963'
    return(
        <div className="w-full mt-2 ">
        <table className="w-full  rounded-2xl overflow-hidden   ">
            <tr className="poppins-light text-xs text-white bg-black-primary items-center ">
                <td>
                    <div className="flex items-center gap-2 td-element1 ml-2 ">
                    <div className={`w-[13px]  h-[13px] rounded-[4px] ${isDateClicked?'primary-linear-gr-bg':'bg-white'}`} onClick={()=>{setIsDateClicked(!isDateClicked)}}>
                     <TiTick color="white" size="13px"/>    
                    </div>
                        <div>Date</div>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4L4 1L7 4" stroke="#B6B8BA" strokeLinecap="round"/>
                                <path d="M1 9L4 12L7 9" stroke="#B6B8BA" strokeLinecap="round"/>
                        </svg>
                    </div>
                </td>
                <td>
                    <div className="td-element1">Recepient</div>
                </td>
                <td>
                    <div className="td-element1">Type</div>
                </td>
                <td>
                    <div className="td-element1"> Bank</div> 
                </td>
                <td>
                    <div className="td-element1">Transaction ID</div>
                </td>
                <td>
                    <div className="flex items-center gap-1 td-element1">
                        <div>Status</div>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4L4 1L7 4" stroke="#B6B8BA" strokeLinecap="round"/>
                                <path d="M1 9L4 12L7 9" stroke="#B6B8BA" strokeLinecap="round"/>
                            </svg>
                    </div>
                </td>
                <td> 
                    <div className="flex items-center gap-1 td-element1">
                        <div>Sum</div>
                    <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 4L4 1L7 4" stroke="#B6B8BA" strokeLinecap="round"/>
                        <path d="M1 9L4 12L7 9" stroke="#B6B8BA" strokeLinecap="round"/>
                    </svg>
                    </div>
                    
                </td>
            </tr>
            {
                transactions.map((transaction,i)=>{
                    return(
                        <tr 
                        key={i}
                        onClick={()=>navigate(`/dashboard/payment/payment-detail?${i}`)}
                        className="text-xs poppins-regular"
                        >
                        <td>
                            <div className="flex items-center gap-3 td-element">
                                <div className={`w-[12px]  h-[12px] rounded-[4px] ${isDateClicked?'primary-linear-gr-bg':'bg-white'}`} onClick={()=>{setIsDateClicked(!isDateClicked)}}>
                                    <TiTick color="white" size="12px"/>    
                                </div>
                                <div  className="flex flex-col gap-1">
                                    <span>{transaction.date}</span>
                                    <span>{transaction.time}</span>
                                </div>
                            </div>
                        </td>
                        <td><div className="td-element">{transaction.recipient}</div></td>
                        <td><div className="td-element">{transaction.type}</div></td>
                        <td><div className="td-element">{transaction.bank}</div></td>
                        <td><div className="td-element">{transaction.transactionID}</div></td>
                        <td>
                            
                            <div className="flex gap-2 items-center td-element">
                                <div>  
                                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4.5" cy="4.5" r="4.5" fill={`${transaction.status==='Succeeded'?'#27A963':'#FFB442'}`}/>
                                    </svg>
                                </div>
                                <div>{transaction.status}</div>  
                            </div>
                            
                        </td>
                        <td>
                            <div className="flex gap-6 items-center td-element">
                            <div>{transaction.sum}</div>
                            <svg width="24" height="28" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="24" height="24" rx="5.74489" fill="white"/>
                                    <path d="M12.75 8.5C12.75 8.91421 12.4142 9.25 12 9.25C11.5858 9.25 11.25 8.91421 11.25 8.5C11.25 8.08579 11.5858 7.75 12 7.75C12.4142 7.75 12.75 8.08579 12.75 8.5Z" fill="#232B31"/>
                                    <path d="M12.75 12.5C12.75 12.9142 12.4142 13.25 12 13.25C11.5858 13.25 11.25 12.9142 11.25 12.5C11.25 12.0858 11.5858 11.75 12 11.75C12.4142 11.75 12.75 12.0858 12.75 12.5Z" fill="#232B31"/>
                                    <path d="M12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5C12.75 16.0858 12.4142 15.75 12 15.75C11.5858 15.75 11.25 16.0858 11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25Z" fill="#232B31"/>
                            </svg>

                            </div></td>
                        </tr>
                    )
                    
                })
            }
            
        </table>

        </div>
    )
}
export default PaymentTable