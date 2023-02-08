import React from 'react';
import {CartList} from '../../Features/Checkout/Cart/CartIList';
import {OrderPricingInfo} from '../../Features/Checkout/OrderPricingInfo/OrderPricingInfo';
import {CouponBox} from '../../Features/Checkout/CouponBox';
import {Button} from '../../Material/Button';
import './Checkout.scss';

const OrderSidebar = () => {

    return (
        <>
            <div className="checkout-list">
                <div className='bordered'>
                    <CartList />
                    <OrderPricingInfo />
                </div>

                <Button
                    type="primary"
                    children={<span>Pay now</span>}
                />
                <CouponBox />
            </div>
        </>
    );
};

export {OrderSidebar};
