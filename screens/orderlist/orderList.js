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

