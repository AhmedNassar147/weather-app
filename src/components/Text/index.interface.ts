import type { StyleProp, TextStyle } from "react-native";

export type Size = 'default' | 'title';

export default interface TextPorps {
  children: React.ReactNode;
  size?: Size;
  style?: StyleProp<TextStyle>
  onPress?: () => void
}
