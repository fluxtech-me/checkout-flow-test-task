import React, {useId} from 'react';
import {RadioInput} from '../../Material/RadioInput';
import _map from 'lodash/map';
import cx from 'classnames';
import './ShippingRadioGroup.scss';

export const ShippingRadioGroup = (props) => {

    const {
        className = "",
        style = {},
        options = [],
        defaultValue,
        disabled = false,
        ...inputProps
    } = props

    const id = useId('radio');

    return (
        <ul
            className={cx(
                'checkout-options',
                {
                    [className]: true,
                    "disabled": disabled,
                })
            }
            style={style}
        >
            {_map(options, (option, index) => (
                <li key={option.value} className="checkout-options__item">
                    <RadioInput
                        option={option}
                        defaultValue={defaultValue}
                        id={id + index}
                        {...inputProps}
                    />
                    <span className="price medium-text">${option.price}</span>
                </li>
            ))}
        </ul>
    );
};
