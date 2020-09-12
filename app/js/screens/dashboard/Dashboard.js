import React, { useState, useEffect, Fragment} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View,SafeAreaView,Dimensions,FlatList,TouchableOpacity,Image,ScrollView } from 'react-native';
import { useNavigation, useBackButton } from '@react-navigation/native';
import _ from 'lodash';
import * as homeAction from  '../../redux/action/HomeAction';
import { notUndefinedAndNull, empty, undefinedOrNull,undefinedOrZero } from "../../utils/Validation"
import Loader from '../../components/Loader'; 
import QText from '../../components/QText'; 


var devicewidth = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function Dashboard() {

  let dispatch = useDispatch();
  let store = useSelector(connectToStore, shallowEqual);
  let navigation = useNavigation();

  useEffect(()=>{
      const unsubscribe = navigation.addListener('focus', () => {
        dispatch(homeAction.getMenu()) 
      });
  
      return unsubscribe;
  }, [navigation])


  function getMenuImagePath(path){
    let {menuDetails} =store
    let pathValue = menuDetails.image_path
    if(!empty(path)){
        pathValue = pathValue+path;
    }
    return pathValue;
  }


  function renderImageList(menuList){

    return(
      <FlatList
          data={menuList}
          keyExtractor={result => result.cat_id}
          contentContainerStyle={styles.flatlistPadding}
          renderItem= { ({ item, index }) =>{      
            return(
              <Fragment key={index}>
                  <TouchableOpacity onPress={() =>navigation.navigate('CategoryDetails',{item:item})}>
                    <View style={styles.imageContainer}>
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
                    </View>
                  </TouchableOpacity>
              </Fragment>
            )
          }}
        />
    )

  }

  function renderMenu(){
    let {menuDetails} =store
    let menuList=[]
    if(!_.isEmpty(menuDetails.result) && !undefinedOrZero(menuDetails.result)){
        Object.entries(menuDetails.result).map(([key, item], index)=>{
          menuList.push(item);      
        });
    }
    return(
        <View style={styles.dashboardContainer}>
          {renderImageList(menuList)}
        </View>
    )
  }

  function renderNoMenu(){
    if (!store.showLoader) {
  
        if(notUndefinedAndNull(store.menuDetails)) {
          return null;
        }

        return(
           <View style={styles.noDataView}>
            <QText fontWeight='regular' fontSize='large' style={styles.text}>
                No Menu found!
               </QText>
           </View> 
        )

    }    
  }

    return (
      <Fragment>
        <Loader show={store.showLoader}/>
          {notUndefinedAndNull(store.menuDetails) && renderMenu()}   
          {renderNoMenu()} 
      </Fragment>
    );
  }

  function connectToStore(store){
    return{
        showLoader:store.home.showLoader,
        menuDetails:store.home.menuDetails
    }
}


const styles = StyleSheet.create({
  dashboardContainer: {
      flex: 1,
      justifyContent:'center'

  },
    imageContainer:{
      flex:1,
      justifyContent: "center",
      alignContent:"center",
      alignItems:"center",
      marginTop:5,

    
    },
    productImage: {
      width: 300,
      height: 150,
      backgroundColor: "transparent",
      opacity: 1,
      marginTop: 14,
      
      


    },
    noDataView:{
      justifyContent:"center",
      flex:1
    },
    container: {
      flex:1,
      marginTop: 5,
      marginBottom:5
    },
    flatlistPadding:{
      paddingBottom: 60,
    },
    text:{
      alignSelf:"center",
      marginTop:5
    },
});