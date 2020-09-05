import React , {Fragment, useEffect, useState} from 'react';
import {View,TextInput, Button,TouchableOpacity, StyleSheet} from 'react-native';
import { Avatar, Divider, Icon, Overlay } from 'react-native-elements';


export default function SearchFilter(props){

  return(
      <View style={styles.container}>
          <Icon name='search1' type='antdesign' size={20} color='#52577F' containerStyle={{ marginTop: 2 }}  />    
       <TextInput
         style={styles.inputStyle}
         autoCorrect={props.autoCorrect}
         placeholder={props.placeholder}
         onChangeText={props.onChangeText}
         onChange={props.onChange}
         value={props.value}
         label={props.label}
         onEndEditing={props.onEndEditing}
        />

      {props.noFilterIcon ? <View></View> :
      <TouchableOpacity onPress={props.onPressFilter}>
        <Icon name='filter' type='antdesign' size={20} color='#52577F' containerStyle={{ marginTop: 2 }}  />    
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginTop:30,
        borderRadius: 30,
        backgroundColor:'#ffffff'
      },
    inputStyle: {
        flex: 1,
        paddingLeft: 10,
        backgroundColor:'#ffffff'
      }
})