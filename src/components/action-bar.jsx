import store from "../store/store"
import {useSelector ,useDispatch} from 'react-redux'
import { useState } from 'react'
import {draft,paid,pending,all} from '../store/slice'


export function ActionBar(){
    const [state,setState] = useState(false)
    
    const dispatch = useDispatch()

    function draftDispatch(){
        dispatch(draft())
        setState((prevState)=>!prevState)
    }

    function paidDispatch(){
        dispatch(paid())
        setState((prevState)=>!prevState)
    }

    function pendingDispatch(){
        dispatch(pending())
        setState((prevState)=>!prevState)
    }

    function allDispatch(){
        dispatch(all())
        setState((prevState)=>!prevState)
    }

    function filterButton(){
        const ul = document.querySelector('#filter+ul')    
        if(ul.style.display === 'block'){
            ul.style.display = 'none'
        } else{
            ul.style.display = 'block'
        }
    }
    
    function newInvoiceButton(){
        const newInvoiceSection = document.querySelector('#new-invoice-section')
        const newInvoiceSectionBackground = document.querySelector('#background')

        if(!newInvoiceSection.style.display || newInvoiceSection.style.display === 'none'){
            newInvoiceSection.style.display = 'block'
            newInvoiceSectionBackground.style.display = 'block'
        }
    }

    const selector = useSelector(()=>store.getState().slice.filterState.length)

    return (

<section className='mb-7 flex gap-4 flex-wrap justify-between max-sm:flex-col'>

<div className="basis-2/3 flex flex-wrap gap-4 items-center justify-between max-sm:flex-col">
    <div className="">
    <h1 className="text-5xl mb-3 font-bold">Invoices</h1>
    <span id='selector' className="text-gray-400">There are {selector} total invoices</span>
    
    </div>

    <div>
    <button onClick={filterButton} id='filter' className="w-36 border-b border-[#7c5dfa] px-2 mb-2 after:content-[url('../images/icon-arrow-down.svg')] after:pl-2">Filter by status</button>
    <ul className='hidden w-36 pl-4 space-y-2 absolute z-50 bg-white border border-[#252945] dark:bg-[#252945] py-2 rounded-xl max-sm:relative max-sm:text-center max-sm:pl-0'>
        <li>
        <button onClick={draftDispatch} id='draftButton' className='border-b border-[#7c5dfa] w-fit px-2'>Draft</button>
        </li>
        <li>
        <button onClick={pendingDispatch} id='pendingButton' className='border-b border-[#7c5dfa] w-fit px-2'>Pending</button>
        </li>
        <li>
        <button onClick={paidDispatch} id='paidButton' className='border-b border-[#7c5dfa] w-fit px-2'>Paid</button>
        </li>
        <li>
        <button onClick={allDispatch} id='allButton' className='border-b border-[#7c5dfa] w-fit px-2'>All</button>
        </li>
    </ul>
    </div>

</div>

<button onClick={newInvoiceButton} className='rounded-full bg-[#7c5dfa] text-white self-center w-44 py-6 pl-16 pr-4 before:content-[url("../images/icon-plus.svg")] before:bg-white before:absolute before:w-12 before:h-12 before:rounded-[50%] before:grid before:place-items-center before:-translate-x-14 before:-translate-y-3'>
    New Invoice
</button>

</section>

    )
}