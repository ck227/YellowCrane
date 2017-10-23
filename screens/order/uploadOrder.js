import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native'
import styles from './styles';
import React from 'react'
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';

export default class UploadOrderScreen extends React.Component {

    static navigationOptions = {
        header: null,
    }

    state = {
        avatarSource: null,
        videoSource: null,

        uploading: false,
        images: [],
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
                let images = this.state.images;
                images.push(source);

                this.setState({
                    avatarSource: source,
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

                    <View style={{flexDirection: 'row', padding: 16, backgroundColor: 'white'}}>
                        <Text style={{color: '#282828', fontSize: 16}}>事件类型</Text>
                        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{color: '#838383', marginLeft: 24, fontSize: 14}}>一般事件</Text>
                            <Image style={{height: 16, width: 16}}
                                   source={(require("../../assets/images/arrowDown.png"))}/>
                        </View>
                    </View>

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
                        onChangeText={(text) => this.setState({account: text})}
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


                    <View style={{flexDirection: 'row', paddingTop: 8,backgroundColor:'white'}}>

                        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
                            <Text style={{
                                color: '#838383',
                                fontSize: 14,
                                backgroundColor: 'white',
                            }}>（音频）</Text>

                            {
                                this.state.videoSource == null ?
                                    <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}
                                                      style={{marginTop: 8, marginBottom: 8}}>
                                        <Image style={styles.avatar}
                                               source={(require("../../assets/images/audio.png"))}/>
                                    </TouchableOpacity>
                                    :

                                    <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}
                                                      style={{marginTop: 8, marginBottom: 8}}>
                                        <Video
                                            source={{uri: this.state.videoSource}} // Can be a URL or a local file.
                                            rate={0.0}                   // 0 is paused, 1 is normal.
                                            volume={0.0}                 // 0 is muted, 1 is normal.
                                            muted={true}                // Mutes the audio entirely.
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


                        <View style={{flex: 1, backgroundColor: 'white', alignItems: 'center'}}>
                            <Text style={{
                                color: '#838383',
                                fontSize: 14,
                                backgroundColor: 'white',
                            }}>（视频）</Text>

                            {
                                this.state.videoSource == null ?
                                    <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}
                                                      style={{marginTop: 8, marginBottom: 8}}>
                                        <Image style={styles.avatar}
                                               source={(require("../../assets/images/video.png"))}/>
                                    </TouchableOpacity>
                                    :

                                    <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}
                                                      style={{marginTop: 8, marginBottom: 8}}>
                                        <Video
                                            source={{uri: this.state.videoSource}} // Can be a URL or a local file.
                                            rate={0.0}                   // 0 is paused, 1 is normal.
                                            volume={0.0}                 // 0 is muted, 1 is normal.
                                            muted={true}                // Mutes the audio entirely.
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
                    }} >
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{fontSize: 18, color: 'white'}}>提交</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        );
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

