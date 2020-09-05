import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, View, TouchableOpacity,ScrollView } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import QText from './QText';
import { notUndefinedAndNull } from '../utils/Validation';

const linearGradient={
    colors: ['#f79921', '#ed3669', ],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
}


export default function TabBar(props){
    
    return (
        <ScrollView horizontal={notUndefinedAndNull(props.scroll) ? true :false}>
        <View style={styles.tabContainer}>
            {props.tabs.map((route, i) => {
            return (
                <TouchableOpacity
                    key={i}
                    style={styles.tab}
                    activeOpacity={0.8}
                    onPress={() => props.onSelectTab(i)}>
                    <QText fontSize="large"  
                                style={{ color: props.activeTab == i ? '#F16C51' : Colors.grey1Color, paddingHorizontal: 10}}>
                    {route.title}</QText>
                
                    {props.activeTab == i && 
                        <View style={styles.tabBarContainer}>
                            <LinearGradient {...linearGradient} style={styles.tabBar}/>
                        </View>}
                </TouchableOpacity>
            );
            })}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    tab:{
        marginLeft: 10, 
        marginTop: 15
    },
    tabBarContainer: {
        height: 4,
        marginTop: 8,
    },
    tabBar: {
        flex: 1,
        height:'auto'
    }
})