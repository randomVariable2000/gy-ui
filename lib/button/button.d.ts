import React from 'react';
import PropTypes from 'prop-types';
import { gyButtonProps } from './interface';
declare class Button extends React.PureComponent<gyButtonProps, any> {
    static defaultProps: {
        loading: boolean;
        clicked: boolean;
    };
    static propTypes: {
        type: PropTypes.Requireable<string>;
        shape: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
        htmlType: PropTypes.Requireable<string | undefined>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        loading: PropTypes.Requireable<boolean | object>;
        className: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<string>;
        clicked: PropTypes.Requireable<boolean>;
    };
    timeout?: number;
    delayTimeout?: number;
    constructor(props: gyButtonProps);
    UNSAFE_componentWillReceiveProps(nextProps: gyButtonProps): void;
    componentWillUnmount(): void;
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    render(): JSX.Element;
}
export default Button;
