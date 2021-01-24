import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',


    },

    bar:{

    },
    barText: {
        color:'white'
    },
    appContent: {
        paddingTop:20,
        width:'100%',
        height:'auto'
    },
    products: {
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'rgb(233,235,238)'

    },
    productHeaderTitle: {

        color:'white',
        fontWeight:'bold'
    },
    productHeaderTitleBackground: {
        backgroundColor:systemTheme.backgroundColor,
        padding:20
    },
    productImage: {
        width:100,
        margin:10,
        height:100
    },
    productDetails: {
        margin:10,
        fontWeight:"bold",
        color:'black',
    },
    dropShipping: {
        margin:10,
        color:'crimson',
    },
    price: {
        color:'green',
    }

});
export const systemTheme={
    color:'white',
    backgroundColor: 'teal'
}
export default {styles,systemTheme};
