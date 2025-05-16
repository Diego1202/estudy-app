import { COLORS, COLORS_DEFAULT } from '@const/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { StackTabs } from '@tab/StackNavigation';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// SplashScreen.preventAutoHideAsync();

export default function App() {

  useEffect(() => {
    AsyncStorage.getItem(COLORS_DEFAULT).then((value) => {
      if (!value) {
        AsyncStorage.setItem(COLORS_DEFAULT, JSON.stringify([
          'Skeptic',
          'Link-water',
          'amour',
          'mabel',
          'selago',
          'quarter',
        ]))
          .then(() => {
            console.log('Color guardado correctamente');
          })
          .catch((error) => {
            console.error('Error al guardar el color:', error);
          });
      }
    }).catch((error) => {
      console.error('Error al obtener el color:', error);
    });
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar animated
            style={'inverted'}
            hideTransitionAnimation='fade'
            backgroundColor={COLORS.primary[600]} />
          <StackTabs />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}