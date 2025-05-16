import { BLOCK_HEIGHT, COLORS } from "@/constants/constant";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TimeSlotType } from "@/type";
import { ArrowUpRightIcon } from "@assets/icons";

export function TimeSlot({ TimeData: { duracion, teacher, title }, color1, color2, total, total_materias, iteracion }: TimeSlotType) {

  return <Pressable
  
  
  onPress={()=>console.log('El horario seleccnado es ',)}
    style={{
      height: ((BLOCK_HEIGHT * (duracion + 1)) + (duracion * 10)),
      position: 'relative',
      borderRadius: 10,
      overflow: 'hidden',
      zIndex: total - (iteracion + 1),
      width: total_materias > 1 ? '43%' : '100%',
    }}
  >
    <LinearGradient
      colors={[color1, color2]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        paddingVertical: 13,
        paddingHorizontal: 10,
        position: 'relative',
        width: 'auto',
        minHeight: '100%',
        justifyContent: 'space-between',

      }}
    >
      <View
        style={{
          backgroundColor: '#fff',
          alignSelf: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 11,
          paddingVertical: 5,
          borderRadius: 100,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.8,
          shadowRadius: 10,
          elevation: 5,
        }}
      >
        <Text style={{ color: COLORS.primary[600], fontWeight: 'bold' }}>{title}</Text>
      </View>
      <Text style={{ color: COLORS.zinc[600] }}>{teacher}</Text>
      <Text style={{ color: COLORS.primary[600], position: 'absolute', top: 10, right: 10 }}>
        <ArrowUpRightIcon size="18" color={COLORS.primary[600]} />
      </Text>
    </LinearGradient>
  </Pressable>;
}