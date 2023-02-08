import React, { useCallback, useEffect, useState } from 'react';
import {CartList} from '../../Features/Checkout/Cart/CartIList';
import {OrderPricingInfo} from '../../Features/Checkout/OrderPricingInfo/OrderPricingInfo';
import {CouponBox} from '../../Features/Checkout/CouponBox';
import {Button} from '../../Material/Button';
import db from '../../../services/db.js';
import _findIndex from 'lodash/findIndex';
import { CouponCode } from '../../Features/Checkout/CouponCode';
import './Sidebar.scss';
import cx from 'classnames';

const Sidebar = (props) => {
    const {
        showSidebar,
        setOpenSidebar,
    } = props;
    const [products, setProducts] = useState([]);
    const [appliedCoupons, setAppliedCoupons] = useState([]);
    const [code, setCode] = useState("");

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        const products = db.getProducts()
        const appliedCoupons = db.getApplayedCoupons()
        setProducts(products)
        setAppliedCoupons(appliedCoupons)
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

    const handleResetField = () => {
        setCode('');
    };

    const applyCoupon = () => {
        const isAppliedCode = _findIndex(appliedCoupons, coupon => coupon.code === code)
        if(isAppliedCode === -1) {
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
            <div className={cx(
                'navbar navbar-fixed',
                {
                    'navbar--active' : showSidebar
                })
            }
            >
                <div className="navbar__heading sticky-top">
                    <Button
                        onClick={() => setOpenSidebar(false)}
                        type="icon"
                        className="close-btn burger"
                    >
                        <div className="burger__inner">
                            <span className={`burger__top ${showSidebar ? 'active' : ''}`} />
                            <span className={`burger__middle ${showSidebar ? 'active' : ''}`} />
                            <span className={`burger__bottom ${showSidebar ? 'active' : ''}`} />
                        </div>
                    </Button>
                    <h2 className="heading-3 text-center">Your Cart</h2>
                </div>
                <div className="navbar__content">
                    <CartList
                        data={products}
                        showDeleteAction={false}
                        onCountChange={onProductCountChange}
                    />
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
                            children={<span>Checkout now</span>}
                        />
                    </div>
                </div>
            </div>
            {showSidebar && <div onClick={() => setOpenSidebar(false)} className="navbar-overlay"/>}
        </>
    );
};

export {Sidebar};
