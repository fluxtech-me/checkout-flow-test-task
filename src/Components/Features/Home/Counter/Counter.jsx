import { Button } from "Components/Material/Button"
import { useCallback, useState } from "react"
import _identity from 'lodash/identity'


export const Counter = (props) => {

    const {
        className = "counter-container",
        styles = {},
        subIcon = "-",
        addIcon = "+",
        onCountChange = _identity
    } = props

    const [count, setCount] = useState(0)

    const handleAdd = useCallback(() => {
        const newCount = count + 1
        setCount(newCount)
        onCountChange(newCount)
    }, [count, onCountChange])

    const handleSub = useCallback(() => {
        const newCount = count - 1
        if(count > 0) {
            setCount(newCount)
            onCountChange(newCount)
        }
    }, [count, onCountChange])

    return (
        <div className={className} styles={styles}>
            <Button onClick={handleSub}>{subIcon}</Button>
            <span>{count}</span>
            <Button onClick={handleAdd}>{addIcon}</Button>
        </div>
    )
}