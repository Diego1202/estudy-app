import { BLOCK_HEIGHT, COLORS, COLORS_DEFAULT } from "@/constants/constant";
import { timeTypeBlocks } from "@/type";
import { groupItemsByStartHour } from "@utils/timeUtils";
import {  useEffect, useState } from "react";
import { Text, View } from "react-native";

import { TimeSlot } from "./TimeSlot";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function TimeBlocks({ timeData }: { timeData: timeTypeBlocks[] }) {
  const grouped = groupItemsByStartHour(timeData);
  const [CLRS, setCLRS] = useState<(keyof typeof COLORS)[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(COLORS_DEFAULT)
      .then((value) => {
        if (value) {
          const parsedValue = JSON.parse(value);
          console.log('Valor obtenido:', parsedValue);
          setCLRS(parsedValue);
        }
      })
      .catch((error) => {
        console.error('Error al obtener el valor:', error);
      });
  }, [])

  if (CLRS.length === 0) return <View>
    <Text style={{ color: '#000', fontWeight: 'bold' }}>Cargando...</Text>
  </View>;

  return (
    <View style={{ paddingHorizontal: 0, zIndex: 10, width: '100%', overflow: 'hidden', height: 'auto', marginTop: 7 }}>
      {grouped.map(({ hora, materias }, idx) => {
        const color = COLORS[CLRS[idx]][200];  // Accede a 'primary' y al tono 100
        return (
          <View
            key={idx}
            style={{ flexDirection: 'row', marginBottom: grouped.length <= (idx + 1) ? 0 : 10, height: BLOCK_HEIGHT }}
          >
            <View
              style={{
                width: '20%',
                height: BLOCK_HEIGHT,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                backgroundColor: color,
                marginRight: '5%'
              }}
            >
              <Text style={{ fontWeight: 'bold', color: COLORS.zinc[700] }}>{hora}</Text>
            </View>

            <View style={{ width: '75%', flexDirection: 'row', gap: 10, position: 'relative' }}>
              {materias.map((materia, i) => (
                <TimeSlot
                  key={i}
                  color1={COLORS[CLRS[idx]]['300']}
                  color2={COLORS[CLRS[idx]]['100']}
                  TimeData={materia}
                  total={timeData.length}
                  total_materias={materias.length}
                  iteracion={idx}
                />
              ))}
            </View>
          </View>
        )
      })}
    </View>
  );
};