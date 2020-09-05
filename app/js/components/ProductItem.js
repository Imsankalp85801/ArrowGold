import React , {Fragment, useEffect, useState} from 'react';
import {View,TextInput, Button,TouchableOpacity, StyleSheet} from 'react-native';


export default function ProductItem(props){

    return(
     <View style={styles.productWrap}> 
      <View style={styles.productInnerWrap}>
            {props.children}
        </View>
     </View> 
    )

}

const styles = StyleSheet.create({
      productInnerWrap: {
        width:140,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 20,
        borderColor: "rgba(196,196,196,1)",
        borderWidth: 1,
        padding: 10,
        marginLeft:20,
        marginRight:20
      },
      productWrap: {
        width:null,
        flex:2,
        justifyContent: "center",
        alignContent:"center",
        alignItems:"center",
        marginTop:10,
        padding: 5
      }
     
})