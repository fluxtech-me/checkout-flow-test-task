import cx from 'classnames'
import './Button.scss'
export const Button = (props) => {

    const {
        children = "Click Me",
		className = "",
		style = {},
		type = "default",
		disabled = false,
		loading = false,
		loadingIndicator = "Loading...",
		...btnProps
    } = props

    return <button 
				style={style} 
				disabled={disabled || loading}
				className={cx(
							{	
								[className]: true,
								[`btn-${type}`]: true,
								"btn-disabled": disabled,
								"btn-loading": loading
							}
						)}
				{...btnProps}
			>
        		{loading ? loadingIndicator : children}
    		</button>
}