import React from 'react';
import gyRateProps from './interface';
export default class Rate extends React.PureComponent<gyRateProps> {
    static defaultProps: {
        count: number;
        value: number;
        allowHalf: boolean;
        allowClear: boolean;
        charactor: JSX.Element;
        disabled: boolean;
    };
    constructor(props: any);
    showRate: (count: number) => JSX.Element[];
    showRateReadOnly: (count: number) => JSX.Element[];
    onMouseOver: (tempValue: number) => void;
    onMouseOut: () => void;
    onClick: (value: number) => void;
    render(): JSX.Element;
}
