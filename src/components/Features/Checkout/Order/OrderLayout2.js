import React from "react"
import { Button } from "../../../Material/Button"
import { CartList } from "../Cart/CartIList"
import { CouponBox } from "../CouponBox"
import { CouponCode } from "../CouponCode"
import { Order } from "../Order"
import { OrderPricingInfo } from "../OrderPricingInfo/OrderPricingInfo"
import _find from 'lodash/find'

export const OrderLayout2 = (props) => {
    const { onSubmit } = props

    return <Order render={ orderService => {
        const {
            products,
            onProductCountChange,
            appliedCoupons,
            handleResetField,
            applyCoupon, 
            deleteCoupon, 
            changeCode, 
            code,
            shippingData
        } = orderService

        const shippingPrice = _find(shippingData, shipping => shipping.selected)?.price

        return  (
            <div className="checkout-list">
                <div className='bordered'>
                    <CartList data={products} onCountChange={onProductCountChange}/>
                    <CouponCode
                        appliedCoupons={appliedCoupons}
                        handleResetField={handleResetField}
                        appliedCoupon={applyCoupon}
                        deleteCoupon={deleteCoupon} 
                        changeCode={changeCode}
                        code={code}
                    />
                    <OrderPricingInfo shipping={shippingPrice || 0} appliedCoupons={appliedCoupons} productsData={products} />
                </div>

                <Button
                    className="w-100"
                    type="primary"
                    onClick={onSubmit}
                    children={<span>Pay now</span>}
                />
                <CouponBox />
            </div>
        )
    }}/>
}
