import React from 'react';
import { gyIconProps, gyIconState } from './interface';
export declare class Icon extends React.PureComponent<gyIconProps, gyIconState> {
    state: {
        svgHtml: string;
    };
    componentDidMount(): Promise<void>;
    UNSAFE_componentWillReceiveProps(props: gyIconProps): Promise<void>;
    getSvg: (type: string) => Promise<string>;
    render(): JSX.Element;
}
export default Icon;
