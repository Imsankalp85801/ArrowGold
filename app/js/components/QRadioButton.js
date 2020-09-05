import React from 'react'
import { View } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Colors from '../constants/Colors'
import QText from './QText'

/**
 * for details on props and methods -  https://www.npmjs.com/package/react-native-simple-radio-button
 * Pass the formHorizontal props as boolean to render a horizonatal/vertical radio button group
 * Pass the data props as radio_props (see const RADIO_PROPS below). Pass this radio_props as props and use as props.radio_props.map() -- IMPORTANT -- your radio_props props must be an array of object having keys 'label' and 'value'. Though, you can pass other keys also.
 * if you dont want to show label, pass showLabel props as false (boolean)
 * Pass the labelHorizontal props as boolean to render a horizonatal/vertical label
*/

export default function QRadio(props){

  return(
    <View>
      <RadioForm
        formHorizontal={props.formHorizontal}
        animation={true}
      >
        {/* To create radio buttons, loop through your array of options */}
        {
          props.radioButtons.map((obj, i) => (
            <RadioButton 
              labelHorizontal={true}
              key={i}
              accessible={true}
              idSeparator=','
              accessibilityLabel='noteType,1'
              testID='noteType,1'
            >
              {/*  You can set RadioButtonLabel before RadioButtonInput */}
              <RadioButtonInput
                obj={obj}
                index={i}
                isSelected={index === i}
                onPress={props.onPress(i)}
                borderWidth={1.5}
                buttonInnerColor={Colors.primaryColor}
                buttonOuterColor={index === i ? Colors.primaryColor : '#000'}
                buttonSize={8}
                buttonOuterSize={16}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 0, marginRight: 0}}
              >
              </RadioButtonInput>
              {props.showLabel ? 
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={props.labelHorizontal ? props.labelHorizontal : true }
                  onPress={props.onPress(i)}
                  labelStyle={{fontSize: 16, color: Colors.blackColor }}
                  labelWrapStyle={{marginRight: 10, top: -2}}
                />
                : null
              }
            </RadioButton>
          ))
        }  
      </RadioForm>
    </View>
  )
}