import React from 'react';
import {Button} from '../../Material/Button';
import _identity from 'lodash/identity';
import cx from "classnames";
import "../Input/Input.scss";
import "./Textarea.scss";

const Textarea = (props) => {
    const {
        className = "",
        style = {},
        handleResetField = _identity,
        placeholder,
        label,
        disabled,
        error,
        type = "text",
        readOnly,
        variant = "outlined",
        value,
        ...inputProps
    } = props;

    return (
        <div style={style}
             className={cx(
                 'form-input textarea-field',
                 className,
                 {
                     [`form-input--${variant}`]: true,
                     "form-input--disabled": disabled,
                     "form-input--readOnly": readOnly,
                     "form-input--error": error,
                     'form-input--hasValue': value && String(value).length > 0,
                 }
             )}
        >
            <textarea
                className="form-control"
                disabled={disabled}
                readOnly={readOnly}
                placeholder={!label ? placeholder: ""}
                value={value}
                {...inputProps}
            />
            {variant === "underlined" && <label className="form-label">{label}</label>}
            {variant === "outlined" && <Button onClick={handleResetField} type="icon" className="icon icon-close" />}
        </div>
    );
};
export {Textarea};
