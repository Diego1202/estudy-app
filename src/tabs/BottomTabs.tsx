import { ActivityScreen } from '@/screens/Activity';
import { HomeScreen } from '@/screens/Home';
import { ProfileScreen } from '@/screens/Profile';
import { HomeIcon, TaskDailyIcon, UserSettingsIcon } from '@assets/icons';
import { COLORS } from '@const/constant';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Easing, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={{
        transitionSpec: {
          animation: 'timing',
          config: {
            duration: 150,
            easing: Easing.inOut(Easing.ease),
          },
        },
        headerShadowVisible: false,
        tabBarStyle: {
          height: 75,
          padding: 10,
          backgroundColor: '#fff',
        },
        tabBarActiveTintColor: '#2E7AC9',
        tabBarInactiveTintColor: '#71717A',
        tabBarLabelStyle: {
          marginTop: 6,
          fontSize: 14,
          fontWeight: 'bold',
        },
        tabBarItemStyle: {
          padding: 10
        },
        title: 'StudyApp',
        header(props) {
          return (
            <View
              style={{
                alignItems: 'flex-start',
                backgroundColor: COLORS.primary[600],
                padding: 15,
                paddingTop: 25
              }}>
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
              <Text style={{ color: '#fff', fontSize: 35, fontWeight: '900', zIndex: 5 }}>StudyApp</Text>
            </View>
          );
        },
      }}
    >
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarLabel: 'Actividad',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ paddingHorizontal: 20, paddingVertical: 6, borderRadius: 15, backgroundColor: focused ? COLORS.primary[100] : 'transparent' }}>
              <TaskDailyIcon color={color} size={String(size)} focused={focused} />
            </View>
          )
        }}
      />
      <Tab.Screen name="Home"
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ paddingHorizontal: 20, paddingVertical: 6, borderRadius: 15, backgroundColor: focused ? COLORS.primary[100] : 'transparent' }}>
              <HomeIcon color={color} size={String(size)} focused={focused} />
            </View>
          ),
        }}
        component={HomeScreen} />
      <Tab.Screen name="Profile"
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ paddingHorizontal: 20, paddingVertical: 6, borderRadius: 15, backgroundColor: focused ? COLORS.primary[100] : 'transparent' }}>
              <UserSettingsIcon color={color} size={String(size)} focused={focused} />
            </View>
          ),
        }}
        component={ProfileScreen} />
    </ Tab.Navigator>
  );
}