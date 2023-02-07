import React, {useState} from "react";
import {Button} from "../../../Material/Button";
import {Input} from "../../../Material/Input";
import {Cheap} from "../../../Material/Cheap";
import _map from 'lodash/map';
import './CouponCode.scss';

export const CouponCode = (props) => {
    const {
        appliedCoupons,
        code,
        appliedCoupon,
        deleteCoupon,
        handleResetField,
        changeCode
    } = props;

    const [isOpenApplyPart, setIsOpenApplyPart] = useState(false);

    const handleEnterCode = () => {
        setIsOpenApplyPart(true);
    };

    return (
        <div className="coupon-field w-100">
            {
                !isOpenApplyPart ? (
                    <div className="coupon-field__label w-100">
                        <span className="regular-text">Promo Code? </span>
                        <Button
                            type="link"
                            onClick={handleEnterCode}
                        >
                            <span>Enter Code</span>
                        </Button>
                    </div>
                ) : (
                    <div className="coupon-field__form w-100">
                        <div className="field">
                            <Input
                                placeholder="Coupon Code"
                                onChange={changeCode}
                                handleResetField={handleResetField}
                                value={code}
                            />
                            <Button
                                disabled={!code}
                                className="apply-btn"
                                onClick={appliedCoupon}
                            >
                                APPLY
                            </Button>
                        </div>
                        <div className="coupon-cheap-list">
                            {_map(appliedCoupons, appliedCode =>
                                <Cheap
                                    className="coupon-cheap-list__item"
                                    onDelete={() => {
                                        deleteCoupon(appliedCode.id)
                                    }}
                                    item={appliedCode.code}
                                />
                            )}
                        </div>
                    </div>
                )

            }
        </div>
    );
};
