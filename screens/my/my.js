import React from 'react'
import {Text, View, Image, TouchableOpacity} from 'react-native'

import Header from '../header/header'
import RadiusButton from '../widget/radiusBtn'
import styles from './styles';

var naviga

export default class My extends React.Component {

    _backClick = () => {
        naviga.navigate('DrawerOpen');
    }

    constructor(props) {
        super(props);
        naviga = this.props.navigation
    }

    render() {
        return (
            <View>
                <Header showBack='false' title={this.props.banner} backFunc={this._backClick.bind(this)}/>
                <Image style={{height: 250, justifyContent: 'center'}}
                       source={(require("../../assets/images/sideBarBg2.jpg"))}>
                    <View style={styles.title}>
                        <Image style={styles.cat} source={(require("../../assets/images/cat.jpg"))}/>
                        <Text style={styles.text}>请登录</Text>
                    </View>
                </Image>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: -48
                }}>
                    <RadiusButton
                        btnName='上班打卡'
                        textStyle={{
                            fontSize: 16,
                            color: '#ffffff',
                        }}
                        btnStyle={{
                            height: 96,
                            width: 96,
                            borderRadius: 48,
                            backgroundColor: '#ecba0d',
                            borderColor: '#ecba0d',

                        }}
                        underlayColor='#e84c26'
                        onPress={this._pressCreditClick}>
                    </RadiusButton>

                    <RadiusButton
                        btnName='下班打卡'
                        textStyle={{
                            fontSize: 16,
                            color: '#ffffff',
                        }}
                        btnStyle={{
                            height: 96,
                            width: 96,
                            borderRadius: 48,
                            backgroundColor: '#7fb41b',
                            borderColor: '#7fb41b',
                            marginLeft: 96
                        }}
                        onPress={this._pressCreditClick}>
                    </RadiusButton>
                </View>


                {/*下面的列表项*/}

                <View style={{backgroundColor: 'white', marginTop: 16}}>
                    <TouchableOpacity>
                        <View style={styles.contentItem2}>
                            <Image style={styles.contentIcon} source={(require("../../assets/images/contact.png"))}/>
                            <Text style={styles.contentText}>打卡记录</Text>
                            <View style={styles.arrowParent}>
                                <Image style={styles.contentArrow}
                                       source={(require("../../assets/images/arrow_right.png"))}/>
                            </View>
                        </View>

                    </TouchableOpacity>

                    <View style={{backgroundColor: '#969696', height: 0.5}}/>


                    <TouchableOpacity>
                        <View style={styles.contentItem2}>
                            <Image style={styles.contentIcon} source={(require("../../assets/images/senic.png"))}/>
                            <Text style={styles.contentText}>修改密码</Text>
                            <View style={styles.arrowParent}>
                                <Image style={styles.contentArrow}
                                       source={(require("../../assets/images/arrow_right.png"))}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{backgroundColor: '#969696', height: 0.5}}/>

                    <TouchableOpacity>
                        <View style={styles.contentItem2}>
                            <Image style={styles.contentIcon} source={(require("../../assets/images/my.png"))}/>
                            <Text style={styles.contentText}>系统通知</Text>
                            <View style={styles.arrowParent}>
                                <Image style={styles.contentArrow}
                                       source={(require("../../assets/images/arrow_right.png"))}/>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={{backgroundColor: '#969696', height: 0.5}}/>

                    {/*<TouchableOpacity style={{marginTop:16,flexDirection:'row'}}>
                        <View style={{flex:1,backgroundColor:'white'}}>
                            <Text style={{
                                paddingTop: 16,
                                paddingBottom: 16,
                                justifyContent: 'center',
                                color:'black'
                            }}>退出登录</Text>
                        </View>
                    </TouchableOpacity>*/}

                </View>

                <View style={{backgroundColor: '#969696', height: 0.5,marginTop: 36}}/>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    paddingTop: 16,
                    paddingBottom: 16
                }}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.text2}>请登录</Text>
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor: '#969696', height: 0.5}}/>

            </View>
        )
    }

}