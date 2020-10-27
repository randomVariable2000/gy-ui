/// <reference types="react" />
export declare type SizeType = 'default' | 'large' | 'small';
export interface gyInputProps {
    prefixCls: string;
    id?: number | string;
    type?: string;
    size?: SizeType;
    disabled?: boolean;
    value?: any;
    defaultValue?: any;
    className?: string;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    prefix?: React.ReactNode | string;
    suffix?: React.ReactNode | string;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
    onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
    placeholder?: string;
    style?: React.CSSProperties;
}
