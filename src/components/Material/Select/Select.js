import React from "react"
import ReactSelect from "react-select"

const defaultStyles = {
    control: (baseStyles) => ({
        ...baseStyles,
        borderRadius: "2px",
        width: "100%",
        background: "#FFFFFF",
        border: "0.5px solid #9C9C9C",
        borderBottom: "1px solid #000000"
    }),
    menu: (baseStyles) => ({
        ...baseStyles,
        width: "100%"
    })
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
        ...selectProps
    } = props

    return (
        <ReactSelect 
            className={className}
            components={components}
            classNamePrefix={classNamePrefix}
            styles={styles}
            options={options}
            {...selectProps}
        />
    )
}