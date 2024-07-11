// DUMMY DATA

const transactions = [
    {
      date: "15th Jan 2023",
      time: "10:30am",
      recipient: "Rajesh Kumar",
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
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
      type: "Individual",
      paymentType: "Credit",
      bank: "Indian Bank",
      accountType: "Savings",
      transactionID: "TXN12345615",
      status: "Succeeded",
      sum: 4000
    }
  ];







import {useState} from "react"
import {FaSquare,FaSearch} from "react-icons/fa"
import { TiTick } from "react-icons/ti";
import "./style.css"
function AllUsers(){
    const [filterIndex,setFilterIndex] = useState(0)
    return(
        <div className="mt-5 bg-primary p-[2rem] rounded-2xl w-full flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div>
                    <div className='flex justify-between items-center gap-1'>
                        <div className="poppins-semibold min-w-fit">Users List</div>
                        <div className="text-sm poppins-light text-[#A3A6A9]">
                            (6)
                        </div>
                    </div>
                </div>  
                <div className="flex gap-3 poppins-light text-[14px] items-center">
                    <div className="text-sm text-gray-600">
                    Show:
                    </div>
                    <div className="flex gap-2 items-center">
                    <div className={`max-w-[16px]  max-h-[16px] rounded-sm   ${filterIndex===0?"primary-linear-gr-bg":"bg-gray-300"}`}>
                            <FaSquare  color={`${filterIndex===0?"black":"white"}`} className="rounded-sm p-[1px]"  onClick={()=>setFilterIndex(0)}/>
                        </div> 
                        <div className={`${filterIndex===0?"poppins-bold":""}`}>Active</div>   
                    </div>
                    <div className="flex gap-2 items-center">
                    <div className={`max-w-[16px]  max-h-[16px] rounded-sm   ${filterIndex===1?"primary-linear-gr-bg":"bg-gray-300"}`}>
                            <FaSquare  color={`${filterIndex===1?"black":"white"}`} className="rounded-sm p-[1px]"  onClick={()=>setFilterIndex(1)}/>
                        </div> 
                        <div className={`${filterIndex===1?"poppins-bold":""}`}>No Active</div>
                    </div>
                    <div className="w-80 ml-4">
                    <div className="relative w-full">
                        <input type="text" id="voice-search" className="bg-[#DFE0E2] border border-gray-300 text-gray-900 text-sm rounded-2xl block w-full  p-2" placeholder="Search for users..." required />
                        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
                        <FaSearch color="gray"/>
                        </button>
                    </div>
                    </div> 
                </div> 
            </div>
            <UserTable/>
            
        </div>
    )
}

export default AllUsers

function UserTable(){
    const [isDateClicked,setIsDateClicked] = useState(false)
    return(
        <div className="w-full">
        <table className="w-full  rounded-2xl overflow-hidden   ">
            <thead>
            <tr className="poppins-light text-xs text-white bg-black-primary items-center ">
                <td>
                    <div className="flex items-center gap-2 td-element1 ml-2 ">
                    <div className={`w-[13px]  h-[13px] rounded-[4px] ${isDateClicked?'primary-linear-gr-bg':'bg-white'}`} onClick={()=>{setIsDateClicked(!isDateClicked)}}>
                     <TiTick color="white" size="13px"/>    
                    </div>
                        <div>Sign Up Date</div>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4L4 1L7 4" stroke="#B6B8BA" strokeLinecap="round"/>
                                <path d="M1 9L4 12L7 9" stroke="#B6B8BA" strokeLinecap="round"/>
                        </svg>
                    </div>
                </td>
                <td>
                    <div className="td-element1">Last Transaction</div>
                </td>
                <td>
                    <div className="td-element1">Customer Name</div>
                </td>
                <td>
                    <div className="td-element1">Account Type</div> 
                </td>
                <td>
                    <div className="flex items-center gap-1 td-element1">
                        <div>Bank</div>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4L4 1L7 4" stroke="#B6B8BA" strokeLinecap="round"/>
                                <path d="M1 9L4 12L7 9" stroke="#B6B8BA" strokeLinecap="round"/>
                            </svg>
                    </div>
                </td>
               
               
                
                
            </tr>
            </thead>
            <tbody>
            {
               
                transactions.map((transaction,i)=>{
                    return(
                        <tr key={i} className="text-xs poppins-regular">
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
                        <td>
                            <div className="flex flex-col  gap-1 td-element">
                                <div className="flex gap-[2px]">
                                    <span>{transaction.date}</span>
                                    <span>{transaction.time}</span>
                                </div>
                                <div className="flex gap-2 items-center">
                                <div>  
                                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4.5" cy="4.5" r="4.5" fill={`${transaction.status==='Succeeded'?'#27A963':'#FFB442'}`}/>
                                    </svg>
                                </div>
                                <div>{transaction.status}</div>  
                            </div>
                            </div>
                        </td>
                        <td><div className="td-element">{transaction.recipient}</div></td>
                        
                        <td><div className="td-element">{transaction.type}</div></td>
                        <td >
                            <div className="flex gap-2 td-element">
                            <div className="flex gap-2 items-center">
                                <div>  
                                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4.5" cy="4.5" r="4.5" fill={`${transaction.status==='Succeeded'?'#27A963':'#FFB442'}`}/>
                                    </svg>
                                </div>
                                <div>{transaction.status}</div>  
                            </div>
                            <div className={`${Math.floor(Math.random() * 2)===1?"primary-linear-gr-bg shadow-pink":"bg-[#ECECEE] text-[#B6B8BA]"} p-[2px] rounded-xl `}>
                                <button
                                className="bg-primary rounded-xl px-3 py-2 poppins-semibold">
                                    Activate
                                </button>
                            </div>
                            <div className={`${Math.floor(Math.random() * 2)===1?"primary-linear-gr-bg shadow-pink":"bg-[#ECECEE] text-[#B6B8BA]"} p-[2px] rounded-xl `}>
                                <button
                                className="bg-primary rounded-xl px-3 py-2 poppins-semibold">
                                    Deactivate
                                </button>
                            </div>
                            <div className={`${Math.floor(Math.random() * 2)===1?"primary-linear-gr-bg shadow-pink":"bg-[#ECECEE] text-[#B6B8BA]"} p-[2px] rounded-xl `}>
                                <button
                                className="bg-primary rounded-xl px-3 py-2 poppins-semibold">
                                    Suspend
                                </button>
                            </div>
                            </div>
                            
                        </td>

                        </tr>
                    )
                    
                })
                
            }
            </tbody>
            
        </table>

        </div>
    )
}