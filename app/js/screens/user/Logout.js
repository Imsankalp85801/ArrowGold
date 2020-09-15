import React, { Fragment, useEffect } from 'react';
import {clearSession} from '../../services/Session';
import { useDispatch } from 'react-redux';
import * as loginAction from '../../redux/action/LoginAction';

export default function Logout(props){

    let dispatch = useDispatch();
    
    useEffect(()=>{
        console.log("LOG")
        const removeSession = async () => {
            await clearSession()
            dispatch(loginAction.logout())
        }
        removeSession();
    },[])

    return (
        <Fragment></Fragment>
    )
}