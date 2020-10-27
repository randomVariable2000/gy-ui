/// <reference types="react" />
export interface gyAvatarProps {
    size?: 'small' | 'large' | 'default';
    shape?: 'circle' | 'square';
    icon?: React.ReactNode;
    src?: string;
    style?: React.CSSProperties;
    className?: string;
}
