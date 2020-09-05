import React, { useState, Fragment } from "react";
import {Modal, Text, TouchableHighlight, Animated, View, Alert, StyleSheet} from 'react-native';
import { Divider } from 'react-native-elements';
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import QButton from './QButton';
import { EvilIcons , AntDesign} from '@expo/vector-icons';
import SearchableDropdown from 'react-native-searchable-dropdown';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function DropdownModal(props) {
 

  if (!props.show) {
    return null;
  }
  else {
    return (
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.modalWrapper, props.show?styles.modalWrapperActive:null]}
        role="button"
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
                 
          }}>
           
           <View style={styles.innerContainer}>
             <EvilIcons name="close-o" style={styles.image} onPress={props.closePopup}/>   
                <SearchableDropdown
                   
                   onItemSelect={(item) => {
                    props.onItemSelect(item.id+ "," + item.name+ ","+props.label)
                  }}
                  containerStyle={{ padding: 5 }}
                  itemStyle={{
                      padding: 10,
                      marginTop: 2,
                      backgroundColor: '#fff',
                     
                 }}
                  itemTextStyle={{ color: '#333' }}
                  itemsContainerStyle={{ maxHeight: height }}
                  items={props.items}
                  resetValue={false}
                  
                  textInputProps={
                  {
                   autoFocus:true,
                   placeholder:"Select "+props.label,
                
                   style: {
                    height: 50,
                    opacity: 1,
                    flexDirection: 'row',
                    borderRadius: 30,
                    borderColor: "rgba(44,53,126,1)",
                    borderWidth: 1,
                    alignItems: 'center',
                    margin:10,
                    borderBottomWidth: 1,
                    marginTop: 10,
                    padding:10
                   },
                 }
               }
           /> 
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
        backgroundColor: "#ffffff",
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
      top: 80,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
    },
    image:{
       fontSize : 35,
       alignSelf:'flex-end',
       marginRight: 10,
       marginTop: 15
    },
    innerdetail:{
      flexDirection: "column",
      justifyContent:"center",
      alignItems: "center"
    },
    innerText:{
      fontSize: 15,
      fontWeight: 'normal',
      marginHorizontal: 20
    }
});
