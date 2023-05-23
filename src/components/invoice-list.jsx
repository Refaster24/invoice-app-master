import { useEffect, useState } from 'react'
import store from '../store/store.jsx'
import arrow from '../images/icon-arrow-right.svg'
import { Invoice } from './invoice/invoice'

export function InvoiceList(){

    const [state,setState] = useState(false)
    const [invoiceInformation,setInvoiceInformation] = useState({
        id:'',
        createdAt:'',
        paymentDue:'',
        description:'',
        paymentTerms:'',
        clientName:'',
        clientEmail:'',
        status:'',
        senderAddress:{
            street:'',
            city:'',
            postCode:'',
            country:'',
        },
        clientAddress:{
            street:'',
            city:'',
            postCode:'',
            country:'',
        },
        items:[],
        total:'',
    })

    function clickHandel(e){
        const li = document.querySelectorAll('#invoiceLi')
        const invoice = document.getElementById('invoice')
        for(let i=0;i<li.length;i++){
            if(e.target === li[i]){
                setInvoiceInformation(store.getState().slice.filterState[i])
                invoice.style.display = 'block'
            }
        }
    }




    useEffect(()=>{
        const draftButton = document.getElementById('draftButton')
        const pendingButton = document.getElementById('pendingButton')
        const paidButton = document.getElementById('paidButton')
        const allButton = document.getElementById('allButton')
        const saveAsDraft = document.getElementById('saveAsDraft')
        const saveAndSend = document.getElementById('saveAndSend')
        const deleteButton = document.getElementById('deleteButton')
        const toPaid = document.getElementById('toPaid')

        window.addEventListener('click',(e)=>{
            if(e.target === draftButton || e.target === pendingButton || e.target === paidButton || e.target === allButton || e.target === saveAndSend || e.target === saveAsDraft || e.target === deleteButton || e.target === toPaid){
                setState((prevState)=>!prevState)
            }
            // No invoices
            if(store.getState().slice.filterState.length === 0){
                const span = document.querySelector('#invoiceListSection > span')
                span.innerHTML ='There is nothing here. <br/> Create an invoice by clicking the New Invoice button and get started'
            }
        })

        
    },[])

    return(
        <section id='invoiceListSection' className='space-y-4 mb-4'>
            <span className="font-bold text-xl text-[#dd3939]"></span>
            <Invoice information={invoiceInformation}/>
            {
store.getState().slice.filterState.map((element,id)=>{
    const {paymentDue} = element

    const year = paymentDue[0] + paymentDue[1] + paymentDue[2] + paymentDue[3]
    const day = paymentDue[8] + paymentDue[9]

    const month = paymentDue[5] + paymentDue[6]
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'Oct', 'Nov', 'Dec']
    let monthName = monthNames[month - 1]
    

    return (
    <ul key={id} className="dark:text-white">
        <li onClick={clickHandel} id='invoiceLi' className="bg-white dark:bg-[#1e2139] flex justify-between items-center flex-wrap gap-4 px-4 py-6 rounded-2xl border border-white max-sm:justify-center max-sm:gap-6 dark:border-[#1e2139] hover:border-[#7c5dfa]">
            <p className="font-bold">
                <span className="text-[#7e88c3]">#</span>
                {element.id}
            </p>
            <p>Due {day} {monthName} {year}</p>
            <p className="max-sm:order-">{element.clientName}</p>
            <p className='font-bold text-xl'>${element.total}</p>
            <button className={`${element.status} max-[500px]:mx-[150px]`}>{element.status}</button>
            <img src={arrow} alt="arrow" className='max-sm:hidden'/>
        </li>
    </ul>
)
    })
}
        </section>
    )
}