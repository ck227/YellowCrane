import React, {Component} from 'react';
import {
    Platform,
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    NativeModules
} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import HomeScreen from '../home/home'
import ContactScreen from '../contact/contact'
import UploadScreen from '../order/uploadOrder'
import SenicScreen from '../senic/senic'
import MyScreen from '../my/my'
import styles from './styles';


const activityStarter = NativeModules.ActivityStarter;

class MainScreen extends Component {

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

const SideBarScreen = ({navigation}) => (
    <SideBarView banner={'这里可以传值到侧滑'} navigation={navigation}/>
);

const SideBarView = ({navigation}) => (
    <ScrollView style={styles.bg}>

        <View>
            <Image style={{height: 150, justifyContent: 'center'}}
                   source={(require("../../assets/images/sideBarBg2.jpg"))}>
                <View style={styles.title}>
                    <Image style={styles.cat} source={(require("../../assets/images/cat.jpg"))}/>
                    <Text style={styles.text}>请登录</Text>
                </View>
            </Image>

        </View>

        {/*中间的内容*/}
        {/*<View style={styles.centerItem}>
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

        </View>*/}

        {/*下面的内容列表 //, {id: '16'}*/}

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.contentItem}>
                <Image style={styles.contentIcon} source={(require("../../assets/images/home.png"))}/>
                <Text style={styles.contentText}>首页</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../../assets/images/arrow_right.png"))}/>
                </View>
            </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Content')}>
            <View style={styles.contentItem2}>
                <Image style={styles.contentIcon} source={(require("../../assets/images/contact.png"))}/>
                <Text style={styles.contentText}>通讯录</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../../assets/images/arrow_right.png"))}/>
                </View>
            </View>

        </TouchableOpacity>


        {/*<TouchableOpacity onPress={() => navigation.navigate('Content2')}>*/}
        <TouchableOpacity onPress={() => activityStarter.navigateToMap()}>
            <View style={styles.contentItem2}>
                <Image style={styles.contentIcon} source={(require("../../assets/images/senic.png"))}/>
                <Text style={styles.contentText}>景区导航</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Content3')}>
            <View style={styles.contentItem2}>
                <Image style={styles.contentIcon} source={(require("../../assets/images/my.png"))}/>
                <Text style={styles.contentText}>个人中心</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../../assets/images/arrow_right.png"))}/>
                </View>
            </View>
        </TouchableOpacity>


        {/*内容列表结束*/}

        {/*</View>*/}
    </ScrollView>
)

// const HomeConst = StackNavigator({
//         Home: {
//             screen: HomeScreen
//         },
//         Upload: {
//             screen: UploadScreen
//         }
//     },
//     {
//         navigationOptions: {
//             drawerLabel: 'home',
//             header : null,
//             banner: '首页'
//         }
//     }
// );

const HomeConst = ({navigation}) => (
    <HomeScreen banner={'首页'} navigation={navigation}/>
);
HomeConst.navigationOptions = {
    drawerLabel: 'home'
};

const ContactConst = ({navigation}) => (
    <ContactScreen banner={'通讯录'} navigation={navigation}/>
);
ContactConst.navigationOptions = {
    drawerLabel: 'contact'
};

const SenicConst = ({navigation}) => (
    <SenicScreen banner={'景区导航'} navigation={navigation}/>
);
SenicConst.navigationOptions = {
    drawerLabel: 'senic'
};

const MyConst = ({navigation}) => (
    <MyScreen banner={'个人中心'} navigation={navigation}/>
);
MyConst.navigationOptions = {
    drawerLabel: 'my'
};

const Main = DrawerNavigator(
    {
        Home: {
            screen: HomeConst,
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


const SimpleAPP = StackNavigator(
    {
        DamnHome: {
            screen: MainScreen
        },
        DamnUpload: {
            screen: UploadScreen
        }
    })
;

export default SimpleAPP



