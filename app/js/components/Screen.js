import React from 'react';
import {View , StyleSheet} from 'react-native';

export default function Screen(props){

    return(
        <View style={styles.maincontainer}>
          {props.children}
       </View>

    )

}

const styles = StyleSheet.create({
      maincontainer:{
       flex:1,
       marginLeft:30,
       marginRight:30,
       marginBottom:30
      }
})