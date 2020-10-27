import React from 'react';
import { gyAvatarProps } from './interface';
export default class Avatar extends React.PureComponent<gyAvatarProps> {
    static defaultProps: {
        size: string;
        shape: string;
        icon: JSX.Element;
    };
    render(): JSX.Element;
}
