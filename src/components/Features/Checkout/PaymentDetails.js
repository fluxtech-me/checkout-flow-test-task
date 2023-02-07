import React from 'react';
import paypal from "../../../assets/images/paypal.svg";
import card from "../../../assets/images/card.svg";

const PaymentDetails = () => {
    const paymentDetailsData = [
        {
            name: "PayPal",
            image: paypal,
        },
        {
            name: "Card",
            image: card,
        },
    ];

    return (
      <ul className="payment-details">
          {
              paymentDetailsData.map((item) => (
                  <li className="payment-details__item">
                      <img width="142" height="44" src={item.image} alt={item.name}/>
                  </li>
              ))
          }
      </ul>
    );
};
export {PaymentDetails};