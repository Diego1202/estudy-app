import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from './BottomTabs';
import { Details } from '@screens/Modals/DetailsSchedule';
import { Pressable, Text, View } from 'react-native';
import { COLORS, TITLE } from '@const/constant';
import { ArrowLeftIcon } from '@assets/icons';

const RootStack = createStackNavigator();

export function StackTabs() {
  return (
    <RootStack.Navigator>
      {/* Grupo principal con el navegador de pestañas */}
      <RootStack.Group>
        <RootStack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </RootStack.Group>

      {/* Grupo de pantallas modales */}
      <RootStack.Group screenOptions={{
        presentation: 'modal', header({ navigation, route, options }) {
          return (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLORS.primary[600],
                paddingHorizontal: 10,
                paddingVertical: 20,
                paddingTop: 20,
                gap: 10
              }}>
              <Pressable style={{ zIndex: 2 }} onPress={() => navigation.goBack()}>
                <ArrowLeftIcon size='35' color='#fff' />
              </Pressable>
              <View style={{
                alignItems: 'flex-start',
                backgroundColor: COLORS.primary[600],
                height: 440,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                borderBottomRightRadius: 70,
                borderBottomLeftRadius: 70,
                zIndex: 1
              }} />
              <Text style={{ color: '#fff', fontSize: TITLE['4xl'], fontWeight: '900', zIndex: 5 }}>{options.title}</Text>
            </View>
          )
        },
      }}>
        <RootStack.Screen
          name="MyModal"
          component={Details}
          options={{
            headerShown: true, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            title: 'Descripcion de la materia'
          }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}
