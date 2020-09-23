import React from 'react';
import classNames from 'classnames'
import RcCheckbox from 'rc-checkbox';
import CheckboxGroup from './group'
import {GyCheckboxProps} from './interface'

class Checkbox extends React.PureComponent<GyCheckboxProps> {

    static Group: typeof CheckboxGroup;
    static defaultProps = {
      prefixCls: 'gy-checkbox',
      indeterminate: false,
    };

    render() {
      const { props, context } = this;
      const {
        prefixCls,
        className,
        children,
        indeterminate,
        style,
        onMouseEnter,
        onMouseLeave,
        ...restProps
      } = props;
      const { checkboxGroup } = context;
      let checkboxProps: GyCheckboxProps = { ...restProps };
      if (checkboxGroup) {
        checkboxProps.onChange = () => checkboxGroup.toggleOption({ label: children, value: props.value });
        checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
        checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
      }

      const classString = classNames(className, {
        [`${prefixCls}-wrapper`]: true,
      });

      const checkboxClass = classNames({
        [`${prefixCls}-indeterminate`]: indeterminate,
      });

      return (
        <label
          className={classString}
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <RcCheckbox
            {...checkboxProps}
            prefixCls={prefixCls}
            className={checkboxClass}
          />
          {children !== undefined ? <span>{children}</span> : null}
        </label>
      );

    }
}

export default Checkbox;