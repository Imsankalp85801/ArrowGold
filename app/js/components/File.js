import React , {Fragment, useEffect, useState} from 'react';
import {View, Button,TouchableOpacity, StyleSheet} from 'react-native';
import QText from '../components/QText';
import {formatBytes} from '../utils/MobileUtils';
import { Avatar, Divider, Icon, Overlay } from 'react-native-elements';

export default function File(props){

    function renderIcon(){

        return(
            <TouchableOpacity onPress={()=>props.onRemove(props.index)}>
                <Icon name='close' type='antdesign' size={26} color='#737375' containerStyle={fileStyles.containerStyle}  />
            </TouchableOpacity>
        )
    }

    function renderSelectedFile(){

        return(
            <View style={fileStyles.header} >
                <View style={fileStyles.containHeader}>
                    <QText style={fileStyles.name} numberOfLines={2} ellipsizeMode='tail' >{props.file.name}</QText>
                    <QText style={fileStyles.size}>{formatBytes(props.file.size, 2, true)}</QText>
                </View>
                {renderIcon()}
            </View>
        )
    }

        return(
            <Fragment>
                {renderSelectedFile()}
            </Fragment>
        ) 


}
    const fileStyles = StyleSheet.create({

    header:{
        flexDirection:'row',
        justifyContent:"space-between"
    },
    containHeader: {
        flexDirection:'column',
        width:270
     },
    name:{
        fontFamily:'ssp-regular',
        fontStyle:"normal",
        fontSize: 16, 
        marginLeft:10,
        marginTop:5,
        marginRight:25,

    },
    size:{
        fontFamily:'ssp-regular',
        fontStyle:"normal",
        fontSize: 12, 
        marginLeft:10,
    },
     containerStyle:{
        marginTop: 10,
        marginRight:10 
     }
    })