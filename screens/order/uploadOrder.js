import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    ActivityIndicator,
    Picker,
    NativeModules,
    DeviceEventEmitter,
    Modal
} from 'react-native'
import styles from './styles';
import React from 'react'
import ImagePicker from 'react-native-image-picker';
import Video from 'react-native-video';

var parseString = require('react-native-xml2js').parseString;
var RNUploader = NativeModules.RNUploader;

export default class UploadOrderScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: '日常上报',//这里的是上报的内容
            title: '',
            desc: '',
            videoSource: '',

            images: [],
            imagePath: [],

            uploading: false,//这里是上传图片需要的
            showUploadModal: false,
            uploadProgress: 0,
            uploadTotal: 0,
            uploadWritten: 0,
            uploadStatus: undefined,
            cancelled: false,
        };
    }

    componentDidMount() {
        DeviceEventEmitter.addListener('RNUploaderProgress', (data) => {
            let bytesWritten = data.totalBytesWritten;
            let bytesTotal = data.totalBytesExpectedToWrite;
            let progress = data.progress;
            this.setState({uploadProgress: progress, uploadTotal: bytesTotal, uploadWritten: bytesWritten});
        });
    }

    uploadProgressModal() {
        let uploadProgress;

        if (this.state.cancelled) {
            uploadProgress = (
                <View style={{margin: 5, alignItems: 'center',}}>
                    <Text style={{marginBottom: 10,}}>
                        Upload Cancelled
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={this._closeUploadModal.bind(this)}>
                        <Text>Close</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (!this.state.uploading && this.state.uploadStatus) {
            uploadProgress = (
                <View style={{margin: 5, alignItems: 'center',}}>
                    <Text style={{marginBottom: 10,}}>
                        Upload complete with status: {this.state.uploadStatus}
                    </Text>
                    <TouchableOpacity style={styles.button} onPress={this._closeUploadModal.bind(this)}>
                        <Text>{this.state.uploading ? '' : 'Close'}</Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (this.state.uploading) {
            uploadProgress = (
                <View style={{alignItems: 'center',}}>
                    <Text style={styles.title2}>Uploading {this.state.images.length}
                        Image{this.state.images.length == 1 ? '' : 's'}</Text>
                    <ActivityIndicator
                        animating={this.state.animating}
                        style={[styles.centering, {height: 80}]}
                        size="large"/>
                    <Text>{this.state.uploadProgress.toFixed(0)}%</Text>
                    <Text style={{fontSize: 11, color: 'gray', marginTop: 5,}}>
                        {( this.state.uploadWritten / 1024 ).toFixed(0)}/{( this.state.uploadTotal / 1024 ).toFixed(0)}
                        KB
                    </Text>
                    <TouchableOpacity style={[styles.button, {marginTop: 5}]} onPress={this._cancelUpload.bind(this)}>
                        <Text>{'Cancel'}</Text>
                    </TouchableOpacity>
                </View>
            );
        }
        return uploadProgress;
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

                    <Modal
                        animationType={'fade'}
                        transparent={true}
                        visible={this.state.showUploadModal}
                        onRequestClose={() => {}}>
                        <View style={styles.modal}>
                            {this.uploadProgressModal()}
                        </View>
                    </Modal>

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
                            <Picker.Item label="日常上报" value="日常上报"/>
                            <Picker.Item label="交通事故上报" value="交通事故上报"/>
                            <Picker.Item label="地址灾害上报" value="地址灾害上报"/>
                            <Picker.Item label="暴雨山洪灾害上报" value="暴雨山洪灾害上报"/>
                            <Picker.Item label="游客意外伤害上报" value="游客意外伤害上报"/>
                            <Picker.Item label="景区内游客拥堵上报" value="景区内游客拥堵上报"/>
                            <Picker.Item label="食物中毒上报" value="食物中毒上报"/>
                            <Picker.Item label="消防应急上报" value="消防应急上报
                            "/>
                            <Picker.Item label="黄金周及节假日上报" value="黄金周及节假日上报"/>
                            <Picker.Item label="其他上报" value="其他上报"/>
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
        if (this.state.title == '') {
            return Alert.alert('请输入标题')
        }
        if (this.state.desc == '') {
            return Alert.alert('请输入描述')
        }
        //如果有图片，在这里请上传
        // try {
        // if (this.state.images.length > 0) {
        //     const data = new FormData();
        //     this.state.images.forEach((photo) => {
        //         data.append('photo', {
        //             uri: photo.uri,
        //             type: 'image/jpeg', // or photo.type
        //             name: this.state.images.name
        //         });
        //     });
        //     let response = await fetch('http://118.190.43.124:8580/ycranetower/UserAct/upload.html', {
        //         method: 'POST',
        //         body: data
        //     });
        //     var responseJson = await response.text()
        //     console.warn(responseJson + '231412434324')
        // }

        this._uploadImages()


        //上传完成后再调下面的内容
        try {
            let response = await fetch('http://114.104.160.233:8015/WebService/HHLJGTWebService.asmx/EventUpload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `DEVID=15527021408&x=114.00&y=30.00&type=${this.state.type}&imgNames=imgPath&VideoNames=videoNames&desc=${this.state.desc}&title=${this.state.title}`
            });
            var responseJson = await response.text()

            parseString(responseJson, function (err, result) {
                if (result.boolean) {
                    Alert.alert('上传成功')
                } else {
                    Alert.alert('上传失败')
                }
            });

        } catch (error) {
            console.error(error);
            this.setState({
                loading: false,
            });
            Alert.alert('上传失败')
        }
    }

    //上面的是乱七八糟的上传工单
    //下面的是乱七八糟的上传图片和视频

    _closeUploadModal() {
        this.setState({
            showUploadModal: false,
            uploadProgress: 0,
            uploadTotal: 0,
            uploadWritten: 0,
            images: [],
            cancelled: false,
        });
    }

    _cancelUpload() {
        RNUploader.cancel();
        this.setState({uploading: false, cancelled: true});
    }

    _uploadImages() {

        let files = this.state.images.map((file) => {
            return {
                // name: 'file',
                filename: _generateUUID + '.png',
                filepath: file.uri,
                filetype: 'image/png',
            }
        });
        let opts = {
            url: 'http://118.190.43.124:8580/ycranetower/UserAct/upload.html',
            files: files,
            params: {name: 'file'}
        };

        this.setState({uploading: true, showUploadModal: true,});
        RNUploader.upload(opts, (err, res) => {
            if (err) {
                console.log(err);
                return;
            }

            let status = res.status;
            let responseString = res.data;

            console.log('Upload complete with status ' + status);
            console.log(responseString);
            this.setState({uploading: false, uploadStatus: status});
        });

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

