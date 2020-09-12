import React,{useEffect} from 'react';
import { View, Text,Fragment,StyleSheet,Dimensions } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { notUndefinedAndNull } from "../utils/Validation";
import {getHeaderTitle} from '../components/HeaderRoute';
import HeaderDesign from '../components/HeaderDesign';
import { Ionicons } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/stack'
import CartHeader from './CartHeader';
import * as homeAction from  '../redux/action/HomeAction';


import AppHome from './AppHome';
import Logout from './user/Logout';
import CategoryDetails from './dashboard/CategoryDetails';
import ProductListing from './dashboard/ProductListing';
import ProductDetails from './dashboard/ProductDetails';
import { getToken } from '../services/Session';





var devicewidth = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full height
let Stack = createStackNavigator()

export default function NavigationHome(props){

    let dispatch = useDispatch();
    let store = useSelector(connectToStore, shallowEqual);

    useEffect(()=>{
        const getSummaryCart = async () => {
            let token = await getToken();
            if(notUndefinedAndNull(token)){
                dispatch(homeAction.getSummaryOfCart(token));
            }
        }      
         getSummaryCart();

    }, [store.addToCart])


    const renderCartIcon = () => {
        return (
            <CartHeader />
        )
    }

    const renderHeaderRightElements = (showDrawerIcon,title) => {
        return {
            headerRight: ()=> (
                <View style={styles.headerView}>
                        {renderCartIcon()}
                    {showDrawerIcon && getHeaderTitle(route)}
                </View>
            ),
            headerTitle:title
        }
    }

    function renderDasboardRoute(name,component,header,title){

        return <Stack.Screen name={name} component={component} options={{headerShown: header,headerTitle:title}}/> 
    }


    function renderNavigationRoute(name,component,header,title){
  
          return <Stack.Screen name={name} component={component} options={renderHeaderRightElements(false,title)}/> 
    }
    



    return (
        <Stack.Navigator >
            <Stack.Screen name="AppHome" component={AppHome}  options={({ route }) => ({
                headerTitle:props=>getHeaderTitle(route)
              })}/>
            {renderDasboardRoute("Logout",Logout,false,null)}
            {renderNavigationRoute("CategoryDetails",CategoryDetails,true,'Category Details')}
            {renderNavigationRoute("ProductListing",ProductListing,true,'Product Listing')}
            {renderNavigationRoute("ProductDetails",ProductDetails,true,'Product Details')}


        </Stack.Navigator> 
    )
}

function connectToStore(store){
    return{
        addToCart:store.home.addToCart,        
    }
  }

  const styles = StyleSheet.create({
    menuButtonContainer: {
        paddingRight: 10
    },
    menuButton: {
        backgroundColor: '#fff',
    },
    headerView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    drawerStyles:{
        width: 250,
        height:height,
        marginTop:-5,
        backgroundColor: "#182064",

    }
})