import React from 'react';

import {
    StyleSheet,
    View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Header from '../header/header'

var naviga

export default class HomeScreen extends React.Component {

    _backClick = () => {
        naviga.navigate('DrawerOpen');
    }

    constructor(props) {
        super(props);
        naviga = this.props.navigation
    }

    render() {

        return (
            <View>
                <Header showBack='false' title={this.props.banner} backFunc={this._backClick.bind(this)}/>
            </View>
        );
    }

}