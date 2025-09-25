import type { JSX, PropsWithChildren } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface CollapsibleProps extends PropsWithChildren {
  title: string | JSX.Element;
  titleStyle?: StyleProp<ViewStyle>;
  activeTitleStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress?(): void;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  textClassName?: string;
}

export interface CollapsibleGroupProps extends PropsWithChildren {
  unique?: boolean;
}
