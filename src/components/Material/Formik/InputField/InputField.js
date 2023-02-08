import _identity from "lodash/identity"
import _isUndefined from "lodash/isUndefined"
import React from "react"
import { Input } from "../../Input"

export const InputField = (props) => {
    const {
        onChange = _identity,
        onBlur = _identity,
        normalizer = _identity,
        handleResetField = _identity,
        field: { name, value },
        ...inputProps
    } = props

    const onHandleChange = (e) => {
        const value = normalizer(e.target.value)
        onChange(value, e)
    }

    const onHandleBlur = (e) => {
        const value = normalizer(e.target.value)
        onBlur(value, e)
    }

    return (
        <Input
            {...inputProps}
            name={name}
            value={value}
            onChange={onHandleChange}
            onBlur={onHandleBlur}
            handleResetField={handleResetField}
        />
    )
}
