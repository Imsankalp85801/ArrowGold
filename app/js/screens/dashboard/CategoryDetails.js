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
import { func } from 'prop-types';



var devicewidth = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function CategoryDetails(props) {

  let dispatch = useDispatch();
  let store = useSelector(connectToStore, shallowEqual);
  let navigation = useNavigation();
  
  useEffect(()=>{
    let item = props.route.params.item;
    if(notUndefinedAndNull(item)){
        dispatch(homeAction.getCategorybyId(item.cat_id)) 
    }
  }, [])


  function getMenuImagePath(path){
    let {categoryDetails} =store
    let pathValue = categoryDetails.image_path
    if(!empty(path)){
        pathValue = pathValue+path;
    }
    return pathValue;
  }


  function renderItem({ item }){
    return(
      <Fragment>
          <TouchableOpacity >
            <ProductItem>
                <Image source={{ uri : getMenuImagePath(item.cat_image)}} style={styles.productImage} resizeMode="contain" ></Image>
                <QText
                      fontWeight='regular'
                      fontSize='medium'
                      style={styles.text}
                      numberOfLines={1} 
                      ellipsizeMode="tail"
                      >
                      {item.cat_name.length < 15
                          ? `${item.cat_name}`
                          : `${item.cat_name.substring(0, 15)}...`}
                  </QText>
            </ProductItem>
          </TouchableOpacity>
      </Fragment>
    )
  }

  function renderImageList(categoryList){

    return(
      <FlatList
          data={categoryList.result}
          keyExtractor={result => result.cat_id}
          numColumns={2}
          columnWrapperStyle={styles.container}
          renderItem={renderItem}
          contentContainerStyle={styles.flatlistPadding}
        />
    )

  }

  function renderCategory(){
    let {categoryDetails} =store
    return(
        <View style={styles.maincontainer}>
          {renderImageList(categoryDetails)}
        </View>
    )
  }

  function renderNoCategory(){
    if (!store.showLoader) {
  
        if(notUndefinedAndNull(store.categoryDetails)) {
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
          {notUndefinedAndNull(store.categoryDetails) && renderCategory()}  
          {renderNoCategory()} 
      </Fragment>
    );
  }

  function connectToStore(store){
    return{
        showLoader:store.home.showLoader,
        categoryDetails:store.home.categoryDetails
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