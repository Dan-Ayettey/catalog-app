import {FlatList, Image, ProgressBarAndroid, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {styles,systemTheme} from "../style/style";
import ProductController from "../controller/productController";
import { Ionicons } from '@expo/vector-icons';
import ProductModel from "../model/productModel";

// Content View
  const   AppContent =(props:any) => {
      let model =new ProductModel();
      let controller=new ProductController(model)
      let [index,setIndex]=useState(0);
        const products = [{
            image: require('../assets/asset1.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '34.89',
            isDrop_shipping: true,
        }
        ,{
            image: require('../assets/asset2.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '57.99',
            isDrop_shipping: true,
        }, {
            image: require('../assets/asset3.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '67.9',
            isDrop_shipping: true,
        }, {
            image: require('../assets/asset4.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '545.5',
            isDrop_shipping: true,
        }, {
            image: require('../assets/asset5.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '6.52',
            isDrop_shipping: true,
        }, {
            image: require('../assets/asset6.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '74.5',
            isDrop_shipping: true,
        }, {
            image: require('../assets/asset7.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '89.9',
            isDrop_shipping: true,
        }, {
            image: require('../assets/asset8.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '398.8',
            isDrop_shipping: true,
        }, {
            image: require('../assets/asset9.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '645.6',
            isDrop_shipping: true,
        }, {
            image: require('../assets/asset10.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '34.7',
            isDrop_shipping: true,
        }, {
            image: require('../assets/asset11.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '376.9',
            isDrop_shipping: true,
        } ]

      return (
            <View style={styles.appContent}>
                <FlatList
                    keyExtractor={(item)=>item.price}
                    ListHeaderComponent={

                            <Text style={styles.productHeaderTitle}>

                                { <ProgressBarAndroid styleAttr={'Horizontal'} color={'green'} />}
                            </Text>
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
                                    {controller.setImage(item.image)}
                                    {controller.setProductDetails(item.productDetails)}
                                    {controller.setPrice(item.price)}
                                    {controller.setProductId(index)}
                                    {controller.setProductCart({
                                        image:model.getImage(),
                                        productDetails:model.getProductDetails(),
                                        price:model.getPrice(),
                                        index:model.getProductId()

                                    })}


                                    props.navigation.navigate('Cart',{cartProduct:model.getProductCart()});

                                })}>
                                    <Ionicons color={'rgb(75,143,252)'} size={30} name={'cart'}/>
                                </TouchableOpacity>
                            </Text>

                            <Text style={styles.dropShipping}>
                                {item.isDrop_shipping ? 'Drop shipping available '+controller.setIsDropable(true) : 'No drop shipping available'+controller.setIsDropable(false)}
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
    //Footer View
   const AppFooter = () => {
        return (
            <View style={styles.bar}>
                <Text style={styles.barText}>Catalog</Text>
            </View>

        )
    }
  const  AppBar=() => {
        return (
            <View style={styles.bar}>
                <Text style={styles.barText}>Catalog</Text>
            </View>

        )
    }

//Module
export {
    AppBar,
    AppContent,
    AppFooter,

}

