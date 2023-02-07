import React from 'react';
import {Select} from '../../../Material/Select';
import {Input} from '../../../Material/Input';
import cx from 'classnames';
import './MobilePhoneField.scss';

const MobilePhoneField = (props) => {
    const {
        className = "",
    } = props;

    return (
        <div className={cx(
            'phone-field',
            className
            )
        }
        >
            <Select
                className="phone-field__select"
                label="mobile phone"
            />
            <Input
                className="phone-field__input"
                variant="underlined"
                label="mobile phone"
            />
        </div>
    );
};
export {MobilePhoneField};
