import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Svg, { G, Path } from "react-native-svg";
import QText from './QText'
import Colors from '../constants/Colors'

/**
 * This Delete Button Component renders a delete button icon which is being used in address and cartitem component. Pass the onPress props to make it work on pressing it.
*/

export default function DeleteButton(props) {
  return (
    <TouchableOpacity style={[styles.root, props.style]} onPress={props.onPress} {...props}>
      <Svg xmlns="http://www.w3.org/2000/svg" width="12.665" height="16.32" viewBox="0 0 12.665 16.32">
        <G id="Group" transform="translate(-0.128 -0.131)">
          <G id="Group-2" data-name="Group">
            <Path id="Shape" d="M2.648,16.32a1.559,1.559,0,0,1-1.53-1.514L.7,3.312a.12.12,0,0,0-.119-.119H.576a.592.592,0,0,1,0-1.183H3.382A.163.163,0,0,0,3.528,1.9l.188-.674A1.708,1.708,0,0,1,5.295,0H7.371A1.707,1.707,0,0,1,8.949,1.223l.188.674a.16.16,0,0,0,.146.113H12.09a.592.592,0,0,1,0,1.183h-.008a.121.121,0,0,0-.12.119l-.415,11.494a1.557,1.557,0,0,1-1.53,1.514Z" transform="translate(0.128 0.131)"/>
          </G>
        </G>
      </Svg>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
});
