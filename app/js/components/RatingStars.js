import React from 'react'
import { Dimensions, StyleSheet, View } from "react-native"
import Svg, { Path } from "react-native-svg"

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const RatingStars = props => {
  const ratingInt = Math.round(Number((props.rating)));
  const filledStarCount = ratingInt;
  const emptyStartCount = 5-filledStarCount;

  return(
    <View style={styles.starsContainer}>
      {/* Filled Star*/}
      <View style={styles.starWrapper}>
        <Svg viewBox="-0 -0 14 13" style={styles.star}>
          <Path
            strokeWidth={0}
            fill="rgba(247,153,35,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M7.00 0.00 L8.65 4.97 L14.00 4.97 L9.67 8.03 L11.33 13.00 L7.00 9.93 L2.67 13.00 L4.33 8.03 L0.00 4.97 L5.35 4.97 L7.00 0.00 Z"
          ></Path>
        </Svg>
      </View>
      <View style={styles.starWrapper}>
        <Svg viewBox="-0 -0 14 13" style={styles.star}>
          <Path
            strokeWidth={0}
            fill="rgba(247,153,35,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M7.00 0.00 L8.65 4.97 L14.00 4.97 L9.67 8.03 L11.33 13.00 L7.00 9.93 L2.67 13.00 L4.33 8.03 L0.00 4.97 L5.35 4.97 L7.00 0.00 Z"
          ></Path>
        </Svg>
      </View>
      <View style={styles.starWrapper}>
        <Svg viewBox="-0 -0 14 13" style={styles.star}>
          <Path
            strokeWidth={0}
            fill="rgba(247,153,35,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M7.00 0.00 L8.65 4.97 L14.00 4.97 L9.67 8.03 L11.33 13.00 L7.00 9.93 L2.67 13.00 L4.33 8.03 L0.00 4.97 L5.35 4.97 L7.00 0.00 Z"
          ></Path>
        </Svg>
      </View>
      {/* Empty Star*/}
      <View style={styles.starWrapper}> 
        <Svg viewBox="-0 -0 14 13" style={styles.star}>
          <Path
            strokeWidth={0}
            fill="rgba(196,196,196,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M7.00 0.00 L8.65 4.97 L14.00 4.97 L9.67 8.03 L11.33 13.00 L7.00 9.93 L2.67 13.00 L4.33 8.03 L0.00 4.97 L5.35 4.97 L7.00 0.00 Z"
          ></Path>
        </Svg>
      </View>
      <View style={styles.starWrapper}> 
        <Svg viewBox="-0 -0 14 13" style={styles.star}>
          <Path
            strokeWidth={0}
            fill="rgba(196,196,196,1)"
            fillOpacity={1}
            strokeOpacity={1}
            d="M7.00 0.00 L8.65 4.97 L14.00 4.97 L9.67 8.03 L11.33 13.00 L7.00 9.93 L2.67 13.00 L4.33 8.03 L0.00 4.97 L5.35 4.97 L7.00 0.00 Z"
          ></Path>
        </Svg>
      </View>
    </View>
  )
}

export default RatingStars

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: 'row',
    opacity: 1,
    height: 15,
    flex: 1,
    width: 120
  },
  starWrapper: {
    marginHorizontal: 1,
    height: 14,
    width: 14,
    top: 3
  },
  star:{
    width: 14,
    height: 13
  }
})