
import React from 'react'
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

import styles from './styles';

export default class Header extends React.Component {

    props: {
        showBack: true,
        backFunc: () => any
    }

    constructor(props) {
        super(props);
        this.backBtnFunc = this.backBtnFunc.bind(this);
    }

    backBtnFunc() {
        this.props.backFunc ? this.props.backFunc.call(null) : this.props.navigator.pop();
    }

    render() {
        return (
            <View>
                <View style={styles.header}>

                    <TouchableOpacity
                        style={[styles.width48, this.props.sideWidth]}
                        onPress={this.props.showBack ? this.backBtnFunc : undefined}>
                        {this.props.showBack ?
                            <Image style={styles.backImg} source={(require("../../assets/images/menu.png"))}/>
                            : null}
                    </TouchableOpacity>

                    <View style={styles.title}>
                        <TouchableOpacity underlayColor={'transparent'}>
                            <Text style={styles.titleText} numberOfLines={1}>
                                {this.props.title}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}