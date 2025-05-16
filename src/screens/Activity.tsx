import { Chip } from "@components/home/DayTabs";
import { COLORS } from "@const/constant";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { View, Text, Appearance, ScrollView, TextInput } from "react-native";

export function ActivityScreen() {
  const [selected, setSelected] = useState(1);
  const [selectedValue,] = useState(new Date());
  const theme = Appearance.getColorScheme();

  return (
    <View style={{ zIndex: 1, position: 'relative', paddingHorizontal: 20, paddingVertical: 10, gap: 40, flexDirection: 'column', display: 'flex' }} >
      <View style={{ position: 'relative', gap: 20 }}
      >
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            gap: 20,
            height: 'auto',
            flexWrap: "wrap",
            position: 'relative',
          }}>
          <View
            style={{
              top: -5,
              left: -5,
              height: 100,
              backgroundColor: theme === 'light' ? COLORS.primary[100] : COLORS.zinc[800],
              opacity: 0.4,
              width: 100,
              borderRadius: 99,
              position: 'absolute',
              zIndex: 1
            }}
          />
          <View style={{
            height: 90,
            width: 90,
            backgroundColor: theme === 'light' ? COLORS.primary[50] : COLORS.zinc[950],
            borderRadius: 99,
            position: 'relative',
            zIndex: 2,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ fontWeight: 'bold', color: COLORS.primary[600] }}>{0}</Text>
          </View>
          <View
            style={{ paddingLeft: 5, width: '70%', position: 'relative', zIndex: 4, flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <View>
              <Text style={{ fontWeight: 'bold' }} >Total</Text>
              <Text style={{ color: COLORS.zinc[100], fontWeight: 'bold' }} >Actividades academicas</Text>
            </View>


            <View style={{ width: '100%', justifyContent: 'flex-end', flexWrap: 'wrap', flexDirection: 'row', gap: 5, position: 'relative' }}>
              {
                [{ id: 1, name: 'Pendiente' }, { id: 2, name: 'Cumplidas' }, { id: 3, name: 'Incumplidas' }]
                  .map(({ id, name }) =>
                    <Chip key={id} id={id} name={name} handleChange={setSelected} selected={selected === id} />
                  )
              }
            </View>
          </View>
        </View>
      </View>

      <View style={[{ position: 'relative', gap: 15, zIndex: 2 }]}>
        <View>
          <Text style={{ color: COLORS.zinc[100], fontWeight: 'bold' }}>Buscar</Text>
          <TextInput style={{
            marginTop: 5,
            width: '100%',
            paddingHorizontal: 14,
            paddingVertical: 7,
            backgroundColor: '#fff',
            borderRadius: 10
          }} placeholder="Nombre de actividad" />
        </View>
        <View style={{ flexDirection: 'row', gap: 5 }}>
          {
            [{ id: 1, name: 'Todas' }, { id: 2, name: 'POO' }, { id: 3, name: 'SIGS' }, { id: 4, name: 'PAV' }]
              .map(({ id, name }) =>
                <Chip key={id} id={id} name={name} handleChange={setSelected} selected={selected === id} />
              )
          }
        </View>
      </View>

      <ScrollView style={{ zIndex: 5, position: 'relative', display: 'flex', flexDirection: 'column', gap: 20, }}>
        <View>
          <View>
            <Text style={{ color: '#fff', fontWeight: 'bold', marginBottom: 10 }}>Esta Semana</Text>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {
                [
                  { id: 1, title: 'Actividad 1', fecha: '2024-05-12', materia: { abreviatura: 'POV', color: 'zinc' } },
                  { id: 2, title: 'Actividad 2', fecha: '2024-05-13', materia: { abreviatura: 'SIGS', color: 'orange' } },
                  { id: 3, title: 'Actividad 3', fecha: '2024-05-13', materia: { abreviatura: 'SIGS', color: 'Persian-Green' } }
                ]
                  .map(({ id, fecha, materia: { abreviatura, color }, title }) => {

                    return (
                      <View key={id}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          padding: 14,
                          backgroundColor: '#fff',
                          borderRadius: 15,
                          shadowColor: '#000',
                          shadowOffset: { width: 0, height: 0 },
                          shadowOpacity: 0.8,
                          shadowRadius: 10,
                          elevation: 5,

                        }}
                      >
                        <View style={{
                          borderRadius: 15,
                          backgroundColor: 'red',
                          borderColor: COLORS[color as keyof typeof COLORS][500],
                          borderWidth: 1,
                          overflow: 'hidden'

                        }}>
                          <LinearGradient
                            colors={[COLORS[color as keyof typeof COLORS][400], COLORS[color as keyof typeof COLORS][700]]}
                            style={{
                              width: 45,
                              height: 45,
                            }} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 12 }}>
                          <Text >{title}</Text>
                          <Text>{fecha}</Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: COLORS.zinc[100],
                            alignSelf: 'flex-start',
                            justifyContent: 'center',
                            paddingHorizontal: 11,
                            paddingVertical: 5,
                            borderRadius: 100,
                            position: 'absolute',
                            right: 15,
                            top: 15
                          }}
                        >
                          <Text style={{ color: COLORS.primary[600], fontWeight: 'bold' }}>{abreviatura}</Text>
                        </View>
                      </View>
                    )
                  })
              }
            </View>
          </View >
          <View>
            <Text style={{ color: COLORS.primary[600], fontWeight: 'bold' }}>Próxima Semana</Text>
            <View style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {
                [
                  { id: 1, title: 'Actividad 1', fecha: '2024-05-12', materia: { abreviatura: 'POV', color: 'zinc' } },
                  { id: 2, title: 'Actividad 2', fecha: '2024-05-13', materia: { abreviatura: 'SIGS', color: 'orange' } },
                  { id: 3, title: 'Actividad 2', fecha: '2024-05-13', materia: { abreviatura: 'SIGS', color: 'Persian-Green' } },
                ]
                  .map(({ id, fecha, materia: { abreviatura, color }, title }) => {

                    return (
                      <View key={id}
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          padding: 14,
                          backgroundColor: '#fff',
                          borderRadius: 15,
                          shadowColor: '#000',
                          shadowOffset: { width: 0, height: 0 },
                          shadowOpacity: 0.8,
                          shadowRadius: 10,
                          elevation: 5,

                        }}
                      >
                        <View style={{
                          borderRadius: 15,
                          backgroundColor: 'red',
                          borderColor: COLORS[color as keyof typeof COLORS][500],
                          borderWidth: 1,
                          overflow: 'hidden'

                        }}>
                          <LinearGradient
                            colors={[COLORS[color as keyof typeof COLORS][400], COLORS[color as keyof typeof COLORS][700]]}
                            style={{
                              width: 45,
                              height: 45,
                            }} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 12 }}>
                          <Text >{title}</Text>
                          <Text>{fecha}</Text>
                        </View>
                        <View
                          style={{
                            backgroundColor: COLORS.zinc[100],
                            alignSelf: 'flex-start',
                            justifyContent: 'center',
                            paddingHorizontal: 11,
                            paddingVertical: 5,
                            borderRadius: 100,
                            position: 'absolute',
                            right: 15,
                            top: 15
                          }}
                        >
                          <Text style={{ color: COLORS.primary[600], fontWeight: 'bold' }}>{abreviatura}</Text>
                        </View>
                      </View>
                    )
                  })
              }
            </View>
          </View >
        </View>
      </ScrollView>

      <View>
        <Text style={{ color: 'white' }}>
          Activity Screen
          {theme}
        </Text>
      </View>
    </View>
  );
}