import { View, Text, Image, FlatList,ScrollView ,TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import Header from '../common/Header'
import { products } from '../Products'
import MyProductItem from '../common/MyProductItem'

const Main = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [tShirtList, settShirtList] = useState([]);
    const [jeansList, setJeansList] = useState([]);
    const [shoesList, setShoesList] = useState([]);
    const [jacketList, setJacketList] = useState([]);
    const [slipperList, setSlipperList] = useState([]);
    const [trouserList, setTrouserList] = useState([]);
    useEffect(() => {
        let tempCategory = []
        products.category.map(item => {
            tempCategory.push(item);
        })
        setCategoryList(tempCategory);
        settShirtList(products.category[0].data);
        setJeansList(products.category[1].data);
        setShoesList(products.category[2].data);
        setJacketList(products.category[3].data);
        setSlipperList(products.category[4].data);
        setTrouserList(products.category[5].data);
    }, []);

    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Header />
                <Image source={require('../images/bannerMain.jpg')}
                    style={{ width: '94%', height: 200, borderRadius: 10, alignSelf: 'center', marginTop: 30 }} />
                <View style={{ marginTop: 20 }}>
                    <FlatList data={categoryList}
                        showsHorizontalScrollIndicator={false}
                        horizontal renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={{ padding: 10, borderWidth: 1, marginLeft: 20, borderRadius: 20 }}>
                                    <Text style={{ color: '#000' }}>{item.category}</Text>
                                </TouchableOpacity>
                            );
                        }} />
                </View>
                <Text style={{ marginTop: 20, marginLeft: 20, color: '#000', fontSize: 16, fontWeight: '600' }}>
                    New T Shirts
                </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList data={tShirtList}
                        showsHorizontalScrollIndicator={false}
                        horizontal renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item} />
                            );
                        }} />
                </View>
                <Text style={{ marginTop: 20, marginLeft: 20, color: '#000', fontSize: 16, fontWeight: '600' }}>
                    New Jeans List
                </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList data={jeansList}
                        showsHorizontalScrollIndicator={false}
                        horizontal renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item} />
                            );
                        }} />
                </View>
                <Text style={{ marginTop: 20, marginLeft: 20, color: '#000', fontSize: 16, fontWeight: '600' }}>
                    New Shoes List
                </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList data={shoesList}
                        showsHorizontalScrollIndicator={false}
                        horizontal renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item} />
                            );
                        }} />
                </View>
                <Text style={{ marginTop: 20, marginLeft: 20, color: '#000', fontSize: 16, fontWeight: '600' }}>
                    New Jacket List
                </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList data={jacketList}
                        showsHorizontalScrollIndicator={false}
                        horizontal renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item} />
                            );
                        }} />
                </View>
                <Text style={{ marginTop: 20, marginLeft: 20, color: '#000', fontSize: 16, fontWeight: '600' }}>
                    New Slipper List
                </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList data={slipperList}
                        showsHorizontalScrollIndicator={false}
                        horizontal renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item} />
                            );
                        }} />
                </View>
                <Text style={{ marginTop: 20, marginLeft: 20, color: '#000', fontSize: 16, fontWeight: '600' }}>
                    New Trouser List
                </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList data={trouserList}
                        showsHorizontalScrollIndicator={false}
                        horizontal renderItem={({ item, index }) => {
                            return (
                                <MyProductItem item={item} />
                            );
                        }} />
                </View>
            </View>

        </ScrollView>


    )
}

export default Main