
import React, {Component} from 'react';
import {
    AppRegistry,
    Platform,
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
// import {DrawerNavigator} from 'react-navigation';
// import HomeScreen from './setting'
// import ContentScreen from './content'
import styles from './styles';

export default class DrawNav extends Component {

    //主界面的侧滑框架
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Main/>*/}
            </View>
        )
    }




}