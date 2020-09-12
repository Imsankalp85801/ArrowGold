import React, { useState, useEffect, Fragment} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View,SafeAreaView,Dimensions,FlatList,TouchableOpacity,Image,ScrollView } from 'react-native';
import { useNavigation, useBackButton } from '@react-navigation/native';
import _ from 'lodash';
import * as homeAction from  '../../redux/action/HomeAction';
import { notUndefinedAndNull, empty, undefinedOrNull,undefinedOrZero } from "../../utils/Validation"
import Loader from '../../components/Loader'; 
import QText from '../../components/QText'; 
import Colors from '../../constants/Colors'
import { SliderBox } from "react-native-image-slider-box";
import { Divider } from 'react-native-elements'
import CartQuantityController from './CartQuantityController'
import { get } from 'lodash';


export default function ProductDetailsView(props) {

    let dispatch = useDispatch();
    let store = useSelector(connectToStore, shallowEqual);
    let navigation = useNavigation();



    // function renderPrice(){
    //     if(empty(configItems.price)){
    //       return(
    //         <View style={styles.prodPriceRow}>
    //          <QText fontColor='black' fontWeight='bold' fontSize='xmedium' style={styles.productPrice}>₹ {price}</QText>
    //         </View>
    //       )
    //     }
    //     else{
    //       return(
    //         <View style={styles.prodPriceRow}>
    //          <QText fontColor='black' fontWeight='bold' fontSize='xmedium' style={styles.productPrice}>₹ {configItems.price}</QText>
    //         </View>
    //       )
    //     }
    // }

    function getImagePath(path,id){
      let {productDetails} =store
      let pathValue = productDetails.image_path
      if(!empty(path)){
          pathValue = pathValue+id+"/"+path;
      }
      return pathValue;
    }

    function renderProductImages(){
        let productImages = props.product.images;
        let images = [];
        images.push(getImagePath(props.product.pr_default_image,props.product.pr_id))
          if(productImages.length > 0){
            images=[]
            for(var i=0; i < productImages.length ; i++){
              let imageUrl = getImagePath(productImages[i].primg_file_name,productImages[i].primg_pr_id)
              images.push(imageUrl)
            }
          }
          return(
            <View>
                  <SliderBox
                      images={images}
                      sliderBoxHeight={350}
                      resizeMethod={'resize'}
                      paginationBoxVerticalPadding={0}
                      resizeMode={'contain'}
                      dotColor="#FFEE58"
                      inactiveDotColor="#90A4AE"
                      autoplay
                      circleLoop
                    />
              </View>
          )
    }


    function renderSimpleProduct(){

        return(
          <View>
            <CartQuantityController
              buttonSize='large'
              minQty={0}
              maxQty={40}
              style={styles.itemQtyControl}
              onQtyIncrease={props.onQtyIncrease}
              onQtyDecrease={props.onQtyDecrease}
              obj={props.product}
              productQty={props.qty}
              label='Quantity'

            />
        </View> 
        )
    }
 

    return(
    <Fragment>
      <Loader show={store.showLoader}/>
      <View style={styles.productDetailsContainer}>
      <View style={styles.productEntryWrap}>
        <View style={styles.skuText}>
          <QText fontSize='medium' style={{color:"grey"}} >
            ID: 
          </QText>
          <QText>&nbsp;</QText>
          <QText fontSize='medium' >
            {props.product.pr_id}
          </QText>
        </View>
         {renderProductImages()}
         <QText fontColor='black' fontWeight='bold' fontSize='xmedium' style={styles.productName}>{props.product.pr_name}</QText>
         {/* {renderPrice()} */}
      </View>
      
      <Divider style={styles.divider} />
       {renderSimpleProduct()}
    </View>
      </Fragment>
    )
}

function connectToStore(store) {
    return {
      showLoader:store.home.showLoader,
      productDetails:store.home.productDetails
    }
  
  }

  const styles = StyleSheet.create({
    productDetailsContainer: {
        flex:1,
        marginBottom:50
    },
    productEntryWrap: {
      paddingVertical: 10,
      backgroundColor: Colors.whiteColor
    },
    skuText: {
      marginRight:10,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 20
    },
    dropdownSize:{
      fontSize:14
    },
    sliderWrapperStyle: {
      height: 350,
      position: 'relative',
      //paddingHorizontal: 20
    },
    divider:{
      height: 10, backgroundColor: '#F8F8FA'
    },
    whiteBackgroubd:{
     color: "#ffffff"
    },
    slide: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10
    },
    productImg: {
      width: '100%',
      //maxWidth: 360,
      height: 320
    },
    productName: {
      marginTop: 20,
      marginBottom: 2,
      marginLeft:20

    },
    productShortDesc: {
      marginBottom: 10
    },
    wishListBtnWrap: {
      marginTop: 10,
      flexDirection: "row",
      marginLeft:20
    },
    image:{
      fontSize : 25,
      marginRight: 10,
      marginTop: 10,
      justifyContent:"flex-start",
      alignSelf: "center"
   },
   innerText:{
    fontSize: 15,
    fontWeight: "normal",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "flex-end",
    marginTop: 10
  },
   innerdetail:{
     flexDirection: "column"
   },
    prodPriceRow: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop:10,
      marginLeft:20
    },
    requestBtnWrap: {
      margin: 20
    },
    requestBtn: {
      width: 200
    },
    groupProdRow: {
  
    },
    subTotalWrap: {
      flex:1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,    
      paddingHorizontal: 20,
      backgroundColor: '#ffffff'
    },
    subTotalPriceWrap: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    subTotalPrice: {
      marginHorizontal: 10,
    },
    addOnsTitle: {
      marginTop: 10
    },
    configProduct:{
      backgroundColor: "#ffffff"
    },
    marginProduct:{
      marginRight:20,
      marginLeft:20
    },
    requestTrailView:{
      flexDirection: "row",
      borderRadius: 20,
      borderWidth: 1.5,
      padding: 15,
      width: '80%',
      borderColor: '#ed3669'
    }
  })