import {Text, View, StyleSheet,Image} from 'react-native'
import React from 'react'

export default class OrderDetailScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 0,
            title: '',
            desc: '',
            videoSource: '',
            uploading: false,
            images: []
        };
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 16}}>
                    <Text style={{color: 'black', fontSize: 16}}>事件类型</Text>
                    <Text style={{marginLeft: 24}}>{params.type}</Text>
                </View>

                <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 16}}>
                    <Text style={{color: 'black', fontSize: 16}}>事件标题</Text>
                    <Text style={{marginLeft: 24}}>{params.title}</Text>
                </View>

                <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 16}}>
                    <Text style={{color: 'black', fontSize: 16}}>事件描述</Text>
                    <Text style={{marginLeft: 24}}>{params.desc}</Text>
                </View>

                <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 16}}>
                    <Text style={{color: 'black', fontSize: 16}}>图片详情</Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 16, backgroundColor: 'white'}}>
                        {this.state.images.map((image) => {
                            return <Image source={{uri: image.uri}} style={styles.photo}/>
                        })}
                    </View>
                </View>

                <View style={{backgroundColor: 'lightgray', height: 0.5}}/>

                <View style={{flexDirection: 'row', backgroundColor: 'white', padding: 16}}>
                    <Text style={{color: 'black', fontSize: 16}}>视频详情</Text>
                    <View style={{flexDirection: 'row', flexWrap: 'wrap', padding: 16, backgroundColor: 'white'}}>
                        {this.state.images.map((image) => {
                            return <Image source={{uri: image.uri}} style={styles.photo}/>
                        })}
                    </View>
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