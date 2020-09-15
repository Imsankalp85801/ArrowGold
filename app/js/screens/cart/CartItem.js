import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import { Image } from 'react-native-elements'
import QText from '../../components/QText'
import QButton from '../../components/QButton'
import CartQuantityController from '../dashboard/CartQuantityController'
import DeleteButton from '../../components/DeleteButton'
import { notUndefinedAndNull, empty, undefinedOrNull,undefinedOrZero } from "../../utils/Validation"


/**
 * This component is used to show a cart item on checkout page or wishlist page. Use the intent props as 'cart' or 'wishlist' for this.
 * 
*/

export default function CartItem(props) {



  
  function getImagePath(path,id){
    let {productDetail} =props
    let pathValue = notUndefinedAndNull(productDetail) ? productDetail.image_path:'http://arrowgold.in/admin/uploads//'
    if(!empty(path)){
        pathValue = pathValue+id+"/"+path;
    }
    return pathValue;
  }
 
  return(
    <View style={styles.container}>
      <View style={styles.cartContainer}>
        <View style={styles.imgContainer}>
          <Image source={{ uri : getImagePath(props.product_image.product_image,props.product_image.ct_pr_id) }} resizeMode="contain" style={styles.cartProductImg} ></Image>
      </View>
      <View style={styles.productDesc}>
        <View style={styles.productDescWrap}>
          <QText>{props.name}</QText>
          <QText fontWeight='bold'>weight: {props.price}</QText>
            <CartQuantityController
              buttonSize='small'
              minQty={0}
              maxQty={40}
              style={styles.itemQtyControl}
              onQtyIncrease={props.onQtyIncrease}
              onQtyDecrease={props.onQtyDecrease}
              obj={props.productObj}
              productQty={props.qty}
            />
        </View>        
      </View>
        <DeleteButton style={styles.deleteBtn} onPress={()=>props.removeProduct(props.productObj,props.indexValue)}/>
      </View>
      {props.intent === 'wishlist' && (
        <View style={styles.add2CartBtn}>
          <QButton
            intent='outline'
            title={product.inStock?'ADD TO CART':'NOTIFY ME'}
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
    paddingLeft: 20,
    width:180
  },
  itemQtyControl: {
    marginLeft: 0,
    marginTop: 20
  },
  deleteBtn: {
    flex:1,
    marginTop:10
  },
  add2CartBtn: {
    //marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})