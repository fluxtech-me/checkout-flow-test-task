import React from "react"
import { Button } from "../../../Material/Button"
import { CartList } from "../Cart/CartIList"
import { CouponBox } from "../CouponBox"
import { CouponCode } from "../CouponCode"
import { Order } from "../Order"
import { OrderPricingInfo } from "../OrderPricingInfo/OrderPricingInfo"
import { navigate } from "gatsby"
import _isEmpty from "lodash/isEmpty"
import _forEach from "lodash/forEach"

export const OrderLayout1 = () => {
    return (
        <Order
            render={(orderService) => {
                const {
                    products,
                    onProductCountChange,
                    appliedCoupons,
                    handleResetField,
                    applyCoupon,
                    deleteCoupon,
                    changeCode,
                    code,
                    canCheckout,
                    canApplayCoupon,
                } = orderService

                const handleCheckoutNow = () => {
                    navigate("checkout")
                }

                return (
                    <div className="navbar__content">
                        <CartList
                            data={products}
                            onCountChange={onProductCountChange}
                        />
                        {canCheckout && (
                            <CouponCode
                                appliedCoupons={appliedCoupons}
                                handleResetField={handleResetField}
                                applyCoupon={applyCoupon}
                                deleteCoupon={deleteCoupon}
                                changeCode={changeCode}
                                code={code}
                                canApplayCoupon={canApplayCoupon}
                            />
                        )}
                        <CouponBox />
                        <OrderPricingInfo
                            appliedCoupons={appliedCoupons}
                            productsData={products}
                        />
                        <div className="sticky-bottom w-100">
                            <Button
                                className="w-100"
                                type="primary"
                                children="Checkout now"
                                onClick={handleCheckoutNow}
                                disabled={!canCheckout}
                            />
                        </div>
                    </div>
                )
            }}
        />
    )
}
