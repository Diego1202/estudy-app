import { StyleProp, ViewStyle } from "react-native"
import Svg, { Path } from "react-native-svg"

export const PlusIcon = ({ color, size, style }: { color: string, size: string, style?: StyleProp<ViewStyle> }) => {

  return (
    <Svg style={style} width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path fill={color} fillRule="evenodd" d="M12 3a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V4a1 1 0 0 1 1-1Z" clipRule="evenodd" />
    </Svg>
  )
}