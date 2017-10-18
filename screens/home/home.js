import React from 'react';

import {Image, Text, View, Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Header from '../header/header'
import UploadScreen from '../order/uploadOrder'
import Container from './container'
import RadiusButton from '../widget/radiusBtn'
import styles from './styles';


export default class HomeScreen extends React.Component {

    _backClick = () => {
        this.props.navigation.navigate('DrawerOpen')
    }

    render() {

        return (
            <View style={{flexDirection: 'column'}}>
                <Header showBack='false' title={this.props.banner} backFunc={this._backClick.bind(this)}/>
                <Text>what the fuck</Text>
                <Index/>
            </View>
        );
    }

}

const Index = StackNavigator({
    Home: {screen: Container},
    Upload: {screen: UploadScreen},
});


// HomeScreen.router = Index.router;



