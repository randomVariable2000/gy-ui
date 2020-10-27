import React from 'react';
import Search from './search';
import { gyInputProps } from './interface';
export default class Input extends React.PureComponent<gyInputProps> {
    static Search: typeof Search;
    static defaultProps: {
        prefixCls: string;
        disabled: boolean;
        type: string;
        placeholder: string;
    };
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    renderLabeledInput: (ele: React.ReactNode) => {} | null | undefined;
    renderLabeledIcon: (ele: React.ReactElement) => JSX.Element;
    renderInput: () => {} | null | undefined;
    render(): {} | null | undefined;
}
