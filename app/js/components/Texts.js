import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'

/**
 * QText component accept all the props required for styling your text.
 * Fontsizes: 12 for xsmall, 14 for small, 16 form medium, 22 for large, 
 * FontWeights: 'normal' for normal, 'semibold' for semibold and 'bold' for bold,
 * Colors as per brand colors as defined in constants/Colors.js. It accepts 
 * 
*/

export default function QText(props) {
  return (
    <Text {...props}
      style={[
        styles.qtext, 
        styles[props.fontWeight],
        styles[props.fontSize],
        styles[props.fontStyle],
        styles[props.fontColor],        
        props.style
      ]}
    >{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  qtext: {
    fontFamily: 'ssp-regular',
    fontStyle: 'normal'
  },
  xsmall: {
    fontSize: 12
  },
  small: {
    fontSize: 14
  },
  medium: {
    fontSize: 16
  },
  large: {
    fontSize: 22
  },
  italic: {
    fontStyle: 'italic'
  },
  regular: {
    fontFamily: 'ssp-regular'
  },
  semibold: {
    fontFamily: 'ssp-semiBold'
  },
  bold: {
    fontFamily: 'ssp-bold'
  },
  italic: {
    fontStyle: 'italic'
  },
  grey: {
    color: Colors.greyColor
  },
  greyDark: {
    color: Colors.greyDarkColor
  },
  black: {
    color: Colors.blackColor
  },
  white: {
    color: Colors.whiteColor
  },
  dark: {
    color: Colors.darkColor
  },
  error: {
    color: Colors.errorColor
  },
  primary: {
    color: Colors.primaryColor
  },
  primaryLite: {
    color: Colors.primaryLiteColor
  },
  secondary: {
    color: Colors.secondaryColor
  },
  secondaryLite: {
    color: Colors.secondaryLiteColor
  }
})