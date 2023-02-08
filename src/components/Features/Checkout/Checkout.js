import React, {useEffect, useState} from "react";
import {CheckoutHeader} from '../../Common/Header';
import {ShippingRadioGroup} from '../ShippingRadioGroup';
import {PaymentDetails} from '../../Features/Checkout/PaymentDetails';
import {MobilePhoneField} from '../../Material/MobilePhoneField';
import { CheckoutOrder } from "./CheckoutOrder";
import { Formik, Field, Form } from 'formik';
import { InputField } from "../../Material/Formik/InputField";
import { SelectField } from "../../Material/Formik/SelectField/SelectField";
import db from "../../../services/db";
import _find from 'lodash/find'
import {Textarea} from '../../Material/Textarea';
import {Button} from '../../Material/Button';
import {Modal} from '../../Material/Modal';
import './Checkout.scss'

const Checkout = (props) => {

    const {onCheckoutSuccess, onCheckoutFail} = props

    const [shippingData, setShippingData] = useState([]);
    const [countriesList, setCountryList] = useState([]);
    // const [deliveryAddressContent, setDeliveryAddressContent] = useState("Unit 56, 20 Campbell Parade, Bondi Beach, Whatever unit block, NSW, 2026 goes over 2 lines if it’s long address");
    const [showModal, setShowModal] = useState(false);

    const getData = () => {
        const countriesList = db.getCountriesList()
        const shippingData = db.getShippingData()
        setShippingData(shippingData)
        setCountryList(countriesList)
    }

    const onShippingChange = (event) => {
        db.selectShippingData(event.target.value);
        getData()
    };

    const onSubmit = (values) => {
        try {
            const newCheckoutData = db.updatedCheckoutData(values)
            const products = db.getProducts()
            const shippingData = db.getShippingData()
            const checkoutInfo = {checkoutData: newCheckoutData, products, shippingData}
            onCheckoutSuccess(checkoutInfo)
        } catch (error) {
            onCheckoutFail(error)
        }
    }

    const renderModalContent = () => {
        return (
            <div>
                <h2>Modal content</h2>
            </div>
        );
    };

    const initialValues = { 
        email: '',
        phone: '', 
        firstName: '', 
        lastName: '', 
        country: '',
        address: ''
    }

    useEffect(() => {
        getData()
    })

    const selectedShipping = _find(shippingData, shipping => shipping.selected === true)

    const handleOpenModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section className="checkout-page">
            <CheckoutHeader />
            <div className="container-fluid">
                <div className="row">
                    <div className="row-col-2">
                       <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                       >
                        {({values, setFieldValue}) => ( 
                            <Form action="" className="checkout-form">
                                <div className="checkout-form__fieldset">
                                    <h2 className="heading-2">Your Details</h2>
                                    <Field 
                                        component = {InputField}
                                        variant="underlined"
                                        label="Your email"
                                        value={values.email}
                                        onChange={(value) => setFieldValue('email', value)}
                                        className="form-mb"
                                        name='email'
                                    />
                                    <div className="form-mb d-md-flex">
                                        <Field
                                            component = {MobilePhoneField}
                                            name = "phone"
                                            className="flex-item"
                                            onChange={(value) => setFieldValue('phone', value)}
                                            value={values.phone}
                                        />
                                        <p className="regular-text flex-item">Your phone number is required for delivery & shipping updates.</p>
                                    </div>
                                    <div className="form-mb d-md-flex">
                                        <Field 
                                            component = {InputField}
                                            variant="underlined"
                                            label="First Name"
                                            value={values.email}
                                            onChange={(value) => setFieldValue('firstName', value)}
                                            className="form-mb flex-item"
                                            name='firstName'
                                        />
                                        <Field 
                                            component = {InputField}
                                            variant="underlined"
                                            label="Last Name"
                                            value={values.email}
                                            onChange={(value) => setFieldValue('lastName', value)}
                                            className="form-mb flex-item"
                                            name='lastName'
                                        />
                                    </div>
                                </div>
                                <div className="checkout-form__fieldset">
                                    <h2 className="heading-2">Delivery Details</h2>
                                    <div className="form-mb d-md-flex">
                                        <Field 
                                            component={SelectField}
                                            className="w-100 flex-item"
                                            label="country"
                                            name="country"
                                            onChange={(value) => setFieldValue('country', value.value)}
                                            options={countriesList}
                                        />
                                    </div>
                                    <div className="form-mb d-md-flex action-wrapper">
                                        <Field 
                                            component={Textarea}
                                            onChange={(value) => setFieldValue('address', value.value)}
                                            variant="underlined"
                                            label="delivery address"
                                            value={values.address}
                                            name="address"
                                        />
                                        <Button
                                            type="link"
                                            className="update-btn"
                                            onClick={() => setFieldValue('address', "")}
                                            children={<span>change</span>}
                                        />
                                    </div>
                                </div>
                                <div className="checkout-form__fieldset">
                                    <ShippingRadioGroup
                                        onChange={onShippingChange}
                                        options={shippingData}
                                        defaultValue={selectedShipping?.value}
                                    />
                                    <Button
                                        type="link"
                                        className="update-btn"
                                        onClick={handleOpenModal}
                                        children={<span>about shipping</span>}
                                    />
                                </div>
                                <div className="checkout-form__fieldset">
                                    <div className="checkout-form__fieldset">
                                        <h2 className="heading-2">Payment Details</h2>
                                        <PaymentDetails />
                                    </div>
                                </div>
                            </Form>
                        )}
                       </Formik>
                    </div>
                    <div className="row-col-1">
                        <CheckoutOrder />
                    </div>
                </div>
            </div>
            <Modal
                open={showModal}
                onClose={handleCloseModal}
                children={renderModalContent()}
            />
        </section>
    );
};

export {Checkout};
