import React from "react"
import { Button } from "../../../Material/Button";
import {useCallback, useState} from "react";
import _identity from 'lodash/identity';
import cx from 'classnames';
import './Counter.scss';

export const Counter = (props) => {
    const {
        styles = {},
        subIcon = <><span className="icon icon-minus"/></>,
        addIcon = <><span className="icon icon-plus"/></>,
        onCountChange = _identity,
        className = ""
    } = props;

    const [count, setCount] = useState(0);

    const handleAdd = useCallback(() => {
        const newCount = count + 1
        setCount(newCount)
        onCountChange(newCount)
    }, [count, onCountChange]);

    const handleSub = useCallback(() => {
        const newCount = count - 1
        if(count > 0) {
            setCount(newCount)
            onCountChange(newCount)
        }
    }, [count, onCountChange]);

    return (
        <div className={cx({
            "counter-container": true,
            [className]: true
        })} style={styles}>
            <Button onClick={handleSub}>{subIcon}</Button>
            <span className="counter-container__count">{count}</span>
            <Button onClick={handleAdd}>{addIcon}</Button>
        </div>
    );
};