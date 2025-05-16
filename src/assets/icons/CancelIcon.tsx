import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

export const CancelIcon = ({ color, size, style }: { color: string, size: number , style?: StyleProp<ViewStyle> }) => (
  <Svg style={style} width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path stroke={color} stroke-linejoin="round" strokeWidth="1.5" d="M19 5 5 19M5 5l14 14" />
  </Svg>
)