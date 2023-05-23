import { useEffect } from 'react'
import arrow from '../../images/icon-arrow-down.svg'

export function InvoiceDate(){

    function paymentTerm(){
        const ul = document.querySelector('#paymentTermsUl')
        const img = document.querySelector('.paymentTerms-div img')

        if(ul.style.display === 'block'){
            ul.style.display = 'none'
            img.style.rotate = '0deg'
        } else{
            ul.style.display = 'block'
            img.style.rotate = '180deg'
        }
    }

    useEffect(()=>{
        const input = document.querySelector('#paymentTerms')
        const buttons = document.querySelectorAll('#paymentTermsUl button')
        
        for(let i=0;i<buttons.length;i++){
            buttons[i].addEventListener('click',()=>{
                input.value = buttons[i].innerHTML
            })
        }

        const date = document.getElementById('date')

        const currentDate = new Date()
        const day = currentDate.getDay()
        const year = currentDate.getFullYear()
        
        const month = currentDate.getMonth()
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'Oct', 'Nov', 'Dec']
        const currentMonthName = monthNames[month - 1]

        date.value = `${day} ${currentMonthName} ${year}`
    },[])

    return(
        <div className='invoice-date-divs'>
        <div>
            <div>
                <label htmlFor="date">Invoice Date</label>
                <span></span>
            </div>
            <input readOnly type="text" name="date" id="date"   />
        </div>

        <div>

            <div>
                <div>
                    <label htmlFor="paymentTerms">Payment Terms</label>
                    <span></span>
                </div>
                <div className='paymentTerms-div'>
                <input defaultValue='Net 1 day' readOnly onClick={paymentTerm} type="text" name="paymentTerms" id="paymentTerms"/>
                <img src={arrow} alt="arrow" />
                </div>
            </div>

            <ul id='paymentTermsUl' className='hidden pl-4 space-y-2 z-50 bg-white border border-[#252945] dark:bg-[#252945] mb-4 py-2 rounded-xl max-sm:relative max-sm:text-center max-sm:pl-0'>
                <li>
                    <button type='button' className='border-b border-[#7c5dfa] w-fit px-2'>Net 1 day</button>
                </li>
                <li>
                    <button type='button' className='border-b border-[#7c5dfa] w-fit px-2'>Net 7 days</button>
                </li>
                <li>
                    <button type='button' className='border-b border-[#7c5dfa] w-fit px-2'>Net 14 days</button>
                </li>
                <li>
                    <button type='button' className='border-b border-[#7c5dfa] w-fit px-2'>Net 30 days</button>
                </li>
            </ul>
        </div>

    </div>
    )
}