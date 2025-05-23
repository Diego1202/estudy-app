import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

export const HomeIcon = ({ color, size, focused, style }: { color: string, size: string, focused: boolean, style?: StyleProp<ViewStyle> }) => {
  if (focused) {
    return (
      <Svg style={style} width={size} height={size} fill="none" viewBox="0 0 24 24">
        <Path fill={color} fillRule="evenodd" d="M9.524 1.996c.836-.47 1.61-.746 2.476-.746.866 0 1.64.277 2.476.746.81.454 1.738 1.125 2.905 1.97l1.51 1.09c.936.677 1.684 1.218 2.248 1.719.583.517 1.018 1.032 1.295 1.68.277.65.344 1.315.307 2.083-.036.74-.173 1.635-.345 2.75l-.315 2.05c-.243 1.585-.437 2.846-.722 3.828-.294 1.016-.709 1.823-1.45 2.44-.738.613-1.618.887-2.692 1.017-1.045.127-2.363.127-4.028.127h-2.378c-1.665 0-2.983 0-4.028-.127-1.074-.13-1.953-.404-2.691-1.018-.742-.616-1.156-1.423-1.45-2.439-.285-.982-.48-2.244-.723-3.827l-.315-2.052c-.171-1.114-.309-2.008-.344-2.749-.038-.768.03-1.433.306-2.083.277-.648.713-1.163 1.295-1.68.564-.5 1.312-1.042 2.249-1.719l1.509-1.09c1.167-.845 2.095-1.516 2.905-1.97Zm.09 14.215a1 1 0 0 0-1.228 1.578C9.364 18.551 10.632 19 12 19c1.369 0 2.636-.45 3.614-1.21a1 1 0 0 0-1.228-1.58c-.62.484-1.454.79-2.386.79-.931 0-1.765-.306-2.386-.79Z" clip-rule="evenodd" />
      </Svg>
    )
  }

  return (<Svg style={style} width={size} height={size} fill="none" viewBox="0 0 24 24">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M15 17c-.8.622-1.85 1-3 1s-2.2-.378-3-1"
    ></Path>
    <Path
      stroke={color}
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M2.352 13.213c-.353-2.297-.53-3.445-.096-4.464.435-1.018 1.398-1.715 3.325-3.108L7.021 4.6C9.418 2.867 10.617 2 12.001 2c1.382 0 2.58.867 4.978 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.75 4.884-1.919 5.856-1.168.971-2.875.971-6.29.971h-2.278c-3.414 0-5.122 0-6.29-.971-1.168-.972-1.418-2.6-1.918-5.857z"
    ></Path>
  </Svg>)
};
