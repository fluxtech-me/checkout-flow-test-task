import React, {useState} from "react";
import {CheckoutHeader} from '../../Common/Header';
import {RadioGroup} from '../../Features/RadioGroup';
import {OrderSidebar} from '../../Features/Checkout/OrderSidebar';
import {PaymentDetails} from '../../Features/Checkout/PaymentDetails';
import {MobilePhoneField} from '../../Features/Checkout/MobilePhoneField';
import {Input} from '../../Material/Input';
import {Select} from '../../Material/Select';

const Checkout = () => {
    const orderCheckoutData = [
        {
            label: 'test label', value: 'test',
        },
        {
            label: 'test label 2', value: 'test 2',
        },
    ];

    const [checkedValue, setCheckedValue] = useState('');
    const onRadioChange = (e) => {
        setCheckedValue(e.target.value);
    };

    return (
        <section className="checkout-page">
            <CheckoutHeader />
            <div className="container-fluid">
                <div className="row">
                    <div className="row-col-2">
                        <form action="" className="checkout-form">
                            <div className="checkout-form__fieldset">
                                <h2 className="heading-2">Your Details</h2>
                                <Input
                                    variant="underlined"
                                    label="Your email"
                                    className="form-mb"
                                />
                                <div className="form-mb d-md-flex">
                                    <MobilePhoneField
                                        className="flex-item"
                                    />
                                    <p className="regular-text flex-item">Your phone number is required for delivery & shipping updates.</p>
                                </div>
                                <div className="form-mb d-md-flex">
                                    <Input
                                        variant="underlined"
                                        label="Your email"
                                        className="form-mb flex-item"
                                    />
                                    <Input
                                        variant="underlined"
                                        label="Your email"
                                        className="form-mb flex-item"
                                    />
                                </div>
                            </div>
                            <div className="checkout-form__fieldset">
                                <h2 className="heading-2">Delivery Details</h2>
                                <div className="form-mb d-md-flex">
                                    <Select
                                        className="w-100 flex-item"
                                        label="country"
                                    />
                                </div>
                            </div>
                            <div className="checkout-form__fieldset">
                                <h2 className="heading-2">Your Details</h2>
                                <RadioGroup
                                    onChange={onRadioChange}
                                    options={orderCheckoutData}
                                    defaultValue={checkedValue}
                                />
                            </div>
                            <div className="checkout-form__fieldset">
                                <h2 className="heading-2">Payment Details</h2>
                                <PaymentDetails />
                            </div>
                        </form>
                    </div>
                    <div className="row-col-1">
                        <h2 className="heading-2">Your Order</h2>
                        <OrderSidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};

export {Checkout};
