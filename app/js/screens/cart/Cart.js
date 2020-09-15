import React, { useState, useEffect, Fragment,useRef} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View,SafeAreaView,Dimensions,FlatList,TouchableOpacity,ActivityIndicator,ScrollView } from 'react-native';
import { useNavigation, useBackButton } from '@react-navigation/native';
import _ from 'lodash';
import * as homeAction from  '../../redux/action/HomeAction';
import * as cartAction from  '../../redux/action/CartAction';

import { notUndefinedAndNull, empty, undefinedOrNull,undefinedOrZero } from "../../utils/Validation"
import Loader from '../../components/Loader'; 
import QText from '../../components/QText'; 
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../constants/Colors'
import Popup from '../../components/Popup';
import CartItem from './CartItem'
import { getToken } from '../../services/Session';
import Svg, { Path } from "react-native-svg";
import {Divider, Tooltip} from 'react-native-elements'


const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default function Cart(props) {

    let navigation = useNavigation();
    let dispatch = useDispatch();
    let store = useSelector(connectToStore, shallowEqual);

    
    const [productObject,setProductObject] = useState({quantity:1,pId:null,token:null})
    const [showStateLoader,setShowStateLoader] = useState(true)

    const [subTotal,setSubTotal] = useState({amount:0,tax:0,shippingRate:0,grandTotal:0})


    useEffect(()=>{
      const unsubscribe = navigation.addListener('focus', () => {
        dispatch(cartAction.resetCartData());
        getProductInCart();
        setShowStateLoader(true)
      });
  
      return unsubscribe;
    }, [navigation])

    useEffect(()=> {
      calculateAmountAndTax(store.summaryCart);
      setShowStateLoader(false)
    },[store.summaryCart])

    useEffect(()=> {
      dispatch(cartAction.resetCartData());
      getProductInCart();
      setShowStateLoader(true)
    },[store.addToCart])


    async function getProductInCart(){    
      let token = await getToken();
            if(notUndefinedAndNull(token)){
              setProductObject({...productObject,token:token})
                dispatch(cartAction.getSummaryOfCart(token));
            }
    }

    function refreshPage(){   
      dispatch(cartAction.resetCartData());
      getProductInCart();
      setShowStateLoader(true)
    }
    function calculateAmountAndTax(cartData){
      let amountTotal=0;
      let tax=0;
      let shippingRate=0;
      if(!undefinedOrZero(cartData) ){
          for(let i =0;i<cartData.length;i++){
                amountTotal= notUndefinedAndNull(cartData[i].ct_pr_weight) ? cartData[i].ct_pr_weight * cartData[i].ct_pr_quantity+amountTotal  :0;
          }
      } 
      setSubTotal({...subTotal,amount:amountTotal,tax:tax,shippingRate:shippingRate,grandTotal:amountTotal+tax+shippingRate}) 

  }


  function addToCart(qty,object){
    let body = new FormData()         
    body.append("product_id", object.ct_pr_id)
    body.append("quantity",qty );
    dispatch(homeAction.addToCart(body,productObject.token)) 

}

    
  function onIncreaseQtyChange(qty,object) {
    if(notUndefinedAndNull(object)){
      addToCart(qty,object)
    }
  }

  function onDecreaseQtyChange(qty,object){
    if(notUndefinedAndNull(object)){
      addToCart(qty,object)
    }
  }


  function onDeleteItem(item,index) {
    let body = new FormData()         
    body.append("cart_id", item.ct_id)
    dispatch(cartAction.removeItem(body,productObject.token,index));
  }

  function sectionLoader(){
    return(
        <ActivityIndicator animating={store.showLoader} size="small" 
          color="#f79923" style={styles.activityIndicator}/>
    )
  }

  function renderSummarySection(){
    return(
            <View style={styles.cartSummaryContainer}>
                    <View style={styles.cartCostWrap}>
                        <QText>Sub Total Weight</QText>
                        <QText>{subTotal.amount.toFixed(2)}</QText>
                    </View>        
                  
                    <View style={styles.totalCostWrap}>
                        <QText fontWeight='bold'>Total Weight</QText>
                        <QText fontWeight='bold'>{subTotal.grandTotal.toFixed(2)}</QText>
                    </View>                   
          </View>                     
    )
  }


    function cartList(cartData){
      if(!undefinedOrZero(cartData)){
          return(
              <FlatList
                data={cartData}
                removeClippedSubviews={false}
                refreshing={showStateLoader}
                onRefresh={()=>refreshPage()} 
                contentContainerStyle={{paddingBottom:20}}
                keyExtractor={result => result.ct_pr_id}
                ListFooterComponent={renderFooterView()}
                renderItem= { ({ item,index }) =>{
                    return(
                      <Fragment>
                        {!store.showLoader &&
                        <CartItem product_image={item} qty={parseInt(item.ct_pr_quantity)} name={item.ct_pr_name} price={item.ct_pr_weight} productObj={item} productDetail={notUndefinedAndNull(store.productDetails) ? store.productDetails:null}
                              onQtyIncrease={onIncreaseQtyChange} onQtyDecrease={onDecreaseQtyChange} indexValue={index} intent="cart" removeProduct={onDeleteItem}/>}
                        {store.showLoader &&  (sectionLoader())}
                      </Fragment>
                    )
                }}
              />
          )
      }
  }


  function renderFooterView(){
    return(
      <View>
        <View style={styles.couponTitleContainer}>
          <QText fontWeight='bold'>Summary</QText>
        </View>        
            {!store.showLoader && (renderSummarySection())}
            {store.showLoader &&  ((sectionLoader()))}
      </View>
     
    )
  }

  function renderBottomIndicator(){
    return(
      <ActivityIndicator animating={store.showLoader} size="small" 
         color="#f79923" />
    )
  }
    function renderMiniCart(){
      if(!undefinedOrZero(store.summaryCart)){
            return(
                <View>
                  {cartList(store.summaryCart)}   
                </View>                
            )
      }
    }


    function renderNoCartItem(){
        if(!undefinedOrZero(store.summaryCart)){
          return null
        }
        
        if(undefinedOrZero(store.summaryCart) && !store.showLoader){
              return(
                <View style={styles.noCart} >
                    <QText style={styles.text}>No Items in the cart</QText>
                </View>
            )      
        }
      }
  
    function renderBottomButton(){
        return(
            <View style={styles.footerView}>
                <View style={styles.amountView}>
                {!store.showLoader && (<QText style={styles.amountText}>₹ {subTotal.grandTotal.toFixed(2)}</QText> )}
                    {store.showLoader &&  (renderBottomIndicator())}
                </View>
            
                <LinearGradient colors={['#f79921', '#ed3669', ]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.addtoCartView}>
                <TouchableOpacity>
                        <QText style={styles.addToCartText}>Continue</QText>
                </TouchableOpacity>
                </LinearGradient>                   
            </View>  
        )
    }
  
    function renderLoader(){
        return(
            <Loader show={showStateLoader} />
        )
    }

    return(
        <Fragment>
            {renderLoader()}
            <View style={styles.container}>
                {renderMiniCart()}
                {!undefinedOrZero(store.summaryCart) && renderBottomButton()}
                {renderNoCartItem()}
            </View>
        </Fragment>
    )
    }

