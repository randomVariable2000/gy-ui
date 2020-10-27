/// <reference types="react" />
export interface gySliderProps {
    className?: string;
    style?: React.CSSProperties;
    vertical?: boolean;
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    max?: number;
    min?: number;
    disabled?: boolean;
    step?: number | null;
}
