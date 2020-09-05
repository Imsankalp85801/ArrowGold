import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path, Rect } from "react-native-svg";
import QText from '../components/QText'
import Colors from '../constants/Colors'

/**
 * FilterRow Component is used on product listing pages to show sort and filter options.
 */

export default function FilterRow(props) {
  return (
    <View style={styles.filterContainer}>
      <QText 
        fontWeight='bold'
        fontSize='small'
        fontColor='primary'
      >Filter</QText>
      <QText 
        style={styles.sortText} 
        fontWeight='regular'
        fontSize='small'
        fontColor='greyDark'
      >Sort By</QText>
      <View style={styles.sortByIconWrap}>
        <Svg id="Group_6" data-name="Group 6" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
          <Rect id="Rectangle" width="6" height="6" fill="#2c357e"/>
          <Rect id="Rectangle_Copy_2" data-name="Rectangle Copy 2" width="6" height="6" transform="translate(0 8)" fill="#2c357e"/>
          <Rect id="Rectangle_Copy" data-name="Rectangle Copy" width="6" height="6" transform="translate(8)" fill="#2c357e"/>
          <Rect id="Rectangle_Copy_3" data-name="Rectangle Copy 3" width="6" height="6" transform="translate(8 8)" fill="#2c357e"/>
        </Svg>
      </View>
      <View style={styles.filterIconWrap}>
        <Svg viewBox="-0 -0 17 13" style={styles.path4}>
          <Path
            strokeWidth={0}
            fill="rgba(155,155,155,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M0.00 9.75 L17.00 9.75 L17.00 13.00 L0.00 13.00 Z M0.00 4.88 L17.00 4.88 L17.00 8.13 L0.00 8.13 Z M0.00 0.00 L17.00 0.00 L17.00 3.25 L0.00 3.25 Z"
          ></Path>
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  filterContainer: {
    flex: 1,
    height: 30,
    flexDirection: 'row',
    paddingTop: 5
  },
  sortText: {
    position: 'absolute',
    right: 80,
    top: 5
  },
  sortByIconWrap: {
    position: 'absolute',
    right: 40,
    top: 7,
    width: 18,
    height: 14,
    opacity: 1
  },
  filterIconWrap: {
    position: 'absolute',
    right: 0,
    top: 7,
    width: 18,
    height: 14,
    opacity: 1
  },
  path4: {
    width: 17,
    height: 13,
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
})
