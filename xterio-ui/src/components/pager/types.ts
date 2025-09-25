import type { StyleProp, ViewStyle } from 'react-native';

export interface PagerProps {
  count: number;
  page?: number;
  onPageChange(pagenum: number): void;
  style?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  selectItemStyle?: StyleProp<ViewStyle>;
  arrowStyle?: StyleProp<ViewStyle>;
  textColor?: string;
  selectTextColor?: string;
  className?: string;
  itemClassName?: string;
  selectItemClassName?: string;
  arrowClassName?: string;
}
