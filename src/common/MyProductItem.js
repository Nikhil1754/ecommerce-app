import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { addToCart } from '../../redux/slices/productSlice'
import { useDispatch } from 'react-redux'
const MyProductItem = ({item}) => {
  const dispatch=useDispatch();
  const AddToCart=(item)=>{
    dispatch(addToCart(item));
  }
  return (
    <View style={{width:200,height:200,borderRadius:10,elevation:5,backgroundColor:"#fff",marginLeft:20,marginBottom:10}}>
     <Image source={item.image} style={{width:'100%',height:'50%',borderTopLeftRadius:10}}/>
     <Text style={{marginLeft:10,marginTop:10,fontSize:18,fontWeight:'600'}}>{item.name}</Text>
   <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10,alignItems:'center'}}>
    <Text style={{fontSize:18,fontWeight:'600'}}>{"₹"+item.price}</Text>
    <TouchableOpacity onPress={()=>AddToCart(item)} style={{borderWidth:1,borderRadius:10,paddingHorizontal:10,paddingVertical:5}}>
        <Text>Add to Cart</Text>
    </TouchableOpacity>
    </View> 
    <TouchableOpacity style={{width:40,height:40,
    backgroundColor:'#fff',
    borderRadius:20,
    elevation:5,
    position:'absolute',
    top:10,
    right:10,
    justifyContent:'center',
    alignItems:'center'}}>
        <Image style={{width:24,height:24}} source={require("../images/heart.png")}/>
    </TouchableOpacity>
    </View>
  )
}

export default MyProductItem