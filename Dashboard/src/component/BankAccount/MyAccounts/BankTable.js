import {useState} from "react"
import { TiTick } from "react-icons/ti";
import "./style.css"
import { useNavigate } from "react-router-dom";
import moment from "moment";
function BanksTable({banks}){
  const navigate = useNavigate()
    const [isDateClicked,setIsDateClicked] = useState(false)
    const [dateIndex,setDateIndex] = useState([])
    const handleRowClick = (index) => {
        setDateIndex((prevIndices) => {
          if (prevIndices.includes(index)) {
            return prevIndices.filter((i) => i !== index);
          } else {
            return [...prevIndices, index];
          }
        });
      };
      const isRowSelected = (index) => dateIndex.includes(index);
    return(
        <div className="w-full mt-2 ">
        <table className="w-full  rounded-2xl overflow-hidden   ">
            <tr className="poppins-light text-xs text-white bg-[#232B31] items-center ">
                <td>
                    <div className="flex items-center gap-2 td-element1 text-[10px] ml-2 ">
                    <div className={`w-[13px]  h-[13px] rounded-[4px] ${isDateClicked?'primary-linear-gr-bg':'bg-white'}`} onClick={()=>{setIsDateClicked(!isDateClicked)}}>
                     <TiTick color="white" size="13px"/>    
                    </div>
                        <div>Added On</div>
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4L4 1L7 4" stroke="#B6B8BA" strokeLinecap="round"/>
                                <path d="M1 9L4 12L7 9" stroke="#B6B8BA" strokeLinecap="round"/>
                        </svg>
                    </div>
                </td>
                <td>
                    <div className="td-element1 text-[10px]">Account Name</div>
                </td>
                <td>
                    <div className="td-element1 text-[10px]">Account Number</div>
                </td>
                <td>
                    <div className="td-element1 text-[10px]"> Bank</div> 
                </td>
                <td>
                    <div className="td-element1 text-[10px]">IFSC Code</div>
                </td>
                <td>
                    <div className="flex items-center gap-1 td-element1 text-[10px]">
                        <div>Transactions</div>
                       <div className="flex flex-col items-center gap-1">
                            <div>
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.28564 4L4.28564 1L7.28564 4" stroke="#B6B8BA" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div>
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.28564 1L4.28564 4L7.28564 1" stroke="#B6B8BA" strokeLinecap="round"/>
                                </svg>
                            </div>
                       </div>
                    </div>
                </td>
                <td> 
                <div className="td-element1 text-[10px]">Actions</div>     
                </td>
            </tr>
            {banks.map((transaction,i)=>{
                    return(
                        <tr 
                        key={transaction.id}
                        onClick={()=>
                            console.log("clicked")
                            //navigate(`/dashboard/payment/payment-detail?${i}`)
                        }
                        className="text-[10px] text-[#232B31] poppins-regular"
                        >
                        <td>
                            <div className="flex items-center gap-3 td-element">
                                <div className={`w-[12px]  h-[12px] rounded-[4px] ${isDateClicked||isRowSelected(i)?'primary-linear-gr-bg':'bg-white'}`} onClick={()=>{
                                    handleRowClick(i)
                                    }}>
                                    <TiTick color="white" size="12px"/>    
                                </div>
                                <div  className="flex flex-col gap-1">
                                <span>{moment(transaction.created_at).format('DD MMMM YYYY')}</span>
                                <span>{moment(transaction.created_at).format('HH:mm')}</span>
                                </div>
                            </div>
                        </td>
                        <td><div className="td-element">{transaction.account_name}</div></td>
                        <td><div className="td-element">{transaction.account_number}</div></td>
                        <td><div className="td-element">{transaction.bank_name||transaction.account_type_2}</div></td>
                        <td><div className="td-element">{transaction.ifsc_code}</div></td>
                        <td>
                            
                            <div className="td-element">
                                {2}
                            </div>
                            
                        </td>
                        <td>
                            <div className="flex gap-6 items-center td-element">
                            <div>
                                <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.2487 2.66666H11.182C10.8631 1.11572 9.49875 0.002 7.91534 0H6.582C4.99859 0.002 3.63428 1.11572 3.31534 2.66666H1.24869C0.8805 2.66666 0.582031 2.96513 0.582031 3.33331C0.582031 3.7015 0.8805 4 1.24869 4H1.91534V12.6667C1.91756 14.5067 3.40866 15.9978 5.24869 16H9.24869C11.0887 15.9978 12.5798 14.5067 12.582 12.6667V4H13.2487C13.6169 4 13.9153 3.70153 13.9153 3.33334C13.9153 2.96516 13.6169 2.66666 13.2487 2.66666ZM6.58203 11.3333C6.58203 11.7015 6.28356 12 5.91537 12C5.54716 12 5.24869 11.7015 5.24869 11.3333V7.33334C5.24869 6.96516 5.54716 6.66669 5.91534 6.66669C6.28353 6.66669 6.582 6.96516 6.582 7.33334V11.3333H6.58203ZM9.24869 11.3333C9.24869 11.7015 8.95022 12 8.58203 12C8.21384 12 7.91538 11.7015 7.91538 11.3333V7.33334C7.91538 6.96516 8.21384 6.66669 8.58203 6.66669C8.95022 6.66669 9.24869 6.96516 9.24869 7.33334V11.3333ZM4.69603 2.66666C4.97959 1.86819 5.73472 1.33434 6.58203 1.33331H7.91538C8.76269 1.33434 9.51781 1.86819 9.80138 2.66666H4.69603Z" fill="#CDCED1"/>
                                </svg>
                            </div>
                            <div>
                                <svg width="24" height="28" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="24" height="24" rx="5.74489" fill="white"/>
                                        <path d="M12.75 8.5C12.75 8.91421 12.4142 9.25 12 9.25C11.5858 9.25 11.25 8.91421 11.25 8.5C11.25 8.08579 11.5858 7.75 12 7.75C12.4142 7.75 12.75 8.08579 12.75 8.5Z" fill="#232B31"/>
                                        <path d="M12.75 12.5C12.75 12.9142 12.4142 13.25 12 13.25C11.5858 13.25 11.25 12.9142 11.25 12.5C11.25 12.0858 11.5858 11.75 12 11.75C12.4142 11.75 12.75 12.0858 12.75 12.5Z" fill="#232B31"/>
                                        <path d="M12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5C12.75 16.0858 12.4142 15.75 12 15.75C11.5858 15.75 11.25 16.0858 11.25 16.5C11.25 16.9142 11.5858 17.25 12 17.25Z" fill="#232B31"/>
                                </svg>
                            </div>
                            </div>
                        </td>
                        </tr>
                    )
                    
                })
            }
            
        </table>

        </div>
    )
}
export default BanksTable