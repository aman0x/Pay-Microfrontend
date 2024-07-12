import CircularChart from "./CircularChart";

function StatsCards(){
    return(
        <div className="grid grid-cols-2 h-[19rem] m-1  gap-4">
            <div className="bg-white rounded-2xl flex  px-[1.5rem] py-[0.6rem] items-center justify-between ">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <p className="text-[#A3A6A9] text-sm ">Total Invoices</p>
                        <p className="poppins-bold text-sm">1200</p>
                        <p className="text-sm text-[#27A963]">+ 4 Today</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-[#ADA1E6] rounded-[50%] h-2 w-2"></div>
                            <div className="text-xs poppins-light text-[#787D81]">Succeeded</div>
                            <div className="poppins-bold text-xs">(12)</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-[#FF7BBF] rounded-[50%] h-2 w-2"></div>
                            <div className="text-xs poppins-light text-[#787D81]">In Progress</div>
                            <div className="poppins-bold text-xs">(12)</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-[#964EC2] rounded-[50%] h-2 w-2"></div>
                            <div className="text-xs poppins-light text-[#787D81]">Rebounded</div>
                            <div className="poppins-bold text-xs">(12)</div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="bg-[#D562BE] rounded-[50%] h-2 w-2"></div>
                            <div className="text-xs poppins-light text-[#787D81]">Failed</div>
                            <div className="poppins-bold text-xs">(12)</div>
                        </div>

                    </div>
                </div>
                <div className="h-60 relative">
                <CircularChart/>
                <div className="absolute top-[45%] left-[45%]">
                    25%
                </div>
                </div>
                 
            </div>
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between  bg-white py-5 px-5 rounded-2xl h-[6rem]">
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-600 poppins-light text-sm">Total Income</p>
                        <p className="poppins-bold">₹ 24,0000.70</p>
                        <p className="poppins-bold text-[#27A963]">+1290 <span className="poppins-light">Today</span></p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="primary-linear-gr-bg-light p-3 rounded-[50%]">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.4331 8.59956H16.3075C14.9574 8.59956 14.1494 7.7557 14.1494 6.34556V3.08115C14.1494 1.67101 14.9574 0.827148 16.3075 0.827148H19.4331C20.7832 0.827148 21.5912 1.67101 21.5912 3.08115V6.34556C21.5912 7.7557 20.7832 8.59956 19.4331 8.59956ZM19.667 4.92432C19.5394 4.79108 19.3693 4.72446 19.1992 4.72446C19.0291 4.72446 18.859 4.79108 18.7314 4.92432L18.5401 5.12418V2.63701C18.5401 2.24839 18.2424 1.93749 17.8703 1.93749C17.4982 1.93749 17.2006 2.24839 17.2006 2.63701V5.12418L17.0092 4.92432C16.754 4.65784 16.3288 4.65784 16.0737 4.92432C15.8185 5.1908 15.8185 5.63494 16.0737 5.90142L17.4025 7.28936C17.4557 7.34487 17.5301 7.38929 17.6045 7.4226C17.6258 7.4337 17.6471 7.4337 17.6683 7.4448C17.7215 7.46701 17.7746 7.47811 17.8384 7.47811C17.8597 7.47811 17.8809 7.47811 17.9022 7.47811C17.9766 7.47811 18.0404 7.46701 18.1148 7.4337C18.1255 7.4337 18.1255 7.4337 18.1361 7.4337C18.2105 7.40039 18.2743 7.35598 18.3274 7.30046C18.3381 7.28936 18.3381 7.28936 18.3487 7.28936L19.6776 5.90142C19.9327 5.63494 19.9327 5.1908 19.667 4.92432Z" fill="url(#paint0_linear_5_8631)"/>
                            <path d="M0.328979 11.6086V17.1603C0.328979 19.703 2.29573 21.7571 4.73026 21.7571H17.1793C19.6138 21.7571 21.5912 19.6919 21.5912 17.1492V11.6086C21.5912 10.8647 21.0171 10.2651 20.3048 10.2651H1.61534C0.903059 10.2651 0.328979 10.8647 0.328979 11.6086ZM6.70765 18.0375H4.58142C4.14555 18.0375 3.78409 17.66 3.78409 17.2047C3.78409 16.7495 4.14555 16.372 4.58142 16.372H6.70765C7.14352 16.372 7.50498 16.7495 7.50498 17.2047C7.50498 17.66 7.14352 18.0375 6.70765 18.0375ZM13.6179 18.0375H9.36542C8.92955 18.0375 8.56809 17.66 8.56809 17.2047C8.56809 16.7495 8.92955 16.372 9.36542 16.372H13.6179C14.0537 16.372 14.4152 16.7495 14.4152 17.2047C14.4152 17.66 14.0537 18.0375 13.6179 18.0375Z" fill="url(#paint1_linear_5_8631)"/>
                            <path d="M12.5548 4.001V7.25431C12.5548 7.99824 11.9807 8.59783 11.2684 8.59783H1.61534C0.892428 8.59783 0.328979 7.97604 0.328979 7.23211C0.339611 5.97742 0.818011 4.83376 1.61534 4.001C2.41268 3.16824 3.51831 2.65749 4.73026 2.65749H11.2684C11.9807 2.65749 12.5548 3.25707 12.5548 4.001Z" fill="url(#paint2_linear_5_8631)"/>
                            <defs>
                            <linearGradient id="paint0_linear_5_8631" x1="-3.06079" y1="13.1526" x2="25.0892" y2="6.60886" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F6DEC6"/>
                            <stop offset="0.47" stopColor="#E872D4"/>
                            <stop offset="0.656667" stopColor="#C190D9"/>
                            <stop offset="0.881578" stopColor="#A2DCFE"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_5_8631" x1="-3.06079" y1="13.1526" x2="25.0892" y2="6.60886" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F6DEC6"/>
                            <stop offset="0.47" stopColor="#E872D4"/>
                            <stop offset="0.656667" stopColor="#C190D9"/>
                            <stop offset="0.881578" stopColor="#A2DCFE"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_5_8631" x1="-3.06079" y1="13.1526" x2="25.0892" y2="6.60886" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F6DEC6"/>
                            <stop offset="0.47" stopColor="#E872D4"/>
                            <stop offset="0.656667" stopColor="#C190D9"/>
                            <stop offset="0.881578" stopColor="#A2DCFE"/>
                            </linearGradient>
                            </defs>
                            </svg>

                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl h-[6rem]">
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-600 poppins-light text-sm">GST</p>
                        <p className="poppins-bold">₹ 240.70</p>
                        <p className="poppins-bold text-[#27A963]">12<span className="poppins-light">Today</span></p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="primary-linear-gr-bg-light p-3 rounded-[50%]">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"  clipRule="evenodd" d="M16.3601 6.44165C16.7804 6.86202 16.7804 7.54355 16.3601 7.96392L7.74887 16.5751C7.3285 16.9954 6.64697 16.9954 6.2266 16.5751C5.80625 16.1548 5.80625 15.4732 6.2266 15.0529L14.8378 6.44165C15.2581 6.0213 15.9397 6.0213 16.3601 6.44165ZM8.06414 9.36635C7.46966 9.36635 6.98774 8.88443 6.98774 8.28996V8.2792C6.98774 7.68471 7.46966 7.2028 8.06414 7.2028C8.65861 7.2028 9.14054 7.68471 9.14054 8.2792V8.28996C9.14054 8.88443 8.65861 9.36635 8.06414 9.36635ZM13.4461 14.7483C13.4461 15.3428 13.928 15.8247 14.5225 15.8247C15.117 15.8247 15.5989 15.3428 15.5989 14.7483V14.7376C15.5989 14.1431 15.117 13.6612 14.5225 13.6612C13.928 13.6612 13.4461 14.1431 13.4461 14.7376V14.7483ZM0.529335 11.5084C0.529335 5.56359 5.34854 0.744385 11.2933 0.744385C17.2381 0.744385 22.0573 5.56359 22.0573 11.5084C22.0573 17.4531 17.2381 22.2724 11.2933 22.2724C5.34854 22.2724 0.529335 17.4531 0.529335 11.5084Z" fill="url(#paint0_linear_5_9142)"/>
                            <defs>
                            <linearGradient id="paint0_linear_5_9142" x1="-2.90281" y1="13.422" x2="25.6444" y2="6.88959" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F6DEC6"/>
                            <stop offset="0.47" stopColor="#E872D4"/>
                            <stop offset="0.656667" stopColor="#C190D9"/>
                            <stop offset="0.881578" stopColor="#A2DCFE"/>
                            </linearGradient>
                            </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl h-[6rem]">
                    <div className="flex flex-col gap-1">
                        <p className="text-gray-600 poppins-light text-sm">Refunds</p>
                        <p className="poppins-bold">₹ 240.70</p>
                        <p className="poppins-bold text-[#27A963]">12<span className="poppins-light">Today</span></p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="primary-linear-gr-bg-light p-3 rounded-[50%]">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9599 0.196045C5.01522 0.196045 0.196045 5.01529 0.196045 10.9599C0.196045 16.9042 5.01522 21.724 10.9598 21.724C16.9044 21.724 21.724 16.9044 21.724 10.9599C21.7238 5.01529 16.9045 0.196045 10.9599 0.196045ZM17.1069 12.3105C16.6221 15.3911 13.9538 17.5964 10.9283 17.5964C10.6063 17.5964 10.2804 17.5713 9.9525 17.5199C6.54413 16.9828 4.2072 13.773 4.74325 10.3651C5.00309 8.71382 5.89033 7.26249 7.24149 6.27868C8.40472 5.43185 9.79169 5.01982 11.2088 5.08698L10.1663 4.09427L10.8496 3.37733L12.4491 4.90141L12.4495 4.9012L13.1649 5.58384L12.4823 6.30078L12.4819 6.30021L10.9579 7.90007L10.2418 7.21685L11.2074 6.20419C10.0264 6.13717 8.86764 6.47609 7.89874 7.18148C6.78854 7.98977 6.05968 9.18204 5.84619 10.5386C5.40602 13.3386 7.32602 15.9757 10.1262 16.4168C12.9262 16.8567 15.563 14.9373 16.0036 12.137C16.2945 10.2885 15.5569 8.42563 14.078 7.27527L14.764 6.394C16.5631 7.79365 17.4609 10.0607 17.1069 12.3105ZM8.88572 12.7856L8.84905 12.6998L9.76923 12.3097L9.80554 12.3957C9.95186 12.743 10.4577 13.0048 10.982 13.0048C11.2176 13.0048 11.9862 12.9619 11.9862 12.4065C11.9862 12.1155 11.6576 11.9414 10.9518 11.8581C10.1599 11.7694 9.07445 11.648 9.07445 10.4526C9.07445 9.71966 9.62277 9.2073 10.5461 9.07089V8.50751H11.5379V9.07333C11.9665 9.14867 12.5321 9.33539 12.8476 9.98065L12.8895 10.066L12.0424 10.4578L11.9996 10.3866C11.8513 10.1417 11.415 9.94943 11.0069 9.94943C10.7316 9.94943 10.0916 9.99858 10.0916 10.4525C10.0916 10.7788 10.504 10.8539 11.0434 10.9185C11.8867 11.0224 13.0412 11.1646 13.0412 12.4063C13.0412 13.3202 12.3001 13.8012 11.5381 13.8865V14.5289H10.5465V13.9173C9.74641 13.8233 9.1582 13.4233 8.88572 12.7856Z" fill="url(#paint0_linear_5_8671)"/>
                            <defs>
                            <linearGradient id="paint0_linear_5_8671" x1="-3.2361" y1="12.8736" x2="25.3111" y2="6.34125" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F6DEC6"/>
                            <stop offset="0.47" stopColor="#E872D4"/>
                            <stop offset="0.656667" stopColor="#C190D9"/>
                            <stop offset="0.881578" stopColor="#A2DCFE"/>
                            </linearGradient>
                            </defs>
                            </svg>

                        </div>
                    </div>
                </div>

            </div>
         
          
        </div>
    )
}
export default StatsCards;