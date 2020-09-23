export interface GyAbstractCheckboxProps {
  prefixCls?: string;
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  value?: any;
  name?: string;
  children?: React.ReactNode;
  id?:string;
}

export interface GyCheckboxProps extends GyAbstractCheckboxProps {
  indeterminate?: boolean;
}

export interface GyCheckboxOptionType {
  label: string;
  value: GyCheckboxValueType;
  disabled?: boolean;
}

export type GyCheckboxValueType = string | number;

export interface GyAbstractCheckboxGroupProps {
  prefixCls?: string;
  className?: string;
  options?: Array<GyCheckboxOptionType | string>;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export interface GyCheckboxGroupProps extends GyAbstractCheckboxGroupProps {
  defaultValue?: Array<GyCheckboxValueType>;
  value?: Array<GyCheckboxValueType>;
  onChange?: (checkedValue: Array<GyCheckboxValueType>) => void;
}

export interface GyCheckboxGroupState {
  value: any;
}