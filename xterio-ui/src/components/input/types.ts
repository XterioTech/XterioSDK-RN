import type { PropsWithChildren, ReactNode } from 'react';
import type {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

export interface InputThemeConfigProps {
  textColor?: string;
  labelColor?: string;
  cursorColor?: string;
  borderColor?: string;
  focusBorderColor?: string;
  disabledBorderColor?: string;
  errorBorderColor?: string;
}

type OmitInputProps = Omit<TextInputProps, 'onFocus' | 'onBlur' | 'onChange'>;
export interface InputProps extends PropsWithChildren, OmitInputProps {
  label?: string;
  theme?: 'dark' | 'normal';
  errorMsg?: string;
  showPassword?: boolean;
  showClear?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  inputTextStyle?: StyleProp<TextStyle>;
  onFocus?(val?: string): void;
  onBlur?(val?: string): void;
  onChange?(val?: string): void;
  onClear?(): void;
  suffixComp?: ReactNode;
  prefixComp?: ReactNode;
  cursorColor?: string;
  className?: string;
  containerClassName?: string;
  inputTextClassName?: string;
}

export interface InputCounterProps
  extends Omit<InputProps, 'style' | 'onChange' | 'value' | 'defaultValue'> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  type?: 'int' | 'float';
  style?: StyleProp<ViewStyle>;
  iconSize?: number;
  iconColor?: string;
  iconDisabledColor?: string;
  onChange?(n: number): void;
}

export interface InputRangeProps
  extends Omit<InputProps, 'style' | 'onChange' | 'value' | 'defaultValue'> {
  min?: number;
  max?: number;
  type?: 'int' | 'float';
  leftPlaceholder?: string;
  rightPlaceholder?: string;
  values?: [number, number];
  style?: StyleProp<ViewStyle>;
  onChange?(p: { data: [number, number]; errorMsg?: string }): void;
  onFocus?(): void;
  onBlur?(): void;
}
