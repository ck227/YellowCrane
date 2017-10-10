import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

import Header from '../header/header'
import styles from './styles';

var naviga

export default class Contact extends React.Component {

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
                <Text style={styles.titleText} numberOfLines={1}>
                    这里用fragment替换
                </Text>
            </View>
        )
    }

}