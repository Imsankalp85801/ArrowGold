import React from "react"
import { StyleSheet, View, Image, SafeAreaView, FlatList, TouchableOpacity } from "react-native"
import Svg, { Path } from "react-native-svg"
import {Divider} from 'react-native-elements'
import RatingStars from './RatingStars'
import QText from '../components/QText'
import Colors from '../constants/Colors'
import { Rating, AirbnbRating } from 'react-native-elements'

/**
 * Using FLatList
*/

function SelectStoreItem({id}) {
  return(
    <TouchableOpacity style={styles.itemContainer}>
      <View style={styles.itemRow}>

        <View style={styles.imgWrap}>
          <Image
           source={{ uri : getImagePath(result.productImage) }} resizeMode="contain" style={styles.productImage} 
            resizeMode="cover"
            style={styles.productImg}
          ></Image>
        </View>

        <View style={styles.itemDescWrap}>

          <QText 
            style={styles.storeName} 
            fontWeight='bold'
            fontSize='medium'
            fontColor='black'
          >Store Name</QText>

          <View style={styles.ratingWrap}>
            <View style={styles.ratingStarWrap}>
              <QText 
                style={styles.ratingStar}
                fontWeight='bold'
                fontSize='medium'
                fontColor='greyDark'
              >4.2</QText>
              <RatingStars rating={4.2} />
            </View>
            <QText 
              style={styles.ratings}
              fontSize='small'
              fontColor='dark'
            >150 ratings</QText>
          </View>

          <View style={styles.contactDetails}>
            <QText 
              style={styles.starLocation}
              fontSize='medium'
              fontColor='dark'
            >
              Inorbit Road Malad West • 1.4 KM
            </QText>
            <View style={styles.contactRow}>
              <QText 
                style={styles.contact}
                fontWeight='bold'
                fontSize='medium'
                fontColor='greyDark'
              >+91 90378 73628</QText>
              <QText 
                style={styles.contact}
                fontWeight='bold'
                fontSize='medium'
                fontColor='greyDark'
              >022 2037 8272</QText>
            </View>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  )
}

export default function ShopItem(props) {
  const DATA = [
    {
      id: 'bd7acb',
      name: 'First Item',
      price: '499'
    },
    {
      id: '3ac6',
      name: 'Second Item',
      price: '499'
    }
  ];
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item id={item.id} />}
        keyExtractor={item => item.id}
        //ItemSeparatorComponent={<Divider height={1} backgroundColor=Colors.greyColor />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    minHeight: 160,
    opacity: 1,
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyColor
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
    height: 90,
    marginLeft: 20,
  },
  storeName: {
    width: 200,
    height: 20,
    marginBottom: 2,
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
  itemRow: {
    height: 20,
    flexDirection: "row",
    flex: 1
  },
  ratings: {
    width: 73,
    height: 20,
    opacity: 1,
    letterSpacing: 0.1,
    marginLeft: 10,
    marginTop: 1
  },
  ratingStars: {
    top: 4
  },
  contactDetails: {
    flex: 1,
    opacity: 1,
    marginTop: 10
  },
  starLocation: {
    height: 20,
    opacity: 1,
    letterSpacing: 0.12
  },
  contact: {
    letterSpacing: 0.2,
    marginRight: 10
  },
  contactRow: {
    height: 20,
    flexDirection: "row",
    flexWrap: 'wrap',
    flex: 1,
    marginTop: 5
  },
})