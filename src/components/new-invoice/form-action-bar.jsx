import { close } from "./new-invoice";
import { payload } from "./payload";
import { useDispatch } from "react-redux";
import { newInvoice } from "../../store/slice";



export function FormActionBar({formValidState}){
    const dispatch = useDispatch()

    function dispatchDraft(){
        if(formValidState === false){
            return null
        }
        dispatch(newInvoice(payload('draft')))
    }

    function dispatchPending(){
        if(formValidState === false){
            return null
        }
        dispatch(newInvoice(payload('pending')))
    }

    return(
        <div className="form-action-bar">
            <button onClick={close} id="discard" type='button'>Discard</button>

            <div>
                <button onClick={dispatchDraft} id='saveAsDraft' className="Discard">Save as Draft</button>
                <button onClick={dispatchPending} id="saveAndSend">Save & Send</button>
            </div>
        </div>
    )
}