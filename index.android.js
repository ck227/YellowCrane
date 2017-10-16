/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreen from './screens/main/main'
import LoginScreen from './screens/login/login'

class IndexScreen extends Component {

    static navigationOptions = {
        // title: 'Welcome',
        header: null,
    };

    constructor(props) {
        super(props);
        this.timer = setTimeout(
            () => {
                // this.props.navigation.navigate('Main')
                this.props.navigation.navigate('Login')
            },
            500
        );
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Image source={require('./assets/images/index.jpeg')} style={styles.backgroundImage}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

const index = StackNavigator({
    Index: {screen: IndexScreen},
    Main: {screen: MainScreen},
    Login: {screen: LoginScreen},
});

AppRegistry.registerComponent('YellowCrane', () => index);
