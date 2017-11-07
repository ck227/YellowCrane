import {Platform} from 'react-native'
import React from 'react'
import styles from './styles';
import OrdersScreen from './orders'
import OrderDetailScreen from '../orderlist/orderDetail'
import {TabNavigator, StackNavigator} from 'react-navigation';

const ContentConst = ({navigation}) => (
    <OrdersScreen id='0' navigation={navigation}/>
);

const ContentConst2 = ({navigation}) => (
    <OrdersScreen id='1' navigation={navigation}/>
);

const ContentConst3 = ({navigation}) => (
    <OrdersScreen id='2' navigation={navigation}/>
);

const ContentConst4 = ({navigation}) => (
    <OrdersScreen id='3' navigation={navigation}/>
);

const ContentConst5 = ({navigation}) => (
    <OrdersScreen id='4' navigation={navigation}/>
);

const MyApp = TabNavigator({
    上报: {
        screen: ContentConst,
    },
    受理: {
        screen: ContentConst2,
    },
    派遣: {
        screen: ContentConst3,
    },
    回执: {
        screen: ContentConst4,
    },
    办结: {
        screen: ContentConst5,
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
        indicatorStyle: {
            backgroundColor: '#e84a22',
        },
    },

});

export default fuckit = StackNavigator(
    {
        OrderListScreen: {
            screen: MyApp,
            navigationOptions: {
                headerTitle: "工单管理",
                headerTintColor: 'white',
                headerMode: 'screen',
                mode: Platform.OS === 'ios' ? 'modal' : 'card',
                headerStyle: {
                    backgroundColor: '#e84a22',
                    elevation: 0,//去掉下方阴影
                },
                headerTitleStyle: {
                    alignSelf: 'center'
                },
                gesturesEnabled: true,

            }
        },
        OrderDetailScreen: {
            screen: OrderDetailScreen,
            navigationOptions: {
                headerTitle: '工单详情',
                headerTintColor: 'white',
                headerMode: 'screen',
                ode: Platform.OS === 'ios' ? 'modal' : 'card',
                headerStyle: {
                    backgroundColor: '#e84a22',
                    elevation: 0,//去掉下方阴影
                },
            }
        },
    }, {
        navigationOptions: {
            // header: null,
        }
    })
;


