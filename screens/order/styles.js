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
    },
    modal: {
        marginLeft: 50,
        marginRight:50,
        marginTop:200,
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 20,
        borderRadius: 12,
        backgroundColor: 'lightyellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    thumbnail: {
        width: 73,
        height: 73,
        borderWidth: 1,
        borderColor: '#DDD',
        margin: 5,
    },
    modal: {
        margin: 50,
        borderWidth: 1,
        borderColor: '#DDD',
        padding: 20,
        borderRadius: 12,
        backgroundColor: 'lightyellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title2: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 14,
    },
    button: {
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#EEE',
        marginHorizontal: 5,
    }
});