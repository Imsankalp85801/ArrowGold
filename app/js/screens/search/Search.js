import React ,{useEffect, Fragment}from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import QButton from '../../components/QButton';
import QInput from '../../components/QInput';
import QText from '../../components/QText';
import Loader from '../../components/Loader';
import { notUndefinedAndNull, empty, undefinedOrNull } from '../../utils/Validation';




   
  



export default function search() {
   

   
    return(
        <Fragment>
        
                  <View style={styles.loginFormContainer}>
                        <View>
                            <QInput inputTextStyle={styles.input} inputContainerStyle={styles.inputContainer}
                            />
                        </View>
                        <View>
                        <QButton
                            title='Search'
                            design='gradient'
                          
                            >
                        </QButton>
                    </View>
                   
                
                </View>
        </Fragment>       
    

    )
}   




const styles = StyleSheet.create({
    container:{
        justifyContent:"center",alignItems:"center",
        backgroundColor: "#2c357e",
        flexDirection: "column"
    },
    logoContainer: {
       
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginFormContainer: {
        
        marginTop:50,
        paddingHorizontal: 10,
    },
    loginBtn: {
        height: 50
    },
    
    helperBox: {
       
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    forgotUsername: {
        marginRight: 20
    },
    input: {
        // color: '#00000',
        borderBottomWidth: 0

    },
    loginToContinue:{
        color: '#000000',
        alignSelf: "center",
        marginTop: 40,
        fontSize: 16
    },
    helpLink:{
        paddingHorizontal: 10
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
      },
})

