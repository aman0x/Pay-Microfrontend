import { useState }  from "react"
function InvoiceTop(){
    const [isInvoiceSend,setIsInvoiceSend] = useState(true)
    return(
        <div>
            <div>
                <div>
                    <div>
                        All Invoices
                    </div>
                    <div>
                        1200
                    </div>
                </div>
                <div>
                <div className="flex sm:mx-auto sm:w-full sm:max-w-md mt-4 bg-gray-100 py-2 rounded-xl justify-evenly ">
                <button
                className='py-3 px-9 rounded-lg'
                style={{
                  backgroundColor:isInvoiceSend?"#FFFFFF":null,
                  width:"45%",
                  fontWeight:isInvoiceSend?"bold":"normal"
                }}
                onClick={()=>setIsInvoiceSend(true)}
                >
                  Invoices Sent
                </button>
                <button 
                className='py-2 rounded-lg'
                style={{
                  backgroundColor:!isInvoiceSend?"#FFFFFF":null,
                  width:"45%",
                  fontWeight:!isInvoiceSend?"bold":"normal"
                }}
                onClick={()=>setIsInvoiceSend(false)}
                >
                  Invoices Received
                </button>
              </div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceTop;