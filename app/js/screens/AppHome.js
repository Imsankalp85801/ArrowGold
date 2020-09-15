
import { useNavigation } from '@react-navigation/native';
import React, { Fragment, useContext, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import BottomNav from '../components/BottomNavigation';
import Loader from '../components/Loader';
import { ROLE_PARENT, ROLE_STUDENT, ROLE_TEACHER } from '../utils/utils';
import { empty, notUndefinedAndNull, undefinedOrZero } from '../utils/Validation';


export default function AppHome(){

    let dispatch = useDispatch();
    let store = useSelector(connectToStore, shallowEqual);
    let navigation = useNavigation();
    

    function renderBottomNavigation(){
                        
            return (
                <Fragment>
                    <BottomNav />
                </Fragment>

            )
    }

    function renderLoader(){
        return <Loader show={false}/>
    }




    return(
        <Fragment>
            {renderLoader()}
            {renderBottomNavigation()}
        </Fragment>
    )
}
function connectToStore(store){
    return{

    }
}