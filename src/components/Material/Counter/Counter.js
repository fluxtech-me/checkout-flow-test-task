import React, {useState} from "react";
import {Button} from '../Button';
import _identity from 'lodash/identity';
import cx from 'classnames';
import './Counter.scss';

const Counter = (props) => {
    const {
        styles = {},
        subContent = <span className="icon icon-minus"/>,
        addContent = <span className="icon icon-plus"/>,
        onCountChange = _identity,
        className = "",
        initialCount = 0
    } = props;

    const [count, setCount] = useState(initialCount);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
        onCountChange(newCount);
    };

    const handleSub = () => {
        const newCount = count - 1
        if(count > 0) {
            setCount(newCount);
            onCountChange(newCount);
        }
    };

    return (
        <div className={cx("counter-container", className)}
             style={styles}
        >
            <Button
                type="icon"
                onClick={handleSub}>
                {subContent}
            </Button>
            <span className="counter-container__count">{count}</span>
            <Button
                type="icon"
                onClick={handleAdd}>
                {addContent}
            </Button>
        </div>
    );
};
export {Counter};
