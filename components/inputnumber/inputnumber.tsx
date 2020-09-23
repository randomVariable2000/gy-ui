import React from 'react';
import classNames from 'classnames';
import omit from 'lodash/omit';
import Icon from '../icon';
import {gyInputNumber} from './interface'

export default class InputNumber extends React.PureComponent<gyInputNumber>{
	static defaultProps = {
		prefixCls:'gy-inputnumber',
		disabled: false,
		size: 'default',
		inputValue: 0,
		min:-10,
		max:10,
		step:1,
		focused:false,
		btnType:'vertical',
	}

	constructor(props){
		super(props);
		this.inputRef = React.createRef();
		this.state = {
			value: props.min <= props.inputValue && props.max >= props.inputValue
				 ? props.inputValue
				 : (Math.abs(props.inputValue-props.min) > Math.abs(props.inputValue-props.max)) ? props.max : props.min,
			focused: props.focused,
			min:props.min,
			max:props.max,
			step:props.step,
			size: props.size,
			type: props.type,
			inputValue: props.min <= props.inputValue && props.max >= props.inputValue 
				 ? props.inputValue
				 : (Math.abs(props.inputValue-props.min) > Math.abs(props.inputValue-props.max)) ? props.max : props.min,
		}
	}

  	onFocus = ()=>{
	    this.setState({ focused: true });
	    this.inputRef.current.focus();
  	}

	onChange= (e)=> {
		let val;
		if(this.props.parser){
			val = this.props.parser(e.target.value);
		}else{
			val = Number(e.target.value);
		}
		this.setState({ inputValue: val });
		if(this.props.onChange){
			this.props.onChange(val);
		}
	}

	onBlur = (e, ...args)=> {
	    this.setState({ focused: false });
	    let val;
	    if(this.props.parser){
	    	val = this.props.parser(e.target.value)
			
		}else{
	    	val = Number(e.target.value);
		}
	    if (!isNaN(val) && val !== null && val >= this.props.min && val <= this.props.max) {
	      this.setState({ inputValue: val, value: val });
	    } else {
	      this.setState({ inputValue: this.state.value });
	    }
  	}

	downfunc = ()=>{
		const inputval = Number(this.state.inputValue);
	    const mult = this.formatStep(this.props.step);
	    if (this.props.step) {
	      this.setState({
	        inputValue: (inputval * mult - this.props.step * mult) / mult,
	        value: (inputval * mult - this.props.step * mult) / mult
	      });
	    } else {
	      this.setState({
	        inputValue: inputval - 1,
	        value: inputval - 1
	      });
	    }
	}

	formatStep = (num)=>{
	    if (Math.floor(num) === num) {
	      return 1;
	    } else {
	      let strfi = num + '';
	      let dotPos = strfi.indexOf('.');
	      let len = strfi.substr(dotPos + 1).length;
	      let times = Math.pow(10, len);
	      return times;
	  	}
	}

	upfunc = ()=>{
		const inputval = parseFloat(this.state.inputValue);
	    const mult = this.formatStep(this.props.step);
	    if (this.props.step) {
	      this.setState({
	        inputValue: (inputval * mult + this.props.step * mult) / mult,
	        value: (inputval * mult + this.props.step * mult) / mult
	      });
	    } else {
	      this.setState({
	        inputValue: inputval + 1,
	        value: inputval + 1
	      });
	    }
	}

	formatWrapper = (num)=>{
	    if (this.props.formatter) {
	      	return this.props.formatter(num);
	    }
	    return num;
  	}


	renderInput = ()=>{
		const {prefixCls, type, children, value} = this.props;
		const otherProps = omit(this.props, ['prefixCls', 'btnType']);
		

		let inputDisplayValue;
		if(this.state.focused){
			inputDisplayValue = this.state.inputValue;
		}else{
			inputDisplayValue = this.state.value;
		}

		if (inputDisplayValue === undefined || inputDisplayValue === null) {
	      inputDisplayValue = '';
	    }

	    const inputDisplayValueFormat = this.formatWrapper(inputDisplayValue);
	    return (
	    	<input 
	    		className={`${prefixCls}-input`}
	    		ref = {this.inputRef}
	    		onFocus = {this.onFocus}
	    		onBlur = {this.onBlur}
	    		value = {inputDisplayValueFormat}
	    		onChange = {this.onChange}
	    	/>
    	)
	}

	renderInputNumber = (children: React.ReactNode) => {
		const {prefixCls, className, disabled, focused, icon, size, btnType, max, min, step, readOnly, style} = this.props;
		if(!btnType){
			return children;
		}
		const clsNames = classNames(
			prefixCls,
			className,
			{
				[`${prefixCls}-disabled`] : disabled,
				[`${prefixCls}-focused`]: focused,
				[`${prefixCls}-sm`]: size === 'small',
				[`${prefixCls}-lg`]: size === 'large'
			}
		);
		const btnclasses = classNames({
			[`${prefixCls}-handler-wrap`]: btnType === 'vertical',
			[`${prefixCls}-handler-wrap-cw`]: btnType === 'crosswise'
		});
		let upDisabledClass = '';
		let downDisabledClass = '';
		const {value} = this.state;
		if(!isNaN(value)){
			const val = Number(value);
			if(val >= max || (val + step) > max || disabled){
				console.log(1)
				upDisabledClass = `${prefixCls}-handler-up-disabled`;
			}
			if(val <= min || (val - step) < min || disabled){
				console.log(1)
				downDisabledClass = `${prefixCls}-handler-down-disabled`;
			}
		}else{
			upDisabledClass = `${prefixCls}-handler-up-disabled`;
			downDisabledClass = `${prefixCls}-handler-down-disabled`;
		}
		console.log(upDisabledClass,downDisabledClass)	
		const isUpDisabled = !!upDisabledClass || disabled;
		const isDownDisabled = !!downDisabledClass || disabled;

		const editable = !readOnly && !disabled;

		return (
			<div className={clsNames} style={style}>
				<div className={`${btnclasses}`}>
					<button 
						disabled={isUpDisabled}
						className={`${prefixCls}-handler ${prefixCls}-handler-up ${upDisabledClass}`}
						onClick = {(editable && !upDisabledClass) ? this.upfunc :  ()=>{return}}
					>
						<Icon type='ios-arrow-up'/>
					</button>
					<button 
						disabled={isDownDisabled}
						className={`${prefixCls}-handler ${prefixCls}-handler-down ${downDisabledClass}`}
						onClick = {(editable && !downDisabledClass) ? this.downfunc : ()=>{return}}
					>
						<Icon type='ios-arrow-down'/>
					</button>		
				</div>
				{children}
			</div>			
		)
	};


	render(){
		return this.renderInputNumber(this.renderInput())
	} 
}