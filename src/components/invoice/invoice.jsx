import {useDispatch} from 'react-redux'
import { deleteInvoice } from '../../store/slice'


export function Invoice({information}){
    const dispatch = useDispatch()

    function goBack(){
        document.getElementById('invoice').style.display = 'none'
    }

    function deleteInvoiceHandel(){
        dispatch(deleteInvoice(information))
        goBack()
    }

    return(
        <section id='invoice' className="hidden w-screen h-screen overflow-y-scroll pb-4 bg-[#f8f8fb] text-black dark:bg-[#141625] dark:text-gray-200 !mt-0 fixed z-50 left-0 top-0">

            <div className="max-w-[768px] w-full mx-auto pt-20 px-4">

<span onClick={goBack} className="block mb-4 before:content-[url('../images/icon-arrow-left.svg')] before:pr-2">Go Back</span>

<div className="flex justify-between flex-wrap bg-white dark:bg-[#1e2139] rounded-xl px-4 py-5 mb-4">
    <div className="flex items-center gap-8">
        Status <br />
        <button id='toPaid' className={information.status}>{information.status}</button>
    </div>

    <div className="flex gap-4">
        <button id='deleteButton' onClick={deleteInvoiceHandel} className="py-2 px-4 rounded-2xl bg-[#d42020] text-white">Delete</button>
    </div>
</div>

<div className="bg-white dark:bg-[#1e2139] rounded-xl px-4 py-5">

    <div className="flex justify-between flex-wrap gap-4">
        <div >
            <h2 className="font-bold text-xl">
                <span className="text-[#7e88c3]">#</span>
                {information.id}
            </h2>
            {information.description}
        </div>

        <div >
            {information.senderAddress.street}<br />
            {information.senderAddress.city}<br />
            {information.senderAddress.postCode}<br />
            {information.senderAddress.country}<br />
        </div>
    </div>

    <div className="flex justify-between flex-wrap gap-5 mt-8">

        <div >
            Invoice Date<br />
            <span className="block font-bold text-xl">{information.createdAt}</span>
            <br/>Payment Due<br />
            <span className="font-bold text-xl">{information.paymentDue}</span>
        </div>

        <div >
            Bill To<br />
            <span className="block font-bold text-xl">{information.clientName}</span>
            <br/>
            {information.clientAddress.street}<br />
            {information.clientAddress.city}<br />
            {information.clientAddress.postCode}<br />
            {information.clientAddress.country}<br />
        </div>

        <div >
            Send To <br />
            <span className="font-bold text-xl">{information.clientEmail}</span>
        </div>


    </div>

        <div className='text-white'>
            <table className="flex flex-col justify-between gap-2 py-4 px-7 mt-6 bg-[#252945] max-sm:text-[12px] rounded-t-xl">
                <thead className="basis-auto">
                    <tr className="flex justify-between gap-1 w-full">
                        <td>Item Name</td>
                        <td>QTY.</td>
                        <td>Price</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody className="basis-auto">
                {
                    information.items.map((item,id)=>{
                        return(
                    <tr key={id} className="flex justify-between gap-2 w-full">
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.total}</td>
                    </tr>

                        )
                    })
                }
                </tbody>
            </table>

            <div className="flex justify-between items-center flex-wrap bg-[#0c0e16] rounded-b-xl px-7 py-4">
            Grand Total
            <span className="block font-bold text-xl">${information.total}</span>
            </div>
        </div>
</div>
            </div>
        </section>
    )
}