import React, { useEffect, useRef, useState } from "react"
import { CheckoutHeader } from "../../Common/Header"
import db from "../../../services/db"
import _find from "lodash/find"
import "./Checkout.scss"
import { OrderLayout2 } from "./Order/OrderLayout2"
import { CheckoutForm } from "./CheckoutForm/CheckoutForm"
import _identity from "lodash/identity"

const Checkout = (props) => {
    const { onCheckoutSuccess = _identity, onCheckoutFail = _identity } = props

    const [shippingData, setShippingData] = useState([])
    const formValues = useRef({})

    const getData = () => {
        const shippingData = db.getShippingData()
        setShippingData(shippingData)
    }

    const onShippingChange = (event) => {
        db.selectShippingData(event.target.value)
        getData()
    }

    const onFormChange = (values) => {
        formValues.current = values
    }

    const onSubmit = () => {
        try {
            const newCheckoutData = db.updatedCheckoutData(formValues.current)
            const products = db.getProducts()
            const shippingData = db.getShippingData()
            const checkoutInfo = {
                checkoutData: newCheckoutData,
                products,
                shippingData,
            }
            onCheckoutSuccess(checkoutInfo)
        } catch (error) {
            onCheckoutFail(error)
        }
    }

    const initialValues = {
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        country: "",
        address: "",
    }

    useEffect(() => {
        getData()
    })

    return (
        <section className="checkout-page">
            <CheckoutHeader />
            <div className="container-fluid">
                <div className="row">
                    <div className="row-col-2">
                        <CheckoutForm
                            initialValues={initialValues}
                            onChange={onFormChange}
                            onShippingChange={onShippingChange}
                            shippingData={shippingData}
                        />
                    </div>
                    <div className="row-col-1">
                        <OrderLayout2 onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Checkout }
