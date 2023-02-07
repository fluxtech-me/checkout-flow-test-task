import React from 'react';
import _reduce from 'lodash/reduce'
import _forEach from 'lodash/forEach'
import './OrderPricingInfo.scss';

const OrderPricingInfo = (props) => {
    const { productsData, applayedCoupons, shipping } = props;
    let discount = 0
    let subtotal = 0
    _forEach(applayedCoupons, coupon => discount+=coupon.sale)
    _forEach(productsData, product => subtotal+=product.totalPrice)

    const total = subtotal + shipping - discount

    return (
      <ul className="order-info-list">
          <li className="order-info-list__item">
              <span className="option regular-text">Subtotal</span>
              <span className="price-text regular-text">${subtotal}</span>
          </li>
          <li className="order-info-list__item">
              <span className="option regular-text">Shipping</span>
              <span className="price-text regular-text">${shipping}</span>
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
