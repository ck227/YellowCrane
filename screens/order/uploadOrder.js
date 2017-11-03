import {Text, View, Image, TouchableOpacity, TextInput, Alert, Picker} from 'react-native'
import styles from './styles';
import React from 'react'
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';

export default class UploadOrderScreen extends React.Component {

    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            title: '',
            desc: '',
            // avatarSource: null,
            videoSource: '',
            uploading: false,
            images: []
        };
    }

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
                let images = this.state.images;
                images.push(source);
                this.setState({
                    images: images
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

                    <View style={{
                        flexDirection: 'row',
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingLeft: 8,
                        backgroundColor: 'white'
                    }}>
                        <Picker
                            style={{width: 180}}
                            selectedValue={this.state.type}
                            onValueChange={(lang) => this.setState({type: lang})}>
                            <Picker.Item label="日常上报" value="0"/>
                            <Picker.Item label="交通事故上报" value="1"/>
                            <Picker.Item label="地址灾害上报" value="2"/>
                            <Picker.Item label="暴雨山洪灾害上报" value="3"/>
                            <Picker.Item label="游客意外伤害上报" value="4"/>
                            <Picker.Item label="景区内游客拥堵上报" value="5"/>
                            <Picker.Item label="食物中毒上报" value="6"/>
                            <Picker.Item label="消防应急上报" value="7"/>
                            <Picker.Item label="黄金周及节假日上报" value="8"/>
                            <Picker.Item label="其他上报" value="9"/>
                        </Picker>
                    </View>

                    <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                    <TextInput
                        style={{
                            color: '#838383',
                            paddingTop: 10,
                            paddingBottom: 10,
                            paddingLeft: 14,
                            paddingRight: 14,
                            textAlignVertical: 'top',
                            backgroundColor: 'white',
                        }}
                        underlineColorAndroid="transparent"
                        placeholder='请输入事件标题'
                        multiline={true}
                        onChangeText={(text) => this.setState({title: text})}
                    />

                    <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                    <TextInput
                        style={{
                            color: '#838383',
                            height: 80,
                            paddingTop: 8,
                            paddingLeft: 14,
                            paddingRight: 14,
                            textAlignVertical: 'top',
                            backgroundColor: 'white',
                        }}
                        underlineColorAndroid="transparent"
                        numberOfLines={2}
                        placeholder='请描述事件详情'
                        multiline={true}
                        onChangeText={(text) => this.setState({desc: text})}
                    />
                    <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                    <Text style={{
                        color: '#838383',
                        fontSize: 14,
                        backgroundColor: 'white',
                        paddingTop: 12,
                        paddingLeft: 12
                    }}>（图片，选填，请提供相关图片）</Text>

                    <View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 16, backgroundColor: 'white'}}>
                        {this.state.images.map((image) => {
                            return <Image key={_generateUUID()} source={{uri: image.uri}} style={styles.photo}/>
                        })}
                        {this.state.images.length == 3 ?
                            null
                            : <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                                <Image style={styles.avatar} source={(require("../../assets/images/addPhoto.png"))}/>
                            </TouchableOpacity>}
                    </View>

                    <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                    <View style={{flexDirection: 'row', paddingTop: 8, backgroundColor: 'white'}}>

                        <View style={{backgroundColor: 'white'}}>
                            <Text style={{
                                color: '#838383',
                                fontSize: 14,
                                paddingLeft: 12,
                                backgroundColor: 'white',
                            }}>（请选择视频）</Text>

                            {
                                this.state.videoSource == '' ?
                                    <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}
                                                      style={{marginTop: 8, marginBottom: 8, paddingLeft: 16}}>
                                        <Image style={styles.avatar}
                                               source={(require("../../assets/images/addPhoto.png"))}/>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}
                                                      style={{marginTop: 8, marginBottom: 8, paddingLeft: 16}}>
                                        <Video
                                            source={{uri: this.state.videoSource}} // Can be a URL or a local file.
                                            rate={0.0}                   // 0 is paused, 1 is normal.
                                            volume={0.0}                 // 0 is muted, 1 is normal.
                                            muted={true}                 // Mutes the audio entirely.
                                            paused={false}               // Pauses playback entirely.
                                            resizeMode="cover"           // Fill the whole screen at aspect ratio.
                                            repeat={true}                // Repeat forever.
                                            playInBackground={false}     // Audio continues to play when aentering background.
                                            playWhenInactive={false}     // [iOS] Video continues to play whcontrol or notification center are shown.
                                            onLoadStart={this.loadStart} // Callback when video starts to load
                                            onLoad={this.setDuration}    // Callback when video loads
                                            onProgress={this.setTime}    // Callback every ~250ms with currentTime
                                            onEnd={this.onEnd}           // Callback when playback finishes
                                            onError={this.videoError}    // Callback when video cannot be loaded
                                            style={{
                                                height: 90,
                                                width: 90,
                                            }}
                                        />
                                    </TouchableOpacity>

                            }
                        </View>

                    </View>

                    <TouchableOpacity style={{
                        backgroundColor: '#e84a22',
                        justifyContent: 'center',
                        paddingTop: 12,
                        paddingBottom: 12,
                        margin: 16
                    }} onPress={this._uploadFromApi.bind(this)}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 18, color: 'white'}}>提交</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }

    async _uploadFromApi() {
        try {
            let response = await fetch('http://114.104.160.233:8015/WebService/HHLJGTWebService.asmx/EventUpload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: 'DEVID=15527021408&x=114.00&y=30.00&type=0&imgNames=imgPath&VideoNames=videoNames&desc=desc&title=title'
            });
            let responseJson = await response.text()
            console.warn(responseJson.toString());
        } catch (error) {
            console.error(error);
            this.setState({
                loading: false,
            });
            Alert.alert('上传失败')
        }
    }

}

function _generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};



