import { useField } from "formik"
import React from "react"
import { Select } from "../../Select"
import _identity from "lodash/identity"

export const SelectField = (props) => {
    const { onChange = _identity, onBlur = _identity, ...selectProps } = props
    const [field, meta] = useField(props)

    const onHandleChange = (val) => {
        onChange(val)
    }

    const error = meta.touched && meta.error ? meta.error : null

    return (
        <Select
            {...selectProps}
            classNamePrefix="field-select"
            onChange={onHandleChange}
            error={error}
            selectedId={field.value}
        />
    )
}
