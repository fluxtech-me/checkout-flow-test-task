import React, { useState, useEffect } from "react"
import _findIndex from "lodash/findIndex"
import db from "../../../../services/db"

export const Order = (props) => {
    const [products, setProducts] = useState([])
    const [appliedCoupons, setAppliedCoupons] = useState([])
    const [code, setCode] = useState("")
    const [shippingData, setShippingData] = useState([])

    useEffect(() => {
        getData()
    })

    const getData = () => {
        const products = db.getProducts()
        const appliedCoupons = db.getApplaiedCoupons()
        const shippingData = db.getShippingData()
        setProducts(products)
        setAppliedCoupons(appliedCoupons)
        setShippingData(shippingData)
    }

    const onProductCountChange = (newCount, productId) => {
        if (newCount !== 0) {
            db.updateProductCount(productId, newCount)
        } else {
            db.deleteProduct(productId)
        }
        getData()
    }

    const handleResetField = () => {
        setCode("")
    }

    const applyCoupon = () => {
        const isAppliedCode = _findIndex(
            appliedCoupons,
            (coupon) => coupon.code === code
        )
        if (isAppliedCode === -1) {
            db.addCoupon(code)
            handleResetField()
        }
        getData()
    }

    const deleteCoupon = (id) => {
        db.deleteCoupon(id)
        getData()
    }

    const changeCode = (event) => {
        setCode(event.target.value)
    }

    return props.render({
        shippingData,
        onProductCountChange,
        handleResetField,
        applyCoupon,
        deleteCoupon,
        changeCode,
        appliedCoupons,
        code,
        products,
    })
}
