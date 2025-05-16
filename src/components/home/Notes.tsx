import { TouchableOpacity, View, TextInput as TextInp, Pressable, useColorScheme, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, TITLE } from "@/constants/constant";
import { Note } from "./Note/Note";
import { useEffect, useState } from "react";
import { AddNote } from "./Note/Add";
import { PlusIcon } from "@assets/icons";

const notes = [
  { id: 1, text: 'Examen para el día lunes', isCompleted: true },
  { id: 2, text: 'Cumpleaños de una loca', isCompleted: false },
  { id: 3, text: 'Sacar basura', isCompleted: true },
  { id: 4, text: 'Mantenimiento a la computadora', isCompleted: false },
  { id: 5, text: 'Pasear al gato', isCompleted: true },
];

export function Notes() {
  const theme = useColorScheme();
  const [addNote, setAddNote] = useState(false);

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={{ width: '100%', flexDirection: 'row', height: 50, borderRadius: 25, justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: COLORS.primary[600], fontWeight: 'bold', fontSize: TITLE.xl }}>Notas rápidas</Text>
        <Pressable onPress={() => setAddNote(true)}>
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
                Nota
              </Text>
            </View>
          </LinearGradient>
        </Pressable>
      </View>
      <View style={{
        width: 'auto',
        backgroundColor: theme === 'light' ? '#fff' : '#252527',
        borderRadius: 20,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: '7%',
        maxHeight: 280,
        overflow: 'hidden'
      }}>
        <AddNote handleChange={setAddNote} visible={addNote} />
        {
          notes.map(({ id, isCompleted, text }) => (<Note
            key={id}
            id={id}
            text={text}
            checked={isCompleted}
          />))
        }
      </View>
    </View>
  )
}