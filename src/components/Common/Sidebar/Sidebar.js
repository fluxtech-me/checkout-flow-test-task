import React, { useEffect, useState } from 'react';
import {CartList} from '../../Features/Checkout/Cart/CartIList';
import {OrderPricingInfo} from '../../Features/Checkout/OrderPricingInfo/OrderPricingInfo';
import {CouponBox} from '../../Features/Checkout/CouponBox';
import {Button} from '../../Material/Button';
import db from '../../../services/db.js';
import _findIndex from 'lodash/findIndex';
import { CouponCode } from '../../Features/Checkout/CouponCode';
import './Sidebar.scss';

const Sidebar = () => {
    const isActive = true;
    const [products, setProducts] = useState([]);
    const [applayedCoupons, setApplayedCoupons] = useState([]);
    const [code, setCode] = useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const products = db.getProducts()
        const applayedCoupons = db.getApplayedCoupons()
        setProducts(products)
        setApplayedCoupons(applayedCoupons)
    };

    const resetCodeInput = () => {
        setCode("");
    };

    const onProductCountChange = (newCount, productId) => {
        if(newCount !== 0) {
            db.updateProductCount(productId, newCount)
        } else {
            db.deleteProduct(productId)
        }
        getData();
    };

    const applayCoupon = () => {
        const isApplayedCode = _findIndex(applayedCoupons, coupon => coupon.code === code)
        if(isApplayedCode === -1) {
            db.addCoupon(code)
            resetCodeInput()
        }
        getData();
    };

    const deleteCoupon = (id) => {
        db.deleteCoupon(id)
        getData()
    };

    const changeCode = (event) => {
        setCode(event.target.value)
    };

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
                    <h2 className="heading-2 text-center">Your Cart</h2>
                </div>
                <div className="navbar__content">
                    <CartList data={products} onCountChange={onProductCountChange}/>
                    <CouponCode
                        applayedCoupons={applayedCoupons}
                        applayCoupon={applayCoupon}
                        deleteCoupon={deleteCoupon}
                        changeCode={changeCode}
                        code={code}
                        resetCode={resetCodeInput}
                    />
                    <CouponBox />
                    <OrderPricingInfo shipping={30} applayedCoupons={applayedCoupons} productsData={products} />
                    <Button
                        type="primary"
                        children="Checkout now"
                    />
                </div>
            </div>
            <div className="navbar-overlay"/>
        </>
    );
};

export {Sidebar};
