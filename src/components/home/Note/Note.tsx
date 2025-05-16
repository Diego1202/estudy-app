import { COLORS } from "@/constants/constant";
import { Pressable, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import { TrashIcon } from "@assets/icons";

export function Note({ checked, text, id }: { checked: boolean, text: string, id: number }) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <View style = {{
      paddingVertical: 2,
      paddingHorizontal: 4,
      width: '100%',
      flexDirection: 'row',
      display: 'flex',
      position: 'relative',
      gap: '1%'
    }}>
      <BouncyCheckbox
        style={{
          width: '84%'
        }}
        size={21}
        textComponent={<Text
          style={{
            width: '93%',
            color: isChecked ? COLORS.primary[600] : COLORS.zinc[700],
            fontWeight: isChecked ? '900' : '700',
            paddingHorizontal: 10,
            paddingVertical: 0,
          }}
        >{text}</Text>}
        fillColor={COLORS.primary[600]}
        unFillColor="transparent"
        iconStyle={{ borderColor: COLORS.zinc[700] }}
        innerIconStyle={{ borderWidth: 1.5 }}
        isChecked={isChecked}
        textStyle={{ fontFamily: "JosefinSans-Regular" }}
        onPress={setIsChecked}
      />
      <Pressable style={{
        display: 'flex',
        alignContent: 'center',
        position: 'relative',
        width: '14%',
        paddingVertical: 5,
        justifyContent: 'center',
        minWidth: 'auto',
        borderRadius: 20,
        maxWidth: '50%',
        backgroundColor: COLORS.zinc[100],
        borderColor: 'blue',
      }}
        onPress={() => { console.log('Note delte is: ', id) }}
      >
        <TrashIcon style={{ marginHorizontal: 'auto' }} size={16} color='red' />
      </Pressable>
    </View>
  )
}