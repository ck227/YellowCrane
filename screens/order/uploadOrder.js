import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import styles from './styles';
import React from 'react'
import ImagePicker from 'react-native-image-picker';

export default class UploadOrderScreen extends React.Component {

    static navigationOptions = {
        header: null,
    }

    state = {
        avatarSource: null,
        videoSource: null
    };

    selectPhotoTapped() {
        const options = {
            title: null,
            takePhotoButtonTitle: '拍摄',
            chooseFromLibraryButtonTitle: '相册',
            cancelButtonTitle: '取消',
            mediaType: 'photo',
            videoQuality: 'medium',
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = {uri: response.uri};

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    selectVideoTapped() {
        const options = {
            title: null,
            takePhotoButtonTitle: '拍摄',
            chooseFromLibraryButtonTitle: '相册',
            cancelButtonTitle: '取消',
            mediaType: 'video',
            videoQuality: 'medium'
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled video picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    videoSource: response.uri
                });
            }
        });
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
            <View style={{flex: 1}}>
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

                <View style={styles.container}>

                    <View style={{flexDirection: 'row', padding: 16}}>
                        <Text style={{color: '#3a3a3a', fontSize: 16}}>事件类型</Text>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: '#838383', marginLeft: 24, fontSize: 14}}>一般事件</Text>
                            <Image style={{height: 16, width: 16}}
                                   source={(require("../../assets/images/arrowDown.png"))}/>
                        </View>
                    </View>

                    <View style={{backgroundColor: '#838383', height: 0.5}}/>

                    <Text style={{color: '#3a3a3a', fontSize: 16, marginTop: 12, marginLeft: 16}}>事件描述</Text>

                    <TextInput
                        style={{
                            color: '#838383',
                            height: 60,
                            marginTop: 8,
                            marginLeft: 14,
                            marginRight: 14,
                            textAlignVertical: 'top',
                        }}
                        numberOfLines={2}
                        placeholder='请输入用户名'
                        multiline={true}
                        onChangeText={(text) => this.setState({account: text})}
                    />

                    <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                        <View style={[styles.avatar, styles.avatarContainer, {margin: 16}]}>
                            {this.state.avatarSource === null ? <Text>上传图片</Text> :
                                <Image style={styles.avatar} source={this.state.avatarSource}/>
                            }
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
                        <View style={[styles.avatar, styles.avatarContainer, {marginLeft: 16}]}>
                            <Text>上传视频</Text>
                        </View>
                    </TouchableOpacity>

                    {this.state.videoSource &&
                    <Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
                    }
                </View>

            </View>
        );
    }

}

