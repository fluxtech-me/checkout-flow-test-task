import React, {useMemo, useState} from 'react'
import {ShippingRadioGroup} from '../ShippingRadioGroup';
import {PaymentDetails} from '../PaymentDetails';
import {MobilePhoneField} from '../../../Material/MobilePhoneField';
import { Formik, Field, Form } from 'formik';
import { InputField } from "../../../Material/Formik/InputField";
import { SelectField } from "../../../Material/Formik/SelectField/SelectField";
import {Textarea} from '../../../Material/Textarea';
import {Button} from '../../../Material/Button';
import { Modal } from '../../../Material/Modal';
import _find from 'lodash/find'

export const CheckoutForm = (props) => {

    const {initialValues, onChange, onShippingChange, shippingData} = props
    const countriesList = [
        { value: 'Italy', label: 'Italy' },
        { value: 'France', label: 'France' },
        { value: 'USA', label: 'USA' },
        { value: 'Germany', label: 'Germany' },
    ]
    const selectedShipping = useMemo(() => _find(shippingData, shipping => shipping.selected === true), [shippingData])

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
        <Formik
            initialValues={initialValues}
        >
        {({values, setFieldValue}) => {
            
            onChange(values)

            return <Form action="" className="checkout-form">
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
                    <div className="form-mb d-md-flex xs-row">
                        <Field
                            component = {MobilePhoneField}
                            name = "phone"
                            label="mobile phone"
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
        }}
        </Formik>
        <Modal
            open={showModal}
            onClose={handleCloseModal}
        >
            <div>
                <h2>Modal content</h2>
            </div>
        </Modal>
        </>
    )
}
