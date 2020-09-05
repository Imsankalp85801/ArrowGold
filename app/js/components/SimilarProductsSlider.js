import React, { Component } from "react";
import { StyleSheet, View, Image, SafeAreaView, FlatList, TouchableOpacity } from "react-native"
import Svg, { Path } from "react-native-svg"

import QText from '../components/QText'
import Colors from '../constants/Colors'
import RatingStars from './RatingStars'
import ProductItem from './ProductItem'

import { Dimensions } from "react-native"
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


export default function SimilarProductsSlider(props) {
  return (
    <SafeAreaView style={styles.container}>
      <QText fontSize='large' fontColor='primary' fontWeight='bold'>Similar Products</QText>
      <FlatList
        data={props.data}
        horizontal
        renderItem={({ item }) => 
        <ProductItem id={item.id} style={styles.productItemWrap} />}
        keyExtractor={item => item.id}
        initialNumToRender={10}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingVertical: 20
  },
  productItemWrap: {
    width: 160,
    paddingVertical: 20,
    paddingHorizontal: 5,
  }
});