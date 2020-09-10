import { useNavigation, useBackButton } from '@react-navigation/native';
import _ from 'lodash';
import React, { useState, useEffect, Fragment } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Dimensions,ScrollView,Platform } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Logo from '../../components/Logo';
import QButton from '../../components/QButton';
import QInput from '../../components/QInput';
import QText from '../../components/QText';
import Loader from '../../components/Loader';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { notUndefinedAndNull, empty, undefinedOrNull } from '../../utils/Validation';
import { usernameValidation, passwordValidation } from '../../utils/ValidationSchema';
import * as loginAction from  '../../redux/action/LoginAction';
import { createSession } from '../../services/Session';

import { Avatar, Divider, Icon, Overlay,Input } from 'react-native-elements';

var height = Dimensions.get("window").height;

export default function Login(){

    let dispatch = useDispatch();
    let store = useSelector(connectToStore, shallowEqual);
    let navigation = useNavigation();

    let userNameInput = useInput('Username', 'none', 'default', usernameValidation());
    let passwordInput = useInput('Password', 'password', 'default', passwordValidation());
    let login = useLogin();
    let [showPassword, setShowPassword] = useState(true);


    useEffect(()=>{
        if(store.loginStatus){
            let {userDetails} =store;
            if(userDetails){
                createSession(userDetails.token);   
            }
        }
    },[store.loginStatus]);


    function onPressButton(){
        
        let isValid = isFormValid();

        if(isValid){
            login.process(userNameInput.value, passwordInput.value);
        }
    }

    function isFormValid(){

        let isValid = true;

        if(empty(userNameInput.value)){
            isValid = false;
            userNameInput.validate(userNameInput.value)
        }

        if(isValid && store.userNameChecked){
            if(!store.isOTPLogin && empty(passwordInput.value)){
                passwordInput.validate(userNameInput.value)
            }
        }

        return isValid;
    }


    return(
        <KeyboardAwareScrollView
                enableOnAndroid
                enableAutomaticScroll
                keyboardOpeningTime={0}
                extraScrollHeight={10}
                style={{flexGrow:1, backgroundColor:"#2c357e"}}
                extraHeight={Platform.select({ android: 100 })}
            >
          <>
            <Loader show={store.showLoader} />
            {!store.showLoader && 
            <View style={{height:height,justifyContent:"center",alignItems:"center"}}>
                    <View style={styles.logoContainer}>
                        {/* <Logo width={120} orange/> */}
                        <Text style={styles.loginToContinue}>Arrow Gold</Text>

                        <Text style={styles.loginToContinue}>LOGIN TO CONTINUE</Text>
                    </View>

                    <View style={styles.loginFormContainer}>
                        <View>
                            <QInput inputTextStyle={styles.input} inputContainerStyle={styles.inputContainer}
                            {...userNameInput}/>
                        </View>
                         <View>
                            <QInput secureTextEntry={showPassword} {...passwordInput}
                             hasIcon={true} inputContainerStyle={styles.inputContainer}
                             inputTextStyle={styles.input}
                             iconPosition='right' rightIcon={
                                <Icon name='eye' type='evilicon' size={25} color={'#fff'} 
                                    onPress={()=>setShowPassword(!showPassword)}  />
                                }
                            />
                        </View>
                        <View>
                            <QButton
                                title='Login'
                                design='gradient'
                                onPress={onPressButton}
                                >
                            </QButton>
                        </View>
                       
                    </View> 
            </View>
            }
            </>
            </KeyboardAwareScrollView>
    )
}

function useInput(placeholder, textContentType, keyboardType, validationScheme){
    let [value, setValue] = useState('');
    let [errorMessage, setErrorMessage] = useState(null);
    let [valid, setValid] = useState(true);

    function handleValueChange(v){
        if(notUndefinedAndNull(validationScheme)){
            let valid = true;
            let errorMessage = _.cloneDeep(errorMessage)
            if('required' in validationScheme && validationScheme.required && empty(v)){
                errorMessage = validationScheme.required.errorMessage
                valid = false
            }
            
            setValid(valid);
            setErrorMessage(errorMessage);
        }

        setValue(v)
    }

    return {
        value,
        valid,
        placeholder,
        textContentType, 
        keyboardType,
        errorMessage: errorMessage,
        onChangeText: (v) => handleValueChange(v),
        validate: (v) => handleValueChange(v)
    }
}

function useLogin(){

    let dispatch = useDispatch();
    let store = useSelector(connectToStore, shallowEqual);

    function handleOnPress(username, password){
        if(username && password){

            let body = new FormData()         
            body.append("email", username)
            body.append("password", password);
            dispatch(loginAction.login(body))
        }
    }

    return {
        process: (username, password) => handleOnPress(username, password)
    }
}

function connectToStore(store){
    return{
        showLoader:store.login.showLoader,
        userDetails:store.login.userDetails,
        loginStatus:store.login.loginStatus
    }
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
    forgotUsername:{
        marginRight: 20
    },
    input:{
        color: '#ffff',
        borderBottomWidth: 0
    },
    loginToContinue:{
        color: '#ffff',
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