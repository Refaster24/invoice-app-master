import { useEffect, useState } from "react";
import deleteIcon from '../../images/icon-delete.svg'

export function ItemList(){
    const [state,setState] = useState([])

    const newItemDiv = (
    <div id='itemListDiv'>

<div>
    <div>
        <label htmlFor="itemName">Item Name</label>
        <span></span>
    </div>
    <input type="text" name="itemName" id="itemName"/>
</div>

<div className="treble-new-item-input-div">

    <div>
        <div>
            <label htmlFor="qty">Qty.</label>
            <span></span>
        </div>
        <input onChange={totalHandle} defaultValue={1} type="text" name="qty" id="qty"/>
    </div>

    <div>
        <div>
            <label htmlFor="price">Price</label>
            <span></span>
        </div>
        <input onChange={totalHandle} defaultValue={0} type="text" name="price" id="price"/>
    </div>

    <div>
        <div>
            <label htmlFor="total">Total</label>
            <span></span>
        </div>
        <input defaultValue={0} type="text" name="total" id="total"/>
    </div>

    <button type="button">
        <img src={deleteIcon} alt="delete icon" />
    </button>

</div>

    </div>
    )

    function totalHandle(){
        const qty = document.querySelectorAll('#qty')
        const price = document.querySelectorAll('#price')
        const total = document.querySelectorAll('#total')

        for(let i=0;i<total.length;i++){
            total[i].value = qty[i].value * price[i].value
        }
    }

    useEffect(()=>{
        // delete item
        const deleteButton = document.querySelectorAll('.treble-new-item-input-div button')
        const itemListDiv = document.querySelectorAll('#itemListDiv')

        for(let i=0;i<state.length;i++){
            deleteButton[i].addEventListener('click',(e)=>{
            itemListDiv[i].style.display = 'none'
            })
        }

    },[state])

    function addItem(){
        setState([...state,newItemDiv])
    }

    return(
        <div className="item-list">
            <h3>Item List</h3>

            {state.map((element,id)=>{
                return (
                    <div key={id}>
                        {element}
                    </div>
                )
            })}
            <button onClick={addItem} className="add-item" type='button'>Add New Item</button>
        </div>
    )
}