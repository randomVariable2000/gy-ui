import React from 'react';
import { gySliderProps } from './interface';
export default class Slider extends React.PureComponent<gySliderProps> {
    refSlider: HTMLElement;
    moving: boolean;
    static defaultProps: {
        defaultValue: number;
        vertical: boolean;
        disabled: boolean;
        max: number;
        min: number;
        step: number;
    };
    constructor(props: any);
    getValue: () => any;
    getStepPercent: () => number;
    getPercent: () => number;
    onSliderClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    onSliderClickVertical: (e: React.MouseEvent<HTMLDivElement>) => void;
    onSliderMouseDown: () => void;
    onSliderMouseDownVertical: () => void;
    onChangeTrigger: (value: number) => void;
    render(): JSX.Element;
}
