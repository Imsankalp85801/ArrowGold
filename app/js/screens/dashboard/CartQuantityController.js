import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import Colors from '../../constants/Colors'
import QText from '../../components/QText'


export default function CartQuantityController(props) {
  const maxQuantity = props.maxQty
  const minQuantity = props.minQty
  const productQty = props.productQty
  const [quantity, setQuantity] = useState(productQty)
  let qty, newQty ;
  let obj=props.obj
 
  const increaseQty = () => {
    qty = quantity
    if(quantity < maxQuantity) {
      newQty = qty + 1
      setQuantity(qty + 1)
      props.onQtyIncrease && props.onQtyIncrease(newQty,obj)
    }
  }
  const decreaseQty = () => {
    qty = quantity
    if(quantity > minQuantity) {
      newQty = qty - 1
      setQuantity(qty - 1)
      props.onQtyDecrease && props.onQtyDecrease(newQty,obj)
    }
  }
  const buttonSize = props.buttonSize
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
    <View style={[styles.quantityControlContainer, buttonSize==='small'?styles.quantityControlContainerSmall:null, props.style]}>
      {props.label ? <QText>{props.label}</QText> : null}
      <View style={[styles.quantityBtnWrap, buttonSize==='small'?styles.quantityBtnWrapSmall:null]}>        
        <TouchableOpacity style={[styles.qtyBtn]} onPress={decreaseQty}>
          <View >
            <QText fontSize={buttonSize} fontColor='primary' fontWeight='bold' style={[styles.qtyBtnText, btnStyle]}>-</QText>
          </View>
        </TouchableOpacity>

        <QText fontSize={buttonSize} fontColor='primary' fontWeight='bold' style={[styles.qtyText, btnStyle, buttonSize==='small'?styles.qtyTextSmall:null ]}>{quantity}</QText>

        <TouchableOpacity style={[styles.qtyBtn ]} onPress={increaseQty} >
          <View>
            <QText fontSize={buttonSize} fontColor='primary' fontWeight='bold' style={[styles.qtyBtnText, btnStyle]}>+</QText>
          </View>
        </TouchableOpacity>
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
    flex:1,
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