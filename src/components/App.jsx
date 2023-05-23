import { ActionBar } from "./action-bar"
import { InvoiceList } from "./invoice-list"
import { NewInvoice } from "./new-invoice/new-invoice"

function App() {
  
  return (
    <main className='max-w-[768px] mx-auto pt-20 px-4 selection:text-white selection:bg-[#252945] dark:text-white'>
        <ActionBar/>
        <InvoiceList/>
        <NewInvoice/>
    </main>
  )
}
export default App