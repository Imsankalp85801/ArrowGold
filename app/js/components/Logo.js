import React from "react"
import { StyleSheet, View, Image } from "react-native"
import defaultLogo from '../../../assets/images/logo.png';
import logoOrange from '../../../assets/images/logo-orange.png'
import blueLogo from '../../../assets/images/logo-blue.png';
/**
 * Use width props on Logo to specify width of Logo. Height will be set auto. 
 * If no width is given, default is 100
 * 
 */

export default function Logo(props){
  const logoWidth = {
    width : props.width ? props.width : 100
  }

  const getLogo = () => {
    if(props.blue){
      return blueLogo
    }else if(props.orange){
      return logoOrange
    }else{
      return defaultLogo;
    }
  }

  return(
    <View>
      <Image
        source={getLogo()}
        resizeMode="contain"
        style={[styles.logo, logoWidth]}
      ></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    //height: 50
  }
})