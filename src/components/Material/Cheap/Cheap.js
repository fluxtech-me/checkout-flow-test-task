import React from "react"
import cx from "classnames"
import { Button } from "../Button"
import _identity from "lodash/identity"
import "./Cheap.scss"

export const Cheap = (props) => {
    const {
        className = "",
        style,
        item,
        disabled = false,
        onDelete = _identity,
        deleteBtnContent = <span className="icon icon-close" />,
        showDeleteComponent = true,
    } = props

    return (
        <div
            className={cx("cheap", className, {
                "cheap--disabled": disabled,
            })}
            style={style}
        >
            <span className="cheap__content">{item}</span>
            {showDeleteComponent && (
                <Button
                    type="icon"
                    className="delete-btn"
                    disabled={disabled}
                    onClick={onDelete}
                >
                    {deleteBtnContent}
                </Button>
            )}
        </div>
    )
}
