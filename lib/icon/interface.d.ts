/// <reference types="react" />
export interface gyIconProps {
    type?: string;
    svg?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: (e: React.MouseEventHandler) => void;
}
export interface gyIconState {
    svgHtml: string;
}
