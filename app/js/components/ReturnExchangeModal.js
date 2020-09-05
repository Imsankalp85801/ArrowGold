import React, { useState } from "react";
import {Modal, Text, TouchableHighlight, Animated, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';

import { Divider } from 'react-native-elements';
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import QButton from '../components/QButtons';
import Colors from '../constants/Colors'
import {getImagePath} from '../../js/utils/ImagePath';
import imageProduct from '../../../assets/images/productImg.png'
import { EvilIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function ReturnExchangeNodal(props) {
 
 
  if (!props.show) {
    return null;
  }
  else {
    return (
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.modalWrapper, props.show?styles.modalWrapperActive:null]}
        role="button"
        // onPress={props.onClose}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            
          }}>
           
             <View style={styles.innerContainer}>
                 <EvilIcons name="close-o" style={styles.image} onPress={props.closePopup}/>   
                  <View style={styles.innerdetail}>
                     <Text style={styles.innerText}>Return/ Exchange</Text>

                      <TextInput placeholder="Comments" style={styles.inputStyle} underlineColorAndroid="transparent" onChangeText={props.comments}/>
                      <View style={{alignItems: 'center', marginTop: 20}}>
                      <QButton
                        intent='block'
                        title='DONE'
                        design='gradient'
                        style={{width: 150}}
                        loading={props.loading}
                        onPress={props.saveReturnExchange}
                        />
                        </View>
                
                  </View>
             </View>
            
          </Modal>
      </Animated.View>
    );
  }

}


const styles = StyleSheet.create({
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
    appModal: {
        maxWidth: width,
        margin: 0,
        opacity: 1,
        backgroundColor: Colors.whiteColor,
        position: 'relative',
        width: width,
        height: 'auto',
        overflow: 'scroll',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    shadowOffset: {
        height: -1,
        width: 0
    },
    shadowColor: "rgba(53,64,154,1)",
        shadowOpacity: 1,
        shadowRadius: 4,
        maxHeight: height-60
    },
    popup:{
        flexDirection:"row"
    },
    headerText:{
        flexDirection:"column"
    },
    contentText:{
        alignContent:"center",
        justifyContent:"center"
    },
    container: {
      flex:1,
      backgroundColor: 'blue',
      justifyContent: 'flex-end',

    },
    innerContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: 140,
      backgroundColor: 'white',
    },
    image:{
       fontSize : 35,
       alignSelf:'flex-end',
       marginRight: 10,
       marginTop: -15
    },
    innerdetail:{
      flexDirection: "column"
    },
    innerText:{
      fontSize: 25,
      fontWeight: 'bold',
      alignItems: "center",
      alignSelf: "center"
    },
    inputStyle:{
        height: 100, 
        width: null,
        borderColor: 'grey', 
        borderWidth: 1,  
        marginLeft:20,
        marginRight:20,
        padding:5,
        marginTop:20
    },
    gradientContainer: {
        alignItems:'center',
        justifyContent:'center',
        marginTop: 40,
        flexDirection: "column"
      },
      gradient: {
        justifyContent: 'center',
        alignItems:'center',
        height:50,
        flexDirection: "row"
      },
      button: {
        minWidth: 300
      },
      text: {
        color: 'white',
        fontSize: 20
      },
    buttonStyle:{
        
    }
});
