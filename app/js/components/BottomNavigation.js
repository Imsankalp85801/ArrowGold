
import React, { useEffect, useState, Fragment,useRef } from 'react';
import { StyleSheet, View,TouchableOpacity,Image, Dimensions} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, Divider, Icon, Overlay, getIconType } from 'react-native-elements';

import Dashboard from '../screens/dashboard/Dashboard';
import Catalog from '../screens/catalog/Catalog';
import Search from '../screens/search/Search';
import Cart from '../screens/cart/Cart';

import Colors from '../constants/Colors';
import { color } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();

export default function BottomNavigation(props){

    function renderTabs(label,componentName,iconName,show,type){

        if(show){
            return(
                <Tab.Screen  name={label} component={componentName} options={{
                    tabBarIcon: ({ color, size }) => (
                           renderIcons(iconName,type,color)
                    )}}
                />
            )
        }
    }

    function renderIcons(name,type,color){
        return(
            <Icon name={name} type={type} size={22} color={color}  />
        )
      }

    return(
        <Tab.Navigator initialRouteName="Dashboard" tabBarOptions={{
            inactiveTintColor:'white',
            activeTintColor:'#000000',
            labelStyle: {
                fontSize: 15
            }, 
            activeBackgroundColor: '#D4AF37', 
            inactiveBackgroundColor : '#000000'}}
            >
            <Tab.Screen  name="Home" component={Dashboard} options={{
                    tabBarIcon: ({ color, size }) => (
                        renderIcons('home','antdesign',color)
                 )}}
            />
            {renderTabs('Catalog',Catalog,"search1",true,'antdesign')}
            {renderTabs('Search',Search,"search1",true,'antdesign')}
            {renderTabs('My Order',Catalog,"search1",true,'antdesign')}
            {renderTabs('Cart',Cart,"shoppingcart",true,'antdesign')}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

    tabStyles:{
        
    }
    
});