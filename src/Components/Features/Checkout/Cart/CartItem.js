import React from 'react';

const CartItem = (props) => {
    const {item} = props;

    return (
        <li className="cart-list__item">
            <div className="cart-image">
                <img src={item.image} alt="cart item"/>
            </div>
            <div className="cart-description">
                <p className="regular-text">{item.name}</p>
                <div className="cart-info">
                    <button>sm</button>
                    <span className="cart-info__price">{item.price}</span>
                </div>
            </div>
        </li>
    );
};
export {CartItem};
