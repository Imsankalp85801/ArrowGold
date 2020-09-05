import React from 'react';
import { Dimensions, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Button } from 'react-native-elements';
//import LinearGradient from 'react-native-linear-gradient'
import Colors from '../constants/Colors';
import QText from './QText';
//import LinearGradient from 'react-native-linear-gradient'

/*
* This button component uses 'react-native-elements' - 'Button' as a base. See the import above.
* use props 'disabled' for a disabled button
* use props 'intent' to define different type of buttons, such as gradient button, transparent button. 
* Possible intent values are 'gradient', 'save', 'minimal', 'disable', 'block'. 
* pass props as design='gradient' to render a gradient button
* To use icon, specify hasIcon props and then specify your icon component as the children.
* Use iconRight props to shift the icon to right. If title is present icon is left aligned, center if no title and right after using iconRight props.
* For more detailed use, visit https://react-native-elements.github.io/react-native-elements/docs/button.html
* QButtonRaw is a named export. THis is a button that looks like text but acts like button. You can also pass a icon element as props to this component. Icon position is left.
*/

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
export default function QButton(props) {
  const linearGradient={
    colors: ['#f79921', '#ed3669', ],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }

  return(
    <TouchableNativeFeedback activeOpacity={0.7} style={[btnStyles.btnContainer, props.intent==='block'?btnStyles.btnContainerEdge:null]}>
        <Button
          {...props}
          type={props.type ? props.type : 'solid'}
          value={props.value}
          hidden={props.hidden}
          onPress={props.onPress}
          title={props.title}
          titleStyle={[
            props.intent === 'outline' ? btnStyles.titleStyleOutline : null,
            props.hasIcon ? btnStyles.titleStylePadding : null,
            btnStyles.titleStyle
          ]}
          buttonStyle={[
            btnStyles.qfixBtn,
            props.intent ? btnStyles[props.intent] : null,
            props.disabled ? btnStyles.disabled : null
          ]}
          linearGradientProps={props.design === 'gradient'? linearGradient: null}
          disabled={props.disabled}
          disabledStyle={[
            ((props.intent === 'disable') || props.disabled ) ? btnStyles.disabledStyle : null
          ]}
          disabledTitleStyle={[
            ((props.intent === 'disable') || props.disabled ) ? btnStyles.disabledTitleStyle : null
          ]}
          containerStyle={[
            btnStyles.containerStyle, props.style,
            ((props.intent !== 'disable') && !props.disabled && (props.intent !== 'outline') ) ? btnStyles.containerStyleBG : null
          ]}
          raised={props.raised}
          icon={props.hasIcon ? props.children: null}
          iconRight={props.hasIcon && props.iconRight}
          iconContainerStyle={[
            props.hasIcon ? btnStyles.iconContainerStyle : null,
            props.iconRight ? btnStyles.iconRightContainerStyle : null
          ]}
          useForeground={true}
          activeOpacity={0.7}
        />    
    </TouchableNativeFeedback>
  )
}

export function QButtonRaw(props){
  return(
    <TouchableOpacity onPress={props.onPress} style={[btnStyles.btnRaw, props.style]}>
      {props.icon ? props.icon : null}
      <QText 
        fontColor={props.btnColor} 
        fontSize={props.textSize} 
        fontWeight={props.fontWeight}
        style={[props.icon ? btnStyles.btnRawTextWithIcon : null]} 
      >{props.title}</QText>
    </TouchableOpacity>
  )
}

const btnStyles = StyleSheet.create({
  btnContainer: {
    borderRadius: 30,
    overflow: 'hidden'
  },
  btnContainerEdge: {
    borderRadius: 0
  },
  qfixBtn : {
    minWidth: '90%',
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.primaryColor,
    overflow: 'hidden'
  },
  containerStyle: {
    borderRadius: 30,
  },
  containerStyleBG: {
    backgroundColor: Colors.primaryColor
  },
  block: {
    borderRadius: 0,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primaryColor
  },
  titleStyle: {
    fontSize: 16,
    fontFamily: 'ssp-semiBold'
  },
  titleStylePadding: {
    paddingHorizontal: 10
  },
  titleStyleOutline: {
    color: Colors.darkColor,
    fontSize: 16
  },
  disabledStyle: {
    //opacity: 1
  },
  btnRaw: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnRawTextWithIcon: {
    marginLeft: 8
  }
})