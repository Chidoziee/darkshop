import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import data from '../../assets/data/products'
import ProductList from './ProductList';

const ProductContainer = () => {
 const [products, setProducts] =  useState([]);

 useEffect(() => {
    setProducts(data);

    return () => {
        setProducts([])
    }
 }, [data])

  return (
    <View>
      <Text>ProductContainer</Text>
      <View style={{marginTop: 100}}>
        <FlatList 
            data={products}
            renderItem={({item}) => <ProductList brand={item.brand} key={item.id}/>}
            keyExtractor={(item) => item.name}
        
          horizontal={true}
        />
      
      </View>
    </View>
  )
}

export default ProductContainer

const styles = StyleSheet.create({})