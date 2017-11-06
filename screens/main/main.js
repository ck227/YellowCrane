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
import OrderListScreen from '../orderlist/orderList'
// import OrderDetailScreen from '../orderlist/orderDetail'
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

    render() {
        return (
            <View style={styles.container}>
                <Main/>
            </View>
        )
    }

}

const SideBarScreen = ({navigation}) => (
    <SideBarView2
        banner='这里可以传值到侧滑'
        // banner2={navigation.state.params.userName}
        navigation={navigation}
    />
);

class SideBarView2 extends Component {
    render() {
        return (
            <ScrollView style={styles.bg}>

                <View>

                    <Image style={{height: 150, justifyContent: 'center'}}
                           source={(require("../../assets/images/sideBarBg2.jpg"))}>
                        <View style={styles.title}>
                            <Image style={styles.cat} source={(require("../../assets/images/cat.jpg"))}/>
                            <Text style={styles.text}></Text>
                        </View>
                    </Image>

                </View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <View style={styles.contentItem}>
                        <Image style={styles.contentIcon} source={(require("../../assets/images/home.png"))}/>
                        <Text style={styles.contentText}>首页</Text>
                        <View style={styles.arrowParent}>
                            <Image style={styles.contentArrow}
                                   source={(require("../../assets/images/arrow_right.png"))}/>
                        </View>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => activityStarter.navigateToIM()}>
                    <View style={styles.contentItem2}>
                        <Image style={styles.contentIcon} source={(require("../../assets/images/contact.png"))}/>
                        <Text style={styles.contentText}>通讯录</Text>
                        <View style={styles.arrowParent}>
                            <Image style={styles.contentArrow}
                                   source={(require("../../assets/images/arrow_right.png"))}/>
                        </View>
                    </View>

                </TouchableOpacity>


                {/*<TouchableOpacity onPress={() => navigation.navigate('Content2')}>*/}
                <TouchableOpacity onPress={() => activityStarter.navigateToMap()}>
                    <View style={styles.contentItem2}>
                        <Image style={styles.contentIcon} source={(require("../../assets/images/senic.png"))}/>
                        <Text style={styles.contentText}>景区导航</Text>
                        <View style={styles.arrowParent}>
                            <Image style={styles.contentArrow}
                                   source={(require("../../assets/images/arrow_right.png"))}/>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Content3')}>
                    <View style={styles.contentItem2}>
                        <Image style={styles.contentIcon} source={(require("../../assets/images/my.png"))}/>
                        <Text style={styles.contentText}>个人中心</Text>
                        <View style={styles.arrowParent}>
                            <Image style={styles.contentArrow}
                                   source={(require("../../assets/images/arrow_right.png"))}/>
                        </View>
                    </View>
                </TouchableOpacity>


                {/*内容列表结束*/}

                {/*</View>*/}
            </ScrollView>
        )
    }
}

const SideBarView = ({navigation}) => (

    <ScrollView style={styles.bg}>

        <View>

            <Image style={{height: 150, justifyContent: 'center'}}
                   source={(require("../../assets/images/sideBarBg2.jpg"))}>
                <View style={styles.title}>
                    <Image style={styles.cat} source={(require("../../assets/images/cat.jpg"))}/>
                    <Text style={styles.text}>{this.props.banner}</Text>
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
        header: null,
        contentComponent: SideBarScreen,
        // contentComponent: props => <SideBarView2 navigation={this.navigation}/>,
        // navigationOptions: ({navigation}) => ({
        //     userName: '123',
        //     headImg: `{navigation.state.params.headImg}`,
        // }),
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
            screen: Main,
            navigationOptions: ({navigation}) => ({
                userName: `{navigation.state.params.userName}`,
                headImg: `{navigation.state.params.headImg}`,
            }),
        },
        DamnUpload: {
            screen: UploadScreen
        },
        OrderListScreen: {
            screen: OrderListScreen
        }
    },
    {
        navigationOptions: {
            header: null
        }
    })
;

export default SimpleAPP



