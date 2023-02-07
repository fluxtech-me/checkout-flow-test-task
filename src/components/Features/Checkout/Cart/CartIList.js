import React from 'react';
import {CartItem} from './CartItem';
import cartItemImg from './../../../../assets/images/cart-item-img.png';
import './Cart.scss';

const CartList = (props) => {
    const {} = props;
    const cartData = [
        {
            name: 'Bouclé Bungalow “Creme” Cover',
            price: 129.00,
            image: cartItemImg
        },
        {
            name: 'Bouclé Bungalow “Creme” Cover Bouclé Bungalow “Creme” Cover',
            price: 129.00,
            image: cartItemImg
        },
    ];

    return (
       <ul className="cart-list">
           {
               cartData?.length ? (
                   cartData.map((item) => (
                       <CartItem item={item} />
                   ))
               ) : (
                    <p className="medium-light-text text-center empty-card">There’s nothing for your poor cat in your cart!</p>
               )
           }
       </ul>
    );
};
export {CartList};
