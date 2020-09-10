import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React, { useEffect, useState, Fragment,useRef } from 'react';
import HeaderDesign from './HeaderDesign';


export function getHeaderTitle(route){
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';


    switch (routeName) {
        case 'Home':
            return header("Welcome to ArrowGold")
        case 'Catalog':
            return header(routeName)
        case 'Search':
            return header(routeName)
        case 'My Order':
            return header(routeName)
        case 'Cart':
            return header(routeName)
    }


    function header(labelName){
        return(
            <HeaderDesign label={labelName} />
        ) 
        
    }

    
}