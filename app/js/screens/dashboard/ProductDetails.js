import React, { useState, useEffect, Fragment} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View,SafeAreaView,Dimensions,FlatList,TouchableOpacity,Image,ScrollView } from 'react-native';
import { useNavigation, useBackButton } from '@react-navigation/native';
import _ from 'lodash';
import * as homeAction from  '../../redux/action/HomeAction';
import { notUndefinedAndNull, empty, undefinedOrNull,undefinedOrZero } from "../../utils/Validation"
import Loader from '../../components/Loader'; 
import QText from '../../components/QText'; 
import ProductDetailsView from './ProductDetailsView';
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../constants/Colors'
import { getToken } from '../../services/Session';
import Popup from '../../components/Popup';

var devicewidth = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height

export default function ProductDetails(props) {

  let dispatch = useDispatch();
  let store = useSelector(connectToStore, shallowEqual);
  let navigation = useNavigation();

  const [productObject,setProductObject] = useState({quantity:1,pId:null,token:null})
  const [addStatus, setAddStatus] = useState({showPopup: false, isSuccess: false, msg: null});

  
  useEffect(()=>{
   getDetails()
  }, [])

  useEffect(()=>{
    if(notUndefinedAndNull(store.addToCart)){
          let message = "Item added to cart";
          let isSuccess =true;
          let show=true;
          if(!store.addToCart){
              message =obj.message;
              isSuccess = false;
              show=true
          }
          setAddStatus({...addStatus, showPopup: show, isSuccess: isSuccess, msg: message});
  }
   }, [store.addToCart])

  

  async function getDetails(){
    let item = props.route.params.item;
    let token = await getToken();
    setProductObject({...productObject,token:token,pId:item.pr_id})

    if(notUndefinedAndNull(item)){
        dispatch(homeAction.getProductDetails(item.pr_id,token)) 
    }
  }

  function refreshData(){
    getDetails()
  }

  function onIncreaseQtyChange(qty,object) {
    setProductObject({...productObject,quantity:qty,pId:object.pr_id})
  }

  function onDecreaseQtyChange(qty,object){
    setProductObject({...productObject,quantity:qty,pId:object.pr_id})
  }

   function addToCart(){
        let body = new FormData()         
        body.append("product_id", productObject.pId)
        body.append("quantity", productObject.quantity);
        dispatch(homeAction.addToCart(body,productObject.token)) 

  }

  function renderProductDetails(){
    let {productDetails} =store
    return(
        <View style={styles.container}>
        <ScrollView>
        <View>
         <ProductDetailsView product={productDetails.product} qty={productObject.quantity}
                  onQtyIncrease={onIncreaseQtyChange} onQtyDecrease={onDecreaseQtyChange} />
        </View>
        </ScrollView>
        <View style={styles.footerView}>
            <View style={styles.qpayView}>
            <TouchableOpacity>
              <Text style={styles.qpayText}>Q-Pay</Text>
              </TouchableOpacity>
            </View>
            
            <LinearGradient colors={['#f79921', '#ed3669', ]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} style={styles.addtoCartView}>
              <TouchableOpacity onPress={() => addToCart()}>
              <Text style={styles.addtoCartText}>Add to Cart</Text>
              </TouchableOpacity>
             </LinearGradient>
            
          </View>
        </View> 
    )
  }

  function renderNoProduct(){
    if (!store.showLoader) {
  
        if(notUndefinedAndNull(store.productDetails)) {
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

  function renderAddPopup(){
    return(
      <Popup  
      show={addStatus.showPopup} 
      title={addStatus.msg} 
      buttonText="Okay"
      onClickButton={()=>{
        dispatch(homeAction.resethomeData()) 
        refreshData()
        setAddStatus({...addStatus, showPopup: false, isSuccess: false, msg: null})
      }}
      success={addStatus.isSuccess} closePopup={()=> setAddStatus({...addStatus, showPopup: false})}/> 
    )
  }
    return (
      <Fragment>
        <Loader show={store.showLoader}/>
          {notUndefinedAndNull(store.productDetails) && renderProductDetails()}  
          {renderNoProduct()} 
          {renderAddPopup()}
      </Fragment>
    );
  }

  function connectToStore(store){
    return{
        showLoader:store.home.showLoader,
        productDetails:store.home.productDetails,
        addToCart:store.home.addToCart,        
    }
}

const styles = StyleSheet.create({
    qpayText:{
      justifyContent: "center",
      alignSelf:"center",
      fontSize: 20,
      marginRight: 10,
      color: Colors.primaryColor,
      fontWeight: "bold"
    },
    container:{
      flex:1
    },
    qpayView:{
      justifyContent:"center",
      alignItems:"center",
      backgroundColor: 'white',
      padding: 15,
      flex:2
    },
    addtoCartText:{
      justifyContent: "center",
      alignSelf:"center",
      fontSize: 20,
      marginRight: 10,
      color: 'white',
      fontWeight: "bold"
    },
    addtoCartView:{
      justifyContent:"center",
      alignItems:"center",
      padding: 15,
      flex:2
    },
    footerView: {
      flex: 1,
      flexDirection: "row",
      alignItems:"center",
      justifyContent: "flex-end",
      position: 'absolute',
      bottom:0
   },
   requestTrailView:{
     flexDirection: "row",
     borderRadius: 20,
     borderWidth: 1.5,
     padding: 15,
     width: '80%',
     borderColor: '#ed3669'
   },
   noDataView:{
    justifyContent:"center",
    flex:1
  },
  text:{
    alignSelf:"center",
    marginTop:5
  },
  })  
