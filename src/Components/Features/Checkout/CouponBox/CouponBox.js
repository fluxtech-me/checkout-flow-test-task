import React from "react";
import couponImage from "../../../../Assets/images/cat-street-hero-olive.png";
import "./CouponBox.scss";

const CouponBox = () => {
    return (
      <div className="coupon-box">
          <h3 className="medium-title text-center">Only For Cool Cats Only For Cool Cats</h3>
          <div className="coupon-box__content">
              <img className="coupon-img" width="161" height="114" src={couponImage} alt="Cat street hero olive"/>
              <div className="info">
                  <p className="regular-text">Add the “Catnip” cover to your order and save 5%</p>
                  <div className="price-content regular-text">
                      <span className="">$122.55</span>
                      <span className="crossed">$129.55</span>
                  </div>
                  <button>Add now</button>
              </div>
          </div>
      </div>
    );
};
export {CouponBox};
