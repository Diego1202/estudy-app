export interface timeTypeBlocks {
  start: string;
  end: string;
  title: string;
  teacher: string;
}[]

export interface TimeSlotType {
  iteracion: number,
  total: number,
  total_materias: number,
  color1: string,
  color2: string,
  TimeData: {
    duracion: number,
    title: string,
    teacher: string
  }
}

// types/navigation.ts
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
  MyModal: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Activity: undefined;
  Profile: undefined;
};
