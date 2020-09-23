import React, {cloneElement} from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';
import Search from './search'
import _ from 'lodash'

import {gyInputProps} from './interface'

export default class Input extends React.PureComponent<gyInputProps>{
	static Search = Search;
	static defaultProps = {
		prefixCls: 'gy-input',
		disabled: false,
		type:'text',
		placeholder:'请输入内容'
	};

	handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
		const { onPressEnter, onKeyDown } = this.props;
		if (e.keyCode === 13 && onPressEnter) {
		  onPressEnter(e);
		}
		if (onKeyDown) {
		  onKeyDown(e);
		}
	  }

	renderLabeledInput = (ele:React.ReactNode) => {
		const props = this.props;
		if(!props.addonBefore && !props.addonAfter){
			return ele;
		}
		const wrapperClassName = `${props.prefixCls}-group`;
		const addonClassName = `${wrapperClassName}-addon`;
		const addonBefore = props.addonBefore ? <span className={addonClassName}>{props.addonBefore}</span> :null;
		const addonAfter = props.addonAfter ? <span className={addonClassName}>{props.addonAfter}</span> :null;
		return <span className={wrapperClassName}>{addonBefore}{ele}{addonAfter}</span>
	}

	renderLabeledIcon = (ele:React.ReactElement)=>{
		const { prefix,suffix,prefixCls,style } = this.props;
		if (!('prefix' in this.props) && !('suffix' in this.props)) {
		  return ele;
		}
		const prefixCopy = prefix ? (<span className={`${prefixCls}-prefix`}>{prefix}</span>) : null;
		const suffixCopy = suffix ? (<span className={`${prefixCls}-suffix`}>{suffix}</span>) : null;
		return (
		  <span className={`${prefixCls}-affix-wrapper`} style={style}>
			{prefixCopy}
			{cloneElement(ele, { style: null })}
			{suffixCopy}
		  </span>
		);
	}

	renderInput = () => {
		const {type,children,className,prefixCls,size,value} = this.props;
		const otherProps = omit(this.props,['prefixCls', 'onPressEnter', 'addonBefore', 'addonAfter', 'prefix', 'suffix'])
		if(!type){
			return children;
		}
		const clsNames = classNames(
			prefixCls,
			{
				[`${prefixCls}-sm`]: size === 'small',
				[`${prefixCls}-lg`]: size === 'large',
			},
			className 
		);
		return this.renderLabeledIcon(
			<input
				{...otherProps}
				className = {clsNames}
				onKeyDown={this.handleKeyDown}
				/>
		)
	}

	render(){
		return this.renderLabeledInput(this.renderInput())
	}	
}