import React, { useState } from "react";
import {Modal, Text, TouchableHighlight, Animated, View, Alert, StyleSheet} from 'react-native';
import PropTypes from "prop-types";
import { Dimensions } from "react-native";
import Colors from '../constants/Colors'

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function QModal(props) {

  if (!props.show) {
    return null;
  }
  else {
    return (
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.modalWrapper, props.show?styles.modalWrapperActive:null]}
        role="button"
        //onPress={onClose}
      >
        <Modal
          animationType="slide"
          transparent={false}
          visible={props.isModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello QFix!</Text>

              <TouchableHighlight
                onPress={() => {
                  setModal(false);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <View //style={styles.appModal}
          //onPress={e => e.stopPropagation()}
        >
          <View style={styles.modalContent}><Text>Yes </Text>{props.children}</View>
        </View>
      </Animated.View>
    );
  }

}


const styles = StyleSheet.create({
  modalWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
    zIndex: 1500,
    alignItems: 'flex-end',
    display: 'flex',
    opacity: 0
  },
  modalWrapperActive: {
    opacity: 1,
  },
  appModal: {
    maxWidth: width,
    margin: 0,
    opacity: 1,
    backgroundColor: Colors.whiteColor,
    position: 'relative',
    width: width,
    height: 'auto',
    overflow: 'scroll',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowOffset: {
      height: -1,
      width: 0
    },
    shadowColor: "rgba(53,64,154,1)",
    shadowOpacity: 1,
    shadowRadius: 4,
    maxHeight: height-60
  }
});

