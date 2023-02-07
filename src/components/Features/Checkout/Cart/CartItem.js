import React from 'react';
import {Counter} from '../../Home/Counter';
import {Button} from '../../../Material/Button';

const CartItem = (props) => {
    const {item} = props;

    return (
        <li className="cart-list__item">
            <div className="cart-image">
                <img src={item.image} alt="cart item"/>
            </div>
            <div className="cart-description">
                <p className="regular-text">
                    {item.name}
                </p>
                <Button
                    type="icon"
                    className="delete-icon"
                >
                    <span className="icon icon-close" />
                </Button>
                <div className="cart-info">
                   <Counter />
                    <span className="cart-info__price">{item.price}</span>
                </div>
            </div>
        </li>
    );
};
export {CartItem};