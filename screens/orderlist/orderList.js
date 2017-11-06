import {Text, View, Image, TouchableOpacity, TextInput, Alert} from 'react-native'
import React from 'react'
import styles from './styles';
import OrdersScreen from './orders'
import {TabNavigator} from 'react-navigation';

export default class OrderListScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>

                <View style={styles.header}>
                    <TouchableOpacity
                        style={[styles.width]}
                        onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.backImg} source={(require("../../assets/images/arrowLeft.png"))}/>
                    </TouchableOpacity>

                    <View style={styles.title}>
                        <Text style={styles.titleText} numberOfLines={1}>
                            工单管理
                        </Text>
                    </View>
                </View>

                <Container/>

            </View>
        );
    }

}

class Container extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <MyApp/>
            </View>
        );
    }
}

const MyApp = TabNavigator({
    上报: {
        screen: OrdersScreen,
    },
    受理: {
        screen: OrdersScreen,
    },
    派遣: {
        screen: OrdersScreen,
    },
    回执: {
        screen: OrdersScreen,
    },
    办结: {
        screen: OrdersScreen,
    },
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    swipeEnabled: true,

    tabBarOptions: {
        activeTintColor: '#e84a22',
        inactiveTintColor: 'black',
        style: {
            backgroundColor: '#fcf9f8',
        },
        indicatorStyle:{
            backgroundColor: '#e84a22',
        },

    },

});

