import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements'
import QText from './QText'
import QButton from './QButtons'
import Colors from '../constants/Colors'
import DeleteButton from './DeleteButton'

/**
 * This component is used to show the address list item.
 * 
*/

export default function Address(props) {

  return(
    <View style={styles.container} {...props}>

      <View style={styles.addressDesc}>
        <View style={styles.addressDescWrap}>
          {props.showAddressType && (
            <QText style={{marginBottom: 15}} fontWeight={props.addressTypeFontWeight} >{props.type}</QText>
          )}

          <QText>{props.personName}</QText>
          <QText fontColor='greyDark' >{props.completeAddress}</QText>
          <QText fontColor='greyDark' >{props.mobileNum}</QText>
        </View>
      </View>

      {props.showDeleteBtn && (        
        <DeleteButton style={styles.deleteBtn} />
      )}

    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#ffffff'
  },
  addressDesc: {
    flex: 11,
  },
  addressDescWrap: {
    paddingRight: 100
  },
  deleteBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  add2CartBtn: {
    //marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
