import React from 'react';
import classNames from 'classnames'
import Checkbox from './checkbox';
import {gyCheckboxGroupProps, gyCheckboxGroupState,gyCheckboxOptionType} from './interface'

class CheckboxGroup extends React.PureComponent<gyCheckboxGroupProps, gyCheckboxGroupState> {
    static defaultProps = {
        prefixCls : 'gy-checkbox',
        options: []
    }

    constructor(props:any){
        super(props);
        this.state = {
            value: props.value || props.defaultValue || []
        }
    }

    getChildContext(){
        return {
            checkboxGroup:{
                toggleOption: this.toggleOption,
                value:this.state.value,
                disabled:this.props.disabled,
            }
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps:any){
        if('value' in nextProps){
            this.setState({
                value: nextProps.value || []
            })
        }
    }

    getOptions(){
        const {options} = this.props;
        return (options as Array<gyCheckboxOptionType>).map(option => {
            if(typeof option === 'string'){
                return {
                    label: option,
                    value: option,
                } as gyCheckboxOptionType;
            }
            return option;
        })
    }


    toggleOption = (option:any) => {
        const optionIndex = this.state.value.indexOf(option.value);
        const value = [...this.state.value];
        if (optionIndex === - 1) {
          value.push(option.value);
        } else {
          value.splice(optionIndex, 1);
        }
        if (!('value' in this.props)) {
          this.setState({ value });
        }
        const onChange = this.props.onChange;
        if (onChange) {
          onChange(value);
        }
    }

    render() {
        const { props, state } = this;
        const {prefixCls, className, options } = props;
        let children = props.children;
       
        if (options && options.length > 0) {
          children = this.getOptions().map(option => (
            <Checkbox
              key={option.value}
              disabled={'disabled' in option ? option.disabled : props.disabled}
              value={option.value}
              checked={state.value.indexOf(option.value) !== -1}
              onChange={() => this.toggleOption(option)}
              className={`${prefixCls}-item`}
            >
              {option.label}
            </Checkbox>
          ));
        }
        const classString = classNames(prefixCls, className);
        return (
          <div className={classString}>
            {children}
          </div>
        );
    }
}


export default CheckboxGroup;