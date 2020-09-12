import React from 'react';
import { View, Text,Fragment,StatusBar } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { notUndefinedAndNull } from "../utils/Validation";
import {getHeaderTitle} from '../components/HeaderRoute';
import HeaderDesign from '../components/HeaderDesign';


import AppHome from './AppHome';
import Logout from './user/Logout';
import CategoryDetails from './dashboard/CategoryDetails';
import ProductListing from './dashboard/ProductListing';
import ProductDetails from './dashboard/ProductDetails';





let Stack = createStackNavigator()

export default function NavigationHome(props){


    let store = useSelector(connectToStore, shallowEqual);


    function renderDasboardRoute(name,component,header,title){

        return <Stack.Screen name={name} component={component} options={{headerShown: header,headerTitle:title}}/> 
    }


    function renderNavigationRoute(name, stateUrl,component,title){
  
          return <Stack.Screen name={name} component={component} options={{headerTitle:title}}/> 
    }
    



    return (
        <Stack.Navigator >
            <Stack.Screen name="AppHome" component={AppHome}  options={({ route }) => ({
                headerTitle:props=>getHeaderTitle(route)
              })}/>
            {renderDasboardRoute("Logout",Logout,false,null)}
            {renderDasboardRoute("CategoryDetails",CategoryDetails,true,'Category Details')}
            {renderDasboardRoute("ProductListing",ProductListing,true,'Product Listing')}
            {renderDasboardRoute("ProductDetails",ProductDetails,true,'Product Details')}


        </Stack.Navigator> 
    )
}

function connectToStore(store){
    return{
        // configuredMenuList: store.institute.configuredMenuList,
    }
  }