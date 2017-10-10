import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        backgroundColor: "#FFF",
        // paddingTop: Platform.OS === 'ios' ? 20 : 0,
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',//按次要布局方向,控制字元素的布局，
        marginTop: 16
    },
    cat: {
        width: 48,
        height: 48,
        marginLeft: 24,
        borderRadius: 24,
        borderColor:'white',
        borderWidth:1
    },
    text: {
        color: '#FFF',
        fontSize: 16,
        textAlign: 'left',
        marginLeft: 16,
        backgroundColor:'transparent'
    },
    centerItem: {
        flexDirection: 'row',
        marginTop: 12,
        marginRight: 24
    },
    centerItems: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    itemsIcon: {
        width: 24,
        height: 24
    },
    itemsText: {
        color: '#000000',
        fontSize: 14,
        marginTop: 4
    },
    contentItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,

    },
    contentItem2: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24
    },
    contentIcon: {
        width: 28,
        height: 28
    },
    contentText: {
        color: '#393b3b',
        fontSize: 16,
        marginLeft: 8
    },
    contentArrow: {
        width: 24,
        height: 24
    },
    arrowParent: {
        flex: 1,
        alignItems: 'flex-end'
    }
});