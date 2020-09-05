import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";
import RatingStars from './RatingStars'
import { Dimensions } from "react-native";
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
import {getImagePath} from '../../js/utils/ImagePath';


function SellerProducts(props) {
  return (
    <View style={styles.productWrap}>
      <View style={styles.productInnerWrap}>
        <View style={styles.starRow}>
          <RatingStars />
        </View>
        <Image source={{ uri : getImagePath(props.productImage) }} resizeMode="contain" style={styles.productImage} ></Image>
      </View>
      <View style={styles.productDesc}>
        <Text style={styles.productName}>
          {props.productName}
        </Text>
        <Text style={styles.productPrice}>₹ {props.productPrice}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productWrap: {
    flex: 1,
    marginTop: 19,
    marginLeft: 4,
    maxWidth: width/2
  },
  productInnerWrap: {
    flex: 1,
    height: 180,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    borderColor: "rgba(196,196,196,1)",
    borderWidth: 1,
    padding: 10
  },
  starRow: {
    height: 14,
    flexDirection: "row",
    flex: 1,
  },
  productImage: {
    width: 120,
    height: 100,
    backgroundColor: "transparent",
    opacity: 1,
    marginTop: 14,
    marginLeft: 10,
  },
  productName: {
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    opacity: 1,
    fontSize: 18,
    fontFamily: "ssp-regular",
    letterSpacing: 0.2,
    lineHeight: 20,
    marginTop: 10
  },
  productPrice: {
    top: 2,
    left: 0,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    opacity: 1,
    fontSize: 16,
    fontFamily: "ssp-regular",
    fontWeight: 'bold',
    letterSpacing: 0.3
  }
});

export default SellerProducts;
