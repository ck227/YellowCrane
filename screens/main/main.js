import React, {Component} from 'react';
import {
    Platform,
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import HomeScreen from '../home/home'
import styles from './styles';

export default class MainScreen extends Component {

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
                <Main/>
            </View>
        )
    }

}

const Main = DrawerNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Content: {
            screen: ContactConst
        },
        Content2: {
            screen: SenicConst
        },
        Content3: {
            screen: MyConst
        }
    }, {
        contentComponent: SideBarScreen,
        header: null,
        drawerWidth: 270,
        drawerPosition: 'left',
        inactiveTintColor: '#000000',
        activeTintColor: '#1eacff',
        backgroundColor: '#1b2328',
        inactiveBackgroundColor: '#242b30',
    },
)

const ContactConst = ({navigation}) => (
    <HomeScreen banner={'设置'} navigation={navigation}/>
);
ContactConst.navigationOptions = {
    drawerLabel: 'contact'
};

const SenicConst = ({navigation}) => (
    <HomeScreen banner={'设置'} navigation={navigation}/>
);
SenicConst.navigationOptions = {
    drawerLabel: 'senic'
};

const MyConst = ({navigation}) => (
    <HomeScreen banner={'设置'} navigation={navigation}/>
);
MyConst.navigationOptions = {
    drawerLabel: 'my'
};

const SideBarScreen = ({navigation}) => (
    <ScrollView style={styles.bg}>

        <View>
            <View style={styles.title}>
                <Image style={styles.cat} source={(require("../../assets/images/cat.jpg"))}/>
                <Text style={styles.text}>请登录</Text>
            </View>
        </View>

        {/*中间的内容*/}
        <View style={styles.centerItem}>
            <TouchableOpacity style={styles.centerItems} onPress={() => navigation.navigate('contact')}>
                <View style={{alignItems: 'center'}}>
                    <Image style={styles.itemsIcon} source={(require("../../assets/images/collect.png"))}/>
                    <Text style={styles.itemsText}>收藏</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.centerItems} onPress={() => navigation.navigate('senic')}>
                <View style={{alignItems: 'center'}}>
                    <Image style={styles.itemsIcon} source={(require("../../assets/images/alarm.png"))}/>
                    <Text style={styles.itemsText}>消息</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.centerItems} onPress={() => navigation.navigate('my')}>
                <View style={{alignItems: 'center'}}>
                    <Image style={styles.itemsIcon} source={(require("../../assets/images/setting.png"))}/>
                    <Text style={styles.itemsText}>设置</Text>
                </View>
            </TouchableOpacity>

        </View>

        {/*下面的内容列表 //, {id: '16'}*/}
        <TouchableOpacity onPress={() => navigation.navigate('Content')}>
            <View style={styles.contentItem}>
                {/*<Image style={styles.contentIcon} source={(require("../assets/images/home.png"))}/>*/}
                <Text style={styles.contentText}>首页</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../../assets/images/arrow_right.png"))}/>
                </View>
            </View>

        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('Content2')}>
            <View style={styles.contentItem2}>
                <Text style={styles.contentText}>情感</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Content3')}>
            <View style={styles.contentItem2}>
                <Text style={styles.contentText}>人际</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>


        {/*内容列表结束*/}

        {/*</View>*/}
    </ScrollView>
)