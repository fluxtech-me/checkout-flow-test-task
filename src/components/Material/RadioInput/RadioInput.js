import React from 'react';
import './RadioInput.scss';

export const RadioInput = (props) => {
    const {
        className = "",
        style = {},
        defaultValue,
        option,
        id,
        disabled = false,
        ...inputProps
    } = props;

    const {
        value,
        label,
    } = option;

    return (
        <div className="radio-item">
            <input
                className="radio-item__input"
                {...inputProps}
                type="radio"
                id={id}
                value={value}
                checked={value === defaultValue}
            />
            <label htmlFor={id}><span>{label}</span></label>
        </div>
    );
};
