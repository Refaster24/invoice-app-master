import '../../style/new-invoice.css'
import { From } from './form'

export function close(){
    const newInvoiceSection = document.querySelector('#new-invoice-section')
    const newInvoiceSectionBackground = document.querySelector('#background')
    newInvoiceSection.style.display = 'none'
    newInvoiceSectionBackground.style.display = 'none'
}
export function NewInvoice(){

    return(
        <>
        <div onClick={close} id="background"></div>
        <section id="new-invoice-section">


            <h2>New Invoice</h2>

            <From/>


        </section>
        </>
    )
}