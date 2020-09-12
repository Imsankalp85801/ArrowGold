import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, shallowEqual } from 'react-redux';
import { undefinedOrZero } from '../utils/Validation';
import _ from 'lodash';
import { useNavigation, useNavigationState } from '@react-navigation/native';

export default function CartHeader(props){

    let [cartItemCount, setCartItemCount] = useState(0);
    let navigation = useNavigation();

    let store = useSelector(connectToStore, shallowEqual);

    useEffect(()=>{
        let cartItem =0;
        if(!undefinedOrZero(store.summaryCart)){
             cartItem = store.summaryCart.length
        }
        setCartItemCount(cartItem);


    }, [store.addToCart])


    function onPressCart(){
        navigation.navigate('Cart');
    }


    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPressCart}>
            <Cart cartItemCount={cartItemCount} />
        </TouchableOpacity>
    )
}

function connectToStore(store){
    return {
        addToCart: store.home.addToCart,
        summaryCart: store.home.summaryCart,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
});