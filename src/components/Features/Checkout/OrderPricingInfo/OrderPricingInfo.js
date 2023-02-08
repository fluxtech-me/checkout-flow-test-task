import React from 'react';
import _reduce from 'lodash/reduce'
import _forEach from 'lodash/forEach'
import _isUndefined from 'lodash/isUndefined'
import './OrderPricingInfo.scss';

const OrderPricingInfo = (props) => {
    const { productsData, appliedCoupons, shipping } = props;
    let discount = 0
    let subtotal = 0
    _forEach(appliedCoupons, coupon => discount+=coupon.sale)
    _forEach(productsData, product => subtotal+=product.totalPrice)

    const isShippingUndefined = _isUndefined(shipping)
    const shippingText = isShippingUndefined ? 'calculated next step' : `$${shipping}`
    const shippingValu = isShippingUndefined ? 0 : shipping
    
    const total = subtotal + shippingValu - discount

    return (
      <ul className="order-info-list">
          <li className="order-info-list__item">
              <span className="option regular-text">Subtotal</span>
              <span className="price-text regular-text">${subtotal}</span>
          </li>
          <li className="order-info-list__item">
              <span className="option regular-text">Shipping</span>
              <span className="price-text regular-text">{shippingText}</span>
          </li>
          <li className="order-info-list__item">
              <span className="option regular-text">Discount</span>
              <span className="price-text regular-text">-${discount}</span>
          </li>
          <li className="order-info-list__item total">
              <span className="option medium-text">TOTAL</span>
              <span className="light medium-text">AUD</span>
              <b className="price-text medium-text">${total}</b>
          </li>
      </ul>
    );
};
export {OrderPricingInfo};
