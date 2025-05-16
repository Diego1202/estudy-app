import { StyleProp, ViewStyle } from "react-native"
import Svg, { Path} from "react-native-svg"

export const CheckIcon = ({ color, size, style }: { color: string, size: number, style?: StyleProp<ViewStyle> }) => (
  <Svg style={style} width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path fill={color} fillRule="evenodd" d="M19.938 5.652a1 1 0 0 1-.59 1.286c-1.059.393-2.22 1.21-3.396 2.29-1.165 1.071-2.288 2.346-3.272 3.583a52.058 52.058 0 0 0-3.266 4.613l-.045.073-.01.017-.003.004a1.001 1.001 0 0 1-1.75-.07c-.678-1.355-1.447-2.107-2.006-2.514a3.728 3.728 0 0 0-.67-.395 1.934 1.934 0 0 0-.186-.072 1 1 0 0 1 .499-1.937c.025.007.001 0 .001 0h.001l.003.001.006.002.014.004a2.268 2.268 0 0 1 .142.043c.085.03.198.072.332.131.27.12.629.31 1.034.605.543.395 1.159.97 1.753 1.795l.088-.13a54.113 54.113 0 0 1 2.498-3.416c1.023-1.284 2.216-2.645 3.483-3.809 1.256-1.154 2.643-2.17 4.054-2.693a1 1 0 0 1 1.286.59Z" clip-rule="evenodd" />
  </Svg>
)