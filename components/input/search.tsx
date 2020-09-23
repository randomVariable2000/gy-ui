import React, { Component } from 'react';
import cn from 'classnames';
import Input from './input';
import Icon from '../icon';

export default class Search extends Component {
  render() {
    const classes = cn({});
    const searchSuffix = (<Icon type="ios-search" />);
    return (
      <Input
        className={classes}
        suffix={searchSuffix}
      />
    );
  }
}