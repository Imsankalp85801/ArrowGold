import React from 'react'
import { AppRegistry } from 'react-native'
import Swiper from 'react-native-swiper'

/**
 * https://github.com/leecade/react-native-swiper
 * Include your slide items as children of the ProductImageSlider.
*/

export default function ProductImageSlider(props) {
  return (
    <Swiper 
      {...props}
      style={props.wrapperStyle}
      showsButtons={props.showButtons}
      horizontal={props.horizontal}
      loop={props.loop}
      index={props.index}
      autoplay={props.autoplay}
      loadMinimal={props.loadMinimal}
      loadMinimalSize={props.loadMinimalSize}
      loadMinimalLoader={props.loadMinimalLoader}
      dotColor={props.dotColor}
      activeDotColor={props.activeDotColor}
    >
      {props.children}
    </Swiper>
  )
}

AppRegistry.registerComponent('qfrnSlick', () => ProductImageSlider);
