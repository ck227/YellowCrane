import {Text, View, Image, TouchableOpacity, Alert} from 'react-native'
import styles from './styles';
import React from 'react'


export default class HomeScreen extends React.Component {

    static navigationOptions = {
        header: null,
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
            <View>
                <View style={styles.header}>

                    <TouchableOpacity
                        style={[styles.width]}
                        onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.backImg} source={(require("../../assets/images/arrowLeft.png"))}/>
                    </TouchableOpacity>

                    <View style={styles.title}>
                        <Text style={styles.titleText} numberOfLines={1}>
                            事件上报
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

}

