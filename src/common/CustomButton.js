import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,title,bgColor,textColor}) => {
  return (
   <TouchableOpacity style={{
    width:'85%',
    height:50,
    alignSelf:'center',
    backgroundColor:bgColor,
    marginTop:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10

   }}
   onPress={onPress}> 
    <Text style={{color:textColor}}>{title}</Text>
   </TouchableOpacity>
  )
}

export default CustomButton