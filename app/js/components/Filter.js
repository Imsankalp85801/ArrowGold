import React, { Fragment } from 'react';
import {Modal, StyleSheet, View,Animated,Dimensions,Image } from 'react-native';
import QText from '../../js/components/QText';
import Colors from '../../js/constants/Colors';
import { EvilIcons } from '@expo/vector-icons';
import { notUndefinedAndNull, undefinedOrNull } from '../../js/utils/Validation';
import {Overlay} from 'react-native-elements'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height



export default function Filter(props){ 

  function renderOverlay(){
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


  if (!props.show) {
      return null;
  }else {
    return (    
      <Fragment>
        {renderOverlay()}
        <Animated.View
          style={[StyleSheet.absoluteFill, filterStyles.modalWrapper, props.show?filterStyles.modalWrapperActive:null]}
          role="button"
        >
          <Modal
            animationType="slide"
            transparent={true}
            visible={notUndefinedAndNull(props.showLoader) ? props.showLoader : true} >

            <View style={filterStyles.container}>
                <View style={filterStyles.headerview}>
                    <QText style={filterStyles.textStyle}  fontWeight='bold' > {props.title}</QText>    
                    <EvilIcons name="close-o" style={filterStyles.image} onPress={props.closeFilter}/> 
                </View>
                    <View style={filterStyles.bodyStyle}>
                        {props.children}
                    </View>   

            </View>

          </Modal>
        </Animated.View>
      </Fragment>

    )
  }
}

const filterStyles = StyleSheet.create({
   
    container: {
      flex: 1,
        bottom: 0,
        flexDirection:"column",
        marginTop: 150,
        backgroundColor: 'white',
        borderWidth:1,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderColor:Colors.blackColor,
        padding:10,
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
 
   },
    textStyle:{
        fontSize : 25,
    },
    headerview:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:10,
        marginLeft:20,
        marginRight:20
      },
      bodyStyle:{
          marginTop:30,
          flex:1
      }
  })