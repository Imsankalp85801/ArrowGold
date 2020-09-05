import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import QText from './QText'
import QInput from './QInput'

export default function QuantityController({ buttonsize, label, parentCallback, quantity, onDecreaseQty, onIncreaseQty }) {

  const buttonSize = buttonsize
  const btnSize = () => {
    if (buttonSize === 'large') return 40
    if (buttonSize === 'small') return 24
  }
  const btnStyle = {
    height: btnSize(),
    width: btnSize(),
    lineHeight: btnSize()
  }
  return(
    <View style={[styles.quantityControlContainer, buttonSize==='small'?styles.quantityControlContainerSmall:null]}>
      {label ? <QText>{label}</QText> : null}
      <View style={[styles.quantityBtnWrap, buttonSize==='small'?styles.quantityBtnWrapSmall:null]}>
        <View style={[styles.qtyBtn]}>
          <TouchableOpacity onPress={onDecreaseQty} >
            <QText fontSize={buttonSize} fontColor='primary' fontWeight='bold' style={[styles.qtyBtnText, btnStyle]}>-</QText>
          </TouchableOpacity>
        </View>
        <QText fontSize={buttonSize} fontColor='primary' fontWeight='bold' style={[styles.qtyText, btnStyle, buttonSize==='small'?styles.qtyTextSmall:null ]}>{quantity}</QText>
        <View style={[styles.qtyBtn ]}>
          <TouchableOpacity onPress={onIncreaseQty} >
            <QText fontSize={buttonSize} fontColor='primary' fontWeight='bold' style={[styles.qtyBtnText, btnStyle]}>+</QText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  quantityControlContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.whiteColor
  },
  quantityBtnWrap: {
  
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  quantityControlContainerSmall: {
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  quantityBtnWrapSmall: {
    marginTop: 0
  },
  qtyBtn: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    overflow: 'hidden'
  },
  qtyBtnText: {
    textAlign: 'center'
  },
  qtyText: {
    marginHorizontal: 20,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.greyColor,
    textAlign: 'center',
  },
  qtyTextSmall:{
    marginHorizontal: 10
  }
})