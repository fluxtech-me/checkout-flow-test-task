import React from 'react';
import _map from 'lodash/map'
import cx from 'classnames';
import './RadioGroup.scss'

export const RadioGroup = (props) => {

   const { 
        className, 
        style, 
        options, 
        defaultValue,
        disabled = false,
        ...inputProps 
    } = props

  return (
    <div 
        className={cx({
            [className]: true,
            "radio-disabled": disabled,
        })} 
        style={style}
    >
      {_map(options, option => (
        <div  key={option.value}>
          <input
            {...inputProps}
            type="radio"
            value={option.value}
            checked={option.value === defaultValue}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};