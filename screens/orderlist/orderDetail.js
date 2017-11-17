import {Text, View, StyleSheet, Image} from 'react-native'
import React from 'react'
import Video from 'react-native-video';

export default class OrderDetailScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            title: '',
            desc: '',
            videoSource: '',
            images: ['upload/workorder/9506aaee-5b77-4571-a0db-2042daef4250_1.jpg','upload/workorder/9506aaee-5b77-4571-a0db-2042daef4250_1.jpg']
        };
    }

    componentDidMount() {
        const {params} = this.props.navigation.state;
        // let images = this.state.images;
        // var myArray = params.images.split(';');
        this.setState({
            type: params.type,
            title: params.title,
            desc: params.desc,
            videoSource: params.videoSource,
            images : params.images.split(';')
        })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 16}}>
                    <Text style={{color: 'black', fontSize: 16}}>事件类型</Text>
                    <Text style={{marginLeft: 24}}>{this.state.type}</Text>
                </View>

                <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 16}}>
                    <Text style={{color: 'black', fontSize: 16}}>事件标题</Text>
                    <Text style={{marginLeft: 24}}>{this.state.title}</Text>
                </View>

                <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 16}}>
                    <Text style={{color: 'black', fontSize: 16}}>事件描述</Text>
                    <Text style={{marginLeft: 24}}>{this.state.desc}</Text>
                </View>

                <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 16}}>
                    <Text style={{color: 'black', fontSize: 16}}>图片详情</Text>
                    {<View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 16, backgroundColor: 'white'}}>
                        {this.state.images.map((image) => {
                            return <Image key={_generateUUID()} source={{uri: 'http://114.104.160.233:8015/ycranetower/' + image.uri}}
                                          style={styles.photo}/>
                        })}
                    </View>}
                </View>

                <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 16}}>
                    <Text style={{color: 'black', fontSize: 16}}>视频详情</Text>
                    <Video
                        source={{uri: 'http://118.190.43.124:8580/ycranetower/' + this.state.video}} // Can be a URL or a local file.
                        rate={0.0}                   // 0 is paused, 1 is normal.
                        volume={1.0}                 // 0 is muted, 1 is normal.
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
                            height: 200,
                            width: 250,
                            marginLeft: 24
                        }}
                    />
                </View>

            </View>
        );
    }

}


const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: null
    },
    photo: {
        width: 90,
        height: 90,
        marginRight: 4,
        marginBottom: 4
    }

});

function _generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};
