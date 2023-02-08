import React from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import cx from 'classnames';
import './MobilePhoneField.scss';

const MobilePhoneField = (props) => {
    const {
        className = "",
        value,
        onChange,
    } = props;

    return (
        <div className={cx(
            'phone-field',
            className
            )
        }
        >
            <PhoneInput
                placeholder="Enter phone number"
                value={value}
                className="phone-field__input"
                onChange={onChange}
            />
        </div>
    );
};
export {MobilePhoneField};
