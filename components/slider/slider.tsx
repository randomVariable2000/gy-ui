import React from 'react';
import classNames from 'classnames'
import {gySliderProps} from './interface'
 
export default class Slider extends React.PureComponent<gySliderProps>{
    refSlider:HTMLElement;
    moving:boolean = false;
    static defaultProps = {
        defaultValue:0,
        vertical:false,
        disabled:false,
        max:100,
        min:3,
        step:1,
    }

    constructor(props:any){
        super(props);
        this.refSlider = React.createRef();
        this.state = {
            value:props.defaultValue as number,
        }
    }

    getValue = ()=>{
        const {value} = this.props;
        return value !== undefined ? value : this.state.value;
    }

    getStepPercent = ()=>{
        const {max, min, step} = this.props;
        const range = max - min;
        const percent = step / range;
        return +percent.toFixed(4)
    }

    getPercent = ()=>{
        const {max, min} = this.props;
        const value = this.getValue();
        const range = max - min;
        const percent = (value - min) / range;
        return +percent.toFixed(4);
    }

    onSliderClick = (e:React.MouseEvent<HTMLDivElement>)=>{
        const {max, min} = this.props;
        const slider = this.refSlider;
        const sliderRect = slider.getBoundingClientRect() as DOMRect;
        const sliderWidth = sliderRect.width;
        const left = e.clientX - (sliderRect.x ||　sliderRect.left);
        const newPercent = +(left / sliderWidth).toFixed(4);
        const oldPercent = this.getPercent();
        const stepPercent = this.getStepPercent();
        const change = newPercent - oldPercent;
        const times = Math.abs(Math.round(change / stepPercent));
        if(times !== 0){
            const changePercent = times * stepPercent;
            const percent = change > 0 ? oldPercent + changePercent : oldPercent - changePercent;
            this.onChangeTrigger((Math.round((max - min) * percent)) > 0 ? (min + Math.round((max - min) * percent)) : min);
        }
        this.moving = false;
    }

    onSliderClickVertical = (e:React.MouseEvent<HTMLDivElement>)=>{
        const {max, min} = this.props;
        const slider = this.refSlider;
        const sliderRect = slider.getBoundingClientRect() as DOMRect;
        const sliderHeight = sliderRect.height;
        const top = e.clientY - (sliderRect.y ||　sliderRect.top);
        const newPercent = +(top / sliderHeight).toFixed(4);
        const oldPercent = this.getPercent();
        const stepPercent = this.getStepPercent();
        const change = newPercent - oldPercent;
        const times = Math.abs(Math.round(change / stepPercent));
        if(times !== 0){
            const changePercent = times * stepPercent;
            const percent = change > 0 ? oldPercent + changePercent : oldPercent - changePercent;
            this.onChangeTrigger((Math.round((max - min) * percent)) > 0 ? (min + Math.round((max - min) * percent)) : min);
        }
        this.moving = false;
    }


    onSliderMouseDown = ()=>{
        const {max, min} = this.props;
        const slider = this.refSlider;
        const sliderRect = slider.getBoundingClientRect() as DOMRect;
        const sliderWidth = sliderRect.width;  // 滑动条宽度

        const bodyMouseMove = (e: MouseEvent) => {
            const left = e.clientX - (sliderRect.x || sliderRect.left); // 点击位置相对滑动条偏移量
            // 当前偏移量处于滑动条外 不进行value刷新
            if (left < 0 || left > sliderWidth) {
              return;
            }
            const newPercent = +(left / sliderWidth).toFixed(4);
            const oldPercent = this.getPercent();
            const stepPercent = this.getStepPercent();
            const change = newPercent - oldPercent;
            const times = Math.abs(Math.round(change / stepPercent));
            if (times !== 0) {
                const changePercent = times * stepPercent;
                const percent = change > 0 ? oldPercent + changePercent : oldPercent - changePercent;
                this.onChangeTrigger(min + Math.round((max - min) * percent));
            }
        }
        const bodyMouseUp = () => {
          document.body.removeEventListener('mousemove', bodyMouseMove);
          document.body.removeEventListener('mouseup', bodyMouseUp);
        };

        document.body.addEventListener('mousemove', bodyMouseMove);
        document.body.addEventListener('mouseup', bodyMouseUp);
    }

    onSliderMouseDownVertical = ()=>{
        const {max, min} = this.props;
        const slider = this.refSlider;
        const sliderRect = slider.getBoundingClientRect() as DOMRect;
        const sliderHeight = sliderRect.height;  // 滑动条宽度

        const bodyMouseMove = (e: MouseEvent) => {
            const top = e.clientY - (sliderRect.y || sliderRect.top); // 点击位置相对滑动条偏移量
            // 当前偏移量处于滑动条外 不进行value刷新
            if (top < 0 || top > sliderHeight) {
              return;
            }
            const newPercent = +(top / sliderHeight).toFixed(4);
            const oldPercent = this.getPercent();
            const stepPercent = this.getStepPercent();
            const change = newPercent - oldPercent;
            const times = Math.abs(Math.round(change / stepPercent));
            if (times !== 0) {
                const changePercent = times * stepPercent;
                const percent = change > 0 ? oldPercent + changePercent : oldPercent - changePercent;
                this.onChangeTrigger(min + Math.round((max - min) * percent));
            }
        }
        const bodyMouseUp = () => {
          document.body.removeEventListener('mousemove', bodyMouseMove);
          document.body.removeEventListener('mouseup', bodyMouseUp);
        };

        document.body.addEventListener('mousemove', bodyMouseMove);
        document.body.addEventListener('mouseup', bodyMouseUp);
    }

    onChangeTrigger = (value: number)=>{
        console.log(value);
        if (value === this.getValue()) {
            return;
        }

        const {onChange, disabled} = this.props;
        if (disabled) {
          return;
        }

        this.setState({
          value,
        });
        if (onChange) {
          onChange(value);
        }
    }

    render(){
        const {className, vertical, style, children, defaultValue, disabled, onChange, step, ...other} = this.props;
        const preCls = 'gy-slider';
        const clsName = classNames(
            className,
            preCls,
            {[`${preCls}-vertical`]: vertical},
            {[`${preCls}-disabled`]: disabled},
        );

        const barStyle = {width:`${this.getPercent() * 100}%`}
        const barVerticalStyle = {height:`${this.getPercent() * 100}%`}
        return (
            <div
                className={clsName}
                style={style}
                onClick = {vertical ?　this.onSliderClickVertical :this.onSliderClick}
                onMouseDown={ vertical ?　this.onSliderMouseDownVertical:this.onSliderMouseDown}
                {...other}
                ref={
                    (ele)=>{
                        if(ele){
                            this.refSlider = ele;
                        }
                    }
                }
            >
                <div className={vertical ? `${preCls}-vertical-process`:`${preCls}-process`}></div>
                <div className={vertical ? `${preCls}-vertical-bar` : `${preCls}-bar`} style={vertical ? barVerticalStyle : barStyle}></div>
            </div>
        )
    }

}