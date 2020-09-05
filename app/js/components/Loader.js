import React from 'react';
import { View, Image, StyleSheet, ActivityIndicator,Dimensions } from 'react-native';
import loadGif from '../../../assets/images/loader.gif';

var height = Dimensions.get("window").height; //full height

export default function Loader(props){
    return (
        (props.show ? <View style={styles.container}>
            <ActivityIndicator size="large" color="#f79923"/>
        </View>: null)
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#2C357E',
        zIndex: 1000,
        opacity: 0.9,
        height:height
       
    }
  });
  