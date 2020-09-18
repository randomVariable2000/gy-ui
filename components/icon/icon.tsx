import React from 'react';
import classNames from 'classnames'
import Archer from 'archer-svgs'

import {gyIconProps, gyIconState} from './interface';

const svgTarget = 'https://unpkg.com/ionicons@4.4.2/dist/ionicons/svg/';
const archer = new Archer();

export class Icon extends React.Component<gyIconProps, gyIconState> {
    state = {
      svgHtml: ''
    };
  
    async componentDidMount() {
      if (!this.props.type) {
        return;
      }
  
      const svg = await this.getSvg(this.props.type);
      this.setState({
        svgHtml: svg,
      });
    }
  
    async UNSAFE_componentWillReceiveProps(props: gyIconProps) {
      if (!props.type) {
        return;
      }
  
      if (this.props.type !== props.type) {
        const svg = await this.getSvg(props.type);
        this.setState({
          svgHtml: svg,
        });
      }
    }

    getSvg = async (type: string) => {
      return await archer.fetchSvg(`${svgTarget}${type}.svg`);
    }
  
    render() {
      const {className, style, type, svg, ...otherProps} = this.props;
      const prefixCls = 'gy-icon';
      const clsName = classNames(
        prefixCls, className,
        {[`${prefixCls}-${type}`]: !!type}
      );
      return (
        <i
          className={clsName}
          style={style}
          dangerouslySetInnerHTML={{__html: svg || this.state.svgHtml}}
          {...otherProps}
        />
      );
    }
  }

  export default Icon;