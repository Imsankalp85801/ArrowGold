import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React, { useEffect, useState, Fragment,useRef } from 'react';

import HeaderDesign from './HeaderDesign';
import { View,Text } from 'react-native';


export function getHeaderTitle(route){
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';


    switch (routeName) {
      case 'Home':
           return home()
      case 'Catalog':
        return catalog()
        case 'Search':
            return sankalp()
        }


    function home(){
        return(
            <HeaderDesign />
        ) 
        
    }

    function catalog(){
        return(
            <Text>Catalog</Text>
        ) 
        
    }

    
}