import {StyleSheet, PixelRatio} from 'react-native';

export default StyleSheet.create({
    header: {
        backgroundColor: "#e84a22",
        height: 60,
        // height: 76,
        // paddingTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-around',
    },
    width: {
        width: 60
    },

    backImg: {
        width: 24,
        height: 24,
        marginLeft: 15
    },
    titleText: {
        color: 'white',
        fontSize: 18
    },
    whiteColor: {
        color: "#ffffff"
    },
    title: {
        flex: 1,
        marginRight: 60,
        justifyContent: 'center',
        alignItems: 'center'

    },

    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 90,
        height: 90
    },
    photo: {
        width: 90,
        height: 90,
        marginRight: 4,
        marginBottom: 4
    }
});