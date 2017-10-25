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

import storage from '../widget/Storage'

class MainScreen extends Component {

    //主界面的侧滑框架
    static navigationOptions = {
        header: null,
    };

    /*constructor(props) {
        super(props);
        this.state = {
            userName: '',
            headImg: ''
        };
    }*/

    /*componentWillMount() {

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
            Alert.alert(ret.userName)
            this.setState({
                userName: ret.userName,
                headImg: ret.headImg
            });
        }).catch(err => {
            Alert.alert('err')
        })
    }*/

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
                    <Text style={styles.text}>{this.navigation.props.banner}</Text>
                </View>
            </Image>

        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.contentItem}>
                <Image style={styles.contentIcon} source={(require("../../assets/images/home.png"))}/>
                <Text style={styles.contentText}>首页</Text>
                <View style={styles.arrowParent}>
                    <Image style={styles.contentArrow} source={(require("../../assets/images/arrow_right.png"))}/>
                </View>
            </View>

        </TouchableOpacity>

        <TouchableOpacity onPress={() => activityStarter.navigateToIM()}>
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
            screen: Main
        },
        DamnUpload: {
            screen: UploadScreen
        }
    },
    {
        navigationOptions: {
            header: null
        }
    })
;

export default SimpleAPP



