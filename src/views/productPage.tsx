import {FlatList, Image,Text, View} from "react-native";
import React from "react";
import {styles,systemTheme} from "../style/style";

const  ProductView= {
    AppContent : () => {
        const products = [{
            image: require('./assets/asset1.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '34.89',
            isDrop_shipping: true,
        }, {
            image: require('./assets/asset2.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '57.99',
            isDrop_shipping: true,
        }, {
            image: require('./assets/asset3.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '67.9',
            isDrop_shipping: true,
        }, {
            image: require('./assets/asset4.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '545.5',
            isDrop_shipping: true,
        }, {
            image: require('./assets/asset5.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '6.52',
            isDrop_shipping: true,
        }, {
            image: require('./assets/asset6.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '74.5',
            isDrop_shipping: true,
        }, {
            image: require('./assets/asset7.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '89.9',
            isDrop_shipping: true,
        }, {
            image: require('./assets/asset8.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '398.8',
            isDrop_shipping: true,
        }, {
            image: require('./assets/asset9.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '645.6',
            isDrop_shipping: true,
        }, {
            image: require('./assets/asset10.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '34.7',
            isDrop_shipping: true,
        }, {
            image: require('./assets/asset11.png'),
            productDetails: 'Tommy Yellow unisex T shirt X5',
            price: '376.9',
            isDrop_shipping: true,
        }]
// @ts-ignore
        const key = this.keyExtractor
        return (
            <View style={styles.appContent}>
            <FlatList
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
    },
    AppFooter :() => {
        return (
            <View style={styles.bar}>
            <Text style={styles.barText}>Catalog</Text>
                </View>

        )
    },
    AppBar : () => {
        return (
            <View style={styles.bar}>
            <Text style={styles.barText}>Catalog</Text>
                </View>

        )
    }
}
export default ProductView

