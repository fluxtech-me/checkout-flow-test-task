import React from "react"
import cx from 'classnames'

export const Input = (props) => {

    const {
        className = "input-container",
        style = {},
        placeholder,
        label,
        disabled,
        error,
        readOnly,
        variant = "outlined",
        ...inputProps
    } = props

    return (
        <div style={style} className={cx(
            {	
                [className]: true,
                [`input-${variant}`]: true,
                "input-disabled": disabled,
                "btn-readOnly": readOnly,
                "btn-error": error
            }
        )}>
            <input disabled={disabled} readOnly={readOnly} placeholder={!label && placeholder} {...inputProps}/>
            {variant === "underlined" && <label>{label}</label>}
        </div>
    )
}