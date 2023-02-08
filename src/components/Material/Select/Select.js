import React from "react"
import ReactSelect from "react-select"
import cx from "classnames"
import "./Select.scss"

const defaultStyles = {
    control: (baseStyles) => ({
        ...baseStyles,
        borderRadius: "2px",
        width: "100%",
        height: "42px",
        background: "#FFFFFF",
        border: "0.5px solid #9C9C9C",
        borderBottom: "1px solid #000000",
        fontWeight: "400",
        fontSize: "25px",
        lineHeight: "32px",
        "&:focus": {
            outline: "none!important",
        },
    }),
    menu: (baseStyles) => ({
        ...baseStyles,
        width: "100%",
        zIndex: 9,
    }),
}

const defaultComponents = () => {
    return {
        IndicatorSeparator: () => null,
    }
}

export const Select = (props) => {
    const {
        className = "",
        styles = defaultStyles,
        classNamePrefix,
        components = defaultComponents(),
        options,
        label,
        ...selectProps
    } = props

    return (
        <div className={cx("select-field", className)}>
            <ReactSelect
                components={components}
                className={className}
                classNamePrefix={classNamePrefix}
                styles={styles}
                options={options}
                {...selectProps}
            />
            {label && <span className="select-field__label">{label}</span>}
        </div>
    )
}
