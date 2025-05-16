import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

export const ArrowUpRightIcon = ({ color, size, style }: { color: string; size: string, style?: StyleProp<ViewStyle> }) => (
  <Svg style={style} width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path stroke={color} strokeLinecap="round" strokeWidth="2" d="M16.5 7.5 6 18" />
    <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6.188s8.048-.679 9.27.543c1.22 1.221.542 9.269.542 9.269" />
  </Svg>
);
