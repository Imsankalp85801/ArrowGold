import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import RatingStars from './RatingStars'

function ShopItem(props) {

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemRow}>
        <View style={styles.imgWrap}>
          <Image
            source={require("../assets/images/shopItem.png")}
            resizeMode="cover"
            style={styles.productImg}
          ></Image>
        </View>
        <View style={styles.itemDescWrap}>
          <Text style={styles.storeName}>Atlas Infinity</Text>
          <View style={styles.ratingWrap}>
            <View style={styles.ratingStarWrap}>
              <Text style={styles.ratingStar}>{props.ratingStar}</Text>
              <RatingStars rating={props.ratingStar} />
              {/* <Image
                source={require("../assets/images/star-filled.png")}
                resizeMode="cover"
                style={styles.ratingStars}
              ></Image> */}
            </View>
            <Text style={styles.ratings}>{props.ratingCount} ratings</Text>
          </View>
          <View style={styles.contactDetails}>
            <Text style={styles.starLocation}>
              Inorbit Road Malad West • 1.4 KM
            </Text>
            <View style={styles.contactRow}>
              <Text style={styles.contact}>+91 90378 73628</Text>
              <Text style={styles.contact1}>022 2037 8272</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export default ShopItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    height: 120,
    opacity: 1,
    flexDirection: "row"
  },
  imgWrap: {
    width: 100,
    height: 120,
    backgroundColor: "rgba(255,255,255,1)",
    opacity: 1,
    borderRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowColor: "rgba(239,239,254,1)",
    shadowOpacity: 1,
    shadowRadius: 4,
    overflow: "hidden"
  },
  productImg: {
    width: 100,
    height: 120,
    backgroundColor: "transparent",
    opacity: 1,
  },
  itemDescWrap: {
    height: 100,
    opacity: 1,
    marginLeft: 20,
    marginTop: 4,                                                                                                         
  },
  storeName: {
    width: 200,
    height: 20,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    opacity: 1,
    fontSize: 16,
    fontFamily: "ssp-bold",
    letterSpacing: 0.22
  },
  ratingWrap: {
    flex: 1,
    flexDirection: 'row'
  },
  ratingStarWrap: {
    flexDirection: 'row',
    width: 110
  },
  ratingStar: {
    marginRight: 5
  },
  // ratingStarsWrap : {
  //   flexDirection: 'row',
  //   marginHorizontal: 6
  // },
  // ratingStars: {
  //   width: 14,
  //   height: 14,
  //   marginHorizontal: 2,
  //   marginTop: 4,
  // },
  itemRow: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  ratings: {
    width: 73,
    height: 20,
    backgroundColor: "transparent",
    color: "rgba(56,56,56,1)",
    opacity: 1,
    fontSize: 14,
    fontFamily: "ssp-regular",
    letterSpacing: 0.1,
    marginLeft: 10,
    marginTop: 1
  },
  contactDetails: {
    flex: 1,
    opacity: 1,
    marginTop: 10
  },
  starLocation: {
    height: 20,
    backgroundColor: "transparent",
    color: "rgba(89,86,87,1)",
    opacity: 1,
    fontSize: 16,
    fontFamily: "ssp-regular",
    letterSpacing: 0.12
  },
  contact: {
    color: "rgba(89,86,87,1)",
    opacity: 1,
    fontSize: 16,
    fontFamily: "ssp-bold",
    letterSpacing: 0.2
  },
  contact1: {
    color: "rgba(89,86,87,1)",
    opacity: 1,
    fontSize: 16,
    fontFamily: "ssp-bold",
    letterSpacing: 0.2,
    marginLeft: 10
  },
  contactRow: {
    height: 20,
    flexDirection: "row",
    flexWrap: 'wrap',
    flex: 1,
    marginTop: 5
  },
});


