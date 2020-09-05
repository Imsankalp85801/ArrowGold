import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import QInput from './QInput';

function TopAddressBar(props) {
  return (
    <View style={styles.container}>
      <View style={styles.locationWrap}>
        <View style={styles.locationPin}>
          <Svg viewBox="-0 -0 16 20" style={styles.locationsvg}>
            <Path
              strokeWidth={0}
              fill="#2c357e"
              fillOpacity={1}
              strokeOpacity={1}
              d="M13.66 2.23 C15.16 3.65 16.00 5.59 16.00 7.61 C16.00 13.12 8.74 20.00 8.00 20.00 C7.26 20.00 0.00 13.12 0.00 7.61 C0.00 5.59 0.84 3.65 2.34 2.23 C3.84 0.80 5.88 0.00 8.00 0.00 C10.12 0.00 12.16 0.80 13.66 2.23 Z M8.00 11.50 C8.00 11.50 10.13 11.09 10.90 10.36 C11.67 9.63 12.10 8.64 12.10 7.61 C12.10 6.03 11.10 4.61 9.57 4.01 C8.04 3.40 6.27 3.74 5.10 4.85 C3.93 5.97 3.58 7.64 4.22 9.10 C4.85 10.55 8.00 11.50 8.00 11.50 Z"
            ></Path>
          </Svg>
        </View>
        <QInput
          inputTextStyle={styles.addressText}
          value={props.address}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    opacity: 1,
    backgroundColor: "rgba(238,238,238,1)"
  },
  locationWrap: {
    height: 40,
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 20,
    lineHeight: 40,
    paddingTop: 10
  },
  locationPin: {
    width: 14,
    height: 40,
    opacity: 1,
    lineHeight: 40
  },
  locationsvg: {
    width: 14,
    height: 20,
    backgroundColor: "transparent",
    borderColor: "transparent"
  },
  addressText: {
    flex: 1,
    height: 20,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    opacity: 1,
    fontSize: 14,
    fontFamily: "ssp-regular",
    letterSpacing: 0.18,
    marginLeft: 4,
    borderBottomWidth: 0
  }
});

export default TopAddressBar;
