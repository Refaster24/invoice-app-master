export function payload(state){
    // select all the input value start
    const streetAddress = document.getElementById('streetAddress').value
    const city = document.getElementById('city').value
    const postCode = document.getElementById('postCode').value
    const country = document.getElementById('country').value
    const clientName = document.getElementById('clientName').value
    const clientEmail = document.getElementById('clientEmail').value
    const toStreetAddress = document.getElementById('toStreetAddress').value
    const toCity = document.getElementById('toCity').value
    const toPostCode = document.getElementById('toPostCode').value
    const toCountry = document.getElementById('toCountry').value

    // start date , paymentDue value
    const currentDate = new Date()

    const day = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    

    const date = `${day}-${month}-${year}`

    function payment(){
        const paymentTermInput = document.getElementById('paymentTerms').value
        let paymentTerms; 

        if(paymentTermInput === 'Net 1 day'){
            currentDate.setDate(day + 1)
            paymentTerms = 1
        } else if(paymentTermInput === 'Net 7 days'){
            currentDate.setDate(day + 7)
            paymentTerms = 7
        } else if(paymentTermInput === 'Net 14 days'){
            currentDate.setDate(day + 14)
            paymentTerms = 14
        } else if(paymentTermInput === 'Net 30 days'){
            currentDate.setDate(day + 30)
            paymentTerms = 30
        }

        const paymentTermDay = currentDate.getDate()
        const paymentTermMonth = currentDate.getMonth()
        const paymentTermYear = currentDate.getFullYear()

        const paymentDue = `${paymentTermDay}-${paymentTermMonth}-${paymentTermYear}`
        return {paymentDue,paymentTerms}
    }
    // end date,paymentDue value
    const description = document.getElementById('description').value

    function randomId(){
        let id = ''
        const character = 'QWERTYUIOPASDFGHJKLZXCVBNM1234567890'
        for(let i=0;i<6;i++){
            id += character.charAt(Math.floor(Math.random() * character.length))
        }
        return id
    }
    
    // item list values start
    function items(){
        const itemListDiv = document.querySelectorAll('#itemListDiv')
        const itemName = document.querySelectorAll('#itemName')
        const qty = document.querySelectorAll('#qty')
        const price = document.querySelectorAll('#price')
        const total = document.querySelectorAll('#total')

        const itemArray = []

        let totalAllItems = 0

        for(let i=0;i < itemListDiv.length;i++){
            const item = {
                name:itemName[i].value,
                quantity:qty[i].value,
                price:price[i].value,
                total:total[i].value
            }
            itemArray.push(item)
            totalAllItems += +`${total[i].value}`
        }

        return {itemArray,totalAllItems}
    }
    // item list values end

    // select all the input value end

    const invoicePayload = {
        id:randomId(),
        createdAt:date,
        paymentDue:payment().paymentDue,
        description:description,
        paymentTerms:payment().paymentTerms,
        clientName:clientName,
        clientEmail:clientEmail,
        status:state,
        senderAddress:{
            street:streetAddress,
            city:city,
            postCode:postCode,
            country:country,
        },
        clientAddress:{
            street:toStreetAddress,
            city:toCity,
            postCode:toPostCode,
            country:toCountry,
        },
        items:items().itemArray,
        total:items().totalAllItems,
    }

    return invoicePayload
}