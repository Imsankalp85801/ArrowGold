import React , {Fragment, useEffect, useState} from 'react';
import {View,TextInput, Button,TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import QText from '../components/QText';

export default function DetailCard(props){

    return(
        <View style={styles.datacontainer}>
          {props.children}
       </View>

    )


}


const styles = StyleSheet.create({
      datacontainer:{
        borderRadius: 10,
        borderColor: "#F5F5FC",
        borderWidth: 1,
        padding:10,
        marginLeft:15,
        marginRight:15,
        backgroundColor:"rgba(139, 147, 220, 0.09)",
        height:420
      }
     
})