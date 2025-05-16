import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

export const ArrowLeftIcon = ({ color, size, style }: { color: string; size: string, style?: StyleProp<ViewStyle> }) => (
  <Svg style={style} width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path fill={color} d="M15.805 5.407a1 1 0 0 0-1.398-.212 53.222 53.222 0 0 0-3.063 2.457c-.762.662-1.55 1.396-2.156 2.081-.302.342-.58.695-.787 1.04C8.211 11.088 8 11.523 8 12c0 .476.21.912.401 1.228.208.344.485.697.787 1.039.606.685 1.394 1.42 2.156 2.081a53.357 53.357 0 0 0 3.063 2.457A1 1 0 0 0 16 18V6a.995.995 0 0 0-.195-.593Z" />
  </Svg>
);
