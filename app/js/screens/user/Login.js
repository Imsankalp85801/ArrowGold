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

import { Avatar, Divider, Icon, Overlay,Input } from 'react-native-elements';

var height = Dimensions.get("window").height;

export default function Login(){

    let dispatch = useDispatch();
    let store = useSelector(connectToStore, shallowEqual);
    let navigation = useNavigation();

    let userNameInput = useInput('Username', 'none', 'default', usernameValidation());
    let passwordInput = useInput('Password', 'password', 'default', passwordValidation());
    // let login = useLogin();
    // let [showRolePopup, setShowRolePopup] = useState(false);
    // let [selectedRole, setSelectedRole] = useState(null);
    let [showPassword, setShowPassword] = useState(true);


    // useEffect(()=>{
    //     if(store.userNameChecked){
    //         dispatch(userAction.resetUsernameCheck())
    //     }
    // }, [userNameInput.value]);

    // useEffect(()=>{
    //     if(store.isLoggedIn){
    //         let {user} =store;
    //         let roles = user.authentication.roles
    //         if(roles.length > 1){
    //             setShowRolePopup(true)
    //         }else{
    //             createUserSession(store.user);   
    //         }
    //     }
    // },[store.isLoggedIn]);

    // useEffect(()=>{
    //     let user = store.user;
    //     if(notUndefinedAndNull(user)){
    //         user.authentication.roles=[selectedRole]
    //         createUserSession(user);
    //         dispatch(userAction.setUserActiveRole(selectedRole))
    //         dispatch(userAction.setUserData(user))
    //     }
    // },[selectedRole])

    // useEffect(()=>{
    //   if(store.isOTPLogin){
    //     if(!empty(userNameInput.value)){
    //         dispatch(userAction.sentOTP(userNameInput.value))
    //         navigation.navigate('OTP Login',{userName: userNameInput.value});
    //     }
    //   }
    // },[store.isOTPLogin]);

    // function createUserSession(user){
    //     try{
    //         createSession(user);
    //     }catch(e){
    //         //TODO: Add Firebase reporting tool here
    //     }
    // }

    function onPressButton(){
        
        let isValid = isFormValid();

        if(isValid){
            login.process(userNameInput.value, passwordInput.value);
        }
    }

    // function isFormValid(){

    //     let isValid = true;

    //     if(empty(userNameInput.value)){
    //         isValid = false;
    //         userNameInput.validate(userNameInput.value)
    //     }

    //     if(isValid && store.userNameChecked){
    //         if(!store.isOTPLogin && empty(passwordInput.value)){
    //             passwordInput.validate(userNameInput.value)
    //         }
    //     }

    //     return isValid;
    // }


    function gotoForgotPassword(){
        userNameInput.validate();
        if(!empty(userNameInput.value)){
            navigation.navigate('Forgot Password',{userName: userNameInput.value});
        }
    }

    function gotoForgotUsername(){    
            navigation.navigate('Forgot Username');
    }

    // function goToPayDirect(){
    //     navigation.navigate('Paydirect');
    // }

    // function renderRolePopupBody(){
    //     let {user} =store;
    //     if(undefinedOrNull(user)){
    //         return null
    //     }
    //     let roles = user.authentication.roles

    //     return(
    //         <RoleSelect items={roles}  show={(v)=>setShowRolePopup(v)} onSelectRole={setSelectedRole}
    //         />
    //     )
    // }

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
        if(!store.userNameChecked){
            dispatch(userAction.isOTBasedLogin(username))
        }

        if(store.userNameChecked && !store.isOTPLogin){

            let credentials = {
                login: username,
                password: password
              }

            dispatch(userAction.passwordLogin(credentials))
        }
    }

    return {
        process: (username, password) => handleOnPress(username, password)
    }
}

function connectToStore(store){
    return{
        // userNameChecked: store.user.userNameChecked,
        // isOTPLogin: store.user.isOTPLogin,
        // showLoader: store.user.showLoader,
        // isLoggedIn: store.user.isLoggedIn,
        // user: store.user.user
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
    forgotUsername: {
        marginRight: 20
    },
    input: {
        color: '#fff',
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