import React from 'react';
import 'Components/Features/Checkout/OrderPricingInfo/OrderPricingInfo.scss';

const OrderPricingInfo = (props) => {
    const {} = props;

    return (
      <ul className="order-info-list">
          <li className="order-info-list__item">
              <span className="option regular-text">Subtotal</span>
              <span className="price-text regular-text">$368.00</span>
          </li>
          <li className="order-info-list__item">
              <span className="option regular-text">Shipping</span>
              <span className="price-text regular-text">calculated next step</span>
          </li>
          <li className="order-info-list__item">
              <span className="option regular-text">Discount</span>
              <span className="price-text regular-text">-$22.15</span>
          </li>
          <li className="order-info-list__item total">
              <span className="option medium-text">TOTAL</span>
              <span className="light medium-text">AUD</span>
              <b className="price-text medium-text">$222.15</b>
          </li>
      </ul>
    );
};
export {OrderPricingInfo};
