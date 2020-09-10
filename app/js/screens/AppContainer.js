import React, { useEffect, useState, Fragment } from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { getSession } from '../services/Session';
import {notUndefinedAndNull, empty} from '../utils/Validation';
import AuthHome from './user/AuthHome';
import NavigationDrawer from './NavigationDrawer';
import { useSelector, shallowEqual, connect } from 'react-redux';
import ToastMessage from '../components/ToastMessage';
import { Dimensions,StyleSheet, View,ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationHome from './NavigationHome';
// import { UserContext } from '../services/Context';
import { KeyboardAvoidingView,Platform } from 'react-native';
import { Avatar, Divider, Icon, Overlay } from 'react-native-elements';
import KeyboardShift from '../components/KeyboardShift';

// import NetInfo from "@react-native-community/netinfo";
import QText from '../components/QText';

var devicewidth = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height


let Stack = createStackNavigator();
let Drawer = createDrawerNavigator()


export default function AppContainer(props){

    let session = useSession();
    let store = useSelector(connectToStore, shallowEqual);
    let [connection, setConnection] = useState(false);


    // The effect will be executed when a user is logged out
     useEffect(()=>{
        if(store.loggedOut){
            session.setIsLoggedIn(false);
        }
      },[store.loggedOut])

    //   useEffect(()=>{
    //     NetInfo.addEventListener(handleConnectivityChange);
    // }, [])
    
    // function handleConnectivityChange(state) {
    //   let connected= false;
    //     if (state.isConnected) {
    //       connected=true
    //     } 
    //     setConnection(connected)
    //   };
    
  
    return(
        <KeyboardShift>
        {() => (
            <Fragment>
            {/* <ToastMessage show={store.error && store.showToast} message={store.errorMessage}/> */}
            {!connection ? 
            <NavigationContainer>
                {!session.isLoggedIn ?
                    <Stack.Navigator headerMode="none">
                        <Stack.Screen name="AuthHome" component={AuthHome}/>
                    </Stack.Navigator>
                    :
                    // <UserContext.Provider value={session.userObject}>
                        <Drawer.Navigator 
                            drawerPosition="right" 
                            overlayColor="transparent"
                            drawerStyle={styles.drawerStyles} 
                            drawerContent={(props) => <NavigationDrawer {...props} />} 
                            >
                            <Stack.Screen name="NavigationHome" component={NavigationHome}   />
                    </Drawer.Navigator>
                //    </UserContext.Provider>

                }
            </NavigationContainer>
            :<View style={styles.connectionStyle}>
              <QText style={styles.textStyle}>You are offline! {"\n"} connect to network.</QText>
              <Icon name='access-point-network-off' type='material-community' size={26} color='#b22222' containerStyle={{marginLeft:15,marginBottom:20}} />
            </View>
            }
            </Fragment> )}
</KeyboardShift>   
    )
}
function useSession(){
    let store = useSelector(connectToStore, shallowEqual);
    let [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(()=>{
        setSession();
    }, [store.loginStatus])
            // The effect will be executed when a user is logged out

    useEffect(()=>{
        setSession();
    }, []);

    async function setSession(){
        try{
            let session = await getSession()
            if(notUndefinedAndNull(session)){
                setIsLoggedIn(true)
            }
        }catch(e){
            //TODO: Add the Firebase reporting tool to catch error here
        }
    }

    return {
        isLoggedIn,
        setIsLoggedIn: (isLoggedIn) => setIsLoggedIn(isLoggedIn)
    }
}

function connectToStore(store){
    return{
        userDetails:store.login.userDetails,
        loginStatus:store.login.loginStatus,
        loggedOut:store.login.loggedOut
        // showToast: store.global.showToast,
        // error: store.global.error,
        // errorMessage: store.global.message,
    }
}

const styles = StyleSheet.create({

    drawerStyles:{
        backgroundColor: '#000000',
        width: 250,
        height:height,
        marginTop:-5
        },
    container:{
        flex:1
    },
    connectionStyle:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
    },
    textStyle: {
      fontSize: 20,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }
    
});