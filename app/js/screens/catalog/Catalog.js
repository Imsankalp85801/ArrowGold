import React ,{useEffect}from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {getHeaderTitle} from '../../components/HeaderRoute';


export default function Catalog({ navigation, route }) {


    // useEffect(() => {
    //     navigation.setOptions({ headerTitle: getHeaderTitle("Catalog") });
    // }, [navigation, route]);

    return (
   
      <View >
         <Text>Catalog</Text>
      </View>
    );
  }