import React from 'react';
import classNames from 'classnames'
import RcSwitch from 'rc-switch';
import {gySwitchProps} from './interface'

class Switch extends React.PureComponent<gySwitchProps> {
    render() {
        const {className, style, size, disabled, checked} = this.props;
        const preCls = 'rc-switch';
        const switchCls = {
            [`${preCls}-checked`]: checked,
            [`${preCls}-disabled`]: disabled,
          };
        const clsNames = classNames(
            preCls, `${preCls}-${size}`, switchCls, className,
          );
        return (
            <RcSwitch
                className={clsNames}
                style={style}
                {...this.props}
            />
          );
    }
}


export default Switch;