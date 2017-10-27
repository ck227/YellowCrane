/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, View, Alert} from 'react-native';
import {StackNavigator} from 'react-navigation'
import MainScreen from './screens/main/main'
import LoginScreen from './screens/login/login'
import storage from './screens/widget/Storage'

class IndexScreen extends Component {

    static navigationOptions = {
        // title: 'Welcome',
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            loadedCookie: false,
            userName: '',
            headImg: ''
        };
        this.timer = setTimeout(
            () => {

                if (this.state.loggedIn) {
                    // Alert.alert(this.state.userName)
                    this.props.navigation.navigate('Main', {userName: this.state.userName}, {headImg: this.state.headImg})
                } else {
                    this.props.navigation.navigate('Login')
                }
            },
            500
        );
    }

    componentWillMount() {
        // let isAuthenticated;

        global.storage.load({
            key: 'loginState',
            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            autoSync: false,

            // syncInBackground(默认为true)意味着如果数据过期，
            // 在调用sync方法的同时先返回已经过期的数据。
            // 设置为false的话，则等待sync方法提供的最新数据(当然会需要更多时间)。
            syncInBackground: true,

            // 你还可以给sync方法传递额外的参数
            syncParams: {
                extraFetchOptions: {
                    // 各种参数
                },
                someFlag: true,
            },
        }).then(ret => {
            // 如果找到数据，则在then方法中返回
            // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
            // 你只能在then这个方法内继续处理ret数据
            // 而不能在then以外处理
            // 也没有办法“变成”同步返回
            // 你也可以使用“看似”同步的async/await语法

            // console.log(ret.userid);

            // this.setState({ user: ret });


            this.setState({
                loggedIn: true,
                loadedCookie: true,
                userName: ret.userName,
                headImg: ret.headImg
            });

        }).catch(err => {
            //如果没有找到数据且没有sync方法，
            //或者有其他异常，则在catch中返回
            // console.warn('没找到那个啥参数呗');
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    this.setState({
                        loggedIn: false,
                        loadedCookie: true
                    });
                    break;
                case 'ExpiredError':
                    // TODO
                    this.setState({
                        loggedIn: false,
                        loadedCookie: true
                    });
                    break;
            }
        })
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
