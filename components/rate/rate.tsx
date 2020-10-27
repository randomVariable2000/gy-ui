import React from 'react';
import classNames from 'classnames';
import gyRateProps from './interface'
import Icon from '../icon'

export default class Rate extends React.PureComponent<gyRateProps>{
	static defaultProps = {
		count: 5,
		value: 0,
		allowHalf: false,
		allowClear: false,
		charactor: <Icon type='md-star'/>,
		disabled:false
	}

	constructor(props){
		super(props);
		this.state = {
			tempValue: props.value as number,
			value: props.value as number
		}
	};

	showRate = (count: number) => {
		const arr = [];
		const prefixCls = 'gy-rate';
		for(let index = 0; index < count; index++){
			const first = index + 1;
			const last = index + (this.props.allowHalf ? 0.5 : 1);
			const value = this.state.tempValue;
			const hoverCls = `${prefixCls}-hover`;
			const firstCls = classNames(`${prefixCls}-first-child`, first <= value ? hoverCls : '');
			const lastCls = classNames(`${prefixCls}-last-child`, last <= value ? hoverCls : '');
        arr.push((
	        <div
				className={`${prefixCls}-item`}
				key={index}
	        >
	            <div
		            className={firstCls}
		            onMouseOver={this.onMouseOver.bind(this, first)}
		            onClick={this.onClick.bind(this, first)}
	            >
	            	<span>{this.props.charactor}</span>
		        </div>
		        <div
		            className={lastCls}
		            onMouseOver={this.onMouseOver.bind(this, last)}
		            onClick={this.onClick.bind(this, last)}
		        >
		            <span>{this.props.charactor}</span>
		        </div>
    	    </div>
	      ));
		}
		return arr;
	}
	showRateReadOnly = (count: number) => {
		const arr = [];
		const prefixCls = 'gy-rate';
		for(let index = 0; index < count; index++){
			const first = index + 1;
			const last = index + (this.props.allowHalf ? 0.5 : 1);
			const value = this.state.tempValue;
			const hoverCls = `${prefixCls}-hover`;
			const firstCls = classNames(`${prefixCls}-first-child`, first <= value ? hoverCls : '');
			const lastCls = classNames(`${prefixCls}-last-child`, last <= value ? hoverCls : '');
        arr.push((
	        <div
				className={`${prefixCls}-item`}
				key={index}
	        >
	            <div
		            className={firstCls}
	            >
	            	<span>{this.props.charactor}</span>
		        </div>
		        <div
		            className={lastCls}
		        >
		            <span>{this.props.charactor}</span>
		        </div>
    	    </div>
	      ));
		}
		return arr;
	}
 	onMouseOver = (tempValue: number) => {
	    this.setState({
	      tempValue,
	    });
  	}

    onMouseOut = () => {
	    const value = this.state.value;
	    this.setState({
	      tempValue: value,
	    });
    }

	onClick = (value: number) => {
		const clear = this.props.allowClear && value === this.state.value;
		const newValue = clear ? 0 : value;

		this.setState({value: newValue, tempValue: newValue});

		if (this.props.onChange) {
		    this.props.onChange(newValue);
		}
	}

	render() {
	    const {className, style, count, readOnly} = this.props;
	    const preCls = 'gy-rate';
	    const clsName = classNames(
	      preCls, className,
	    );
	    return (
	      <div
	        className={clsName}
	        style={style}
	        onMouseOut={this.onMouseOut}
	      >
	        {readOnly ? this.showRateReadOnly(count as number) :this.showRate(count as number)}
	      </div>
	    );
  	}
}