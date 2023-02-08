import React from "react"
import cx from "classnames"
import "./Button.scss"

export const Button = (props) => {
    const {
        children = "",
        className = "",
        style = {},
        size = "",
        type = "default",
        disabled = false,
        loading = false,
        loadingIndicator = <span className="icon icon-spinner spin" />,
        ...btnProps
    } = props

    return (
        <button
            style={style}
            disabled={disabled || loading}
            className={cx("btn", {
                [className]: true,
                [`btn--${type}`]: true,
                [`btn--${size}`]: size,
                "btn--disabled": disabled,
                "btn--loading": loading,
            })}
            {...btnProps}
        >
            {loading ? loadingIndicator : children}
        </button>
    )
}
