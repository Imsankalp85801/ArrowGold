
import React, { useEffect, useState, Fragment,useRef } from 'react';
import { StyleSheet, View,TouchableOpacity,Image, Dimensions} from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/dashboard/Dashboard';
import Catalog from '../screens/catalog/Catalog';

// import QEngage from '../screens/QEngage';
// import QConnect from '../screens/QConnect';

import DashboardIcon from "../../../assets/images/dashboard.svg";
import Engage from "../../../assets/images/engage.svg";
import Connect from "../../../assets/images/connect.svg";


import Colors from '../constants/Colors';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

export default function BottomNavigation(props){

    // function renderTabs(label,componentName,iconName,show){

    //     if(show){
    //         return(
    //             <Tab.Screen  name={label} component={componentName} options={{
    //                 tabBarIcon: ({ color, size }) => (
    //                        renderIcons(iconName,color)
    //                 )}}
    //             />
    //         )
    //     }
    // }

    function renderIcons(icon,color){
        switch (icon) {
            case "engage":
              return <Engage height={15} width={15} fill={color}/>
            case "connect":
              return <Connect height={15} width={15} fill={color}/>
            default:
                return ;
            }
      }

    return(
        <Tab.Navigator initialRouteName="Dashboard" tabBarOptions={{
                inactiveTintColor:'#696969',
                activeTintColor:'#ED3567',
                labelStyle: {
                    fontSize: 15
                }, 
                activeBackgroundColor: 'white', 
                inactiveBackgroundColor : '#000000'}}
                >
            <Tab.Screen  name="Home" component={Dashboard} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="settings" color={color} size={size} />
                  ),
                }} 
            />
            <Tab.Screen  name="Catalog" component={Catalog} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="settings" color={color} size={size} />
                  ),
                }} 
            /><Tab.Screen  name="Search" component={Dashboard}

               options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="settings" color={color} size={size} />
                  ),
            }} 
            />
            <Tab.Screen  name="My Order" component={Dashboard} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="settings" color={color} size={size} />
                  ),
                }} 
            />
             <Tab.Screen  name="My Cart" component={Dashboard} options={{
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="settings" color={color} size={size} />
                  ),
                }} 
            />
         
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

    tabStyles:{
        
    }
    
});