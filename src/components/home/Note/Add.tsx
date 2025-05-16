import { CancelIcon, CheckIcon } from "@assets/icons";
import { COLORS } from "@/constants/constant";
import { Pressable, TextInput, View } from "react-native";

export function AddNote({ visible, handleChange }: { visible: boolean, handleChange: (v: boolean) => void }) {

  return (
    <View
      style={{
        paddingVertical: 2,
        paddingHorizontal: 4,
        width: '100%',
        flexDirection: 'row',
        position: 'relative',
        gap: '2%',
        display: visible ? 'flex' : 'none'
      }}>
      <TextInput
        keyboardAppearance="default"
        placeholder="Ingrese una nueva nota"
        style={{
          width: '68%',
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      />
      <View style={{ width: '30%', gap: '4%', flexDirection: 'row', position: 'relative' }}>
        <Pressable style={{
          position: 'relative',
          width: '48%',
          justifyContent: 'center',
          minWidth: 'auto',
          borderRadius: 20,
          maxWidth: '50%',
          backgroundColor: COLORS.primary[100],
          borderColor: 'blue',
        }}
        >
          <CheckIcon style={{ marginHorizontal: 'auto' }} size={16} color={COLORS.primary[600]} />
        </Pressable>
        <Pressable style={{
          position: 'relative',
          paddingVertical: 5,
          width: '48%',
          justifyContent: 'center',
          minWidth: 'auto',
          borderRadius: 20,
          maxWidth: '50%',
          backgroundColor: COLORS.zinc[100],
          borderColor: 'blue',
        }}
          onPress={() => handleChange(false)}
        >
          <CancelIcon style={{ marginHorizontal: 'auto' }} size={16} color='red' />
        </Pressable>
      </View>
    </View>
  );
}