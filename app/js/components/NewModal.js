import { AntDesign, EvilIcons } from '@expo/vector-icons';
import React, { Fragment } from "react";
import { Animated, Dimensions, Modal, StyleSheet, Text, View } from 'react-native';
import QButton from '../components/QButton';


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function NewModal(props) {
 
  if (!props.show) {
    return null;
  }
  else {
    return (
      <Animated.View
        style={[StyleSheet.absoluteFill, styles.modalWrapper, props.show?styles.modalWrapperActive:null]}
        role="button"
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => {
                 
          }}>
           
           <Fragment>
           {props.status === '2' && (
             <View style={styles.innerContainer}>
             
                 <EvilIcons name="close-o" style={styles.image} onPress={props.closePopup}/>   
                <View style={styles.innerdetail}>
                <AntDesign name="closecircle" size={48} style={{ marginTop: 10 , color: "#ff0000"}}/>
                 <Text style={{justifyContent:"center", alignSelf:"center",marginTop: 20, alignItems:"center",textAlign:"center",fontSize:20}}>Sorry, we didn't find your username, please contact your school admin.</Text> 
                 <Text style={{justifyContent:"center", alignSelf:"center",marginTop: 20, alignItems:"center",textAlign:"center",fontSize:20}}>You can also get in touch with our support team at 022-48933589 or write us an email on info@qfixinfo.com.</Text>
                </View>
                <View style={{marginTop:20, marginHorizontal:10}}>
                <QButton 
                  title='Apply again!'
                  design='gradient'
                  onPress={props.closePopup}
                  />
                  </View>
              
             </View>
             )}
             {props.status === '1' && (
             <View style={styles.innerContainer}>
             
                 <EvilIcons name="close-o" style={styles.image} onPress={props.closePopup}/>   
                <View style={styles.innerdetail}>
                <AntDesign name="checkcircle" size={48} style={{ marginTop: 10 , color: "#008000"}}/>
             <Text style={{justifyContent:"center", alignSelf:"center",marginTop: 20, alignItems:"center",textAlign:"center",fontSize:20}}>{props.message}</Text> 
                
                </View>
                <View style={{marginTop:20, marginHorizontal:10}}>
                <QButton 
                  title='Done'
                  design='gradient'
                  onPress={props.closePopup}
                  />
                  </View>
              
             </View>
             )}
             </Fragment>
          </Modal>
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
        opacity: 1
    },
    appModal: {
        maxWidth: width,
        margin: 0,
        opacity: 1,
        backgroundColor: "#ffffff",
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
    },
    popup:{
        flexDirection:"row"
    },
    headerText:{
        flexDirection:"column"
    },
    contentText:{
        alignContent:"center",
        justifyContent:"center"
    },
    container: {
      flex:1,
      backgroundColor: 'blue',
      justifyContent: 'flex-end',

    },
    innerContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: 140,
      backgroundColor: 'white',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40
    },
    image:{
       fontSize : 35,
       alignSelf:'flex-end',
       marginRight: 10,
       marginTop: 15
    },
    innerdetail:{
      flexDirection: "column",
      justifyContent:"center",
      alignItems: "center"
    },
    innerText:{
      fontSize: 15,
      fontWeight: 'normal',
      marginHorizontal: 20
    }
});
