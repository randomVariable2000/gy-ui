export interface gyAbstractCheckboxProps {
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
}

export interface gyCheckboxProps extends gyAbstractCheckboxProps {
  indeterminate?: boolean;
}

export interface gyCheckboxOptionType {
  label: string;
  value: gyCheckboxValueType;
  disabled?: boolean;
}

export type gyCheckboxValueType = string | number;

export interface gyAbstractCheckboxGroupProps {
  prefixCls?: string;
  className?: string;
  options?: Array<gyCheckboxOptionType | string>;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export interface gyCheckboxGroupProps extends gyAbstractCheckboxGroupProps {
  defaultValue?: Array<gyCheckboxValueType>;
  value?: Array<gyCheckboxValueType>;
  onChange?: (checkedValue: Array<gyCheckboxValueType>) => void;
}

export interface gyCheckboxGroupState {
  value: any;
}