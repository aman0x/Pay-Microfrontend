import CircularChart from "./CircularChart";

function StatsCards({reportIndex=0}){
    return(
        <div className="grid grid-cols-2 h-72 m-1  gap-4">
            <div className="bg-white rounded-2xl flex  p-[1.5rem] justify-between ">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <p className="text-[#A3A6A9] text-sm ">All Transaction</p>
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
            {
            reportIndex===0 && 
                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl h-[8.5rem]">
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-600 poppins-light text-sm">Total Incomes</p>
                            <p className="poppins-bold">₹ 24,0000.70</p>
                            <p className="poppins-bold text-[#27A963]">+1290 <span className="poppins-light">Today</span></p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="primary-linear-gr-bg-light p-3 rounded-[50%]">
                            <svg width="20" height="18" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6673 0H11.5767C10.6736 0 10.1331 0.564456 10.1331 1.50769V3.69125C10.1331 4.63448 10.6736 5.19894 11.5767 5.19894H13.6673C14.5704 5.19894 15.1109 4.63448 15.1109 3.69125V1.50769C15.1109 0.564456 14.5704 0 13.6673 0ZM13.8238 2.45836C13.7384 2.54748 13.6247 2.59204 13.5109 2.59204C13.3971 2.59204 13.2833 2.54748 13.198 2.45836L13.07 2.32467V3.98833C13.07 4.24828 12.8709 4.45623 12.622 4.45623C12.3731 4.45623 12.174 4.24828 12.174 3.98833V2.32467L12.046 2.45836C11.8753 2.6366 11.5909 2.6366 11.4202 2.45836C11.2496 2.28011 11.2496 1.98302 11.4202 1.80477L12.3091 0.876393C12.3447 0.839257 12.3944 0.809549 12.4442 0.787268C12.4584 0.779841 12.4727 0.779841 12.4869 0.772414C12.5224 0.75756 12.558 0.750133 12.6007 0.750133C12.6149 0.750133 12.6291 0.750133 12.6433 0.750133C12.6931 0.750133 12.7358 0.75756 12.7856 0.779841C12.7927 0.779841 12.7927 0.779841 12.7998 0.779841C12.8496 0.802122 12.8922 0.83183 12.9278 0.868966C12.9349 0.876393 12.9349 0.876393 12.942 0.876393L13.8309 1.80477C14.0016 1.98302 14.0016 2.28011 13.8238 2.45836Z" fill="url(#paint0_linear_86_261)"/>
                            <path d="M0.888672 7.21167V10.9252C0.888672 12.626 2.20423 14 3.83267 14H12.1598C13.7882 14 15.1109 12.6186 15.1109 10.9178V7.21167C15.1109 6.71406 14.7269 6.313 14.2504 6.313H1.74912C1.27267 6.313 0.888672 6.71406 0.888672 7.21167ZM5.15534 11.5119H3.73312C3.44156 11.5119 3.19978 11.2594 3.19978 10.9549C3.19978 10.6504 3.44156 10.3979 3.73312 10.3979H5.15534C5.44689 10.3979 5.68867 10.6504 5.68867 10.9549C5.68867 11.2594 5.44689 11.5119 5.15534 11.5119ZM9.77756 11.5119H6.93312C6.64156 11.5119 6.39978 11.2594 6.39978 10.9549C6.39978 10.6504 6.64156 10.3979 6.93312 10.3979H9.77756C10.0691 10.3979 10.3109 10.6504 10.3109 10.9549C10.3109 11.2594 10.0691 11.5119 9.77756 11.5119Z" fill="url(#paint1_linear_86_261)"/>
                            <path d="M9.06645 2.12298V4.29911C9.06645 4.79672 8.68245 5.19778 8.206 5.19778H1.74912C1.26556 5.19778 0.888672 4.78187 0.888672 4.28425C0.895783 3.445 1.21578 2.68001 1.74912 2.12298C2.28245 1.56595 3.02201 1.22431 3.83267 1.22431H8.206C8.68245 1.22431 9.06645 1.62537 9.06645 2.12298Z" fill="url(#paint2_linear_86_261)"/>
                            <defs>
                            <linearGradient id="paint0_linear_86_261" x1="-1.37873" y1="8.24444" x2="17.4507" y2="3.86736" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F6DEC6"/>
                            <stop offset="0.47" stopColor="#E872D4"/>
                            <stop offset="0.656667" stopColor="#C190D9"/>
                            <stop offset="0.881578" stopColor="#A2DCFE"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_86_261" x1="-1.37873" y1="8.24444" x2="17.4507" y2="3.86736" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F6DEC6"/>
                            <stop offset="0.47" stopColor="#E872D4"/>
                            <stop offset="0.656667" stopColor="#C190D9"/>
                            <stop offset="0.881578" stopColor="#A2DCFE"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_86_261" x1="-1.37873" y1="8.24444" x2="17.4507" y2="3.86736" gradientUnits="userSpaceOnUse">
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
                    <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl h-[8.5rem]">
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-600 poppins-light text-sm">Total Payments</p>
                            <p className="poppins-bold">₹ 24,0000.70</p>
                            <p className="poppins-bold text-[#E45757]">-12 <span className="poppins-light">Today</span></p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="primary-linear-gr-bg-light p-3 rounded-[50%]">
                            <svg width="20" height="18" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6673 0H11.5767C10.6736 0 10.1331 0.564456 10.1331 1.50769V3.69125C10.1331 4.63448 10.6736 5.19894 11.5767 5.19894H13.6673C14.5704 5.19894 15.1109 4.63448 15.1109 3.69125V1.50769C15.1109 0.564456 14.5704 0 13.6673 0ZM13.8238 2.45836C13.7384 2.54748 13.6247 2.59204 13.5109 2.59204C13.3971 2.59204 13.2833 2.54748 13.198 2.45836L13.07 2.32467V3.98833C13.07 4.24828 12.8709 4.45623 12.622 4.45623C12.3731 4.45623 12.174 4.24828 12.174 3.98833V2.32467L12.046 2.45836C11.8753 2.6366 11.5909 2.6366 11.4202 2.45836C11.2496 2.28011 11.2496 1.98302 11.4202 1.80477L12.3091 0.876393C12.3447 0.839257 12.3944 0.809549 12.4442 0.787268C12.4584 0.779841 12.4727 0.779841 12.4869 0.772414C12.5224 0.75756 12.558 0.750133 12.6007 0.750133C12.6149 0.750133 12.6291 0.750133 12.6433 0.750133C12.6931 0.750133 12.7358 0.75756 12.7856 0.779841C12.7927 0.779841 12.7927 0.779841 12.7998 0.779841C12.8496 0.802122 12.8922 0.83183 12.9278 0.868966C12.9349 0.876393 12.9349 0.876393 12.942 0.876393L13.8309 1.80477C14.0016 1.98302 14.0016 2.28011 13.8238 2.45836Z" fill="url(#paint0_linear_86_261)"/>
                            <path d="M0.888672 7.21167V10.9252C0.888672 12.626 2.20423 14 3.83267 14H12.1598C13.7882 14 15.1109 12.6186 15.1109 10.9178V7.21167C15.1109 6.71406 14.7269 6.313 14.2504 6.313H1.74912C1.27267 6.313 0.888672 6.71406 0.888672 7.21167ZM5.15534 11.5119H3.73312C3.44156 11.5119 3.19978 11.2594 3.19978 10.9549C3.19978 10.6504 3.44156 10.3979 3.73312 10.3979H5.15534C5.44689 10.3979 5.68867 10.6504 5.68867 10.9549C5.68867 11.2594 5.44689 11.5119 5.15534 11.5119ZM9.77756 11.5119H6.93312C6.64156 11.5119 6.39978 11.2594 6.39978 10.9549C6.39978 10.6504 6.64156 10.3979 6.93312 10.3979H9.77756C10.0691 10.3979 10.3109 10.6504 10.3109 10.9549C10.3109 11.2594 10.0691 11.5119 9.77756 11.5119Z" fill="url(#paint1_linear_86_261)"/>
                            <path d="M9.06645 2.12298V4.29911C9.06645 4.79672 8.68245 5.19778 8.206 5.19778H1.74912C1.26556 5.19778 0.888672 4.78187 0.888672 4.28425C0.895783 3.445 1.21578 2.68001 1.74912 2.12298C2.28245 1.56595 3.02201 1.22431 3.83267 1.22431H8.206C8.68245 1.22431 9.06645 1.62537 9.06645 2.12298Z" fill="url(#paint2_linear_86_261)"/>
                            <defs>
                            <linearGradient id="paint0_linear_86_261" x1="-1.37873" y1="8.24444" x2="17.4507" y2="3.86736" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F6DEC6"/>
                            <stop offset="0.47" stopColor="#E872D4"/>
                            <stop offset="0.656667" stopColor="#C190D9"/>
                            <stop offset="0.881578" stopColor="#A2DCFE"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_86_261" x1="-1.37873" y1="8.24444" x2="17.4507" y2="3.86736" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F6DEC6"/>
                            <stop offset="0.47" stopColor="#E872D4"/>
                            <stop offset="0.656667" stopColor="#C190D9"/>
                            <stop offset="0.881578" stopColor="#A2DCFE"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_86_261" x1="-1.37873" y1="8.24444" x2="17.4507" y2="3.86736" gradientUnits="userSpaceOnUse">
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
            }
            {
            reportIndex===1 &&
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between  bg-white py-5 px-5 rounded-2xl h-[6rem]">
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-600 poppins-light text-sm">Total Succeeded in INR</p>
                            <p className="poppins-bold">₹ 24,0000.70</p>
                            <p className="poppins-bold text-[#27A963]">+1290 <span className="poppins-light">Today</span></p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="bg-[#27A96333] p-3 rounded-[50%]">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4331 8.59956H16.3075C14.9574 8.59956 14.1494 7.7557 14.1494 6.34556V3.08115C14.1494 1.67101 14.9574 0.827148 16.3075 0.827148H19.4331C20.7832 0.827148 21.5912 1.67101 21.5912 3.08115V6.34556C21.5912 7.7557 20.7832 8.59956 19.4331 8.59956ZM19.667 4.92432C19.5394 4.79108 19.3693 4.72446 19.1992 4.72446C19.0291 4.72446 18.859 4.79108 18.7314 4.92432L18.5401 5.12418V2.63701C18.5401 2.24839 18.2424 1.93749 17.8703 1.93749C17.4982 1.93749 17.2006 2.24839 17.2006 2.63701V5.12418L17.0092 4.92432C16.754 4.65784 16.3288 4.65784 16.0737 4.92432C15.8185 5.1908 15.8185 5.63494 16.0737 5.90142L17.4025 7.28936C17.4557 7.34487 17.5301 7.38929 17.6045 7.4226C17.6258 7.4337 17.6471 7.4337 17.6683 7.4448C17.7215 7.46701 17.7746 7.47811 17.8384 7.47811C17.8597 7.47811 17.8809 7.47811 17.9022 7.47811C17.9766 7.47811 18.0404 7.46701 18.1148 7.4337C18.1255 7.4337 18.1255 7.4337 18.1361 7.4337C18.2105 7.40039 18.2743 7.35598 18.3274 7.30046C18.3381 7.28936 18.3381 7.28936 18.3487 7.28936L19.6776 5.90142C19.9327 5.63494 19.9327 5.1908 19.667 4.92432Z" fill="#27A963"/>
                                <path d="M0.328979 11.6086V17.1603C0.328979 19.703 2.29573 21.7571 4.73026 21.7571H17.1793C19.6138 21.7571 21.5912 19.6919 21.5912 17.1492V11.6086C21.5912 10.8647 21.0171 10.2651 20.3048 10.2651H1.61534C0.903059 10.2651 0.328979 10.8647 0.328979 11.6086ZM6.70765 18.0375H4.58142C4.14555 18.0375 3.78409 17.66 3.78409 17.2047C3.78409 16.7495 4.14555 16.372 4.58142 16.372H6.70765C7.14352 16.372 7.50498 16.7495 7.50498 17.2047C7.50498 17.66 7.14352 18.0375 6.70765 18.0375ZM13.6179 18.0375H9.36542C8.92955 18.0375 8.56809 17.66 8.56809 17.2047C8.56809 16.7495 8.92955 16.372 9.36542 16.372H13.6179C14.0537 16.372 14.4152 16.7495 14.4152 17.2047C14.4152 17.66 14.0537 18.0375 13.6179 18.0375Z" fill="#27A963"/>
                                <path d="M12.5548 4.001V7.25431C12.5548 7.99824 11.9807 8.59783 11.2684 8.59783H1.61534C0.892428 8.59783 0.328979 7.97604 0.328979 7.23211C0.339611 5.97742 0.818011 4.83376 1.61534 4.001C2.41268 3.16824 3.51831 2.65749 4.73026 2.65749H11.2684C11.9807 2.65749 12.5548 3.25707 12.5548 4.001Z" fill="#27A963"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl h-[6rem]">
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-600 poppins-light text-sm">Total InProgress in INR</p>
                            <p className="poppins-bold">₹ 240.70</p>
                            <p className="poppins-bold text-[#27A963]">12<span className="poppins-light">Today</span></p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="bg-[#ffb34257] p-3 rounded-[50%]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4331 9.35567H17.3075C15.9574 9.35567 15.1494 8.5118 15.1494 7.10167V3.83725C15.1494 2.42711 15.9574 1.58325 17.3075 1.58325H20.4331C21.7832 1.58325 22.5912 2.42711 22.5912 3.83725V7.10167C22.5912 8.5118 21.7832 9.35567 20.4331 9.35567ZM20.667 5.68042C20.5394 5.54718 20.3693 5.48056 20.1992 5.48056C20.0291 5.48056 19.859 5.54718 19.7314 5.68042L19.5401 5.88029V3.39311C19.5401 3.00449 19.2424 2.6936 18.8703 2.6936C18.4982 2.6936 18.2006 3.00449 18.2006 3.39311V5.88029L18.0092 5.68042C17.754 5.41394 17.3288 5.41394 17.0737 5.68042C16.8185 5.94691 16.8185 6.39105 17.0737 6.65753L18.4025 8.04546C18.4557 8.10098 18.5301 8.14539 18.6045 8.1787C18.6258 8.1898 18.6471 8.1898 18.6683 8.20091C18.7215 8.22311 18.7746 8.23422 18.8384 8.23422C18.8597 8.23422 18.8809 8.23422 18.9022 8.23422C18.9766 8.23422 19.0404 8.22311 19.1148 8.1898C19.1255 8.1898 19.1255 8.1898 19.1361 8.1898C19.2105 8.15649 19.2743 8.11208 19.3274 8.05656C19.3381 8.04546 19.3381 8.04546 19.3487 8.04546L20.6776 6.65753C20.9327 6.39105 20.9327 5.94691 20.667 5.68042Z" fill="#FFB442"/>
                                <path d="M1.32898 12.3647V17.9164C1.32898 20.4591 3.29573 22.5133 5.73026 22.5133H18.1793C20.6138 22.5133 22.5912 20.448 22.5912 17.9053V12.3647C22.5912 11.6208 22.0171 11.0212 21.3048 11.0212H2.61534C1.90306 11.0212 1.32898 11.6208 1.32898 12.3647ZM7.70765 18.7936H5.58142C5.14555 18.7936 4.78409 18.4161 4.78409 17.9608C4.78409 17.5056 5.14555 17.1281 5.58142 17.1281H7.70765C8.14352 17.1281 8.50498 17.5056 8.50498 17.9608C8.50498 18.4161 8.14352 18.7936 7.70765 18.7936ZM14.6179 18.7936H10.3654C9.92955 18.7936 9.56809 18.4161 9.56809 17.9608C9.56809 17.5056 9.92955 17.1281 10.3654 17.1281H14.6179C15.0537 17.1281 15.4152 17.5056 15.4152 17.9608C15.4152 18.4161 15.0537 18.7936 14.6179 18.7936Z" fill="#FFB442"/>
                                <path d="M13.5548 4.75711V8.01042C13.5548 8.75435 12.9807 9.35393 12.2684 9.35393H2.61534C1.89243 9.35393 1.32898 8.73214 1.32898 7.98821C1.33961 6.73352 1.81801 5.58986 2.61534 4.75711C3.41268 3.92435 4.51831 3.41359 5.73026 3.41359H12.2684C12.9807 3.41359 13.5548 4.01317 13.5548 4.75711Z" fill="#FFB442"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl h-[6rem]">
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-600 poppins-light text-sm">Total Failed in INR</p>
                            <p className="poppins-bold">₹ 240.70</p>
                            <p className="poppins-bold text-[#27A963]">12<span className="poppins-light">Today</span></p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div className="bg-[#e1585848] p-3 rounded-[50%]">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.32898 12.8239V17.8251C1.32898 20.1156 3.29573 21.9661 5.73026 21.9661H18.1793C20.6138 21.9661 22.5912 20.1056 22.5912 17.8151V12.8239C22.5912 12.1537 22.0171 11.6136 21.3048 11.6136H2.61534C1.90306 11.6136 1.32898 12.1537 1.32898 12.8239ZM7.70765 18.6153H5.58142C5.14555 18.6153 4.78409 18.2752 4.78409 17.8651C4.78409 17.455 5.14555 17.1149 5.58142 17.1149H7.70765C8.14352 17.1149 8.50498 17.455 8.50498 17.8651C8.50498 18.2752 8.14352 18.6153 7.70765 18.6153ZM14.6179 18.6153H10.3654C9.92955 18.6153 9.56809 18.2752 9.56809 17.8651C9.56809 17.455 9.92955 17.1149 10.3654 17.1149H14.6179C15.0537 17.1149 15.4152 17.455 15.4152 17.8651C15.4152 18.2752 15.0537 18.6153 14.6179 18.6153Z" fill="#E45757"/>
                                <path d="M13.5548 5.9707V8.9014C13.5548 9.57156 12.9807 10.1117 12.2684 10.1117H2.61534C1.89243 10.1117 1.32898 9.55155 1.32898 8.88139C1.33961 7.75112 1.81801 6.72088 2.61534 5.9707C3.41268 5.22052 4.51831 4.76041 5.73026 4.76041H12.2684C12.9807 4.76041 13.5548 5.30054 13.5548 5.9707Z" fill="#E45757"/>
                                <path d="M20.4331 3.36163H17.3075C15.9574 3.36163 15.1494 4.12182 15.1494 5.39212V8.33282C15.1494 9.60312 15.9574 10.3633 17.3075 10.3633H20.4331C21.7832 10.3633 22.5912 9.60312 22.5912 8.33282V5.39212C22.5912 4.12182 21.7832 3.36163 20.4331 3.36163ZM20.8264 7.85271C20.9434 7.98274 21.0072 8.12277 21.0072 8.29281C21.0072 8.43284 20.9434 8.59288 20.8264 8.70291C20.5819 8.93296 20.1673 8.93296 19.9228 8.70291L18.8703 7.71267L17.8285 8.71291C17.5839 8.94297 17.1693 8.94297 16.9142 8.70291C16.6697 8.47285 16.6697 8.08276 16.9142 7.85271L17.9773 6.87247L16.9248 5.88224C16.6803 5.65218 16.6697 5.26209 16.9142 5.02203C17.1587 4.78197 17.5733 4.79198 17.8285 5.03203L18.8703 6.02227L19.9334 5.02203C20.1779 4.79198 20.5926 4.79198 20.8371 5.02203C20.954 5.15206 21.0072 5.3021 21.0178 5.46213C21.0178 5.60217 20.954 5.76221 20.8477 5.88224L19.7846 6.88247L20.8264 7.85271Z" fill="#E45757"/>
                                </svg>  
                            </div>
                        </div>
                    </div>

                </div>
            }
            {
            reportIndex===2 &&
                <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl h-[6rem]">
                <div className="flex flex-col gap-1">
                    <p className="text-gray-600 poppins-light text-sm">Total Paid in INR</p>
                    <p className="poppins-bold">₹ 24,0000.70</p>
                    <p className="poppins-bold text-[#27A963]">+1290 <span className="poppins-light">Today</span></p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="bg-[#e1585848] p-3 rounded-[50%]">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.32898 12.8239V17.8251C1.32898 20.1156 3.29573 21.9661 5.73026 21.9661H18.1793C20.6138 21.9661 22.5912 20.1056 22.5912 17.8151V12.8239C22.5912 12.1537 22.0171 11.6136 21.3048 11.6136H2.61534C1.90306 11.6136 1.32898 12.1537 1.32898 12.8239ZM7.70765 18.6153H5.58142C5.14555 18.6153 4.78409 18.2752 4.78409 17.8651C4.78409 17.455 5.14555 17.1149 5.58142 17.1149H7.70765C8.14352 17.1149 8.50498 17.455 8.50498 17.8651C8.50498 18.2752 8.14352 18.6153 7.70765 18.6153ZM14.6179 18.6153H10.3654C9.92955 18.6153 9.56809 18.2752 9.56809 17.8651C9.56809 17.455 9.92955 17.1149 10.3654 17.1149H14.6179C15.0537 17.1149 15.4152 17.455 15.4152 17.8651C15.4152 18.2752 15.0537 18.6153 14.6179 18.6153Z" fill="#E45757"/>
                        <path d="M13.5548 5.9707V8.9014C13.5548 9.57156 12.9807 10.1117 12.2684 10.1117H2.61534C1.89243 10.1117 1.32898 9.55155 1.32898 8.88139C1.33961 7.75112 1.81801 6.72088 2.61534 5.9707C3.41268 5.22052 4.51831 4.76041 5.73026 4.76041H12.2684C12.9807 4.76041 13.5548 5.30054 13.5548 5.9707Z" fill="#E45757"/>
                        <path d="M20.4331 3.36163H17.3075C15.9574 3.36163 15.1494 4.12182 15.1494 5.39212V8.33282C15.1494 9.60312 15.9574 10.3633 17.3075 10.3633H20.4331C21.7832 10.3633 22.5912 9.60312 22.5912 8.33282V5.39212C22.5912 4.12182 21.7832 3.36163 20.4331 3.36163ZM20.8264 7.85271C20.9434 7.98274 21.0072 8.12277 21.0072 8.29281C21.0072 8.43284 20.9434 8.59288 20.8264 8.70291C20.5819 8.93296 20.1673 8.93296 19.9228 8.70291L18.8703 7.71267L17.8285 8.71291C17.5839 8.94297 17.1693 8.94297 16.9142 8.70291C16.6697 8.47285 16.6697 8.08276 16.9142 7.85271L17.9773 6.87247L16.9248 5.88224C16.6803 5.65218 16.6697 5.26209 16.9142 5.02203C17.1587 4.78197 17.5733 4.79198 17.8285 5.03203L18.8703 6.02227L19.9334 5.02203C20.1779 4.79198 20.5926 4.79198 20.8371 5.02203C20.954 5.15206 21.0072 5.3021 21.0178 5.46213C21.0178 5.60217 20.954 5.76221 20.8477 5.88224L19.7846 6.88247L20.8264 7.85271Z" fill="#E45757"/>
                        </svg>  
                    </div>
                </div>
                </div>
                <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl h-[6rem]">
                <div className="flex flex-col gap-1">
                    <p className="text-gray-600 poppins-light text-sm">Total InProgress in INR</p>
                    <p className="poppins-bold">₹ 240.70</p>
                    <p className="poppins-bold text-[#27A963]">12<span className="poppins-light">Today</span></p>
                </div>
                <div className="flex gap-4 items-center">
                            <div className="bg-[#ffb34257] p-3 rounded-[50%]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4331 9.35567H17.3075C15.9574 9.35567 15.1494 8.5118 15.1494 7.10167V3.83725C15.1494 2.42711 15.9574 1.58325 17.3075 1.58325H20.4331C21.7832 1.58325 22.5912 2.42711 22.5912 3.83725V7.10167C22.5912 8.5118 21.7832 9.35567 20.4331 9.35567ZM20.667 5.68042C20.5394 5.54718 20.3693 5.48056 20.1992 5.48056C20.0291 5.48056 19.859 5.54718 19.7314 5.68042L19.5401 5.88029V3.39311C19.5401 3.00449 19.2424 2.6936 18.8703 2.6936C18.4982 2.6936 18.2006 3.00449 18.2006 3.39311V5.88029L18.0092 5.68042C17.754 5.41394 17.3288 5.41394 17.0737 5.68042C16.8185 5.94691 16.8185 6.39105 17.0737 6.65753L18.4025 8.04546C18.4557 8.10098 18.5301 8.14539 18.6045 8.1787C18.6258 8.1898 18.6471 8.1898 18.6683 8.20091C18.7215 8.22311 18.7746 8.23422 18.8384 8.23422C18.8597 8.23422 18.8809 8.23422 18.9022 8.23422C18.9766 8.23422 19.0404 8.22311 19.1148 8.1898C19.1255 8.1898 19.1255 8.1898 19.1361 8.1898C19.2105 8.15649 19.2743 8.11208 19.3274 8.05656C19.3381 8.04546 19.3381 8.04546 19.3487 8.04546L20.6776 6.65753C20.9327 6.39105 20.9327 5.94691 20.667 5.68042Z" fill="#FFB442"/>
                                <path d="M1.32898 12.3647V17.9164C1.32898 20.4591 3.29573 22.5133 5.73026 22.5133H18.1793C20.6138 22.5133 22.5912 20.448 22.5912 17.9053V12.3647C22.5912 11.6208 22.0171 11.0212 21.3048 11.0212H2.61534C1.90306 11.0212 1.32898 11.6208 1.32898 12.3647ZM7.70765 18.7936H5.58142C5.14555 18.7936 4.78409 18.4161 4.78409 17.9608C4.78409 17.5056 5.14555 17.1281 5.58142 17.1281H7.70765C8.14352 17.1281 8.50498 17.5056 8.50498 17.9608C8.50498 18.4161 8.14352 18.7936 7.70765 18.7936ZM14.6179 18.7936H10.3654C9.92955 18.7936 9.56809 18.4161 9.56809 17.9608C9.56809 17.5056 9.92955 17.1281 10.3654 17.1281H14.6179C15.0537 17.1281 15.4152 17.5056 15.4152 17.9608C15.4152 18.4161 15.0537 18.7936 14.6179 18.7936Z" fill="#FFB442"/>
                                <path d="M13.5548 4.75711V8.01042C13.5548 8.75435 12.9807 9.35393 12.2684 9.35393H2.61534C1.89243 9.35393 1.32898 8.73214 1.32898 7.98821C1.33961 6.73352 1.81801 5.58986 2.61534 4.75711C3.41268 3.92435 4.51831 3.41359 5.73026 3.41359H12.2684C12.9807 3.41359 13.5548 4.01317 13.5548 4.75711Z" fill="#FFB442"/>
                                </svg>
                            </div>
                        </div>
                </div>
                <div className="flex items-center justify-between  bg-white py-3 px-5 rounded-2xl h-[6rem]">
                <div className="flex flex-col gap-1">
                    <p className="text-gray-600 poppins-light text-sm">Total Failed in INR</p>
                    <p className="poppins-bold">₹ 240.70</p>
                    <p className="poppins-bold text-[#27A963]">12<span className="poppins-light">Today</span></p>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="bg-[#e1585848] p-3 rounded-[50%]">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.32898 12.8239V17.8251C1.32898 20.1156 3.29573 21.9661 5.73026 21.9661H18.1793C20.6138 21.9661 22.5912 20.1056 22.5912 17.8151V12.8239C22.5912 12.1537 22.0171 11.6136 21.3048 11.6136H2.61534C1.90306 11.6136 1.32898 12.1537 1.32898 12.8239ZM7.70765 18.6153H5.58142C5.14555 18.6153 4.78409 18.2752 4.78409 17.8651C4.78409 17.455 5.14555 17.1149 5.58142 17.1149H7.70765C8.14352 17.1149 8.50498 17.455 8.50498 17.8651C8.50498 18.2752 8.14352 18.6153 7.70765 18.6153ZM14.6179 18.6153H10.3654C9.92955 18.6153 9.56809 18.2752 9.56809 17.8651C9.56809 17.455 9.92955 17.1149 10.3654 17.1149H14.6179C15.0537 17.1149 15.4152 17.455 15.4152 17.8651C15.4152 18.2752 15.0537 18.6153 14.6179 18.6153Z" fill="#E45757"/>
                        <path d="M13.5548 5.9707V8.9014C13.5548 9.57156 12.9807 10.1117 12.2684 10.1117H2.61534C1.89243 10.1117 1.32898 9.55155 1.32898 8.88139C1.33961 7.75112 1.81801 6.72088 2.61534 5.9707C3.41268 5.22052 4.51831 4.76041 5.73026 4.76041H12.2684C12.9807 4.76041 13.5548 5.30054 13.5548 5.9707Z" fill="#E45757"/>
                        <path d="M20.4331 3.36163H17.3075C15.9574 3.36163 15.1494 4.12182 15.1494 5.39212V8.33282C15.1494 9.60312 15.9574 10.3633 17.3075 10.3633H20.4331C21.7832 10.3633 22.5912 9.60312 22.5912 8.33282V5.39212C22.5912 4.12182 21.7832 3.36163 20.4331 3.36163ZM20.8264 7.85271C20.9434 7.98274 21.0072 8.12277 21.0072 8.29281C21.0072 8.43284 20.9434 8.59288 20.8264 8.70291C20.5819 8.93296 20.1673 8.93296 19.9228 8.70291L18.8703 7.71267L17.8285 8.71291C17.5839 8.94297 17.1693 8.94297 16.9142 8.70291C16.6697 8.47285 16.6697 8.08276 16.9142 7.85271L17.9773 6.87247L16.9248 5.88224C16.6803 5.65218 16.6697 5.26209 16.9142 5.02203C17.1587 4.78197 17.5733 4.79198 17.8285 5.03203L18.8703 6.02227L19.9334 5.02203C20.1779 4.79198 20.5926 4.79198 20.8371 5.02203C20.954 5.15206 21.0072 5.3021 21.0178 5.46213C21.0178 5.60217 20.954 5.76221 20.8477 5.88224L19.7846 6.88247L20.8264 7.85271Z" fill="#E45757"/>
                        </svg>  
                    </div>
                </div>
                </div>

                </div>
            }   
        </div>
    )
}
export default StatsCards;