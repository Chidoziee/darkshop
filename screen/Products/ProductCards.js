import { StyleSheet, Text, View, Button, Dimensions, Image } from 'react-native'
import React from 'react'


var {width, height} = Dimensions.get("window")
const ProductCards = (props) => {
    const {name, price, image, countInStock} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image}/>
      <View style={styles.card}/>
      <Text style={styles.title}>
        {name.length > 15 ? name.substring(0, 15 - 3) + '...': name}
      </Text>
      <Text style={styles.price}>{price.toFixed(2)}</Text>
    </View>
  )
}

export default ProductCards

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: "center",
        elevation: 8,
        backgroundColor: 'white',
    },
    image: {
        width: width / 2 - 20 - 10,
        height: height / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45,
    },
    card: {
        marginTop: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        width: width / 2 - 20 - 10
    }, 
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',

    },
    price: {
        fontSize: 20,
        color: 'orange',
        mat
    }
})