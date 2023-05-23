import { useState } from 'react'
import { FormActionBar } from './form-action-bar'
import { InvoiceDate } from './invoice-date'
import { ItemList } from './item-list'

export function From(){
    const [formValidState,setFormValidState] = useState(true)

    function submit(e){
        e.preventDefault()

        const input = document.querySelectorAll('input')
        const span = document.querySelectorAll('label+span')

        for(let i=0;i<input.length;i++){
            if(input[i].value.length === 0){
                span[i].innerHTML = 'this can`ot be empty'
            } else{
                span[i].innerHTML = ''
            }
        }

        // to check all value of the form

        for(let i=0;i<input.length;i++){
            if(input[i].value.length === 0){
                return setFormValidState(false)
            }
            setFormValidState(true)
        }

    }

    return(
<form onSubmit={submit} action="">

    <h3>Bill From</h3>

    <div>
        <div>
            <label htmlFor="streetAddress">Street Address</label>
            <span></span>
        </div>
        <input type="text" name="streetAddress" id="streetAddress"   />
    </div>

    <div className="treble-input-div">
        <div>
            <div>
                <label htmlFor="city">City</label>
                <span></span>
            </div>
            <input type="text" name="city" id="city"   />
        </div>

        <div>
            <div>
                <label htmlFor="postCode">Post Code</label>
                <span></span>
            </div>
            <input type="text" name="postCode" id="postCode"   />
        </div>

        <div>
            <div>
                <label htmlFor="country">Country</label>
                <span></span>
            </div>
            <input type="text" name="country" id="country"   />
        </div>

    </div>

    <h3>Bill To</h3>

    <div>
        <div>
            <label htmlFor="clientName">Client's Name</label>
            <span></span>
        </div>
        <input type="text" name="clientName" id="clientName"   />
    </div>

    <div>
        <div>
            <label htmlFor="clientEmail">Client's Email</label>
            <span></span>
        </div>
        <input type="text" name="clientEmail" id="clientEmail"   />
    </div>

    <div>
        <div>
            <label htmlFor="toStreetAddress">Street Address</label>
            <span></span>
        </div>
        <input type="text" name="toStreetAddress" id="toStreetAddress"   />
    </div>

    <div className="treble-input-div">
        <div>
            <div>
                <label htmlFor="toCity">City</label>
                <span></span>
            </div>
            <input type="text" name="toCity" id="toCity"   />
        </div>

        <div>
            <div>
                <label htmlFor="toPostCode">Post Code</label>
                <span></span>
            </div>
            <input type="text" name="toPostCode" id="toPostCode"   />
        </div>

        <div>
            <div>
                <label htmlFor="toCountry">Country</label>
                <span></span>
            </div>
            <input type="text" name="toCountry" id="toCountry"   />
        </div>
    </div>

    <InvoiceDate/>


    <div>
        <div>
            <label htmlFor="description">Project Description</label>
            <span></span>
        </div>
        <input type="text" name="description" id="description"   />
    </div>

    <ItemList/>

    <FormActionBar formValidState={formValidState}/>

</form>
    )

}