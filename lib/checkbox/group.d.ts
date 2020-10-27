import React from 'react';
import { gyCheckboxGroupProps, gyCheckboxGroupState, gyCheckboxOptionType } from './interface';
declare class CheckboxGroup extends React.PureComponent<gyCheckboxGroupProps, gyCheckboxGroupState> {
    static defaultProps: {
        prefixCls: string;
        options: never[];
    };
    constructor(props: any);
    getChildContext(): {
        checkboxGroup: {
            toggleOption: (option: any) => void;
            value: any;
            disabled: boolean | undefined;
        };
    };
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    getOptions(): gyCheckboxOptionType[];
    toggleOption: (option: any) => void;
    render(): JSX.Element;
}
export default CheckboxGroup;
