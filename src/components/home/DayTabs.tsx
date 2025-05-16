import { COLORS } from "@/constants/constant";
import { LinearGradient } from "expo-linear-gradient";
import { memo, useState } from "react";
import { Pressable, Text, View } from "react-native";

export function DayTabs({ days }: { days: { id: number, name: string }[] }) {
  const [seleted, setSelected] = useState((new Date()).getDay());

  return (
    <View style={{ position: 'relative',flexDirection: 'row', flexWrap: 'wrap', gap: 5, justifyContent: 'flex-end', paddingVertical: 5, width: '100%' }}>
      {
        days.map(({ id, name }) => <Chip key={id} id={id} name={name} handleChange={setSelected} selected={seleted === id} />)
      }
    </View>
  )
}

export const Chip = memo(({ id, name, selected, handleChange }: { id: number, name: string, handleChange: (value: number) => void, selected: boolean }) => {

  return (
    <Pressable style={{ zIndex: 4 }} onPress={() => handleChange(id)}>
      {selected ?
        (<LinearGradient
          colors={['#2E7AC9', '#1A4C8A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            padding: 4, paddingHorizontal: 12, borderRadius: 99, shadowColor: '#000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.8,
            shadowRadius: 10,
            elevation: 5,
          }}
        >
          <Text style={{ color: '#fff' }}>{name}</Text>
        </LinearGradient>) :
        <View style={{
          padding: 4, paddingHorizontal: 12, borderRadius: 99, backgroundColor: '#fff', shadowColor: '#000',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.8,
          shadowRadius: 10,
          elevation: 5,
        }}>
          <Text style={{ color: COLORS.primary[600] }}>{name}</Text>
        </View>
      }
    </Pressable>
  )
})