import cx from 'classnames';
import { Button } from '../Button';
import _identity from 'lodash/identity';
import './Cheap.scss'

export const Cheap = (props) => {

  const {
		className, 
		style, 
    	item,
		disabled = false,
		onDelete = _identity,
		deleteBtnContent = "X",
		showDeleteComponent = false
	} = props

  return (
    <div 
		className={cx({
			className,
			"cheap-disabled": disabled
		})} 
		style={style}
	>
      	<p>{item}</p>
		{showDeleteComponent && 
			<Button
				className={`${className}-delete-btn`} 
				disabled={disabled} 
				onClick={onDelete}
			>
				{deleteBtnContent}
			</Button>
		}
    </div>
  );
};