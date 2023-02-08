import React, { useEffect, useRef, useState } from "react"
import { CheckoutHeader } from "../../Common/Header"
import db from "../../../services/db"
import { OrderLayout2 } from "./Order/OrderLayout2"
import { CheckoutForm } from "./CheckoutForm/CheckoutForm"
import _identity from "lodash/identity"
import _isEmpty from "lodash/isEmpty"
import sha from '../../../assets/images/sha.png';
import check from '../../../assets/images/check.png';
import "./Checkout.scss"

const Checkout = (props) => {
    const { onCheckoutSuccess = _identity, onCheckoutFail = _identity } = props

    const [shippingData, setShippingData] = useState([])
    const [products, setProducts] = useState([])
    const formValues = useRef({})

    const getData = () => {
        const shippingData = db.getShippingData()
        const products = db.getProducts()
        setProducts(products)
        setShippingData(shippingData)
    }

    const onShippingChange = (event) => {
        db.selectShippingData(event.target.value)
        getData()
    }

    const onFormChange = (values) => {
        formValues.current = values
    }

    useEffect(() => {
        getData()
    })

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
                            formDisabled={_isEmpty(products)}
                        />
                    </div>
                    <div className="row-col-1">
                        <h2 className="heading-2">Your Order</h2>
                        <OrderLayout2 onSubmit={onSubmit} />
                    </div>
                </div>
            </div>
            <footer className="footer">
                <div className="container-fluid">
                    <p className="footer__text">Secured & Encrypted Checkout</p>
                    <ul className="footer__list">
                        <li className="footer__list__item"><img width="65" height="69" src={check} alt="Sha image"/></li>
                        <li className="footer__list__item"><img width="98" height="73" src={sha} alt="Sha image"/></li>
                    </ul>
                </div>
            </footer>
        </section>
    )
}

export { Checkout }
