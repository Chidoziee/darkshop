import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React from 'react'
import ProductCards from './ProductCards';

var {width, height} = Dimensions.get("window");

const ProductList = (props) => {
    const {item} = props;
  return (
    <Pressable style={{width: '50%'}}>
      <View style={{width: width / 2, backgroundColor: 'gainsboro' }}>
      <ProductCards {...item}/>
      </View>
    </Pressable>
  )
}

export default ProductList

const styles = StyleSheet.create({})