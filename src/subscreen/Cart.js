import { View, TouchableOpacity, Text, Image, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/slices/productSlice'

const Cart = () => {
  const dispatch=useDispatch();
  const itemCart = useSelector((state) => {
    return state.products;
  })
  const RemoveFromCart=(index)=>{
    dispatch(removeFromCart(index));
  }

  const [price, setprice] = useState(0);

  return (

    <View style={{ flex: 1, }}>
      <Text style={{fontSize:30,fontWeight:'bold',alignSelf:'center'}}>My Cart</Text>
      <FlatList data={itemCart}
        vertical renderItem={({ item, index }) => {
          return (
           
            <View style={{ width: '80%', height: 200, borderRadius: 10, elevation: 5, backgroundColor: "#fff", marginLeft: 30, marginBottom: 10 ,marginTop:20}}>
              <Image source={item.image} style={{ width: '100%', height: '50%', borderTopLeftRadius: 10 }} />
              <Text style={{ marginLeft: 10, marginTop: 10, fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>{"₹" + item.price}</Text>
                <TouchableOpacity onPress={() => RemoveFromCart(index)} style={{ borderWidth: 1, borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5 }}>
                  <Text>Remove From Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }} />

      <View style={{ position: 'absolute', bottom: 60, width: '100%', height: 50, backgroundColor: 'gray', flexDirection: 'row',justifyContent:'space-around' }}>
        <Text style={{ color: 'red' ,fontSize:30,fontWeight:'bold'}}>CheckOut</Text>
        <Text style={{ color: 'red' ,fontSize:30,fontWeight:'bold'}}>Total</Text>
        <Text style={{ color: 'red' ,fontSize:30,fontWeight:'bold'}}>{price}</Text>
      </View>
    </View>

  )
}

export default Cart