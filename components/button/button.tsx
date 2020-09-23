import React from 'react';
import classNames from 'classnames'
import PropTypes from 'prop-types';
import Icon from '../icon';

import {gyButtonProps} from './interface'

class Button extends React.PureComponent<gyButtonProps,any>{
    static defaultProps = {
        loading: false,
        clicked:false
    };

    static propTypes = {
        type: PropTypes.string,
        shape: PropTypes.oneOf(['circle']),
        size: PropTypes.oneOf(['large', 'default', 'small']),
        htmlType: PropTypes.oneOf(["submit" ,"reset" , "button" , undefined]),
        onClick: PropTypes.func,
        loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        className: PropTypes.string,
        icon: PropTypes.string,
        clicked: PropTypes.bool,
    };

    timeout?: number;
    delayTimeout?: number;

    constructor(props:gyButtonProps){
        super(props);
        this.state = {
            loading: props.loading,
            clicked: props.clicked
          }
    }

    UNSAFE_componentWillReceiveProps(nextProps: gyButtonProps) {
        const currentLoading = this.props.loading;
        const loading = nextProps.loading;
   
        if (currentLoading) {
          clearTimeout(this.delayTimeout);
        }

        if (typeof loading !== 'boolean' && loading && loading.delay) {
            // 当loading不是boolean时，说明它设置成了延迟时间
          this.delayTimeout = setTimeout(() =>this.setState({loading}), loading.delay);
        } else {
          this.setState({ loading });
        }
      }
  

    componentWillUnmount() {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
        if (this.delayTimeout) {
          clearTimeout(this.delayTimeout);
        }
    }
  
    handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
        this.setState({clicked:true});
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.setState({clicked:false}), 200);
        
        const onClick = this.props.onClick;
        if(onClick){
            onClick(e);
        }
    }


    render() {
        const {type, shape, size = '', className, htmlType, children, icon,...others} = this.props;
        const {loading, clicked} = this.state;
        const prefixCls = 'gy-btn'
        const classes = classNames(prefixCls, className, {
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-${size}`]: size,
            [`${prefixCls}-loading`]: loading,
            [`${prefixCls}-clicked`]: clicked,
          });
        //Icon中可能没有类型为loading的Icon
        const iconNode = icon ?　<Icon type={icon}/> : '';

        return (
            <button
                {...others}
                type={htmlType}
                className = {classes}
                onClick = {this.handleClick}
            >
              <div className={`${prefixCls}-container`}>
                <span className={`${prefixCls}-icon`}>{iconNode}</span>
                {children}
              </div>
            </button>
        );
    }
}

export default Button;