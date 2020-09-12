import React, { Fragment } from 'react';
import {Modal, StyleSheet, View,Animated,Dimensions,Image } from 'react-native';
import QText from '../../js/components/QText';
import Colors from '../../js/constants/Colors';
import { EvilIcons } from '@expo/vector-icons';
import { notUndefinedAndNull, undefinedOrNull } from '../../js/utils/Validation';
import {Overlay} from 'react-native-elements'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

import SuccessImage from  '../../../assets/images/success.svg';
import FailedImage from  '../../../assets/images/failed.svg';
import QButton from './QButton';

export default function Popup(props){ 


  function getImage(){

    if(notUndefinedAndNull(props.success) && props.success){
        return (<SuccessImage height={150} width={150} />)
      
    }else if(notUndefinedAndNull(props.success) && !props.success){
        return (<FailedImage height={150} width={150} />)
       }else{
        return null;
    }

  }

  function returnOverlay(){
    if(props.show){
        return (
            <Overlay 
                fullScreen
                isVisible={props.show}
                overlayBackgroundColor='rgba(44,53,126,.69)'
                windowBackgroundColor='rgba(0,0,0,0)'>
              <View></View>
            </Overlay>
        );
    }
  }

  function renderButton(){

    if(props.hideButton){
      return null;
    }

    return <QButton style={popupStyles.buttonStyle} title={props.buttonText} design='solid' onPress={()=> props.onClickButton()}/>

  }

  if (!props.show) {
      return null;
  }else {
    return (    
      <Fragment>
        {returnOverlay()}
        <Animated.View
          style={[StyleSheet.absoluteFill, popupStyles.modalWrapper, props.show?popupStyles.modalWrapperActive:null]}
          role="button"
          // onPress={props.onClose}
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={notUndefinedAndNull(props.showLoader) ? props.showLoader : true}
            // Loader={true}
            onRequestClose={() => {
              // Alert.alert('Modal has been closed.');
            }}>

              <View style={popupStyles.popupContainer}>
                <View style={popupStyles.headerView}>
                    <QText fontWeight='bold' style={popupStyles.headerTitle}> {props.header}</QText>
                    <EvilIcons name="close-o" style={popupStyles.image} onPress={props.closePopup}/> 
                </View>
                  {!props.onlyBody && 
                  <Fragment>
                    <View style ={popupStyles.imageView}>
                      {getImage()}
                    </View>
                    <QText style={popupStyles.textStyle}  fontWeight='bold' > {props.title}</QText>
                    {renderButton()}
                  </Fragment>
                  }
                  {props.children}
              </View>

          </Modal>
        </Animated.View>
      </Fragment>

    )
  }
}

const popupStyles = StyleSheet.create({
   
    popupContainer: {
      flex: 1,
      bottom: 0,
      left: 0,
      right: 0,
      marginTop: 140,
      backgroundColor: 'white',
      borderWidth:1,
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      borderColor:Colors.blackColor,
      padding:10
    },
    modalWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        zIndex: 1500,
        alignItems: 'flex-end',
        display: 'flex',
        opacity: 0
    },
    modalWrapperActive: {
        opacity: 1
    },
    imageSize:{
        width:50,
        height:50
     },

     image:{
      fontSize : 35,
      alignSelf:'flex-end',
      marginRight: 10,
      marginTop: 20
   },
    imageView:{
      justifyContent:"center",
      alignContent:"center",
      alignItems:'center',
      marginBottom:30,
      marginTop:40
    },
    textStyle:{
      paddingHorizontal: 20,
      justifyContent: 'center',
      textAlign: 'center'
    },
    buttonStyle:{
      justifyContent:"center",
      alignItems:"center",
      alignSelf:"center",
      marginBottom: 40,
      position: 'absolute',
      bottom: 0, 
    },
    headerView:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    headerTitle:{
      marginTop:20,
      marginLeft:18,
      fontSize:21,
    }
  })