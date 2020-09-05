
import React, { useEffect, useState, Fragment,useRef } from 'react';
import { StyleSheet, View,TouchableNativeFeedback,Text,Image,TouchableOpacity,Dimensions} from "react-native";
import { useNavigation, useBackButton } from '@react-navigation/native';
import UserIcon from "../../../assets/images/dashboard_profile.svg";
import QText from '../components/QText';

import { EvilIcons } from '@expo/vector-icons';

var devicewidth = Dimensions.get("window").width; //full width


export default function HeaderDesign(props){

    let navigation=useNavigation();

    function openDrawer(){
        navigation.toggleDrawer();
    }

        return(
            <Fragment>
                <View style={headerStyles.container}>
                    <View style={headerStyles.textStyle}>
                        <QText style={headerStyles.text}>Welcome to ArrowGold</QText>
                    </View>
                    <View style={headerStyles.rightSide}>
                        <TouchableOpacity
                            background={TouchableNativeFeedback.Ripple('#F79923')}
                            onPress={()=>openDrawer()}>
                             <UserIcon height={30} width={30} fill='#D4AF37' style={ {marginRight: 10 }} /> 
                        </TouchableOpacity>
                    </View>
                </View>
            </Fragment>
        )
}

const headerStyles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: 'row',
        display: 'flex'
    },
    imageStyle:{ 
        width: 70,
        height:30,
        resizeMode:'contain'
    },
    rightSide:{
        marginLeft:'auto'
    },
    textStyle:{
        flex:1,
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    }

  });
