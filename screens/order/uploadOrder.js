import React from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Header from '../header/header'

export default class HomeScreen extends React.Component {

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

            </View>
        );
    }

}

