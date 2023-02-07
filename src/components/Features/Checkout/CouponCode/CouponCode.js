import React, { useState, useId } from "react"
import { Button } from "../../../Material/Button"
import { Input } from "../../../Material/Input"
import { Cheap } from "../../../Material/Cheap"
import _map from 'lodash/map'
import _filter from 'lodash/filter'

export const CouponCode = (props) => {
    const {
        applayedCoupons, 
        code, 
        applayCoupon, 
        deleteCoupon, 
        changeCode
    } = props

    const [isOpenApplayPart, setIsOpenApplayPart] = useState(false)

    const handleEnterCode = () => {
        setIsOpenApplayPart(true)
    }

    return  (
        !isOpenApplayPart ? 
        <div>
            <span>Promo Code</span>
            <Button type="link" onClick={handleEnterCode}>Enter Code</Button>
        </div> : 
        <div>
            <Input onChange={changeCode} value={code} />
            <Button disabled={!code} onClick={applayCoupon}>APPLY</Button>
            {_map(applayedCoupons, aplayedCode => 
                <Cheap 
                    onDelete={() => {
                        deleteCoupon(aplayedCode.id)
                    }}
                    item={aplayedCode.code}
                />
            )}
        </div> 
    )
}