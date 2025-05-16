import { StyleProp, ViewStyle } from "react-native";
import Svg, { Path } from "react-native-svg";

export const TaskDailyIcon = ({ color, size, focused, style }: { color: string, size: string, focused: boolean, style?: StyleProp<ViewStyle> }) => {

    if (focused) {
        return (
            <Svg style={style} width={size} height={size} fill="none" viewBox="0 0 24 24">
                <Path fill={color} d="M7.498 3c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5A1.75 1.75 0 0 1 7.498 3Z" />
                <Path fill={color} fillRule="evenodd" d="M6.084 2.853A.147.147 0 0 1 6.248 3a3 3 0 0 0 3 3h5.5a3 3 0 0 0 3-3c0-.088.076-.16.164-.148.9.124 1.648.39 2.238.98.602.603.86 1.361.982 2.262.116.867.116 1.97.116 3.34v6.615c0 1.37 0 2.473-.117 3.34-.12.901-.38 1.66-.981 2.262-.602.602-1.36.861-2.26.982-.867.117-1.97.117-3.337.117h-5.11c-1.367 0-2.47 0-3.337-.117-.9-.12-1.658-.38-2.26-.982-.602-.603-.86-1.361-.981-2.262-.117-.867-.117-1.97-.117-3.34V9.435c0-1.37 0-2.473.117-3.34.12-.901.38-1.66.981-2.262.59-.59 1.338-.856 2.238-.98ZM12.752 11a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm-1.5-.293a.75.75 0 1 0-.5-1.414c-.483.171-.93.49-1.309.823-.386.339-.745.73-1.046 1.091-.147.175-.282.346-.402.505a2.056 2.056 0 0 0-.265-.21 1.563 1.563 0 0 0-.436-.207l-.003-.001A.96.96 0 0 0 7 11.25a.75.75 0 0 0-.115 1.491l.006.004.006.004c.056.037.228.176.433.587a.75.75 0 0 0 1.304.066c.043-.064.169-.253.25-.368.163-.23.393-.542.663-.866.272-.326.576-.654.884-.924.316-.277.597-.458.82-.537Zm1.5 6.293a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75Zm-4.75-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z" clip-rule="evenodd" />
            </Svg>
        )
    }

    return (
        <Svg style={style} width={size} height={size} fill="none" viewBox="0 0 24 24">
            <Path stroke={color} strokeWidth="1.5" d="M7.5 3.5c-1.556.047-2.483.22-3.125.862-.879.88-.879 2.295-.879 5.126v6.506c0 2.832 0 4.247.879 5.127C5.253 22 6.668 22 9.496 22h5c2.829 0 4.243 0 5.121-.88.88-.879.88-2.294.88-5.126V9.488c0-2.83 0-4.246-.88-5.126-.641-.642-1.569-.815-3.125-.862" />
            <Path stroke={color} strokeLinejoin="round" strokeWidth="1.5" d="M7.496 3.75c0-.966.784-1.75 1.75-1.75h5.5a1.75 1.75 0 1 1 0 3.5h-5.5a1.75 1.75 0 0 1-1.75-1.75Z" />
            <Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M13.5 11H17" />
            <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 12s.5 0 1 1c0 0 1.588-2.5 3-3" />
            <Path stroke={color} strokeLinecap="round" strokeWidth="1.5" d="M13.5 17H17" />
            <Path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 17h1" />
        </Svg>
    )
}