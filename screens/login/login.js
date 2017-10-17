import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';
import styles from './styles';

import MainScreen from '../main/main'
import {StackNavigator} from 'react-navigation';
import {Spinner} from '../widget/Spinner';

class LoginScreen extends React.Component {

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
    }

    async _loginFromApi() {
        if (this.state.account == '') {
            return Alert.alert('账号不能为空')
        }
        if (this.state.password == '') {
            return Alert.alert('密码不能为空')
        }
        const {account, password} = this.state;
        this.state = {
            error: '',
            loading: true,
        };
        try {
            let response = await fetch(`http://www.lizhixin.cn/lizhixinInterface/user/login.html?loginName=${account}&passWord=${password}`);
            // {"obj":{"loginName":"18507104251","userId":39,"userName":"","userStatus":1},"code":0,"msg":"登录成功"}
            let responseJson = await response.json()

            this.setState({
                account: '',
                password: '',
                loading: false,
                error: ''
            });
            if (responseJson.code == 0) {
                // Alert.alert('登录成功')
                //登录成功保存数据
                global.storage.save({
                    key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
                    data: {
                        userid: responseJson.obj.userId,
                        //这里以后可以添加头像
                    },
                    expires: null
                });
                //这里跳转到main界面
                this.props.navigation.navigate('Main')
            } else {
                Alert.alert(responseJson.msg)
            }
        } catch (error) {
            console.error(error);
            this.setState({
                loading: false,
            });
            Alert.alert('登录失败')
        }
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
                    onChangeText={(text) => this.setState({account: text})}
                    value={this.state.account}
                />

                <TextInput
                    style={{height: 60, marginTop: 8, marginLeft: 16, marginRight: 16}} placeholder='请输入密码'
                    label="password"
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                />
                {this.renderButton()}
                {this.renderDialog()}
            </View>
        );
    }

    renderButton() {
        return (
            <TouchableOpacity style={{
                backgroundColor: '#e84a22',
                justifyContent: 'center',
                paddingTop: 16,
                paddingBottom: 16,
                margin: 16
            }} onPress={this._loginFromApi.bind(this)}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 18, color: 'white'}}>登录</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderDialog() {
        if (this.state.loading) {
            return <Spinner size="large"/>;
        }
    }

}

const index = StackNavigator({
    Login: {screen: LoginScreen},
    Main: {screen: MainScreen},
});

export default index

