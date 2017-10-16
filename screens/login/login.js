import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import styles from './styles';

// import CookieManager from 'react-native-cookies';
import {StackNavigator} from 'react-navigation';

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            // loggedIn: false,
            // loadedCookie: false
            account: '',
            password: '',
            error: '',
            loading: false,
            jsonData: ''
        };
        // this.onLoginFail = this.onLoginFail.bind(this);
        // this.onLoginSuccess = this.onLoginSuccess.bind(this);
    }

    onLoginFail = () => {
        Alert.alert('登录失败')
        this.setState({error: 'Authentication Failed', loading: false});
    };

    // onLoginSuccess(){
    //     Alert.alert('sfsf')
    //     this.setState({
    //         account: '',
    //         password: '',
    //         loading: false,
    //         error: ''
    //     });
    // }

    onLoginSuccess = () => {
        Alert.alert('登录成功')
        this.setState({
            account: '',
            password: '',
            loading: false,
            error: ''
        });
    };

    // 注意这个方法前面有async关键字
    async loginFromApi() {
        // const {account, password} = this.state;
        this.state = {
            error: '',
            loading: true,
        };
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            // let response = await fetch('http://www.lizhixin.cn/lizhixinInterface/user/login.html?loginName=' + account + '&passWord=' + password);
            let response = await fetch('http://www.lizhixin.cn/lizhixinInterface/user/login.html?loginName=18507104251&passWord=123456');
            // {"obj":{"loginName":"18507104251","userId":39,"userName":"","userStatus":1},"code":0,"msg":"登录成功"}
            let responseJson = await response.json()
            // this.setState({
            //     jsonData : responseJson
            // });
            // Alert.alert(responseJson.obj.userId.toString())
            Alert.alert('登录成功')
            this.setState({
                account: '',
                password: '',
                loading: false,
                error: ''
            });
        } catch (error) {
            console.error(error);
            this.onLoginFail.bind(this)
        }
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>;
        }
        return (
            <TouchableOpacity style={{
                backgroundColor: '#e84a22',
                justifyContent: 'center',
                paddingTop: 16,
                paddingBottom: 16,
                margin: 16
            }} onPress={this.loginFromApi}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, color: 'white'}}>登录</Text>
                </View>
            </TouchableOpacity>
        );
    }


    render() {
        return (
            <View>
                <View>
                    <View style={styles.header}>
                        <View style={styles.title}>
                            <TouchableOpacity underlayColor={'transparent'}>
                                <Text style={styles.titleText} numberOfLines={1}>
                                    请登录
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <TextInput
                    style={{height: 60, marginTop: 32, marginLeft: 16, marginRight: 16}} placeholder='请输入用户名'
                    label="account"
                    onChangeText={(account) => this.setState({account})}
                    value={this.state.account}
                />

                <TextInput
                    style={{height: 60, marginTop: 8, marginLeft: 16, marginRight: 16}} placeholder='请输入密码'
                    label="password"
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                {this.renderButton()}
            </View>
        );
    }


}

