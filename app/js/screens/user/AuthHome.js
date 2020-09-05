import React from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import Login from './Login';




let Stack = createStackNavigator()

export default function AuthHome(){


    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}