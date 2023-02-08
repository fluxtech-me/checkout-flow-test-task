import React from "react"

import { Checkout } from "../components/Features/Checkout"
import { AppLayout } from "../components/Common/AppLayout"

const CheckoutPage = () => {
    return (
        <AppLayout>
            <Checkout />
        </AppLayout>
    )
}

export const Head = () => <title>Checkout Page</title>

export default CheckoutPage
