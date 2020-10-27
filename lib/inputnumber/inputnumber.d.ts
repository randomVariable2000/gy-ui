import React from 'react';
import { gyInputNumber } from './interface';
export default class InputNumber extends React.PureComponent<gyInputNumber> {
    static defaultProps: {
        prefixCls: string;
        disabled: boolean;
        size: string;
        inputValue: number;
        min: number;
        max: number;
        step: number;
        focused: boolean;
        btnType: string;
    };
    constructor(props: any);
    onFocus: () => void;
    onChange: (e: any) => void;
    onBlur: (e: any, ...args: any[]) => void;
    downfunc: () => void;
    formatStep: (num: any) => number;
    upfunc: () => void;
    formatWrapper: (num: any) => any;
    renderInput: () => JSX.Element;
    renderInputNumber: (children: React.ReactNode) => {} | null | undefined;
    render(): {} | null | undefined;
}
