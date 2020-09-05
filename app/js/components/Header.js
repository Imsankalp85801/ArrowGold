import React, { Component } from "react"
import { StyleSheet, View, Image } from "react-native"
import CartItem from "./CartCounter"
import Svg, { Path } from "react-native-svg"
import QText from '../components/QText'
import Colors from '../constants/Colors'

function BrandHeader(props) {
  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.headerImgWrap}>
        <Image
          source={{ uri : getImagePath(props.productImage) }} resizeMode="contain" style={styles.productImage}
          resizeMode="cover"
          style={styles.headerImg}
        ></Image>
      </View>
      <CartItem style={styles.cart} cartItemCount={2} />
      <View style={styles.hamburger}>
        <View style={styles.group3}>
          <Svg viewBox="-0 -0 23 17" style={styles.path16}>
            <Path
              strokeWidth={0}
              fill="rgba(44,53,126,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M1.44 0.00 L21.56 0.00 C21.56 0.00 23.00 0.63 23.00 1.42 C23.00 2.20 21.56 2.83 21.56 2.83 L1.44 2.83 C1.44 2.83 0.00 2.20 0.00 1.42 C0.00 0.63 1.44 0.00 1.44 0.00 Z M1.44 7.08 L21.56 7.08 C21.56 7.08 23.00 7.72 23.00 8.50 C23.00 9.28 21.56 9.92 21.56 9.92 L1.44 9.92 C1.44 9.92 0.00 9.28 0.00 8.50 C0.00 7.72 1.44 7.08 1.44 7.08 Z M1.44 14.17 L21.56 14.17 C21.56 14.17 23.00 14.80 23.00 15.58 C23.00 16.37 21.56 17.00 21.56 17.00 L1.44 17.00 C1.44 17.00 0.00 16.37 0.00 15.58 C0.00 14.80 1.44 14.17 1.44 14.17 Z"
            ></Path>
          </Svg>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  headerImgWrap: {
    top: 0,
    left: 0,
    flex: 1,
    height: 60,
    backgroundColor: Colors.whiteColor,
    opacity: 1,
    overflow: "hidden"
  },
  headerImg: {
    width: 142,
    height: 84,
    backgroundColor: "transparent",
    opacity: 1,
    marginTop: -9,
    marginLeft: -16
  },
  cart: {
    top: 16,
    right: 80,
    width: 24,
    height: 22,
    backgroundColor: "transparent",
    position: "absolute",
    opacity: 1
  },
  hamburger: {
    top: 22,
    right: 20,
    width: 24,
    height: 17,
    position: "absolute",
    opacity: 1
  },
  group3: {
    width: 23,
    height: 17,
    opacity: 1
  },
  path16: {
    width: 23,
    height: 17,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
});

export default BrandHeader;
