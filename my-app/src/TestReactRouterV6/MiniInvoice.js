import React from 'react'
import { useParams } from 'react-router'


export default function MiniInvoice() {
    let userInvoice = [
        { name: 'abc', id: 1 },
        { name: 'iphone', id: 2 },
        { name: 'kimochi', id: 3 },
    ]
    // const params = useParams<{invoiceID: String}>()
    const params = useParams()
    // params.invoiceID
    console.log(params)
    const invoice = userInvoice.find(user => user.id.toString() === params.invoiceID)
    console.log(invoice)

    return (
        <div>
            <h2>
                {invoice? `Invoice #${invoice?.id} for ${invoice?.name}`:'No invoice FOUND'}
                
            </h2>
        </div>
    )
}
