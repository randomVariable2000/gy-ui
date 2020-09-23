export interface gyInputNumberProps{
	prefixCls?: string;
    disabled?: boolean;
    size?: 'small' | 'default' | 'large';
    max?: number;
    min?: number;
    step?:number;
    className?: string;
    inputValue?:number;
    // value?: number;
    value?:any;
    onChange?: (e)=>void;
    style?:React.CSSProperties;
    btnType?: 'vertical' | 'crosswise';
    readOnly?: boolean;
    focused?:boolean;
    formatter?:Function;
    parser?:Function;
}