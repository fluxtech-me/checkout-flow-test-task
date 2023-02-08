import React from 'react';
import {Counter} from '../../Counter';
import {Button} from '../../../Material/Button';

export const CartItem = (props) => {
    const {
        item,
        onCountChange,
        showDeleteAction
    } = props;
    return (
        <li className="cart-list__item">
            <div className="cart-image">
                <img src={item.image} alt="cart item"/>
            </div>
            <div className="cart-description">
                <p className="regular-text">
                    {item.name}
                </p>
                {showDeleteAction && (
                    <Button
                        type="icon"
                        className="delete-icon"
                    >
                        <span className="icon icon-close" />
                    </Button>
                )}
                <div className="cart-info">
                    <Counter initialCount={item.count} onCountChange={onCountChange} />
                    <span className="cart-info__price">{item.totalPrice}</span>
                </div>
            </div>
        </li>
    );
};
