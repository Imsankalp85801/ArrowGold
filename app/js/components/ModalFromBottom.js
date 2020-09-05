import React from "react"
import { StyleSheet, Text, View, TouchableOpacity, Animated, Dimensions, Alert } from "react-native"
import { Overlay } from 'react-native-elements'
import QText from '../components/QText'
import QButton from '../components/QButtons'
import PropTypes from "prop-types"
import Svg, { Path, Rect } from "react-native-svg"
import Colors from '../constants/Colors'


export default class ModalBottom extends React.Component {
  constructor(props){
    super(props)
    //this.handleOpen()
    //Alert.alert(`Modal ${this.props.show.toString()}`);
  }
  state = {
    animation: new Animated.Value(0)
  };
  handleOpen = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  handleClose = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }
  componentDidMount=()=>{
    this.handleOpen()
  }
  componentWillUnMount=()=>{
    this.handleClose()
  }
  
  render() {
    const screenHeight = Dimensions.get("window").height
    const backdrop = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [screenHeight, 0],
            extrapolate: "clamp",
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: "clamp",
      }),
    };
    const slideUp = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, -1 * screenHeight],
            extrapolate: "clamp",
          }),
        },
      ],
    };

    return (
      <Overlay 
        fullScreen
        style={[styles.container]} 
        overlayBackgroundColor='rgba(44,53,126,.69)'
        windowBackgroundColor='rgba(0,0,0,0)'
        isVisible={this.props.show}
        onRequestClose={this.props.onRequestClose}
        onShow={this.props.onShow}
        onDismiss ={this.props.onDismiss}
        onBackdropPress={this.props.onBackdropPress}
        transparent={this.props.transparent}
        hardwareAccelerated ={true}
      >
        <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
              <View style={styles.modalHeader}>
                <QText style={styles.modalTitle} fontSize='medium' fontWeight='bold' fontColor='dark'>{this.props.modalTitle}</QText>
                <Svg viewBox="-0 -0 17 17" style={styles.closeBtn} onPress={this.props.onClose}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(0,0,0,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M8.50 10.00 L15.18 16.69 C15.60 17.10 16.27 17.10 16.69 16.69 C17.10 16.27 17.10 15.60 16.69 15.18 L10.00 8.50 L16.69 1.82 C17.10 1.40 17.10 0.73 16.69 0.31 C16.27 -0.10 15.60 -0.10 15.18 0.31 L8.50 7.00 L1.82 0.31 C1.40 -0.10 0.73 -0.10 0.31 0.31 C0.10 0.52 0.00 0.79 0.00 1.06 C0.00 1.34 0.10 1.61 0.31 1.82 L7.00 8.50 L0.31 15.18 C0.10 15.39 -0.00 15.66 0.00 15.94 C0.00 16.21 0.10 16.48 0.31 16.69 C0.73 17.10 1.40 17.10 1.82 16.69 L8.50 10.00 Z"
                  ></Path>
                </Svg>
              </View>
              <View style={styles.modalContent}>
                {this.props.children}
              </View>
            </Animated.View>
          </View>
        </Animated.View>
      </Overlay >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100
  },
  cover: {
    //backgroundColor: "rgba(0,0,0,.69)",
    //height: Dimensions.get("window").height
  },
  sheet: {
    position: "absolute",
    top: Dimensions.get("window").height,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
  },
  popup: {
    backgroundColor: Colors.whiteColor,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    //alignItems: "center",
    //justifyContent: "center",
    minHeight: 100,
  },
  modalHeader: {
    height: 60,
    paddingTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: Colors.greyColor,
    paddingHorizontal: 24,
    //backgroundColor: 'red'
  },
  modalTitle: {
    height: 20
  },
  closeBtn: {
    width: 15,
    height: 15,
    right: 20,
    top: 24,
    position: 'absolute'
  },
  modalContent: {
    padding: 24,
  }
});