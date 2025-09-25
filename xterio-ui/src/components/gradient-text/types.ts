import type { PropsWithChildren } from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import type { GradientDirectionType } from '../base/gradient';

export interface GradientTextProp extends PropsWithChildren {
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  text?: string;
  colors?: string[];
  direction?: GradientDirectionType;
  className?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  fontStyle?: TextStyle['fontStyle'];
  fontFamily?: TextStyle['fontFamily'];
}
