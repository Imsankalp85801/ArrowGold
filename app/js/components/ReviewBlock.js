import React from 'react'
import {View, StyleSheet} from 'react-native'
import QText from './QText'
import { Rating, AirbnbRating, Image } from 'react-native-elements'
import Colors from '../constants/Colors'
import {getImagePath} from '../../js/utils/ImagePath';

/**
 * ReviewBlock Component
 * It use rating component of 'react-native-elemetns'
*/

export default function ReviewBlock(props) {
  return(
    <View style={styles.reviewContainer}>
      <View style={styles.topRow}>
      <Image source={{ uri : getImagePath(props.productImage) }} style={styles.reviewerImg} ></Image>
        <View style={styles.nameRating}>
          <QText fontSize='medium' fontColor='black' fontWeight='bold' style={{marginBottom: 2}}>{props.reviewerName}</QText>
          <Rating
            imageSize={20}
            readonly
            startingValue={props.reviewerRating}
            style={styles.rating }
            ratingBackgroundColor='transparent'
          />
        </View>
        <QText fontColor='grey' fontWeight='semibold' style={styles.reviewTimeStyle}>{props.reviewTime}</QText>
      </View>
      <QText style={styles.reviewTextStyle} fontSize='medium' fontColor='black' >
        {props.reviewText}
      </QText>
    </View>
  )
}

const styles = StyleSheet.create({
  reviewContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyColor,
    paddingVertical: 20
  },
  topRow: {
    flex: 1,
    flexDirection: 'row',
    //paddingHorizontal: 20,
    alignItems: 'center',
  },
  reviewerImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#707070',
    overflow: 'hidden'
  },
  nameRating: {
    paddingHorizontal: 10,
    marginLeft: 20
  },
  rating: {
    backgroundColor: 'transparent'
  },
  reviewTimeStyle: {
    marginLeft: 'auto',
  },
  reviewTextStyle: {
    //paddingHorizontal: 20,
    marginTop: 10,
    lineHeight: 22
  }
})