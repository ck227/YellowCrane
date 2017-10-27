import React from 'react';

import {Image, Text, View, Alert, TouchableHighlight} from 'react-native';
import Header from '../header/header'
import Container from './container'

export default class HomeScreen extends React.Component {

    _backClick = () => {
        this.props.navigation.navigate('DrawerOpen')
    }

    render() {

        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Header showBack='false' title={this.props.banner} backFunc={this._backClick.bind(this)}/>
                <Container navigation={this.props.navigation}/>
            </View>
        );
    }
}





