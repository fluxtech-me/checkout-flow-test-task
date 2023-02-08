import React from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import cx from 'classnames';
import './MobilePhoneField.scss';

const MobilePhoneField = (props) => {
    const {
        className = "",
        value,
        label,
        onChange,
        ...inputProps
    } = props;

    return (
        <div className={cx(
            'phone-field',
            className
        )}
        >
            <PhoneInput
                placeholder="Enter phone number"
                value={value}
                international={true}
                className="phone-field__input"
                onChange={onChange}
                {...inputProps}
            />
            {label && <span className="phone-label">{label}</span>}
        </div>
    );
};
export {MobilePhoneField};
