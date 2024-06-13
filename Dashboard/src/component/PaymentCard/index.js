import "./style.css"

export function PaymentCard(){
    return(
        <div className="flip-card mt-32">
            <div className="flip-card-inner">
                <div className="flip-card-front flex flex-col px-[1.5rem] pt-[2rem] justify-between">
                    <div className="flex flex-row justify-between">
                        <div className="">
                            <p>{"Card Name"} <span>$<span></span>Verified</span></p>
                        </div>
                        <div>
                            <img src="/dashboard/visa.png"
                            alt="paymorz-logo"
                            width="60px"
                            
                            />
                        </div>                    
                    </div>
                    <div>
                        <p>**** **** **** **** 1001</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p>Exp. Date</p>
                            <p>02 / 28</p>
                        </div>
                        <div>
                        <p>CVV</p>
                        <p>***</p>
                        </div>
                        <div>
                        <p>Balance</p>
                        <p>₹ 100,000</p>
                        </div>
                        <div className="mt-6 underline">
                        <a href="#" >Details</a>
                        </div>
                    </div>
                <div>
                </div>
                </div>
                <div className="flip-card-back">
                <div className="flex flex-col px-[1.5rem] pt-[2rem] justify-between">
                <div className="flex flex-row justify-between">
                        <div>
                            <p>Payments</p>
                            <p>12</p>
                        </div>
                        <div>
                        <p>Status</p>
                        <p>Verified 12 April 2024</p>
                        </div>
                        <div className="mt-6 ">
                        <a href="#" >Delete Icon</a>
                        </div>
                    </div>  
                    <div>
                        <p>Change Color</p>
                        <p>Color types</p>
                    </div>
                    <div>
                        <p>CVV</p>
                        <p>*** <span>@</span></p>
                    </div> 
                <div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}