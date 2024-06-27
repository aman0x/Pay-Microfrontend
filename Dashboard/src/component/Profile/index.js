function Profile(){
    return(
        <div>
            <div className="flex gap-4">
                <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-red-200 shadow-2xl">
                    <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] px-3 poppins-medium text-sm w-44" onClick={()=>{}}>
                       Profile
                    </button>
                </div>
                <div className="primary-linear-gr-bg-up p-[1.5px] rounded-xl shadow-red-200 shadow-2xl">
                    <button className="flex justify-between items-center bg-black-primary rounded-xl py-[6px] px-3 poppins-medium text-sm w-44" onClick={()=>{}}>
                       Profile
                    </button>
                </div>
                
            </div>
            <div>
                <div className="flex gap-4 items-center">
                    <div className="primary-linear-gr-bg p-[2px]">
                        <img
                        src="#"
                        />
                    </div>
                    <div>
                        <div>
                            <div>Verified</div>
                            <div>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8.5C16 12.9182 12.4182 16.5 8 16.5C3.58172 16.5 0 12.9182 0 8.5C0 4.08172 3.58172 0.5 8 0.5C12.4182 0.5 16 4.08172 16 8.5ZM11.2242 6.07574C11.4586 6.31005 11.4586 6.68995 11.2242 6.92424L7.22424 10.9242C6.98992 11.1586 6.61008 11.1586 6.37574 10.9242L4.77574 9.32424C4.54142 9.08992 4.54142 8.71008 4.77574 8.47576C5.01005 8.24144 5.38995 8.24144 5.62426 8.47576L6.8 9.65144L8.58784 7.8636L10.3758 6.07574C10.6101 5.84142 10.9899 5.84142 11.2242 6.07574Z" fill="#27A963"/>
                                </svg>
                            </div>
                        </div>
                        <div>
                            Customer Name
                        </div>
                        <div>
                            ID: 101010101
                        </div>
                        <div>
                            @customer
                        </div>
                        
                    </div>
                </div>                
            </div>
        </div>
    )
}

return Profile;