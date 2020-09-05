import React, { Fragment, useState } from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';
import TabBar from './TabBar';
const initialLayout = { width: Dimensions.get('window').width };

export default function QTabView(props){

    let [activeIndex, setActiveIndex] = useState(0);

    let ActiveTabScreen = new ActiveTabHOC(props.tabsConfig[activeIndex].component);

    return (
        <Fragment>
            <View>
                <TabBar scroll={props.scroll} tabs={props.tabsConfig} activeTab={activeIndex} onSelectTab={(i) => setActiveIndex(i)}/>
            </View>
            <View style={styles.tabScreen}>
                <ActiveTabScreen />
            </View>        
        </Fragment>
    )
}

const ActiveTabHOC = (HOCComponent) => {

    return class extends React.Component{

        render(){
            return (
                <Fragment>
                    <HOCComponent />
                </Fragment>
            )
        }
    }
}

const styles = StyleSheet.create({
    tabScreen: {
        marginTop:10,
    }
})
