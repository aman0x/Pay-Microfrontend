import {useState} from "react"
import { TiTick } from "react-icons/ti";
import "./style.css"
import moment from "moment";
import FilterTableStats from "./Filter.js";
function StatsTable({transactionData,reportIndex=0}){
  console.log(transactionData)
    const [isDateClicked,setIsDateClicked] = useState(false)
    const statusColor = '#27A963'
    return(
        <div>

       <FilterTableStats/>
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
                    <div className="td-element1">{reportIndex>0?(reportIndex>1?"Sent From":"Sent To"):"Customer"}</div>
                </td>
                <td>
                    <div className="td-element1">Type</div>
                </td>
                <td>
                    <div className="td-element1"> Bank</div> 
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
                <td>
                    <div className="td-element1">Commision</div>    
                </td>
               
                
                
            </tr>
            {
                transactionData.map((transaction,i)=>{
                    return(
                        <tr key={i} className="text-xs poppins-regular">
                        <td>
                            <div className="flex items-center gap-3 td-element">
                                <div className={`w-[12px]  h-[12px] rounded-[4px] ${isDateClicked?'primary-linear-gr-bg':'bg-white'}`} onClick={()=>{setIsDateClicked(!isDateClicked)}}>
                                    <TiTick color="white" size="12px"/>    
                                </div>
                                <div  className="flex flex-col gap-1">
                                <span>{moment(transaction.payment_datetime).format('DD MMMM YYYY')}</span>
                                <span>{moment(transaction.payment_datetime).format('HH:mm')}</span>
                                </div>
                            </div>
                        </td>
                        <td><div className="td-element">{transaction.customer}</div></td>
                        <td><div className="td-element">{transaction.type}</div></td>
                        <td><div className="td-element">{transaction.bank}</div></td>
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
                            
                            <div>{transaction.sum}</div>
                            

                        </td>

                        <td>
                            <div className="flex gap-6 items-center td-element">
                            <div>{transaction.commission}</div>
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
        </div>
    )
}
export default StatsTable