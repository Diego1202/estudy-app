import { StyleProp, ViewStyle } from "react-native"
import Svg, { Path } from "react-native-svg"

export const UserSettingsIcon = ({ color, size, focused, style }: { color: string, size: string, focused: boolean, style?: StyleProp<ViewStyle> }) => {

  if (focused) {
    return (
      <Svg style={style} width={size} height={size} fill="none" viewBox="0 0 24 24">
        <Path fill={color} fillRule="evenodd" d="M17.75 12.25a1 1 0 0 1 1 1v.645c.538.16 1.02.446 1.416.823l.588-.336a1 1 0 0 1 .992 1.736l-.587.336a3.506 3.506 0 0 1 0 1.592l.587.336a1 1 0 0 1-.992 1.736l-.588-.336a3.497 3.497 0 0 1-1.416.823v.645a1 1 0 1 1-2 0v-.645a3.499 3.499 0 0 1-1.416-.823l-.588.336a1 1 0 0 1-.992-1.736l.587-.336a3.503 3.503 0 0 1 0-1.592l-.587-.336a1 1 0 0 1 .992-1.736l.588.336a3.5 3.5 0 0 1 1.416-.823v-.645a1 1 0 0 1 1-1Zm0 3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3Z" clip-rule="evenodd" />
        <Path fill={color} d="M12.234 20.25H2.5a.75.75 0 0 1-.75-.75 7.753 7.753 0 0 1 5.995-7.55A5.252 5.252 0 0 1 9.5 1.75a5.25 5.25 0 0 1 1.755 10.2 7.71 7.71 0 0 1 2.538 1.097 2.25 2.25 0 0 0-.791 4.075v.256a2.25 2.25 0 0 0-.768 2.872Z" />
      </Svg>
    )
  }

  return (
    <Svg style={style} width={size} height={size} fill="none" viewBox="0 0 24 24">
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={"1.5"} d="M14.5 7.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z" />
      <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={"1.5"} d="M2.5 19.5a7 7 0 0 1 10-6.326M18 20c.93 0 1.74-.507 2.171-1.26M18 20c-.93 0-1.74-.507-2.171-1.26M18 20v1.5m0-6.5c.93 0 1.74.507 2.17 1.26M18 15c-.93 0-1.74.507-2.17 1.26M18 15v-1.5m3.5 2-1.33.76M14.5 19.5l1.329-.76m5.671.76-1.329-.76M14.5 15.5l1.33.76m4.34 0c.21.365.33.788.33 1.24 0 .451-.12.875-.329 1.24m-4.342 0a2.487 2.487 0 0 1-.329-1.24c0-.451.12-.875.33-1.24" />
    </Svg>
  )
}