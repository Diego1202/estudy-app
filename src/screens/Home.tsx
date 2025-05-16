import { Notes } from "@components/home/Notes";
import { Schedule } from "@components/home/Schedule";
import { COLORS, TITLE } from "@const/constant";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Appearance, Pressable, ScrollView, Text, useColorScheme, View } from "react-native";

import { Calendar, CalendarList, DateData, LocaleConfig, NewCalendarList } from "react-native-calendars";

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/type';

type NavigationProp = StackNavigationProp<RootStackParamList>;

LocaleConfig.locales['es-EC'] = {
  monthNames: [
    'ENERO',
    'FEBRERO',
    'MARZO',
    'ABRIL',
    'MAYO',
    'JUNIO',
    'JULIO',
    'AGOSTO',
    'SEPTIEMBRE',
    'OCTUBRE',
    'NOVIEMBRE',
    'DICIEMBRE'
  ],
  monthNamesShort: ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'],
  dayNames: ['DOMINGO', 'LUNES', 'MARTES', 'MIÉRCOLES', 'JUEVES', 'VIERNES', 'SÁBADO'],
  dayNamesShort: ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SÁ'],
  today: "HOY"
};
LocaleConfig.defaultLocale = 'es-EC';

export function HomeScreen() {
  const { navigate } = useNavigation<NavigationProp>();
  const [selectedDate, setSelectedDate] = useState('2025-05-25');

  return (
    <ScrollView style={{ zIndex: 1, position: 'relative' }} >
      <View
        style={[{ zIndex: 2, marginTop: 10, position: 'relative', paddingInline: 20, gap: 20 }]}
      >
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: "wrap",
          position: 'relative',
          backgroundColor: 'transparent',
          marginTop: 10
        }}>
          <View style={{
            width: '73%',
            height: 'auto',
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 10,
            zIndex: 20
          }}>
            <Calendar

              hideExtraDays={true}
              enableSwipeMonths={true}
              key={'10'}
              hideArrows={true}
              // displayLoadingIndicator
              markingType={'multi-dot'}
              onDayPress={(day: DateData) => {
                console.log('selected day', day.dateString);
                setSelectedDate(day.dateString);
              }}
              onDayLongPress={(day: DateData) => {
                console.log('selected Long Press day', day.dateString);
              }}
              markedDates={{
                [selectedDate]: {
                  marked: true, selected: true, dots: [
                    { key: 'vacation', color: 'blue', selectedDotColor: 'red' },
                    { key: 'massage', color: 'red', selectedDotColor: 'blue' }
                  ]
                },
                '2025-05-02': { marked: true },
                '2025-05-03': { marked: true, dots: [{ color: 'red' }] },
              }}
              renderHeader={(date?: LocaleConfig) => {
                const fecha = new Date(date);
                return <Text style={{
                  fontWeight: 'bold',
                  textTransform: 'capitalize',
                  color: '#1f61ae',
                  width: '100%',
                  textAlign: 'left',
                  fontSize: TITLE.xl
                }}>{fecha.toLocaleString('es-EC', { month: 'long' })}</Text>
              }}

              dayComponent={({ date, state, marking }) => {
                return (
                  <Pressable
                    onPress={() => console.log(date)}
                    onLongPress={() => console.log(date?.dateString)}
                    style={{ width: 25, height: 21, justifyContent: 'center', alignItems: 'center', }}
                  >
                    <Text style={[{
                      textAlign: 'center', fontSize: 15
                    }, state !== 'today' ? {
                      color: COLORS.zinc[800]
                    } : {
                      fontWeight: '700',
                      color: COLORS.primary[600]
                    }]}>
                      {date?.day}
                    </Text>
                  </Pressable>
                );
              }}

              theme={{
                backgroundColor: 'transparent',
                calendarBackground: 'transparent',
                textSectionTitleColor: '#b6c1cd',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                arrowColor: '#1f61ae',
                monthTextColor: '#1f61ae',
                textMonthFontWeight: 'bold',
                textMonthFontSize: 17,
                textDayHeaderFontSize: 14,
                textDayFontSize: 12,
                textDayStyle: {
                  marginTop: 1,
                },
                weekVerticalMargin: 0,
                stylesheet: {
                  calendar: {
                    header: {
                      margin: 0,
                      padding: 0,
                    },
                    main: {
                      marginTop: 0,
                    }
                  }
                }
              }}

            />
          </View>
          <View style={{
            width: 'auto',
            backgroundColor: '#fff',
            borderRadius: 20,
            padding: 10,
            justifyContent: 'center', // centra verticalmente
            alignItems: 'center',      // centra horizontalmente los textos
            zIndex: 10
          }}>
            <Text style={{ fontWeight: 'bold', color: '#1F61AE', fontSize: TITLE.xl }} >Mié</Text>
            <View style={{ marginTop: 10, padding: 0 }}>
              <Text style={{ fontWeight: '700', textAlign: 'center', color: '#1F61AE', fontSize: TITLE.md }} >Materias</Text>
              <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#1F61AE', fontSize: TITLE["4xl"], marginVertical: 5 }} >5</Text>
              <Pressable onPress={() => navigate('MyModal')}>
                <LinearGradient
                  colors={['#2E7AC9', '#1A4C8A']}
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
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}
                  >
                    VER
                  </Text>
                </LinearGradient>
              </Pressable>
            </View>
          </View>
        </View>

        <Schedule />

        <Notes />

      </View>
    </ScrollView >
  );
}