import React, {useId} from 'react';
import {RadioInput} from '../../Material/RadioInput';
import _map from 'lodash/map';
import cx from 'classnames';
import './RadioGroup.scss';

export const RadioGroup = (props) => {

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
                <li className="checkout-options__item">
                    <RadioInput
                        option={option}
                        defaultValue={defaultValue}
                        id={id + index}
                        key={option.value}
                        {...inputProps}
                    />
                    <span className="price medium-text">$0.00</span>
                </li>
            ))}
        </ul>
    );
};
