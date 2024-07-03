
function CardsDetail(){
    return(
        <div className="mt-5 bg-primary p-[2rem] rounded-2xl flex flex-col gap-3 w-[1300px] ">
            <div className="flex justify-between">
                <div className="flex gap-1 items-center">
                </div>
                <div className="flex gap-1 items-center">
                    <div>
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 15H2.5V16.25H3.5C3.875 16.25 4.125 16 4.125 15.625C4.125 15.25 3.875 15 3.5 15ZM10.3661 0.366117C10.1317 0.131697 9.81375 0 9.48223 0H1.25C0.559644 0 0 0.559644 0 1.25V18.75C0 19.4404 0.559644 20 1.25 20H15C15.6904 20 16.25 19.4404 16.25 18.75V6.76777C16.25 6.43625 16.1183 6.1183 15.8839 5.88388L10.3661 0.366117ZM5.25 15.75C5.25 16.75 4.5 17.5 3.5 17.5H2.5V18.75H1.25V13.75H3.5C4.5 13.75 5.25 14.5 5.25 15.5V15.75ZM10.375 16.375C10.375 17.625 9.375 18.75 8 18.75H6.25V13.75H8C9.25 13.75 10.375 14.75 10.375 16.125V16.375ZM15 15H12.5V16.25H14.375V17.5H12.5V18.75H11.25V13.75H15V15ZM15 12.5H1.25V1.66667C1.25 1.43655 1.43655 1.25 1.66667 1.25H9.58333C9.81345 1.25 10 1.43655 10 1.66667V5.83333C10 6.06345 10.1865 6.25 10.4167 6.25H14.5833C14.8135 6.25 15 6.43655 15 6.66667V12.5ZM8 15H7.5V17.5H8C8.75 17.5 9.25 17 9.25 16.25C9.25 15.5 8.625 15 8 15Z" fill="#232B31"/>
                        <path d="M5.78111 8.83279C5.86099 8.83279 5.93715 8.79923 5.99104 8.74029L7.50813 7.08097C7.61414 6.96502 7.6061 6.7851 7.49015 6.67909C7.37421 6.57308 7.19428 6.58112 7.08828 6.69707L6.06557 7.81566V3.61779C6.06557 3.46069 5.93821 3.33333 5.78111 3.33333C5.62402 3.33333 5.49666 3.46069 5.49666 3.61779V7.81566L4.47396 6.69707C4.36795 6.58112 4.18803 6.57308 4.07208 6.67909C3.95613 6.7851 3.94808 6.96502 4.05408 7.08097L5.57118 8.74029C5.62508 8.79923 5.70124 8.83279 5.78111 8.83279Z" fill="#232B31"/>
                        <path d="M2.36779 7.88455C2.52489 7.88455 2.65224 8.01191 2.65224 8.169C2.65224 8.71341 2.65285 9.0931 2.69136 9.3796C2.72878 9.65792 2.79722 9.80526 2.90219 9.91024C3.00716 10.0152 3.15453 10.0836 3.43283 10.1211C3.71932 10.1596 4.09901 10.1602 4.64343 10.1602H6.91906C7.46347 10.1602 7.84316 10.1596 8.12967 10.1211C8.40798 10.0836 8.55532 10.0152 8.66031 9.91024C8.76529 9.80526 8.83371 9.65792 8.87114 9.3796C8.90964 9.0931 8.91025 8.71341 8.91025 8.169C8.91025 8.01191 9.03761 7.88455 9.1947 7.88455C9.3518 7.88455 9.47916 8.01191 9.47916 8.169V8.18983C9.47916 8.70852 9.47916 9.12659 9.43497 9.45542C9.38908 9.79681 9.29088 10.0842 9.0626 10.3125C8.83428 10.5408 8.54687 10.639 8.20548 10.6849C7.87665 10.7291 7.45858 10.7291 6.93989 10.7291H4.62262C4.10393 10.7291 3.68585 10.7291 3.35703 10.6849C3.01564 10.639 2.7282 10.5408 2.49991 10.3125C2.27162 10.0842 2.17343 9.79681 2.12753 9.45542C2.08332 9.1266 2.08333 8.70855 2.08333 8.18988V8.169C2.08333 8.01191 2.21069 7.88455 2.36779 7.88455Z" fill="#232B31"/>
                        </svg>
                    </div>
                    <div>
                        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.48223 0C9.81375 0 10.1317 0.131697 10.3661 0.366117L15.8839 5.88388C16.1183 6.1183 16.25 6.43625 16.25 6.76777V18.75C16.25 19.4404 15.6904 20 15 20H1.25C0.559644 20 0 19.4404 0 18.75V1.25C0 0.559644 0.559644 0 1.25 0H9.48223ZM14.5833 12.5C14.8135 12.5 15 12.3135 15 12.0833V6.66667C15 6.43655 14.8135 6.25 14.5833 6.25H10.4167C10.1865 6.25 10 6.06345 10 5.83333V1.66667C10 1.43655 9.81345 1.25 9.58333 1.25H1.66667C1.43655 1.25 1.25 1.43655 1.25 1.66667V12.0833C1.25 12.3135 1.43655 12.5 1.66667 12.5H14.5833ZM4.18619 17.8006L4.70687 18.6783H6.20929L4.50202 16.1963L6.1236 13.8292H4.63853L4.15172 14.7141C4.00683 14.9946 3.89599 15.2106 3.75926 15.5197H3.74261C3.60575 15.2465 3.47761 15.0091 3.30693 14.7141L2.80346 13.8292H1.30989L2.91447 16.2249L1.25 18.6783H2.73507L3.21334 17.8006C3.25462 17.7227 3.29409 17.6494 3.33184 17.5792C3.45795 17.345 3.56497 17.1461 3.65705 16.9301H3.67414C3.71449 16.9999 3.75327 17.068 3.79205 17.136C3.90905 17.3413 4.02604 17.5466 4.18619 17.8006ZM6.90825 18.6783H10.5018V17.7575H8.21448V13.8296H6.90825V18.6783ZM11.0478 18.455C11.372 18.6061 12.0208 18.75 12.6778 18.75C14.2572 18.75 14.9996 18.0597 15 17.2461C15 16.5626 14.5219 16.1169 13.5063 15.8002C12.7638 15.5628 12.4396 15.4262 12.4396 15.1169C12.4396 14.8649 12.7126 14.6493 13.2759 14.6493C13.8386 14.6493 14.2486 14.7859 14.4791 14.8794L14.7693 13.9946C14.4277 13.8653 13.9498 13.75 13.3014 13.75C11.9438 13.75 11.1243 14.3833 11.1243 15.2106C11.1243 15.9154 11.748 16.3615 12.7038 16.642C13.3949 16.8506 13.6682 17.0232 13.6682 17.3255C13.6682 17.6422 13.3526 17.8506 12.7552 17.8506C12.2004 17.8506 11.6627 17.6995 11.3125 17.5487L11.0478 18.455Z" fill="#232B31"/>
                        <path d="M5.78111 8.83279C5.86099 8.83279 5.93715 8.79923 5.99104 8.74029L7.50813 7.08097C7.61414 6.96502 7.6061 6.7851 7.49015 6.67909C7.37421 6.57308 7.19428 6.58112 7.08828 6.69707L6.06557 7.81566V3.61779C6.06557 3.46069 5.93821 3.33333 5.78111 3.33333C5.62402 3.33333 5.49666 3.46069 5.49666 3.61779V7.81566L4.47396 6.69707C4.36795 6.58112 4.18803 6.57308 4.07208 6.67909C3.95613 6.7851 3.94808 6.96502 4.05408 7.08097L5.57118 8.74029C5.62508 8.79923 5.70124 8.83279 5.78111 8.83279Z" fill="#232B31"/>
                        <path d="M2.36779 7.88455C2.52489 7.88455 2.65224 8.01191 2.65224 8.169C2.65224 8.71341 2.65285 9.0931 2.69136 9.3796C2.72878 9.65792 2.79722 9.80526 2.90219 9.91024C3.00716 10.0152 3.15453 10.0836 3.43283 10.1211C3.71932 10.1596 4.09901 10.1602 4.64343 10.1602H6.91906C7.46347 10.1602 7.84316 10.1596 8.12967 10.1211C8.40798 10.0836 8.55532 10.0152 8.66031 9.91024C8.76529 9.80526 8.83371 9.65792 8.87114 9.3796C8.90964 9.0931 8.91025 8.71341 8.91025 8.169C8.91025 8.01191 9.03761 7.88455 9.1947 7.88455C9.3518 7.88455 9.47916 8.01191 9.47916 8.169V8.18983C9.47916 8.70852 9.47916 9.12659 9.43497 9.45542C9.38908 9.79681 9.29088 10.0842 9.0626 10.3125C8.83428 10.5408 8.54687 10.639 8.20548 10.6849C7.87665 10.7291 7.45858 10.7291 6.93989 10.7291H4.62262C4.10393 10.7291 3.68585 10.7291 3.35703 10.6849C3.01564 10.639 2.7282 10.5408 2.49991 10.3125C2.27162 10.0842 2.17343 9.79681 2.12753 9.45542C2.08332 9.1266 2.08333 8.70855 2.08333 8.18988V8.169C2.08333 8.01191 2.21069 7.88455 2.36779 7.88455Z" fill="#232B31"/>
                        </svg>
                    </div>
                </div> 
            </div>
                <div className="flex flex-col gap-4 rounded-2xl bg-white p-[1.5rem] w-full">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <div className="poppins-semibold">Card Name</div>
                            <div className="flex gap-2 items-center">
                                <div className="text-xs text-[#4E5459]">Status:</div>
                                <div className="text-xs text-[#E45757]">Not verified</div>
                                <div className="text-xs underline">Verify</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-xs text-[#4E5459]">Card No:</div>
                                <div className="text-xs underline">Show full</div>
                                <div className="text-xs">1001</div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-xs text-[#4E5459]">Card Holder:</div>
                                <div className="text-xs">Full Name</div>
                                
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-xs text-[#4E5459]">Exp Date:</div>
                                <div className="text-xs">12/28</div>
                                
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="text-xs text-[#4E5459]">CVV:</div>
                                <div className="text-xs underline">Show</div>
                                
                            </div>
                            
                        </div>
                        <div className="rounded-xl shadow-md py-[1px] h-14 px-2 w-40 flex flex-col justify-center">
                            <div className="poppins-semibold text-sm">
                                Balance :
                            </div>
                            <div className="color-linear poppins-semibold">
                                ₹ 24,000.24
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary p-[1rem] rounded-xl flex flex-col gap-4">
                        <div className="text-[#4E5459] text-sm poppins-semibold">Bank Details:</div>
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-sm min-w-fit">A/C No</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-sm">59321881239525092591</div>
                        </div>
                        <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-sm">Bank</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-sm">HDFC&nbsp;BANK,KODAK</div>
                        </div>
                        <div className="flex gap-2 items-center">
                                <div className="text-[#A3A6A9] text-sm min-w-fit">IFS Code</div>
                                <hr className="my-2 w-full border-t-2 border-dashed border-[#CDCED1]"/>
                                <div className="poppins-semibold text-sm">HDFC0003242</div>
                        </div>
                        
                        </div> 
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-1"><span className="poppins-semibold text-base">Transactions</span><span className="text-gray-600 poppins-light">(2)</span></div>
                        <div  className="poppins-light text-sm text-gray-600">Click to Row For Details</div>
                    </div>
                    <div className="w-full">
                        <table className="w-full  rounded-2xl overflow-hidden text-sm poppins-regular">
                            <tr className="poppins-light text-xs text-white bg-black-primary items-center">
                                <td className="ml-2">Particular</td>
                                <td>Type</td>
                                <td>Price Per Quantity</td>
                                <td>Sent To/Received from</td>
                                <td>GST %</td>
                                <td>Status</td>
                            </tr>
                            <tr className="">
                                <td>Vendor Payment</td>
                                <td>Send</td>
                                <td className="text-[#E45757]">-₹ 24,000.24</td>
                                <td>Full Name</td>
                                <td>20 %</td>
                                <td>
                                    <div className="flex gap-2 items-center td-element">
                                    <div>  
                                        <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4.5" cy="4.5" r="4.5" fill={'#FFB442'}/>
                                        </svg>
                                    </div>
                                    <div>{"InProgress"}</div>  
                            </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Vendor Payment</td>
                                <td>Received</td>
                                <td className="text-[#27A963]">+₹ 24,000.24</td>
                                <td>Full Name</td>
                                <td>20 %</td>
                                <td>
                                    <div className="flex gap-2 items-center td-element">
                                    <div>  
                                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="4.5" cy="4.5" r="4.5" fill={'#27A963'}/>
                                    </svg>
                                    </div>
                                    <div>Succeeded</div>  
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>  
        </div>
    )
}

export default CardsDetail