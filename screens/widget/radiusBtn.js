import React from 'react';

import {
    StyleSheet,
    PixelRatio,
    Text,
    View,
    TouchableHighlight,
    Platform,
} from 'react-native';

export default class RadioButton extends React.Component {

    props: {
        // btnName: 'Button',
        // underlayColor: '#416933',
    }

    constructor(props) {
        super(props);
        // btnName: this.props.btnName,
        //     textStyle: this.props.textS,
        //     btnStyle: TouchableHighlight.propTypes.style,
        //     underlayColor:       TouchableHighlight.propTypes.underlayColor,
        // underlayColor:
    }


    render() {
        return (
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableHighlight
                    underlayColor={this.props.underlayColor}
                    activeOpacity={0.5}
                    style={[styles.center, styles.btnDefaultStyle, this.props.btnStyle]}
                    onPress={this.props.onPress}>
                    <Text style={[styles.textDefaultStyle, this.props.textStyle]}>{this.props.btnName}</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnDefaultStyle: {
        backgroundColor: '#ff8447',
        borderColor: '#ff8447',
        borderWidth: (Platform.OS === 'ios' ? 1.0 : 1.5) / PixelRatio.get(),
    },
    textDefaultStyle: {
        fontSize: 16,
        color: '#ffffff',
    },
});