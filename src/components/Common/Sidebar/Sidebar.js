import React from 'react';
import {CartList} from '../../Features/Checkout/Cart/CartIList';
import {OrderPricingInfo} from '../../Features/Checkout/OrderPricingInfo/OrderPricingInfo';
import {CouponBox} from '../../Features/Checkout/CouponBox';
import {Button} from '../../Material/Button';
import './Sidebar.scss';

const Sidebar = () => {
    const isActive = true;

    return (
        <>
            <div className="navbar navbar-fixed">
                <div className="navbar__heading">
                    <Button
                        type="icon"
                        className="close-btn burger"
                    >
                        <div className="burger__inner">
                            <span className={`burger__top ${isActive ? 'active' : ''}`} />
                            <span className={`burger__middle ${isActive ? 'active' : ''}`} />
                            <span className={`burger__bottom ${isActive ? 'active' : ''}`} />
                        </div>
                    </Button>
                    <h2 className="heading-3 text-center">Your Cart</h2>
                </div>
                <div className="navbar__content">
                    <CartList />
                    <CouponBox />
                    <OrderPricingInfo />

                </div>
            </div>
            <div className="navbar-overlay"/>
        </>
    )
};

export {Sidebar};