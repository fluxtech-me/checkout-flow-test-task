import React, { useState } from "react"
import { Button } from "../../../Material/Button"
import { Input } from "../../../Material/Input"
import { Cheap } from "../../../Material/Cheap"
import _map from "lodash/map"
import "./CouponCode.scss"

export const CouponCode = (props) => {
    const {
        appliedCoupons,
        code,
        applyCoupon,
        deleteCoupon,
        handleResetField,
        changeCode,
    } = props

    const [isOpenApplyPart, setIsOpenApplyPart] = useState(false)

    const handleEnterCode = () => {
        setIsOpenApplyPart(true)
    }

    const handleInputApplay = (event) => {
        const { target, keyCode } = event
        keyCode === 13 && target.value && applyCoupon()
    }

    return (
        <div className="coupon-field w-100">
            {!isOpenApplyPart ? (
                <div className="coupon-field__label w-100">
                    <span className="regular-text">Promo Code? </span>
                    <Button
                        type="link"
                        onClick={handleEnterCode}
                        children={<span>Enter Code</span>}
                    />
                </div>
            ) : (
                <div className="coupon-field__form w-100">
                    <div className="field">
                        <Input
                            placeholder="Coupon Code"
                            onChange={changeCode}
                            handleResetField={handleResetField}
                            value={code}
                            onKeyDown={handleInputApplay}
                        />
                        <Button
                            disabled={!code}
                            className="apply-btn"
                            onClick={applyCoupon}
                        >
                            APPLY
                        </Button>
                    </div>
                    <div className="coupon-cheap-list">
                        {_map(appliedCoupons, (appliedCode) => (
                            <Cheap
                                className="coupon-cheap-list__item"
                                onDelete={() => {
                                    deleteCoupon(appliedCode.id)
                                }}
                                item={appliedCode.code}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
