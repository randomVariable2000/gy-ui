import React from 'react';
import classNames from 'classnames'
import {gyAvatarProps} from './interface'
import Icon from '../icon'

export default class Avatar extends React.PureComponent<gyAvatarProps>{
  	static defaultProps = {
    	size: 'default',
    	shape: 'circle',
    	icon: <Icon type='ios-person' className='gy-avatar-icon' style={{color: "white"}}/>,
  	};

	render(){
		const {className, style, size, shape, icon, src, ...otherProps} = this.props;
		const preCls = 'gy-avatar';
		const clsNames = classNames(
				className,
				preCls,
				`${preCls}-${size}`,
				`${preCls}-${shape}`,
		)

		return (
			<div
				className = {clsNames}
				style = {style}
				{...otherProps}
			>	
				{
					!src ? icon : (
						<img src={src} />
					)
				}	
			</div>
		)
	}
}