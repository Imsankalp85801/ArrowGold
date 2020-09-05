import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import QText from './QText'
import Colors from '../constants/Colors'

/**
 * CartCounter component shows the cart icon and number of items in the cart.
*/

export default function CartCounter(props) {
  return (
    <View style={[styles.root, props.style]} {...props}>
      <View style={styles.group111}>
        <View style={styles.group10Stack}>
          <View style={styles.group10}>
            <View style={styles.path14Stack}>
              <Svg viewBox="-0 -0 20 20" style={styles.path14}>
                <Path
                  strokeWidth={0}
                  fill="rgba(247,153,35,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M18.79 0.00 L1.21 0.00 L0.00 20.00 L20.00 20.00 L18.79 0.00 Z"
                ></Path>
              </Svg>
              <Svg viewBox="-0 -0 12 10" style={styles.path15}>
                <Path
                  strokeWidth={0}
                  fill="rgba(247,153,35,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M6.00 3.11 C7.49 3.11 8.71 4.25 8.71 5.66 L8.71 10.00 L12.00 10.00 L12.00 5.66 C12.00 2.54 9.31 0.00 6.00 0.00 C2.69 0.00 0.00 2.54 0.00 5.66 L0.23 10.00 L3.52 10.00 L3.29 5.66 C3.29 4.25 4.50 3.11 6.00 3.11 Z"
                ></Path>
              </Svg>
            </View>
          </View>
          <Svg viewBox="-0 -0 18 18" style={styles.oval2}>
            <Path
              strokeWidth={0}
              fill="rgba(238,77,100,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M9.00 18.00 C13.97 18.00 18.00 13.97 18.00 9.00 C18.00 4.03 13.97 0.00 9.00 0.00 C4.03 0.00 0.00 4.03 0.00 9.00 C0.00 13.97 4.03 18.00 9.00 18.00 Z"
            ></Path>
          </Svg>
          <QText 
            style={styles.style4}
            fontWeight='bold'
            fontSize='xsmall'
            fontColor='white'
          >{props.cartItemCount}</QText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  group111: {
    width: 29,
    height: 27,
    opacity: 1
  },
  group10: {
    top: 0,
    left: 9,
    width: 20,
    height: 27,
    position: "absolute",
    opacity: 1
  },
  path14: {
    top: 7,
    left: 0,
    width: 20,
    height: 20,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path15: {
    top: 0,
    left: 4,
    width: 12,
    height: 10,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path14Stack: {
    width: 20,
    height: 27
  },
  oval2: {
    top: 0,
    left: 0,
    width: 18,
    height: 18,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  style4: {
    top: 1,
    left: 6,
    backgroundColor: "transparent",
    position: "absolute",
    textAlign: "center"
  },
  group10Stack: {
    width: 29,
    height: 27
  }
});
