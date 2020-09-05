import React from 'react'
import { CheckBox } from 'react-native-elements'
import { Image, StyleSheet } from 'react-native'

/**
 * QCheckbox component uses CheckBox from 'react-native-elements'
 * Details here: - https://react-native-elements.github.io/react-native-elements/docs/checkbox.html
 * Custom icons are used here for qfix purpose. This component though also accepts icons like Material, Ionicons and FontAwesome avaialble through expo/react-native-elements
 * size props define the width and height for the icon, default is 20
 * text can be styled can be applied as textStyle style object as props. For e.g., default fontWeight is normal. But you can pass a style object as textStyle={{fontWeight: 'bold'}} to make the text appear bold.
*/

export default function QCheckbox(props) {
  const checkBoxAlign = props.checkBoxAlign ? props.checkBoxAlign : 'left'
  const size = props.size ? props.size : 20
  return(
    <CheckBox
      {...props}
      checkBoxAlign
      title={props.title}
      fontFamily='ssp-regular'
      checked={props.checked}
      checkedIcon={<Image style={{width: size, height: size}} source={require('../../../assets/images/checkedIcon.png')} />}
      uncheckedIcon={<Image style={{width: size, height: size}} source={require('../../../assets/images/unCheckedIcon.png')} />}
      onPress={props.onPress}
      size={props.size}
      iconRight={props.iconRight}
      containerStyle={[styles.containerStyle, props.containerStyle]}
      textStyle={[styles.textStyle, props.fullWidth?styles.textFullWidth:null, props.textStyle]}
      Component={props.Component}
      disabled={props.disabled}
    />
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    padding: 0,
    paddingVertical: 5,
    marginVertical: 5,
    marginLeft: 0,
    marginRight: 0
  },
  textStyle: {
    fontWeight: 'normal',
  },
  textFullWidth: {
    flex: 1,
    marginLeft: 0,    
  }
})