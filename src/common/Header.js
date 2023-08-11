import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{width:'100%',height:60,top:0,flexDirection:'row',alignItems:'center',justifyContent:'space-between',backgroundColor:'#fff',borderBottomWidth:0.05,borderTopWidth:0.05}}>
      <Text style={{fontSize:20,marginLeft:20,fontWeight:'bold',color:'#AF0A57'}}>Alpha Store</Text>
      <TouchableOpacity style={{backgroundColor:'black',width:60,height:40,borderRadius:10,justifyContent:'center',alignItems:'center',padding:10,marginRight:10}}><Text style={{color:"white"}}>Dark</Text></TouchableOpacity>
    </View>
  )
}

export default Header