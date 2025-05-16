import { COLORS } from "@const/constant";
import { Appearance, Text, View } from "react-native";

export function ProfileScreen() {
  const color = Appearance.getColorScheme();

  return (
    <View>
      <View
        style={[{ zIndex: 2, marginTop: 10, position: 'relative', paddingInline: 20, gap: 20 }]}
      >
        <Text style={{ color: 'white' }}>
          Profile Screen
          {color}
        </Text></View>
    </View>
  );
}