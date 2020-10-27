/// <reference types="react" />
export declare type ButtonType = 'primary' | 'ghost' | 'dashed' | 'danger';
export declare type ButtonShape = 'circle';
export declare type ButtonSize = 'small' | 'large';
export interface gyButtonProps {
    type?: ButtonType;
    htmlType?: "submit" | "reset" | "button" | undefined;
    icon?: string;
    shape?: ButtonShape;
    size?: ButtonSize;
    onClick?: React.FormEventHandler<any>;
    onMouseUp?: React.FormEventHandler<any>;
    onMouseDown?: React.FormEventHandler<any>;
    loading?: boolean | {
        delay?: number;
    };
    disabled?: boolean;
    style?: React.CSSProperties;
    className?: string;
    clicked?: boolean;
}
