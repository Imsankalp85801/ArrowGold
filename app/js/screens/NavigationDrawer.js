import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect, useState, Fragment,useContext } from 'react';
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { StyleSheet, View, StatusBar,SafeAreaView,Image,TouchableOpacity} from "react-native";
import { Avatar, Divider, Icon, Overlay } from 'react-native-elements';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useIsDrawerOpen,DrawerNavigationProp } from '@react-navigation/drawer';

import QText from "../components/QText";
import Popup from "../components/Popup";
import { notUndefinedAndNull, undefinedOrZero, undefinedOrNull, emptyOrZero,empty } from '../utils/Validation';

import RupeeIcon from "../../../assets/images/rupee.svg";
import ProfileIcon from "../../../assets/images/profile.svg";
import IdCardIcon from "../../../assets/images/id_card.svg";
import ChangePasswordIcon  from "../../../assets/images/password_change.svg";
import SupportIcon from "../../../assets/images/payment_details.svg";
import LogoutIcon from "../../../assets/images/logout.svg";
let Drawers = createDrawerNavigator()
// let studentDefaultAvatar=Image.resolveAssetSource(studentAvatar).uri;

export default function NavigationDrawer(props){

  let dispatch = useDispatch();
  let isDrawerOpen=useIsDrawerOpen();
  let store = useSelector(connectToStore, shallowEqual);

  
  function renderDrawerView(){
    return(
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }} >
          <StatusBar backgroundColor={(useIsDrawerOpen()) ? '#000000' : '#182064'} barStyle="default" translucent animated />
                <View style={styles.containHeader}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                      <QText style={styles.name}>Sankalp Saxena</QText>
                    </View>
                </View>
        </SafeAreaView>
    )
}

    function renderCustomDrawerItem(iconName,label,routeName){
        return(
            <TouchableOpacity>
                <View style={styles.containDrawerOption}>
                    {renderIcons(iconName)}
                    <QText style={styles.drawerLabel}>{label}</QText>
                </View>
            </TouchableOpacity>
        )
    }

    function renderIcons(icon){
      switch (icon) {
          case "rupee":
            return <RupeeIcon height={20} width={20} fill='#F79923' style={ {marginRight: 10 }}/>
          case "profile":
            return <ProfileIcon height={20} width={20} fill='#F79923' style={ {marginRight: 10 }}/>
          case "idcard":
            return <IdCardIcon height={20} width={20} fill='#F79923' style={ {marginRight: 10 }}/>
          case "changepassword":
            return <ChangePasswordIcon height={20} width={20} fill='#D4AF37' style={ {marginRight: 10 }}/>
          case "support":
            return <SupportIcon height={20} width={20} fill='#D4AF37' style={ {marginRight: 10 }}/>
          case "logout":
            return <LogoutIcon height={20} width={20} fill='#D4AF37' style={ {marginRight: 10 }}/>
          default:
              return ;
          }
    }

    function renderCustomDrawerItem(iconName,label,routeName){
      return(
          <TouchableOpacity>
              <View style={styles.containDrawerOption}>
                  {renderIcons(iconName)}
                  <QText style={styles.drawerLabel}>{label}</QText>
              </View>
          </TouchableOpacity>
      )
  }

    return (
      <Fragment>
        <DrawerContentScrollView >
            {renderDrawerView()}
            {renderCustomDrawerItem('changepassword','Change Password','ChangePassword')}
            {renderCustomDrawerItem('support','Privacy Policy','Support')}
            {renderCustomDrawerItem('logout','Logout','Logout')}
        </DrawerContentScrollView>  
      </Fragment>
    )
}

function connectToStore(store){
  return {
      // studentsList: store.parent.studentsList,
      // parentDetails:store.parent.parentDetails,
      // studentDetails: store.student.studentDetails,
      // teacher: store.teacher.teacherDetails,
  }
}




const styles = StyleSheet.create({

container: {
    flex: 2,
    display:'flex'
  },
  containHeader: {
    flex: 1,
    paddingTop: '8%',
    paddingBottom: '4%',
    backgroundColor: '#000000',
    height:150,
    justifyContent:'center'
  },
  containDrawerOption: {
    flex:1,
    padding: 10,
    marginTop:20,
    flexDirection: 'row',
    paddingBottom: 10,
    display:'flex',
  },
  name:{
    fontFamily:'ssp-bold',
    fontSize: 20,
    color:'white',
  },
  standard:{
    fontFamily:'ssp-bold',
    fontSize: 16,
    color:'white',
  },
  drawerLabel:{
      color: '#fff', 
      fontSize: 16,
      fontFamily: 'sans-serif-medium',
    },
    imageSize: { 
      width: 80,
      height: 80,
      marginBottom: 5,
  },
});