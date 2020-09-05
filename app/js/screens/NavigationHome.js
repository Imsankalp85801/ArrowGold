import React from 'react';
import { View, Text,Fragment,StatusBar } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'

import { shallowEqual, useDispatch, useSelector } from "react-redux";

// import { isMenuConfigured } from '../utils/utils';
import { notUndefinedAndNull } from "../utils/Validation";
import {getHeaderTitle} from '../components/HeaderRoute';

import HeaderDesign from '../components/HeaderDesign';

//Dashboard

import AppHome from './AppHome';





let Stack = createStackNavigator()

export default function NavigationHome(props){


    let store = useSelector(connectToStore, shallowEqual);


    function renderDasboardRoute(name,component,header,title){

        return <Stack.Screen name={name} component={component} options={{headerShown: header,headerTitle:title}}/> 
    }


    function renderNavigationRoute(name, stateUrl,component,title){
  
          return <Stack.Screen name={name} component={component} options={{headerTitle:title}}/> 
    }
    

    function renderTeacherNavigationRoute(name,component,title){
          return <Stack.Screen name={name} component={component} options={{headerTitle:title}}/> 
    }


    return (
        <Stack.Navigator >
            <Stack.Screen name="AppHome" component={AppHome} 
            // options={{headerTitle: props => <HeaderDesign {...props} />}}  
             options={({ route }) => ({
                headerTitle:props=>getHeaderTitle(route)
              })}
            />
        </Stack.Navigator> 
    )
}

function connectToStore(store){
    return{
        // configuredMenuList: store.institute.configuredMenuList,
    }
  }