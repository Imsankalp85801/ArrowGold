import React , {Fragment, useEffect, useState} from 'react';
import {View,TextInput, Button,TouchableOpacity, StyleSheet} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import QText from '../components/QText';


export default function Card(props){

    return(
      <View style={styles.datacontainer}>
          
            {props.children}
          
        </View>

    )

}

const styles = StyleSheet.create({
      datacontainer:{
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 1,
        padding:10,
        marginTop:20,
        backgroundColor:"#fff",
        height:120
      }
     
})