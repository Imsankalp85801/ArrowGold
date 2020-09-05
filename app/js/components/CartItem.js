import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements'
import QText from './QText'
import QButton from './QButtons'
import Colors from '../constants/Colors'
import QuantityController from './QuantityController'
import DeleteButton from './DeleteButton'
import {getImagePath} from '../../js/utils/ImagePath';


/**
 * This component is used to show a cart item on checkout page or wishlist page. Use the intent props as 'cart' or 'wishlist' for this.
 * 
*/

export default function CartItem(props) {
   return(
    <View style={styles.container}>
      <View style={styles.cartContainer}>
        <View style={styles.imgContainer}>
        <Image source={{ uri : getImagePath(props.productImage) }} resizeMode="contain" style={styles.productImage} ></Image>
        </View>
        <View style={styles.productDesc}>
          <View style={styles.productDescWrap}>
            <QText>{props.name}</QText>
            <QText fontWeight='bold'>₹ {props.price}</QText>
            <QuantityController
              buttonSize='small'
              minQty={1}
              maxQty={10}
              style={styles.itemQtyControl}
            />
          </View>        
        </View>
        <DeleteButton style={styles.deleteBtn} />
      </View>
      {props.intent === 'wishlist' && (
        <View style={styles.add2CartBtn}>
          <QButton
            intent='outline'
            title={props.inStock?'ADD TO CART':'NOTIFY ME'}
            style={{width: 150}}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#ffffff'
  },
  cartContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#ffffff'
  },
  imgContainer: {
    flex: 4,
  },
  cartProductImg: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    borderRadius: 8
  },
  productDesc: {
    flex: 11,
  },
  productDescWrap: {
    paddingLeft: 20
  },
  itemQtyControl: {
    marginLeft: 0,
    marginTop: 20
  },
  deleteBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add2CartBtn: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
