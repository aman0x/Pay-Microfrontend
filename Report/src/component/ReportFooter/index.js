function ReportDownloadButtons({vertical=false}){
    return(
        <div className={`${vertical?"flex flex-col":"flex"} gap-4 p-1 justify-center `}>
                <button className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl min-h-[3.0rem]  gap-4 primary-btn ">
                    <div>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_855_12731)">
                        <path d="M4.5 14.5H3.5V15.75H4.5C4.875 15.75 5.125 15.5 5.125 15.125C5.125 14.75 4.875 14.5 4.5 14.5ZM11.3661 -0.133883C11.1317 -0.368303 10.8138 -0.5 10.4822 -0.5H2.25C1.55964 -0.5 1 0.0596441 1 0.75V18.25C1 18.9404 1.55964 19.5 2.25 19.5H16C16.6904 19.5 17.25 18.9404 17.25 18.25V6.26777C17.25 5.93625 17.1183 5.6183 16.8839 5.38388L11.3661 -0.133883ZM6.25 15.25C6.25 16.25 5.5 17 4.5 17H3.5V18.25H2.25V13.25H4.5C5.5 13.25 6.25 14 6.25 15V15.25ZM11.375 15.875C11.375 17.125 10.375 18.25 9 18.25H7.25V13.25H9C10.25 13.25 11.375 14.25 11.375 15.625V15.875ZM16 14.5H13.5V15.75H15.375V17H13.5V18.25H12.25V13.25H16V14.5ZM16 12H2.25V1.16667C2.25 0.936548 2.43655 0.75 2.66667 0.75H10.5833C10.8135 0.75 11 0.936548 11 1.16667V5.33333C11 5.56345 11.1865 5.75 11.4167 5.75H15.5833C15.8135 5.75 16 5.93655 16 6.16667V12ZM9 14.5H8.5V17H9C9.75 17 10.25 16.5 10.25 15.75C10.25 15 9.625 14.5 9 14.5Z" fill="#4E5459"/>
                        <path d="M6.78111 8.33279C6.86099 8.33279 6.93715 8.29923 6.99104 8.24029L8.50813 6.58097C8.61414 6.46502 8.6061 6.2851 8.49015 6.17909C8.37421 6.07308 8.19428 6.08112 8.08828 6.19707L7.06557 7.31566V3.11779C7.06557 2.96069 6.93821 2.83333 6.78111 2.83333C6.62402 2.83333 6.49666 2.96069 6.49666 3.11779V7.31566L5.47396 6.19707C5.36795 6.08112 5.18803 6.07308 5.07208 6.17909C4.95613 6.2851 4.94808 6.46502 5.05408 6.58097L6.57118 8.24029C6.62508 8.29923 6.70124 8.33279 6.78111 8.33279Z" fill="#4E5459"/>
                        <path d="M3.36779 7.38455C3.52489 7.38455 3.65224 7.51191 3.65224 7.669C3.65224 8.21341 3.65285 8.5931 3.69136 8.8796C3.72878 9.15792 3.79722 9.30526 3.90219 9.41024C4.00716 9.51523 4.15453 9.58365 4.43283 9.62108C4.71932 9.65958 5.09901 9.66019 5.64343 9.66019H7.91906C8.46347 9.66019 8.84316 9.65958 9.12967 9.62108C9.40798 9.58365 9.55532 9.51523 9.66031 9.41024C9.76529 9.30526 9.83371 9.15792 9.87114 8.8796C9.90964 8.5931 9.91025 8.21341 9.91025 7.669C9.91025 7.51191 10.0376 7.38455 10.1947 7.38455C10.3518 7.38455 10.4792 7.51191 10.4792 7.669V7.68983C10.4792 8.20852 10.4792 8.62659 10.435 8.95542C10.3891 9.29681 10.2909 9.58422 10.0626 9.8125C9.83428 10.0408 9.54687 10.139 9.20548 10.1849C8.87665 10.2291 8.45858 10.2291 7.93989 10.2291H5.62262C5.10393 10.2291 4.68585 10.2291 4.35703 10.1849C4.01564 10.139 3.7282 10.0408 3.49991 9.8125C3.27162 9.58422 3.17343 9.29681 3.12753 8.95542C3.08332 8.6266 3.08333 8.20855 3.08333 7.68988V7.669C3.08333 7.51191 3.21069 7.38455 3.36779 7.38455Z" fill="#4E5459"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_855_12731">
                        <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <div>Download PDF</div>
                </button>
                <button className="poppins-medium text-sm flex items-center bg p-[1rem] bg-black-primary rounded-xl min-h-[3.0rem] gap-4 primary-btn">
                    <div>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_855_12735)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4822 -0.5C10.8138 -0.5 11.1317 -0.368303 11.3661 -0.133883L16.8839 5.38388C17.1183 5.6183 17.25 5.93625 17.25 6.26777V18.25C17.25 18.9404 16.6904 19.5 16 19.5H2.25C1.55964 19.5 1 18.9404 1 18.25V0.75C1 0.0596441 1.55964 -0.5 2.25 -0.5H10.4822ZM15.5833 12C15.8135 12 16 11.8135 16 11.5833V6.16667C16 5.93655 15.8135 5.75 15.5833 5.75H11.4167C11.1865 5.75 11 5.56345 11 5.33333V1.16667C11 0.936548 10.8135 0.75 10.5833 0.75H2.66667C2.43655 0.75 2.25 0.936548 2.25 1.16667V11.5833C2.25 11.8135 2.43655 12 2.66667 12H15.5833ZM5.18619 17.3006L5.70687 18.1783H7.20929L5.50202 15.6963L7.1236 13.3292H5.63853L5.15172 14.2141C5.00683 14.4946 4.89599 14.7106 4.75926 15.0197H4.74261C4.60575 14.7465 4.47761 14.5091 4.30693 14.2141L3.80346 13.3292H2.30989L3.91447 15.7249L2.25 18.1783H3.73507L4.21334 17.3006C4.25462 17.2227 4.29409 17.1494 4.33184 17.0792C4.45795 16.845 4.56497 16.6461 4.65705 16.4301H4.67414C4.71449 16.4999 4.75327 16.568 4.79205 16.636C4.90905 16.8413 5.02604 17.0466 5.18619 17.3006ZM7.90825 18.1783H11.5018V17.2575H9.21448V13.3296H7.90825V18.1783ZM12.0478 17.955C12.372 18.1061 13.0208 18.25 13.6778 18.25C15.2572 18.25 15.9996 17.5597 16 16.7461C16 16.0626 15.5219 15.6169 14.5063 15.3002C13.7638 15.0628 13.4396 14.9262 13.4396 14.6169C13.4396 14.3649 13.7126 14.1493 14.2759 14.1493C14.8386 14.1493 15.2486 14.2859 15.4791 14.3794L15.7693 13.4946C15.4277 13.3653 14.9498 13.25 14.3014 13.25C12.9438 13.25 12.1243 13.8833 12.1243 14.7106C12.1243 15.4154 12.748 15.8615 13.7038 16.142C14.3949 16.3506 14.6682 16.5232 14.6682 16.8255C14.6682 17.1422 14.3526 17.3506 13.7552 17.3506C13.2004 17.3506 12.6627 17.1995 12.3125 17.0487L12.0478 17.955Z" fill="#4E5459"/>
                        <path d="M6.78111 8.33279C6.86099 8.33279 6.93715 8.29923 6.99104 8.24029L8.50813 6.58097C8.61414 6.46502 8.6061 6.2851 8.49015 6.17909C8.37421 6.07308 8.19428 6.08112 8.08828 6.19707L7.06557 7.31566V3.11779C7.06557 2.96069 6.93821 2.83333 6.78111 2.83333C6.62402 2.83333 6.49666 2.96069 6.49666 3.11779V7.31566L5.47396 6.19707C5.36795 6.08112 5.18803 6.07308 5.07208 6.17909C4.95613 6.2851 4.94808 6.46502 5.05408 6.58097L6.57118 8.24029C6.62508 8.29923 6.70124 8.33279 6.78111 8.33279Z" fill="#4E5459"/>
                        <path d="M3.36779 7.38455C3.52489 7.38455 3.65224 7.51191 3.65224 7.669C3.65224 8.21341 3.65285 8.5931 3.69136 8.8796C3.72878 9.15792 3.79722 9.30526 3.90219 9.41024C4.00716 9.51523 4.15453 9.58365 4.43283 9.62108C4.71932 9.65958 5.09901 9.66019 5.64343 9.66019H7.91906C8.46347 9.66019 8.84316 9.65958 9.12967 9.62108C9.40798 9.58365 9.55532 9.51523 9.66031 9.41024C9.76529 9.30526 9.83371 9.15792 9.87114 8.8796C9.90964 8.5931 9.91025 8.21341 9.91025 7.669C9.91025 7.51191 10.0376 7.38455 10.1947 7.38455C10.3518 7.38455 10.4792 7.51191 10.4792 7.669V7.68983C10.4792 8.20852 10.4792 8.62659 10.435 8.95542C10.3891 9.29681 10.2909 9.58422 10.0626 9.8125C9.83428 10.0408 9.54687 10.139 9.20548 10.1849C8.87665 10.2291 8.45858 10.2291 7.93989 10.2291H5.62262C5.10393 10.2291 4.68585 10.2291 4.35703 10.1849C4.01564 10.139 3.7282 10.0408 3.49991 9.8125C3.27162 9.58422 3.17343 9.29681 3.12753 8.95542C3.08332 8.6266 3.08333 8.20855 3.08333 7.68988V7.669C3.08333 7.51191 3.21069 7.38455 3.36779 7.38455Z" fill="#4E5459"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_855_12735">
                        <rect width="18" height="18" fill="white" transform="translate(0 0.5)"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </div>
                    <div>Download XLS</div>
                </button>
            </div>
    )
}

export default ReportDownloadButtons;