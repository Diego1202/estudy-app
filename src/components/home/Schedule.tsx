import { Text, TouchableOpacity, useColorScheme, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { timeTypeBlocks } from "@/type";
import { TimeBlocks } from "./TimeBlocks";
import { DayTabs } from "./DayTabs";
import { PlusIcon } from "@assets/icons";
import { TITLE } from "@const/constant";


const items: timeTypeBlocks[] = [
  { start: '08:00', end: '09:00', title: 'POO', teacher: 'Profe A' },
  // { start: '09:00', end: '10:00', title: 'Alias 1', teacher: 'Profe B' },
  // { start: '09:00', end: '10:00', title: 'Alias 2', teacher: 'Profe C' },
  { start: '10:00', end: '11:00', title: 'Alias 3', teacher: 'Profe D' },
  // { start: '14:00', end: '16:00', title: 'Alias 4', teacher: 'Profe E' },
  { start: '17:00', end: '18:00', title: 'Alias 5', teacher: 'Profe F' },
];

export function Schedule() {
  const theme = useColorScheme();

  return (
    <View style={{ zIndex: 1 }}>
      <View style={{ width: '100%', flexDirection: 'row', height: 50, borderRadius: 25, justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: TITLE.xl }}>Horario de Clases</Text>
        <TouchableOpacity onPress={() => console.log('Se agregará otro')} activeOpacity={0.8}>
          <LinearGradient
            colors={['#84848C', '#4D4C52']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <PlusIcon color="#fff" size="14" />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginLeft: 5,
                }}
              >
                Horario
              </Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: theme === 'light' ? '#fff' : '#252527',
          borderRadius: 20,
          padding: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <DayTabs days={[
          { id: 1, name: 'Lunes', },
          { id: 2, name: "Martes" },
          { id: 3, name: 'Miércoles' },
          { id: 4, name: 'Jueves' },
          { id: 5, name: 'Viernes' },
        ]} />
        <TimeBlocks timeData={items} />
      </View>
    </View >
  )
}
