export type ButtonType = 'primary' | 'ghost' | 'dashed' | 'danger';
export type ButtonShape = 'circle';
export type ButtonSize = 'small' | 'large';


export interface gyButtonProps {
    type?: ButtonType;
    htmlType?: string;
    icon?: string;
    shape?: ButtonShape;
    size?: ButtonSize;
    onClick?: React.FormEventHandler<any>;
    onMouseUp?: React.FormEventHandler<any>;
    onMouseDown?: React.FormEventHandler<any>;
    loading?: boolean | { delay?: number };
    disabled?: boolean;
    style?: React.CSSProperties;
    className?: string;
    clicked?:boolean;
  }
