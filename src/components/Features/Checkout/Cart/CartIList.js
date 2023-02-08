import React from 'react';
import {CartItem} from './CartItem';
import _map from 'lodash/map'
import './Cart.scss';

export const CartList = (props) => {
    const {
        data,
        onCountChange,
        showDeleteAction
    } = props;
    return (
        <ul className="cart-list">
            {
                data?.length ? (
                    _map(data, (item, index) => (
                       <CartItem 
                        key={index}
                        item={item} 
                        onCountChange={
                            (newCount) => onCountChange(newCount, item.id)
                        } 
                        />
                    ))
                ) : (
                    <p className="medium-light-text text-center empty-card">There’s nothing for your poor cat in your
                        cart!</p>
                )
            }
        </ul>
    );
};
