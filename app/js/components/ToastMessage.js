import React from 'react';
import Toast from 'react-native-root-toast';

export default function ToastMessage(props){

    return (
        <Toast 
            visible={props.show}
            shadow={true}
            position={Toast.positions.BOTTOM}
            animation={true}>
            {props.message}
        </Toast>
    )
}