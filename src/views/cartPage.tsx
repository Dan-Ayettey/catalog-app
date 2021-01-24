import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {styles,systemTheme} from "../style/style";
import ProductController from "../controller/productController";
import { Ionicons } from '@expo/vector-icons';
import ProductModel from "../model/productModel";
const Cart=(props)=>{
    return(
        <View style={styles.appContent}>
        <FlatList
            keyExtractor={(item)=>item.price}
    ListHeaderComponent={
        <View style={styles.productHeaderTitleBackground}>
    <Text style={styles.productHeaderTitle}>Catalog</Text>
        </View>
}
    data={products} renderItem={({item, index}) => (
        <View style={styles.products}>

        <Image source={item.image} style={styles.productImage}/>
    <View>
    <Text style={styles.productDetails}>
        {item.productDetails}
        </Text>

        <Text style={styles.productDetails}>
        Price: <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.cart} onPress={(event => {

    })}>
    <Ionicons color={'rgb(75,143,252)'} size={30} name={'cart'}/>
    </TouchableOpacity>
    </Text>

    <Text style={styles.dropShipping}>
        {item.isDrop_shipping ? 'Drop shipping available' : 'No drop shipping available'}
        </Text>
        </View>


        </View>
)}

    ListFooterComponent={
        <View>
        <Text>@ Dan Ayette</Text>
    </View>
}
>

    </FlatList>

    </View>
   )
}

export default Cart
