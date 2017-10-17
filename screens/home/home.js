import React from 'react';

import {Image, Text, View, Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Header from '../header/header'
import UploadScreen from '../order/uploadOrder'
import RadiusButton from '../widget/radiusBtn'
import styles from './styles';

var naviga

class HomeScreen extends React.Component {

    _backClick = () => {
        naviga.navigate('DrawerOpen');
    }

    constructor(props) {
        super(props);
        naviga = this.props.navigation
    }

    render() {

        {/*<ScrollView
            contentContainerStyle={{flex:1}} //非常重要，让ScrollView的子元素占满整个区域
            keyboardDismissMode='on-drag' //拖动界面输入法退出
            keyboardShouldPersistTaps={false} //点击输入法意外的区域，输入法退出
        >
            ....
        </ScrollView>*/
        }

        return (
            <View style={{flexDirection: 'column'}}>
                <Header showBack='false' title={this.props.banner} backFunc={this._backClick.bind(this)}/>
                <View style={styles.banner}>
                    <Image style={styles.bannerImg} source={(require("../../assets/images/banner.jpg"))}/>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 16,
                    paddingLeft: 32,
                    paddingRight: 32,
                    paddingBottom: 16,
                    backgroundColor: '#FFF'
                }}>
                    <RadiusButton
                        btnName='天气'
                        textStyle={{
                            fontSize: 16,
                            color: '#ffffff',
                        }}
                        btnStyle={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: '#f15b35',
                            borderColor: '#f15b35',

                        }}
                        underlayColor='#e84c26'
                        onPress={this._pressCreditClick}>
                    </RadiusButton>

                    <RadiusButton
                        btnName='温度'
                        textStyle={{
                            fontSize: 16,
                            color: '#ffffff',
                        }}
                        btnStyle={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: '#7fb41b',
                            borderColor: '#7fb41b',
                        }}
                        onPress={this._pressCreditClick}>
                    </RadiusButton>

                    <RadiusButton
                        btnName='PM2.5'
                        textStyle={{
                            fontSize: 16,
                            color: '#ffffff',
                        }}
                        btnStyle={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: '#ecba0d',
                            borderColor: '#ecba0d',
                        }}
                        onPress={this._pressCreditClick}>
                    </RadiusButton>

                    <RadiusButton
                        btnName='湿度'
                        textStyle={{
                            fontSize: 16,
                            color: '#ffffff',
                        }}
                        btnStyle={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: '#46bbfa',
                            borderColor: '#46bbfa',
                        }}
                        onPress={this._pressCreditClick}>
                    </RadiusButton>

                </View>

                <View style={{flexDirection: 'row', height: 300, padding: 12}}>

                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <View style={{
                            flex: 3, backgroundColor: '#f15b35', justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={Alert.alert('红色的')}>
                            <Text style={{color: '#FFF', fontSize: 18}}>虚拟景区</Text>
                        </View>
                        <View style={{
                            flex: 2, backgroundColor: '#ecba0d', marginTop: 12, justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={Alert.alert('黄色的')}>
                            <Text style={{color: '#FFF', fontSize: 18}}>巡更管理</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'column', marginLeft: 12}}>
                        <View style={{
                            flex: 2, backgroundColor: '#7fb41b', justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={Alert.alert('绿色的')}>
                            <Text style={{color: '#FFF', fontSize: 18}}>工单管理</Text>
                        </View>
                        <View style={{
                            flex: 3, backgroundColor: '#46bbfa', marginTop: 12, justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={Alert.alert('蓝色的')}>
                            <Text style={{color: '#FFF', fontSize: 18}}>事件上报</Text>
                        </View>
                    </View>

                </View>


            </View>
        );
    }

}

const index = StackNavigator({
    Home: {screen: HomeScreen},
    Upload: {screen: UploadScreen},
});

export default index


