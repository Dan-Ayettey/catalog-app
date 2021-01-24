import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {styles,systemTheme} from "../style/style";
import { Ionicons } from '@expo/vector-icons';

//Cart View
const Cart=(props :any)=>{
    return(

        <View>
            <DetailsScreen products={props.route.params.cartProduct} navigation={props.navigation}/>


    </View>

   )
}
//Cart

const Product =(props:any)=>{
    const [isDeleted,setIsDeleted]=useState(true);
    const products=props.products;
     return(
         isDeleted ? <View  style={styles.products}>

            <Image source={props.item.image} style={styles.productImage}/>
            <View>
                <Text style={styles.productDetails}>
                    {props.item.productDetails}
                </Text>

                <Text style={styles.productDetails}>
                    Price: <Text style={styles.price}>{props.item.price}</Text>
                    <TouchableOpacity style={styles.cart} onPress={(event => {
                        setIsDeleted(false)
                        delete products[props.index]

                    })}>
                        <Ionicons color={'rgb(75,143,252)'} size={30} name={'trash'}/>
                    </TouchableOpacity>
                </Text>

                <Text style={styles.dropShipping}>
                    {props.item.isDrop_shipping ? 'Drop shipping available' : 'No drop shipping available'}
                </Text>
            </View>


        </View> :null
     )
}
const DetailsScreen=(props:any) =>{
    console.log(props.products)
    const products=props.products;
    return (
        <View style={styles.appContent}>
            <ScrollView>

                { products.map((item:any, index:any) => (
                    <Product key={index} item={item} products={props.products} index={index}/>

            ))}
                    <View>

                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Check out')}
                        ><Text style={styles.checkOut}>Check out</Text></TouchableOpacity>
                    </View>



            </ScrollView>

        </View>
    );
}
export default Cart