function connectToStore(store){
  return {
    showLoader:store.cart.showLoader,
    showLoader:store.home.showLoader,
    addToCart: store.home.addToCart,
    summaryCart: store.cart.summaryCart,
    productDetails:store.home.productDetails

  }
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      padding: 20,
    },
    noCart:{
      padding: 20,
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      height:deviceHeight
    },
    couponTitleContainer: {
      padding: 20,
      backgroundColor: '#F8F8FA'
    },
    cartSummaryContainer: {
      backgroundColor: Colors.whiteColor,
      padding: 20,
      marginBottom:30
    },
    cartCostWrap: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 5
    },
    totalCostWrap: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    toolTipContainer: {
      width: 200,
      padding: 10,
      height: 'auto',
      left: 100,
      justifyContent: 'space-between',
      flex: 1,
      alignItems: 'stretch',
      borderRadius: 4
    },
    toolTipTextWrap: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    toolTipParentText: {
      marginRight: 6
    },
    text: {
      padding: 20,
      fontSize:22,
      fontWeight: 'bold',
    },
    amountText:{
      justifyContent: "center",
      alignSelf:"center",
      fontSize: 20,
      marginRight: 10,
      color: Colors.primaryColor
    },
    amountView:{
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: 'white',
      padding: 15,
      flex:2
    },
    addToCartText:{
      justifyContent: "center",
      alignSelf:"center",
      fontSize: 20,
      marginRight: 10,
      color: 'white'
    },
    addtoCartView:{
      justifyContent:"center",
      alignItems:"center",
      padding: 15,
      flex:2
    },
    footerView: {
      flexDirection: "row",
      justifyContent:'space-around',
      alignSelf:'center',
      marginBottom:10,
      bottom:0,
      position:'absolute'
   },
   activityIndicator:{
      padding:70,
      backgroundColor: 
      Colors.whiteColor
    }
   
  })
  