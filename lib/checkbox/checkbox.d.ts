import React from 'react';
import CheckboxGroup from './group';
import { gyCheckboxProps } from './interface';
declare class Checkbox extends React.PureComponent<gyCheckboxProps> {
    static Group: typeof CheckboxGroup;
    static defaultProps: {
        prefixCls: string;
        indeterminate: boolean;
    };
    render(): JSX.Element;
}
export default Checkbox;
