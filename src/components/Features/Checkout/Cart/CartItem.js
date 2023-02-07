import React from 'react';
import {Counter} from '../../Home/Counter';

export const CartItem = (props) => {
    const {item, onCountChange} = props;
    return (
        <li className="cart-list__item">
            <div className="cart-image">
                <img src={item.image} alt="cart item"/>
            </div>
            <div className="cart-description">
                <p className="regular-text">{item.name}</p>
                <div className="cart-info">
                    <Counter initialCount={item.count} onCountChange={onCountChange} />
                    <span className="cart-info__price">{item.totalPrice}</span>
                </div>
            </div>
        </li>
    );
};
