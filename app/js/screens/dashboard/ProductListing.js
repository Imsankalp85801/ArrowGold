import React, { useState, useEffect, Fragment} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View,SafeAreaView,Dimensions,FlatList,TouchableOpacity,Image,ScrollView } from 'react-native';
import { useNavigation, useBackButton } from '@react-navigation/native';
import _ from 'lodash';
import * as homeAction from  '../../redux/action/HomeAction';
import { notUndefinedAndNull, empty, undefinedOrNull,undefinedOrZero } from "../../utils/Validation"
import Loader from '../../components/Loader'; 
import QText from '../../components/QText'; 
import ProductItem from '../../components/ProductItem';


var devicewidth = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function ProductListing(props) {

  let dispatch = useDispatch();
  let store = useSelector(connectToStore, shallowEqual);
  let navigation = useNavigation();
  

  useEffect(()=>{
    const unsubscribe = navigation.addListener('focus', () => {
      let item = props.route.params.item;
      if(notUndefinedAndNull(item)){
          dispatch(homeAction.getProductListing(item.cat_id)) 
      }
    });

    return unsubscribe;
}, [navigation])

  function getImagePath(path,id){
    let {productListing} =store
    let pathValue = productListing.image_path
    if(!empty(path)){
        pathValue = pathValue+id+"/"+path;
    }
    return pathValue;
  }


  function renderItem({ item }){
    return(
      <Fragment>
          <TouchableOpacity onPress={() =>navigation.navigate('ProductDetails',{item:item})}>
            <ProductItem>
                <Image source={{ uri : getImagePath(item.pr_default_image,item.pr_id)}} style={styles.productImage} resizeMode="contain" ></Image>
                <QText
                      fontWeight='regular'
                      fontSize='medium'
                      style={styles.text}
                      numberOfLines={1} 
                      ellipsizeMode="tail"
                      >
                      {item.pr_name.length < 15
                          ? `${item.pr_name}`
                          : `${item.pr_name.substring(0, 15)}...`}
                  </QText>
            </ProductItem>
          </TouchableOpacity>
      </Fragment>
    )
  }

  function renderImageList(productListing){

    return(
      <FlatList
          data={productListing.product}
          keyExtractor={result => result.pr_id}
          numColumns={2}
          columnWrapperStyle={styles.container}
          renderItem={renderItem}
          contentContainerStyle={styles.flatlistPadding}
        />
    )

  }

  function renderProduct(){
    let {productListing} =store
    return(
        <View style={styles.maincontainer}>
          {renderImageList(productListing.result)}
        </View>
    )
  }

  function renderNoProduct(){
    if (!store.showLoader) {
  
        if(notUndefinedAndNull(store.productListing)) {
          return null;
        }

        return(
           <View style={styles.noDataView}>
            <QText fontWeight='regular' fontSize='large' style={styles.text}>
                No Product found!
               </QText>
           </View> 
        )

    }    
  }
    return (
      <Fragment>
        <Loader show={store.showLoader}/>
          {notUndefinedAndNull(store.productListing) && renderProduct()}  
          {renderNoProduct()} 
      </Fragment>
    );
  }

  function connectToStore(store){
    return{
        showLoader:store.home.showLoader,
        productListing:store.home.productListing
    }
}


const styles = StyleSheet.create({
    maincontainer:{
      flex:1,
    },
    container: {
      justifyContent: "center",
      marginTop: 5,
      marginBottom:5
    },
    flatlistPadding:{
      paddingBottom: 60,
    },
    productImage: {
      width: 120,
      height: 120,
      backgroundColor: "transparent",
      opacity: 1,
      marginTop: 14
    },
    text:{
      alignSelf:"center",
      marginTop:5
    },
    noDataView:{
      justifyContent:"center",
      flex:1
    },
  });