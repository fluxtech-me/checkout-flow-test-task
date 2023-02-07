import React, { useCallback, useEffect, useState } from 'react';
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
    const [appliedCoupons, setAppliedCoupons] = useState([]);
    const [code, setCode] = useState("");
    
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const products = db.getProducts()
        const appliedCoupons = db.getApplayedCoupons();
        setProducts(products);
        setAppliedCoupons(appliedCoupons);
    };

    const onProductCountChange = (newCount, productId) => {
            if(newCount !== 0) {
                db.updateProductCount(productId, newCount);
            } else {
                db.deleteProduct(productId);
            }
        getData();
    };

    const applyCoupon = () => {
        const isAppliedCode = _findIndex(appliedCoupons, coupon => coupon.code === code)
        if(isAppliedCode === -1) {
            db.addCoupon(code);
            setCode("");
        }
        getData();
    };

    const deleteCoupon = (id) => {
        db.deleteCoupon(id);
        getData();
    };

    const changeCode = (event) => {
        setCode(event.target.value);
    };

    const handleResetField = () => {
        setCode('');
    };

    return (
        <>
            <div className="navbar navbar-fixed">
                <div className="navbar__heading sticky-top">
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
                        appliedCoupons={appliedCoupons}
                        handleResetField={handleResetField}
                        appliedCoupon={applyCoupon}
                        deleteCoupon={deleteCoupon} 
                        changeCode={changeCode}
                        code={code}
                    />
                    <CouponBox />
                    <OrderPricingInfo shipping={30} appliedCoupons={appliedCoupons} productsData={products} />
                    <div className="sticky-bottom w-100">
                        <Button
                            className="w-100"
                            type="primary"
                            children="Checkout now"
                        />
                    </div>
                </div>
            </div>
            <div className="navbar-overlay"/>
        </>
    )
};

export {Sidebar};
