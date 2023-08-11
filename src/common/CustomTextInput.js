import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'

const CustomTextInput = ({value,onChangeText,icon, placeholder,type,keyBoardType}) => {
  return (
    <View style={{ width: "85%", height: 50, borderWidth: 0.5, borderRadius: 10, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 30, paddingHorizontal: 20 }}>
      <Image source={icon} style={{ width: '9%', height: 24 }} />
      <TextInput value={value}
      
      keyboardType={keyBoardType?keyBoardType:'default'} onChangeText={(txt)=>{
        onChangeText(txt)
      }}  placeholder={placeholder} secureTextEntry={type?true:false} style={{ marginLeft: 10,width:'91%',height:'90%'}} />
    </View>
  )
}

export default CustomTextInput;