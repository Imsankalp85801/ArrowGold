import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'react-native-elements'
import Colors from '../constants/Colors'
import QText from './QTexts'
import Svg, {G, Path } from "react-native-svg"
import QButton, { QButtonRaw } from './QButtons'

export default function ProductSizeController(props){
  const sizes = [
    {size: 'small', symbol: 'S'},
    {size: 'medium', symbol: 'M'},
    {size: 'large', symbol: 'L'},
    {size: 'xlarge', symbol: 'XL'},
  ]
  const [selectedSize, setSelectedSize] = useState(null)

  return(
    <View style={styles.sizeSelectWrapper}>
      <View style={styles.sizeSelectTop}>
        <QText fontSize='medium'>Size</QText>
        <QButtonRaw title='Size Chart' btnColor='primaryLite' textSize='medium' onPress={() => props.viewSizeChart()} 
          icon={<Svg id="noun_Shirt_Size_1527857" data-name="noun_Shirt Size_1527857" xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13">
          <Path id="Shape" d="M3.519,13V4.93L2.474,5.971,0,3.506,3.281.238A.881.881,0,0,1,3.867,0h1.5a2.439,2.439,0,0,0,2.6,2.373A2.439,2.439,0,0,0,10.575,0h1.558a.848.848,0,0,1,.587.238L16,3.506,13.526,5.971,12.463,4.911V13Z" fill="#2c367f"/>
        </Svg>
        } />
      </View>
      <View style={styles.sizeButtonsWrap}>
        {sizes.map((size, idx)=> {
          if (selectedSize===idx) return(
            <View key={idx} style={[styles.sizeButton, styles.activeSizeButton]}>              
              <TouchableOpacity onPress={()=>setSelectedSize(idx)} >
                <LinearGradient colors={['#f79921', '#ed3669', ]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
                  <QText fontSize='medium' fontColor='primary' fontWeight='bold' style={[styles.sizeBtnText, styles.sizeBtnTextActive ]}>{size.symbol}</QText>                  
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )
          else return(
            <View key={idx} style={[styles.sizeButton ]}>
              <TouchableOpacity onPress={()=>setSelectedSize(idx)} >
                <QText fontSize='medium' fontColor='primary' fontWeight='bold' style={[styles.sizeBtnText ]}>{size.symbol}</QText>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({  
  sizeSelectWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: Colors.whiteColor,
  },
  sizeSelectTop: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  sizeButtonsWrap: {
    flex:1,
    flexDirection: 'row',
    marginTop: 10
  },
  sizeButton: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.greyColor,
    textAlign: 'center',
    marginRight: 20,
    overflow: 'hidden'
  },
  activeSizeButton: {
    //backgroundColor: Colors.primaryColor
    borderWidth: 0
  },
  sizeBtnText: {
    height: 40,
    width: 40,
    lineHeight: 40,
    textAlign: 'center'
  },
  sizeBtnTextActive: {
    color: Colors.whiteColor
  }
})