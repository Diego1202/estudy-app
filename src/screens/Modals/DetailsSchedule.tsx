import { COLORS, TITLE } from "@const/constant";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";

export function Details() {
  const nav = useNavigation();
  return (<View >
    <Text style={{ fontSize: TITLE["3xl"], color: '#000' }}>Modal</Text>
    <Pressable style={{  padding: 5 }} onPress={()=>nav.goBack()}>
      <Text style={{ color: COLORS.primary[600] }}>Regresar</Text>
    </Pressable>
  </View>)
}